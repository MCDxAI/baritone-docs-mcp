import fs from 'fs';
import path from 'path';
import { getDocsDir } from '../cache.js';
import { DocFile } from '../types.js';

export function readDoc(relativePath: string): string | null {
    const docsDir = getDocsDir();
    const fullPath = path.join(docsDir, relativePath);

    // Security check: ensure the resolved path is inside docsDir
    if (!fullPath.startsWith(docsDir)) {
        throw new Error("Access denied: Path is outside of docs directory.");
    }

    if (fs.existsSync(fullPath) && fs.statSync(fullPath).isFile()) {
        return fs.readFileSync(fullPath, 'utf-8');
    }

    return null;
}
