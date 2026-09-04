import { defineCollection, z } from 'astro:content';

const guides = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    readTime: z.string(),
    publishDate: z.string(),
  }),
});

export const collections = { guides };
