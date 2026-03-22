// src/pages/api/ping-indexnow.ts
// ─────────────────────────────────────────────────────────────────
// AUTO-INDEXING API ENDPOINT
//
// WHAT THIS DOES:
// When you add a new blog post or past paper, call this endpoint
// and it automatically notifies Bing + Yandex to index it NOW
// instead of waiting days/weeks for them to crawl it.
//
// HOW TO USE IT (you call this from your terminal or Cloudflare):
//
//   Adding a new blog post? Run:
//   curl "https://gk360.pk/api/ping-indexnow?url=https://gk360.pk/blog/your-new-post"
//
//   Adding a new past paper? Run:
//   curl "https://gk360.pk/api/ping-indexnow?url=https://gk360.pk/past-papers/ppsc-police-2026"
//
// EVEN EASIER — in future we'll call this automatically from
// the content management flow so you never run it manually.
// ─────────────────────────────────────────────────────────────────

import type { APIRoute } from 'astro';

const INDEXNOW_KEY  = 'GK360INDEXNOWKEY2026'; // same key as indexnow.txt.ts
const SITE_URL      = 'https://gk360.pk';
const KEY_LOCATION  = `${SITE_URL}/indexnow.txt`;

export const GET: APIRoute = async ({ url }) => {
  // Get the page URL to index from the query parameter
  const pageUrl = url.searchParams.get('url');

  if (!pageUrl) {
    return new Response(
      JSON.stringify({ error: 'Missing ?url= parameter. Usage: /api/ping-indexnow?url=https://gk360.pk/your-page' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  // Validate the URL belongs to our site
  if (!pageUrl.startsWith(SITE_URL)) {
    return new Response(
      JSON.stringify({ error: 'URL must belong to gk360.pk' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const indexNowPayload = {
    host:        'gk360.pk',
    key:         INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList:     [pageUrl],
  };

  const results: Record<string, string> = {};

  // Ping Bing (also relays to other IndexNow members)
  try {
    const bingRes = await fetch('https://api.indexnow.org/indexnow', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body:    JSON.stringify(indexNowPayload),
    });
    results.bing = bingRes.status === 200 ? '✅ Accepted' : `⚠️ Status ${bingRes.status}`;
  } catch {
    results.bing = '❌ Failed';
  }

  // Ping Yandex directly
  try {
    const yandexRes = await fetch('https://yandex.com/indexnow', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body:    JSON.stringify(indexNowPayload),
    });
    results.yandex = yandexRes.status === 200 ? '✅ Accepted' : `⚠️ Status ${yandexRes.status}`;
  } catch {
    results.yandex = '❌ Failed';
  }

  return new Response(
    JSON.stringify({
      message:  `IndexNow ping sent for: ${pageUrl}`,
      results,
      note:     'Google uses its own crawl schedule. Submit sitemap in Google Search Console for faster Google indexing.',
    }),
    {
      status:  200,
      headers: { 'Content-Type': 'application/json' },
    }
  );
};
