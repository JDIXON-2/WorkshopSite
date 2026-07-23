import { defineCollection, z } from 'astro:content';

const speakers = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    affiliation: z.string(),
    talkTitle: z.string().optional(),
    role: z.string().optional(),
    confirmed: z.boolean().default(false),
    url: z.string().url().optional(),
    photo: z.string().optional(),
    order: z.number().default(99),
  }),
});

const papers = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    abstract: z.string().optional(),
    order: z.number().default(99),
  }),
});

const schedule = defineCollection({
  type: 'content',
  schema: z.object({
    time: z.string(),
    title: z.string(),
    type: z.enum(['talk', 'break', 'session', 'poster', 'panel', 'talk', 'opening', 'closing']),
    speaker: z.string().optional(),
    order: z.number(),
  }),
});

const organisers = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    affiliation: z.string(),
    role: z.enum(['organiser', 'advisory', 'volunteer']),
    title: z.string().optional(),
    url: z.string().url().optional(),
    openreview: z.string().url().optional(),
    photo: z.string().optional(),
    order: z.number().default(99),
  }),
});

export const collections = { speakers, papers, schedule, organisers };
