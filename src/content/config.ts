import { defineCollection, z } from "astro:content";

const episodes = defineCollection({
  type: "content",
  schema: z.object({
    episode: z.number(),
    title: z.string(),
    passage: z.string(),
    date: z.string(),
    summary: z.string().optional(),
    cover: z.string().optional(),
    spotify: z.string().url().optional(),
    apple: z.string().url().optional(),
    amazon: z.string().url().optional(),
    audible: z.string().url().optional(),
    youtube: z.string().url().optional(),
  }),
});

const tuesday = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.string(),
    scripture: z.string().optional(),
    description: z.string().optional(),
    draft: z.boolean().optional(),

    // ✅ NEW FIELDS (this fixes your errors)
    hero: z.string().optional(),
    heroAlt: z.string().optional(),

    iconLeft: z.string().optional(),
    iconLeftAlt: z.string().optional(),

    iconRight: z.string().optional(),
    iconRightAlt: z.string().optional(),
  }),
});

export const collections = {
  episodes,
  tuesday,
};