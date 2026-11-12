import { getCollection, type CollectionEntry } from "astro:content";

import type { Locale } from "@/i18n/config";

/** Published posts in one language, newest first. */
export async function getPosts(locale: Locale): Promise<CollectionEntry<"blog">[]> {
  const posts = await getCollection("blog", ({ data }) => data.lang === locale && !data.draft);
  return posts.toSorted((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** Published projects in one language, newest first. */
export async function getProjects(locale: Locale): Promise<CollectionEntry<"projects">[]> {
  const projects = await getCollection(
    "projects",
    ({ data }) => data.lang === locale && !data.draft,
  );
  return projects.toSorted((a, b) => b.data.year - a.data.year);
}

/** URL slug of an entry, without its language folder: "en/my-post" -> "my-post". */
export function entrySlug(entry: { id: string }): string {
  return entry.id.split("/").slice(1).join("/");
}
