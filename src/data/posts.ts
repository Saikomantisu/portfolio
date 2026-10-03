import { getCollection } from "astro:content";

export async function getPosts() {
  const posts = await getCollection(
    "blog",
    ({ data }) => import.meta.env.DEV || !data.draft,
  );
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function formatDate(date: Date) {
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function lsDate(date: Date) {
  const month = date
    .toLocaleDateString("en-US", { month: "short", timeZone: "UTC" })
    .toLowerCase();
  const day = String(date.getUTCDate()).padStart(2, "0");
  return `${month} ${day} ${date.getUTCFullYear()}`;
}

export function readingTime(body = "") {
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 200))} min`;
}
