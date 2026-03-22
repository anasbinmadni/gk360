import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; // <-- NEW: We import the file loader

const pastPapersCollection = defineCollection({
  // NEW: We tell Astro exactly where to look for your JSON files
  loader: glob({ pattern: "**/*.json", base: "./src/content/past-papers" }), 
  schema: z.array(
    z.object({
      id: z.number(),
      question: z.string(),
      options: z.array(z.string()),
      correct_answer: z.string(),
      explanation: z.string(),
      category: z.string(),
      department: z.string(),
      year: z.number()
    })
  )
});

export const collections = {
  'past-papers': pastPapersCollection, 
};