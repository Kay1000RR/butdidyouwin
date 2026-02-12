import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string(),
    updatedDate: z.string().optional(),
    canonical: z.string().url().optional(),
    author: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

export const collections = { blog };
