// src/pages/indexnow.txt.ts
// ─────────────────────────────────────────────────────────────────
// IndexNow Auto-Indexing Setup
//
// IndexNow is a protocol supported by Bing, Yandex, and others.
// When you publish new content, one API call notifies all engines.
//
// HOW IT WORKS:
// 1. You have a unique key (set below)
// 2. Search engines verify the key exists at this URL
// 3. You call the IndexNow API with your new page URL
// 4. Bing/Yandex immediately index it
//
// TO GET YOUR KEY:
// Go to https://www.bing.com/indexnow and register your key
// Replace GK360INDEXNOWKEY2026 below with your actual key
// ─────────────────────────────────────────────────────────────────

import type { APIRoute } from 'astro';

// REPLACE THIS with your actual IndexNow key from Bing Webmaster Tools
const INDEXNOW_KEY = 'GK360INDEXNOWKEY2026';

export const GET: APIRoute = () => {
  return new Response(INDEXNOW_KEY, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
