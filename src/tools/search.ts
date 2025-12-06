import fs from 'fs';
import path from 'path';
import { getDocsDir } from '../cache.js';
import { DocFile, SearchResult } from '../types.js';

function getAllFiles(dir: string, fileList: DocFile[] = [], rootDir: string): DocFile[] {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            getAllFiles(filePath, fileList, rootDir);
        } else {
            if (file.endsWith('.md')) {
                fileList.push({
                    path: path.relative(rootDir, filePath).replace(/\\/g, '/'), // Normalize to forward slashes
                    name: file,
                    fullPath: filePath
                });
            }
        }
    });

    return fileList;
}

export async function searchDocs(query: string): Promise<SearchResult[]> {
    const docsDir = getDocsDir();

    if (!fs.existsSync(docsDir)) {
        return [];
    }

    const allFiles = getAllFiles(docsDir, [], docsDir);
    const results: SearchResult[] = [];

    const queryLower = query.toLowerCase();

    for (const file of allFiles) {
        let score = 0;
        const content = fs.readFileSync(file.fullPath, 'utf-8');
        const contentLower = content.toLowerCase();
        const nameLower = file.name.toLowerCase();

        // Scoring Rules
        if (nameLower === queryLower + ".md") {
            score += 1000; // Exact file name match (ignoring extension)
        } else if (nameLower.startsWith(queryLower)) {
            score += 500; // Starts with query
        } else if (nameLower.includes(queryLower)) {
            score += 100; // File name contains query
        }

        // Content scoring
        const regex = new RegExp(queryLower.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
        const matches = (contentLower.match(regex) || []).length;
        score += matches;

        if (score > 0) {
            // Extract a snippet
            const idx = contentLower.indexOf(queryLower);
            let snippet = "";
            if (idx !== -1) {
                const start = Math.max(0, idx - 50);
                const end = Math.min(content.length, idx + query.length + 50);
                snippet = "..." + content.substring(start, end).replace(/\n/g, ' ') + "...";
            }

            results.push({
                file,
                score,
                matches: snippet ? [snippet] : []
            });
        }
    }

    // Sort by score desc
    return results.sort((a, b) => (b.score || 0) - (a.score || 0)).slice(0, 20); // Limit to top 20
}
