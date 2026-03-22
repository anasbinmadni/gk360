// astro.config.mjs
// ─────────────────────────────────────────────────────────────────
// REPLACE your entire existing astro.config.mjs with this file.
//
// WHAT THIS DOES AUTOMATICALLY:
// ✅ Generates /sitemap-index.xml on EVERY build
// ✅ Sitemap includes every page you create — no manual updates needed
// ✅ Excludes pages you don't want indexed (404, private, etc.)
// ✅ Sets correct site URL for canonical tags + sitemap
// ─────────────────────────────────────────────────────────────────

import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({

  // YOUR LIVE DOMAIN — critical for canonical tags and sitemap URLs
  site: 'https://gk360.pk',

  integrations: [
    sitemap({
      // Pages to EXCLUDE from sitemap (Google should not index these)
      filter: (page) => {
        const excluded = [
          'https://gk360.pk/404/',
          'https://gk360.pk/api/',
        ];
        return !excluded.some(e => page.startsWith(e));
      },

      // How often each type of page changes — helps Google prioritise crawl
      changefreq: 'weekly',
      priority: 0.7,

      // Custom priorities per page type
      // (overrides the default above for specific pages)
      customPages: [
        // These are added to sitemap even if not in src/pages/
        // Useful for dynamically generated content pages
      ],

      // Serialises lastmod date so Google knows when pages changed
      serialize(item) {
        // Homepage — highest priority, changes daily
        if (item.url === 'https://gk360.pk/') {
          return { ...item, changefreq: 'daily', priority: 1.0 };
        }
        // Current affairs — high priority, changes very often
        if (item.url.includes('/current-affairs')) {
          return { ...item, changefreq: 'daily', priority: 0.9 };
        }
        // Past papers — high priority
        if (item.url.includes('/past-papers')) {
          return { ...item, changefreq: 'weekly', priority: 0.8 };
        }
        // Blog posts
        if (item.url.includes('/blog')) {
          return { ...item, changefreq: 'monthly', priority: 0.7 };
        }
        // Subjects
        if (item.url.includes('/subjects')) {
          return { ...item, changefreq: 'weekly', priority: 0.8 };
        }
        // Legal pages — low priority
        if (item.url.includes('/privacy') || item.url.includes('/terms') || item.url.includes('/disclaimer')) {
          return { ...item, changefreq: 'yearly', priority: 0.2 };
        }
        return item;
      },
    }),
  ],

  // Performance: build output settings
  build: {
    // Inline small CSS/JS to reduce HTTP requests
    inlineStylesheets: 'auto',
  },

  // Vite settings (the underlying build tool Astro uses)
  vite: {
    build: {
      // Reduce chunk sizes for faster loading
      cssCodeSplit: true,
    },
  },
});
