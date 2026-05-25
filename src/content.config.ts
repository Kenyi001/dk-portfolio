import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    event: z.string(),
    eventType: z.enum(['hackathon', 'personal', 'professional']),
    description: z.string(),
    longDescription: z.string().optional(),
    role: z.string(),
    stack: z.array(z.string()),
    award: z.string().optional(),
    repoUrl: z.string().url().optional(),
    demoUrl: z.string().url().optional(),
    date: z.string(),
    featured: z.boolean().default(false),
    hashId: z.string(),
    metrics: z.string().optional(),
    image: z.string().optional(),
  }),
});

export const collections = { projects };
