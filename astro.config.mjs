// @ts-check
// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://peterpham.me.github.io",
  base: "peter-pam",
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: true,
    }),
  ],
});
