import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({
    base: "./src/content/projects",
    pattern: "**/*.{md,mdx}",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    status: z.enum([
      "planning",
      "in-development",
      "completed",
      "archived",
    ]),
    featured: z.boolean().default(false),
    order: z.number().default(0),
    coverImage: z.string().optional(),
    repositoryUrl: z.string().url().optional(),
    liveUrl: z.string().url().optional(),
    technologies: z.array(z.string()).default([]),
    features: z
      .array(
        z.object({
          title: z.string(),
          description: z.string(),
          media: z.string().optional(),
        }),
      )
      .default([]),
    relatedPosts: z.array(z.string()).default([]),
  }),
});

const blog = defineCollection({
  loader: glob({
    base: "./src/content/blog",
    pattern: "**/*.{md,mdx}",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    relatedProject: z.string().optional(),
    coverImage: z.string().optional(),
  }),
});

export const collections = {
  projects,
  blog,
};
