// src/content.config.ts
// Place this at: src/content.config.ts (replace existing file)
//
// Simplified — no Zod schema validation.
// This avoids the Zod v3/v4 compatibility error completely.
// Astro reads all JSON files from src/content/past-papers/ automatically.

import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const pastPapers = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/past-papers' }),
});

export const collections = {
  'past-papers': pastPapers,
};
