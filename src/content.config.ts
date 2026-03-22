// src/content.config.ts
// Tells Astro about your content collections.
// Every JSON file in src/content/past-papers/ is automatically a past paper.

import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const pastPapers = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/past-papers' }),
  schema: z.object({
    id:               z.string(),
    slug:             z.string(),
    title:            z.string(),
    titleFull:        z.string(),
    department:       z.string(),
    departmentShort:  z.string(),
    deptSlug:         z.string(),
    post:             z.string(),
    date:             z.string(),
    year:             z.number(),
    month:            z.string(),
    totalQuestions:   z.number(),
    totalMarks:       z.number(),
    timeMinutes:      z.number(),
    solved:           z.boolean(),
    hasAnswerKey:     z.boolean(),
    difficulty:       z.enum(['easy', 'medium', 'hard']),
    conductedBy:      z.string(),
    seoTitle:         z.string(),
    seoDescription:   z.string(),
    subjectBreakdown: z.array(z.object({
      subject:    z.string(),
      label:      z.string(),
      count:      z.number(),
      percentage: z.number(),
    })),
    tags:      z.array(z.string()),
    questions: z.array(z.object({
      no:       z.number(),
      question: z.string(),
      options:  z.record(z.string()),
      correct:  z.string(),
      subject:  z.string(),
      type:     z.enum(['static', 'dynamic']),
      topic:    z.string(),
    })),
  }),
});

export const collections = { 'past-papers': pastPapers };
