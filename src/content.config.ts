import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

import { LOCALES } from "@/i18n/config";

/**
 * Content collections. Each entry lives in a language folder, e.g. src/content/blog/en/my-post.md,
 * and the same `translationKey` links an article to its translation.
 */
const locale = z.enum(LOCALES);

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    lang: locale,
    translationKey: z.string(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    year: z.number().int(),
    lang: locale,
    translationKey: z.string(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    links: z
      .object({
        paper: z.url().optional(),
        code: z.url().optional(),
        data: z.url().optional(),
        demo: z.url().optional(),
      })
      .default({}),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, projects };
