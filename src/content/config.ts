import { defineCollection, z } from "astro:content";

const episodes = defineCollection({
  type: "content",
  schema: z.object({
    episode: z.number(),
    title: z.string(),
    passage: z.string(),
    date: z.string(),
    summary: z.string().optional(),
    cover: z.string().optional(), // 👈 ADD IT HERE
    spotify: z.string().url().optional(),
    apple: z.string().url().optional(),
    amazon: z.string().url().optional(),
    audible: z.string().url().optional(),
    youtube: z.string().url().optional(),
  }),
});


export const collections = {
  episodes,
};
