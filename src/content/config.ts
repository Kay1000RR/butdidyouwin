import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    canonical: z.string().url().optional(),
    draft: z.boolean().optional(),
    author: z.string().optional(),
  }),
});

export const collections = { blog };
