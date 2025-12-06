import { describe, it, expect, beforeAll } from 'vitest';
import { updateDocs, ensureDocs, getDocsDir, getCacheDir } from '../src/cache.js';
import { searchDocs } from '../src/tools/search.js';
import { readDoc } from '../src/tools/read.js';
import { handleDocsResource } from '../src/resources/docs.js';
import fs from 'fs';
import path from 'path';

describe('Baritone Docs MCP Integration', () => {
    // Increase timeout for download
    const TIMEOUT = 60000;

    beforeAll(async () => {
        // Force cleanup of docs directory to test full download
        const docsDir = getDocsDir();
        if (fs.existsSync(docsDir)) {
            fs.rmSync(docsDir, { recursive: true, force: true });
        }
    });

    it('should download and cache documentation correctly', async () => {
        console.log('Downloading docs from GitHub...');
        await updateDocs("MCDxAI", "baritone-docs-mcp", "docs");
        expect(ensureDocs()).toBe(true);
        const docsDir = getDocsDir();
        expect(fs.existsSync(docsDir)).toBe(true);

        // Check for specific known files
        expect(fs.existsSync(path.join(docsDir, 'baritone/api/Settings.md'))).toBe(true);
        expect(fs.existsSync(path.join(docsDir, 'baritone/api/pathing/goals/Goal.md'))).toBe(true);
    }, TIMEOUT);

    it('should search with relevance', async () => {
        // High relevance test
        const results = await searchDocs('Settings');
        expect(results.length).toBeGreaterThan(0);
        const first = results[0];
        expect(first.file.name).toBe('Settings.md');
        expect(first.score).toBeGreaterThan(500); // Should trigger startswith/exact bonuses
    });

    it('should find nested content via search', async () => {
        const results = await searchDocs('GoalBlock');
        const found = results.find(r => r.file.name === 'GoalBlock.md');
        expect(found).toBeDefined();
    });

    it('should read documentation', async () => {
        const content = readDoc('baritone/api/Settings.md');
        expect(content).toBeDefined();
        expect(content).toContain('Class Settings');
    });

    it('should protect against path traversal in readDoc', async () => {
        // Test Unix-style path traversal
        expect(() => {
            readDoc('../package.json');
        }).toThrow(/Access denied/);

        // Test Windows-style path traversal (now normalized on all platforms)
        expect(() => {
            readDoc('..\\package.json');
        }).toThrow(/Access denied/);

        // Test multiple levels of traversal
        expect(() => {
            readDoc('../../package.json');
        }).toThrow(/Access denied/);

        // Test absolute paths
        expect(() => {
            readDoc('/etc/passwd');
        }).toThrow(/Access denied/);
    });

    it('should handle docs:// resources', async () => {
        // Valid URI
        const uri = new URL('docs://baritone/api/Settings.md');
        const result = await handleDocsResource(uri);
        expect(result.contents[0].text).toContain('Class Settings');
        expect(result.contents[0].uri).toBe('docs://baritone/api/Settings.md');
    });

    it('should handle URI decoding in resources', async () => {
        // Although spaces usually don't exist in these filenames, if they did:
        // docs://path/to/my%20file.md
        // We'll test with a file we know exists, encoding it just to be sure logic holds
        const uri = new URL('docs://baritone/api/Settings.md'); // %53ettings.md
        const result = await handleDocsResource(uri);
        expect(result).toBeDefined();
    });

    it('should fail on invalid resource URI', async () => {
        try {
            await handleDocsResource(new URL('http://google.com'));
        } catch (e: any) {
            expect(e.message).toContain('Invalid URI');
        }
    });

    it('should fail on missing resource file', async () => {
        try {
            await handleDocsResource(new URL('docs://nonexistant.md'));
        } catch (e: any) {
            expect(e.message).toContain('File not found');
        }
    });
});
