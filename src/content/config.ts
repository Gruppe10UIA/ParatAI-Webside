import { defineCollection, z } from 'astro:content';


const profiles = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    title: z.string().optional(),
    avatar: z.string().optional(),
    description: z.string().optional(),
    location: z.string().optional(),
    github: z.string().optional(),
    linkedin: z.string().optional(),
    tags: z.array(z.string()).default([]),
    order: z.number().optional(),
  }),
});

const div = defineCollection({
  type: 'content',
  schema: z.object({}), // No frontmatter required for plain markdown
});

const cards = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    image: z.string().optional(),
    link: z.string().optional(),
    tags: z.array(z.string()).default([]),
    order: z.number().optional(),
  }),
});

export const collections = { profiles, div, cards };


