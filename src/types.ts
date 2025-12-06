export interface DocFile {
    path: string; // Relative path, e.g., "baritone/api/Settings.md"
    name: string; // Filename, e.g. "Settings.md"
    fullPath: string; // Absolute local path
}

export interface SearchResult {
    file: DocFile;
    score?: number; // Relevance score
    matches?: string[]; // Snippets
}
