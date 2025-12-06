import { initLocalDocs, getDocsDir, ensureDocs } from './cache.js';
import { searchDocs } from './tools/search.js';
import { readDoc } from './tools/read.js';
import path from 'path';

async function test() {
    console.log("=== Manual Verification Test ===");

    // 1. Initialize Docs
    console.log("\n[1] Initializing docs from local 'docs' folder...");
    const localDocs = path.resolve(process.cwd(), 'docs');
    initLocalDocs(localDocs);
    console.log(`Cache Dir: ${getDocsDir()}`);
    console.log(`Docs exist: ${ensureDocs()}`);

    // 2. Search
    console.log("\n[2] Searching for 'Setting'...");
    const results = await searchDocs("Setting");
    console.log(`Found ${results.length} results.`);
    if (results.length > 0) {
        const first = results[0];
        console.log(`Top result: ${first.file.name} (Score: ${first.score})`);
        console.log(`Match Snippet: ${first.matches?.[0]}`);

        // 3. Read
        console.log(`\n[3] Reading file: ${first.file.path}...`);
        const content = readDoc(first.file.path);
        if (content) {
            console.log(`Read success! Content length: ${content.length} characters.`);
            console.log(`Preview: ${content.substring(0, 100).replace(/\n/g, ' ')}...`);
        } else {
            console.error("Read failed!");
        }
    } else {
        console.log("No results found, skipping read test.");
    }
}

test().catch(console.error);
