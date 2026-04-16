import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    author: z.string(),
    date: z.coerce.date(),
    readTime: z.string(),
    category: z.string(),
    image: z.string().optional(),
    description: z.string().optional(),
  }),
});

export const collections = { posts };