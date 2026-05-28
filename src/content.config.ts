import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    title_en: z.string().optional(),
    event: z.string(),
    eventType: z.enum(['hackathon', 'personal', 'professional']),
    description: z.string(),
    description_en: z.string().optional(),
    longDescription: z.string().optional(),
    longDescription_en: z.string().optional(),
    role: z.string(),
    role_en: z.string().optional(),
    stack: z.array(z.string()),
    award: z.string().optional(),
    repoUrl: z.string().url().optional(),
    demoUrl: z.string().url().optional(),
    date: z.string(),
    featured: z.boolean().default(false),
    hashId: z.string(),
    metrics: z.string().optional(),
    metrics_en: z.string().optional(),
    image: z.string().optional(),
  }),
});

export const collections = { projects };
