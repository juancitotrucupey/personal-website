import { defineConfig } from "astro/config";

import { DEFAULT_LOCALE, LOCALES } from "./src/i18n/config";
import { SITE } from "./src/data/site";

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: SITE.url,
  output: "static",
  trailingSlash: "ignore",
  i18n: {
    locales: [...LOCALES],
    defaultLocale: DEFAULT_LOCALE,
    routing: {
      prefixDefaultLocale: true,
      // "/" is handled by src/pages/index.astro
      redirectToDefaultLocale: false,
    },
  },
});
