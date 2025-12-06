import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { ensureDocs, updateDocs, getDocsDir, initLocalDocs } from './cache.js';
import { searchDocs } from './tools/search.js';
import { readDoc } from './tools/read.js';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

// Initialize server
const server = new McpServer({
    name: "baritone-docs-mcp",
    version: "1.0.0",
});

// -- Tools --

// Tool: Refresh Docs
server.tool(
    "baritone_refresh_docs",
    "Download and update the local documentation cache from the GitHub repository.",
    {
        force: z.boolean().optional().describe("Force re-download even if cache exists")
    },
    async ({ force }) => {
        try {
            await updateDocs();
            return {
                content: [{ type: "text", text: "Documentation updated successfully." }]
            };
        } catch (err: any) {
            return {
                content: [{ type: "text", text: `Failed to update docs: ${err.message}` }],
                isError: true
            };
        }
    }
);

// Tool: Search Docs
server.tool(
    "baritone_search_docs",
    "Search the Baritone documentation for a specific query.",
    {
        query: z.string().describe("The search query (e.g., 'GoalBlock', 'pathing')")
    },
    async ({ query }) => {
        if (!ensureDocs()) {
            return {
                content: [{ type: "text", text: "Documentation not found. Please run baritone_refresh_docs first." }],
                isError: true
            };
        }

        const results = await searchDocs(query);

        if (results.length === 0) {
            return {
                content: [{ type: "text", text: "No results found." }]
            };
        }

        const text = results.map(r =>
            `### [${r.file.name}](${r.file.path})\n` +
            `**Score**: ${r.score}\n` +
            `**Matches**: \n${r.matches?.map(m => `> ${m}`).join('\n')}\n`
        ).join('\n---\n');

        return {
            content: [{ type: "text", text }]
        };
    }
);

// Tool: Read Doc
server.tool(
    "baritone_read_doc",
    "Read the full content of a specific documentation file.",
    {
        path: z.string().describe("The relative path to the file (as returned by search results)")
    },
    async ({ path }) => {
        if (!ensureDocs()) {
            return {
                content: [{ type: "text", text: "Documentation not found. Please run baritone_refresh_docs first." }],
                isError: true
            };
        }

        try {
            const content = readDoc(path);
            if (content === null) {
                return {
                    content: [{ type: "text", text: "File not found." }],
                    isError: true
                };
            }
            return {
                content: [{ type: "text", text: content }]
            };
        } catch (err: any) {
            return {
                content: [{ type: "text", text: `Error reading file: ${err.message}` }],
                isError: true
            };
        }
    }
);

// Resource: Docs
// Resource: Docs
server.resource(
    "docs",
    "docs://{path}",
    async (uri) => {
        if (!ensureDocs()) {
            throw new Error("Documentation not found. Please run baritone_refresh_docs first.");
        }

        // Expected uri: docs://baritone/api/Settings.md
        // Note: uri.pathname might be null/empty depending on implementation for custom schemes
        // We use uri.href manually to be safe
        const href = uri.href;
        const prefix = "docs://";
        if (!href.startsWith(prefix)) {
            throw new Error(`Invalid URI: ${href}`);
        }

        const path = href.substring(prefix.length);
        const content = readDoc(path);

        if (content === null) {
            throw new Error("File not found.");
        }

        return {
            contents: [{
                uri: uri.href,
                text: content
            }]
        };
    }
);

// -- Setup --

async function main() {
    // Check if we need to init from local (development / first run hack)
    // In production, we'd rely on the user calling refresh_docs, or do it automatically if missing.
    // For this environment, let's look for a local 'docs' folder in the CWD

    // Fix: __dirname equivalent in ESM
    // But actually process.cwd() is fine for where the specific user is running it from
    const localDocs = path.resolve(process.cwd(), 'docs');

    // Only auto-init if we are in development mode or explicitly told to
    // For this tasks's purpose, we want to auto-init cache if possible
    if (fs.existsSync(localDocs) && fs.statSync(localDocs).isDirectory()) {
        initLocalDocs(localDocs);
    }

    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.error("Baritone Docs MCP Server running on stdio");
}

main().catch((error) => {
    console.error("Fatal error in main():", error);
    process.exit(1);
});
