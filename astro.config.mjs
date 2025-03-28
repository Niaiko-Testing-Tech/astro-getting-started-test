// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-getting-started-test-7a8623.netlify.app/",
  integrations: [preact()]
});