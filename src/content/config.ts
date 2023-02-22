import { z, defineCollection } from "astro:content";

const careers = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
  }),
});

export const collections = {
  careers,
};
