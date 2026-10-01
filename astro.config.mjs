import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://ravinath.dev",
  output: "static",
  integrations: [sitemap()],
  markdown: {
    shikiConfig: { theme: "vesper" },
  },
  vite: {
    optimizeDeps: { include: ["motion"] },
  },
});
