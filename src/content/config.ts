import { defineCollection, z } from 'astro:content';

const profiles = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    title: z.string().optional(),
    avatar: z.string().optional(),
    location: z.string().optional(),
    website: z.string().url().optional(),
    github: z.string().optional(),
    twitter: z.string().optional(),
    linkedin: z.string().optional(),
    tags: z.array(z.string()).default([]),
    order: z.number().optional(),
  }),
});

export const collections = { profiles, };
