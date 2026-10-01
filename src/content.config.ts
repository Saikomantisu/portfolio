import { defineCollection } from "astro:content";
import { file, glob } from "astro/loaders";
import { z } from "astro/zod";
import { parse } from "yaml";

const inFileOrder = (text: string) =>
  (parse(text) as Record<string, unknown>[]).map((entry, position) => ({ ...entry, position }));

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

const profile = defineCollection({
  loader: file("src/content/profile.yaml"),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    company: z.object({ name: z.string(), url: z.url() }),
    timeZone: z.string(),
    github: z.string(),
    intro: z.string(),
    usually: z.array(z.string()),
  }),
});

const projects = defineCollection({
  loader: file("src/content/projects.yaml", { parser: inFileOrder }),
  schema: z.object({
    position: z.number(),
    description: z.string(),
    url: z.url(),
    year: z.number(),
    featured: z.boolean().default(false),
  }),
});

const links = defineCollection({
  loader: file("src/content/links.yaml", { parser: inFileOrder }),
  schema: z.object({
    position: z.number(),
    url: z.string(),
  }),
});

export const collections = { blog, profile, projects, links };
