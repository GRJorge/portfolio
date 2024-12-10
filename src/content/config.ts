import { z, defineCollection } from "astro:content";

const projects = defineCollection({
  schema: z.object({
    name: z.string(),
    link: z.string().url(),
    tags: z.string().array(),
  }),
});
const logos = defineCollection({
  schema: z.object({
    name: z.string(),
  }),
});

export const collections = { projects, logos };
