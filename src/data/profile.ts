import { getCollection, getEntry } from "astro:content";

export async function getProfile() {
  const entry = await getEntry("profile", "me");
  if (!entry) throw new Error('src/content/profile.yaml needs a "me" entry');
  return entry.data;
}

export async function getProjects({ featured = false } = {}) {
  const projects = await getCollection("projects", ({ data }) => !featured || data.featured);
  return projects.sort((a, b) => a.data.position - b.data.position).map(({ id, data }) => ({ name: id, ...data }));
}

export async function getLinks() {
  const links = await getCollection("links");
  return links.sort((a, b) => a.data.position - b.data.position).map(({ id, data }) => ({ label: id, ...data }));
}
