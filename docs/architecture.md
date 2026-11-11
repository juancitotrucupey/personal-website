# Architecture

## Cloud services (decided 2026-11-10)

| Service                                            | Role                                                                                       | Cost                |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------ | ------------------- |
| GitHub                                             | Code repository, pull requests, GitHub Actions CI (checks, build, CV PDFs, deploy)         | Free                |
| Google Cloud Firebase Hosting                      | Hosts the built static site on Google's CDN with free HTTPS; preview channels for branches | Free (Spark plan)   |
| Namecheap                                          | Domain registrar; DNS records point the domain to Firebase Hosting                         | Domain fee per year |
| Later: Cloud Functions / Cloud Run + Anthropic API | Backend for the "Ask about my research" assistant (needs the pay-as-you-go Blaze plan)     | Pay per use         |

## Frameworks and libraries

| Layer          | Choice                                                                                                   |
| -------------- | -------------------------------------------------------------------------------------------------------- |
| Site framework | Astro (static output) + TypeScript (strict)                                                              |
| Content        | Markdown/MDX in Astro content collections, validated with Zod schemas                                    |
| Styling        | Plain CSS with design tokens (CSS custom properties) + Astro scoped styles; JetBrains Mono + a sans font |
| Interactivity  | Small TypeScript "islands" only where needed (Works search, tag filters, CV toggle, theme)               |
| Math           | remark-math + rehype-katex                                                                               |
| i18n           | Astro i18n routing (/en, /es) + typed UI string dictionaries                                             |
| Lab notebooks  | marimo notebooks exported to WebAssembly, served as static files                                         |
| CV PDFs, tests | Playwright (PDF export + smoke tests)                                                                    |
| Quality        | Prettier, ESLint, astro check, Lighthouse CI                                                             |

## Site map (each under /en and /es)

- `/` Home: intro terminal · Now · Research · Works · Projects · Experience & community · Contact
- `/projects`, `/projects/[slug]`
- `/blog`, `/blog/[slug]`, `/rss.xml`
- `/lab`, `/lab/[notebook]`
- `/cv` → `/cv/engineer`, `/cv/research` (+ 4 PDFs in `/cv/`)

## Repository layout

```
docs/                 content sources, design notes, this file
notebooks/            marimo source notebooks (.py)
public/               static files: images, favicon, generated CV PDFs, exported notebooks
scripts/              build helpers (cv-pdf.ts, export-notebooks.sh)
src/
  content/            blog/{en,es}, projects/{en,es}   + content.config.ts (schemas)
  data/               cv.ts, site.ts, works.ts (publications, talks, code)
  i18n/               ui.en.ts, ui.es.ts, helpers
  components/         Header, Terminal, WorksTable, ProjectCard, CvToggle, ...
  layouts/            BaseLayout, ArticleLayout, CvLayout
  pages/[lang]/       routes listed above
  styles/             tokens.css, global.css, print.css
.github/workflows/    ci.yml (lint, type-check, build, PDFs) + deploy to Firebase Hosting
firebase.json, .firebaserc   Firebase Hosting config
```

## Flow

Edit Markdown/data → push to GitHub → CI checks and builds → Firebase Hosting deploys
(preview channel URL for branches/PRs, live site from `main`).
