<div align="center">

# Baritone Docs MCP

A Model Context Protocol server for Baritone documentation.
<br>
This tool empowers AI agents to search, read, and reference Baritone's extensive documentation seamlessly.

<br>

## Features

| Feature | Description |
| :---: | :---: |
| **Refresh Docs** | Downloads and updates the local documentation cache directly from GitHub. |
| **Search Docs** | Performs fuzzy search across documentation files to find relevant topics. |
| **Read Doc** | Retrieves the full text content of specific documentation files. |
| **Resource Access** | Exposes documentation via the `docs://` URI scheme for direct reference. |

<br>

## Project Structure

| File / Directory | Description |
| :---: | :---: |
| `src/index.ts` | Main entry point initializing the MCP server and tools. |
| `src/tools/` | Contains logic for search and read functionalities. |
| `src/resources/` | Handles `docs://` resource requests. |
| `src/cache.ts` | Manages downloading, extracting, and caching documentation. |
| `scraper/` | Utilities for scraping and preparing documentation. |
| `tests/` | Integration tests for the MCP server. |

</div>
