import envPaths from 'env-paths';
import path from 'path';
import fs from 'fs';
import os from 'os';
import axios from 'axios';
import AdmZip from 'adm-zip';

const paths = envPaths('baritone-docs-mcp');
const CACHE_DIR = paths.data;

export class UnzipError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'UnzipError';
    }
}

export class DownloadError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'DownloadError';
    }
}

export function getCacheDir(): string {
    // Ensure the directory exists
    if (!fs.existsSync(CACHE_DIR)) {
        fs.mkdirSync(CACHE_DIR, { recursive: true });
    }
    return CACHE_DIR;
}

export function getDocsDir(): string {
    return path.join(getCacheDir(), 'docs');
}

export async function updateDocs(repoOwner: string = "MCDxAI", repoName: string = "baritone-docs-mcp", branch: string = "docs"): Promise<void> {
    const cacheDir = getCacheDir();
    // We will download the archive of the branch
    const url = `https://github.com/${repoOwner}/${repoName}/archive/refs/heads/${branch}.zip`;
    const zipPath = path.join(cacheDir, 'docs.zip');

    console.error(`Downloading docs from ${url} to ${zipPath}...`);

    try {
        const response = await axios({
            method: 'get',
            url: url,
            responseType: 'arraybuffer'
        });

        fs.writeFileSync(zipPath, response.data);
        console.error('Download complete.');

        console.error('Extracting...');
        const zip = new AdmZip(zipPath);
        // The zip will contain a root folder like "baritone-docs-mcp-docs", we want to extract that

        // Clean old docs
        const docsDir = getDocsDir();
        if (fs.existsSync(docsDir)) {
            fs.rmSync(docsDir, { recursive: true, force: true });
        }

        zip.extractAllTo(cacheDir, true);

        // Initial extraction usually creates a folder name based on repo and branch, e.g. "baritone-docs-mcp-docs"
        // We need to find it and rename it to "docs", or just handle the structure

        // Find the extracted folder
        const entries = fs.readdirSync(cacheDir).filter(name => {
            // It typically starts with the repo name
            return name.startsWith(`${repoName}-`) && fs.statSync(path.join(cacheDir, name)).isDirectory();
        });

        // The archive of the docs branch should contain the 'baritone' folder at the root of the branch?
        // Wait, the docs branch has the structure:
        // baritone/
        //   api/
        //     ...

        // So the zip structure will be:
        // baritone-docs-mcp-docs/
        //   baritone/
        //   ...

        if (entries.length > 0) {
            const extractedRoot = path.join(cacheDir, entries[0]);
            let targetContent = extractedRoot;

            // check if there is a 'docs' folder inside
            const nestedDocs = path.join(extractedRoot, 'docs');
            if (fs.existsSync(nestedDocs) && fs.statSync(nestedDocs).isDirectory()) {
                targetContent = nestedDocs;
            }

            // Rename/Move to docsDir
            try {
                fs.renameSync(targetContent, docsDir);
            } catch (e) {
                fs.cpSync(targetContent, docsDir, { recursive: true });
            }

            if (targetContent !== extractedRoot && fs.existsSync(extractedRoot)) {
                fs.rmSync(extractedRoot, { recursive: true, force: true });
            }
        }

        // Cleanup zip
        fs.unlinkSync(zipPath);
        console.error('Docs updated successfully.');

    } catch (error: any) {
        console.error(`Failed to update docs: ${error.message}`);
        throw new DownloadError(`Failed to download or extract docs: ${error.message}`);
    }
}

export function ensureDocs(): boolean {
    return fs.existsSync(getDocsDir());
}

// Function to initialize default docs from local files (for dev/offline support if needed)
export function initLocalDocs(localDocsPath: string): void {
    const targetDir = getDocsDir();
    if (fs.existsSync(targetDir)) {
        return; // Already exists
    }

    console.error(`Initializing docs from local path: ${localDocsPath}`);
    // Simple recursive copy
    fs.cpSync(localDocsPath, targetDir, { recursive: true });
}
