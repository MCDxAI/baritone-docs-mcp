import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { ensureDocs, updateDocs, getDocsDir, initLocalDocs } from './cache.js';
import { searchDocs } from './tools/search.js';
import { readDoc } from './tools/read.js';
import { handleDocsResource } from './resources/docs.js';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

// Initialize server
export const server = new McpServer({
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
server.resource(
    "docs",
    "docs://{path}",
    async (uri) => {
        return handleDocsResource(uri);
    }
);

// -- Setup --

export async function main() {
    // Check if we need to init from local (development / first run hack)
    // In production, we'd rely on the user calling refresh_docs, or do it automatically if missing.
    // For this environment, let's look for a local 'docs' folder in the CWD
    const localDocs = path.resolve(process.cwd(), 'docs');

    // Only auto-init if we are in development mode or explicitly told to
    // For this tasks's purpose, we want to auto-init cache if possible
    if (fs.existsSync(localDocs) && fs.statSync(localDocs).isDirectory()) {
        try {
            initLocalDocs(localDocs);
        } catch (e) {
            // ignore
        }
    }

    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.error("Baritone Docs MCP Server running on stdio");
}

// Only run main if executed directly (ESM entry point check)
const isMainModule = import.meta.url === `file://${process.argv[1]}` ||
                     import.meta.url.endsWith(process.argv[1]);

if (isMainModule) {
    main().catch((error) => {
        console.error("Fatal error in main():", error);
        process.exit(1);
    });
}
