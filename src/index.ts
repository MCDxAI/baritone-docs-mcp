import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
    CallToolRequestSchema,
    ListToolsRequestSchema,
    ListResourcesRequestSchema,
    ReadResourceRequestSchema
} from "@modelcontextprotocol/sdk/types.js";
import { ensureDocs, updateDocs, initLocalDocs } from './cache.js';
import { searchDocs } from './tools/search.js';
import { readDoc } from './tools/read.js';
import { handleDocsResource } from './resources/docs.js';
import path from 'path';
import fs from 'fs';

// Tool definitions
const TOOLS = [
    {
        name: "baritone_refresh_docs",
        description: "Download and update the local documentation cache from the GitHub repository.",
        inputSchema: {
            type: "object",
            properties: {
                force: {
                    type: "boolean",
                    description: "Force re-download even if cache exists"
                }
            }
        }
    },
    {
        name: "baritone_search_docs",
        description: "Search the Baritone documentation for a specific query.",
        inputSchema: {
            type: "object",
            properties: {
                query: {
                    type: "string",
                    description: "The search query (e.g., 'GoalBlock', 'pathing')"
                }
            },
            required: ["query"]
        }
    },
    {
        name: "baritone_read_doc",
        description: "Read the full content of a specific documentation file.",
        inputSchema: {
            type: "object",
            properties: {
                path: {
                    type: "string",
                    description: "The relative path to the file (as returned by search results)"
                }
            },
            required: ["path"]
        }
    }
];

// Resource definitions
const RESOURCES = [
    {
        uri: "docs://{path}",
        name: "Baritone Documentation",
        description: "Access Baritone documentation files",
        mimeType: "text/markdown"
    }
];

// Initialize server
export const server = new Server(
    {
        name: "baritone-docs-mcp",
        version: "1.0.0",
    },
    {
        capabilities: {
            tools: {},
            resources: {}
        }
    }
);

// -- Request Handlers --

// List available tools
server.setRequestHandler(ListToolsRequestSchema, async () => {
    return { tools: TOOLS };
});

// Handle tool calls
server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const { name, arguments: args } = request.params;

    try {
        switch (name) {
            case "baritone_refresh_docs": {
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

            case "baritone_search_docs": {
                const query = (args as any)?.query;

                if (!query) {
                    return {
                        content: [{ type: "text", text: "Query parameter is required." }],
                        isError: true
                    };
                }

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

            case "baritone_read_doc": {
                const docPath = (args as any)?.path;

                if (!docPath) {
                    return {
                        content: [{ type: "text", text: "Path parameter is required." }],
                        isError: true
                    };
                }

                if (!ensureDocs()) {
                    return {
                        content: [{ type: "text", text: "Documentation not found. Please run baritone_refresh_docs first." }],
                        isError: true
                    };
                }

                try {
                    const content = readDoc(docPath);
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

            default:
                return {
                    content: [{ type: "text", text: `Unknown tool: ${name}` }],
                    isError: true
                };
        }
    } catch (error: any) {
        return {
            content: [{ type: "text", text: `Error: ${error.message}` }],
            isError: true
        };
    }
});

// List available resources
server.setRequestHandler(ListResourcesRequestSchema, async () => {
    return { resources: RESOURCES };
});

// Handle resource reads
server.setRequestHandler(ReadResourceRequestSchema, async (request) => {
    const uri = new URL(request.params.uri);
    return handleDocsResource(uri);
});

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
}

// Start the MCP server
main().catch((error) => {
    console.error('Fatal error:', error);
    process.exit(1);
});
