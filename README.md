<div align="center">

# Baritone Docs MCP

A Model Context Protocol server for Baritone documentation.

</div>

<div align="center">

![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=flat&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=flat&logo=typescript&logoColor=white)
![MCP SDK](https://img.shields.io/badge/MCP%20SDK-1.24.3-blue?style=flat)
![Axios](https://img.shields.io/badge/Axios-1.13.2-5A29E4?style=flat)
![Zod](https://img.shields.io/badge/Zod-4.1.13-3E67B1?style=flat)
![Vitest](https://img.shields.io/badge/Vitest-4.0.15-6E9F18?style=flat&logo=vitest&logoColor=white)
![License](https://img.shields.io/badge/License-ISC-blue?style=flat)

</div>

<div align="center">

**Fuzzy search, read, and refresh Baritone documentation through the Model Context Protocol**

</div>

<div align="center">

## Features

</div>

<div align="center">

| Feature | Description |
| :---: | :--- |
| **Refresh Docs** | Downloads and updates the local documentation cache directly from GitHub. |
| **Search Docs** | Performs fuzzy search across documentation files to find relevant topics. |
| **Read Doc** | Retrieves the full text content of specific documentation files. |
| **Resource Access** | Exposes documentation via the `docs://` URI scheme for direct reference. |

</div>

<div align="center">

## Project Structure

</div>

<div align="center">

| File / Directory | Description |
| :---: | :--- |
| `src/index.ts` | Main entry point initializing the MCP server and tools. |
| `src/tools/` | Contains logic for search and read functionalities. |
| `src/resources/` | Handles `docs://` resource requests. |
| `src/cache.ts` | Manages downloading, extracting, and caching documentation. |
| `scraper/` | Utilities for scraping and preparing documentation. |
| `tests/` | Integration tests for the MCP server. |

</div>

<div align="center">

## Installation

</div>

<div align="center">

| Step | Instructions |
| :---: | :--- |
| **1. Clone the repository** | `git clone https://github.com/MCDxAI/baritone-docs-mcp.git`<br>`cd baritone-docs-mcp` |
| **2. Install dependencies** | `npm install` |
| **3. Build the project** | `npm run build` |

</div>

<div align="center">

## Configuration

</div>

<div align="center">

Add to your MCP settings file (e.g., `claude_desktop_config.json`):

</div>

```json
{
  "mcpServers": {
    "baritone-docs": {
      "command": "node",
      "args": [
        "/path/to/baritone-docs-mcp/dist/index.js"
      ]
    }
  }
}
```
