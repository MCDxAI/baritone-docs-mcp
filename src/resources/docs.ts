import { readDoc } from '../tools/read.js';
import { ensureDocs } from '../cache.js';

export async function handleDocsResource(uri: URL) {
    if (!ensureDocs()) {
        throw new Error("Documentation not found. Please run baritone_refresh_docs first.");
    }

    // Expected uri: docs://baritone/api/Settings.md
    const href = uri.href;
    const prefix = "docs://";
    if (!href.startsWith(prefix)) {
        throw new Error(`Invalid URI: ${href}`);
    }

    // We decode the path to handle spaces/special chars if any
    let relativePath = href.substring(prefix.length);
    try {
        relativePath = decodeURIComponent(relativePath);
    } catch (e) {
        // ignore if decoding fails
    }

    const content = readDoc(relativePath);

    if (content === null) {
        throw new Error(`File not found: ${relativePath}`);
    }

    return {
        contents: [{
            uri: href,
            text: content
        }]
    };
}
