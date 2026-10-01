import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://ravinath.dev",
  output: "static",
  markdown: {
    shikiConfig: { theme: "vesper" },
  },
  vite: {
    optimizeDeps: { include: ["motion"] },
  },
});
