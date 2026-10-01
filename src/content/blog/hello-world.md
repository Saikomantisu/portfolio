---
title: Hello, world
description: How to write a post on this site.
date: 2026-10-01
draft: true
---

This is a draft, so it only shows up while running `npm run dev`. Delete it or set `draft: false` once you have something to publish.

## Writing a post

Add a Markdown file to `src/content/blog/`. The file name becomes the URL, so `my-first-post.md` lives at `/blog/my-first-post`.

Every post starts with frontmatter:

```yaml
---
title: My first post
description: One line shown under the title.
date: 2026-10-01
---
```

Everything below it is regular Markdown: **bold**, *italic*, [links](https://astro.build), lists, quotes and code.

> Keep it simple.

```ts
const greet = (name: string) => `Hello, ${name}`;
```
