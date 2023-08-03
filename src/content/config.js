import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    author: z.string().default("Anonymous"),
    title: z.string(),
    description: z.string(),
    image: z
      .object({
        src: z.string(),
        alt: z.string(),
      })
      .default({
        src: "https://placehold.co/1200x800/png?text=NO+IMAGE\\nAVAILABLE",
        alt: "No image found",
      }),
    publishDate: z.date(),
  }),
});

export const collections = {
  blog: blogCollection,
};
