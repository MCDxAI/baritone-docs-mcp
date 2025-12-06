import fs from 'fs';
import path from 'path';
import { getDocsDir } from '../cache.js';
import { DocFile } from '../types.js';

export function readDoc(relativePath: string): string | null {
    const docsDir = getDocsDir();

    // Normalize path separators to forward slashes for cross-platform consistency
    const normalizedPath = relativePath.replace(/\\/g, '/');
    const fullPath = path.resolve(docsDir, normalizedPath);
    const normalizedDocsDir = path.resolve(docsDir);

    // Security check: ensure the resolved path is inside docsDir
    // Use path.resolve to get absolute paths and handle .. correctly
    if (!fullPath.startsWith(normalizedDocsDir + path.sep) && fullPath !== normalizedDocsDir) {
        throw new Error("Access denied: Path is outside of docs directory.");
    }

    if (fs.existsSync(fullPath) && fs.statSync(fullPath).isFile()) {
        return fs.readFileSync(fullPath, 'utf-8');
    }

    return null;
}
