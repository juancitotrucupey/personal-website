# personal-website

Personal website of **Juan Sebastián Flórez Jiménez**: portfolio, CV and blog of a computational
physicist moving into materials science and engineering (computational spectroscopy, materials
modeling, synthesis and characterization, functional materials for the energy sector).

## Hosting

- **Hosting:** Google Cloud **Firebase Hosting**, on the free (Spark) plan.
- **Domain:** registered with **Namecheap**; its DNS points to Firebase Hosting, which provides HTTPS.
- **Source and CI:** this GitHub repository, with GitHub Actions for checks, builds and deploys.

## Stack

| Layer                 | Choice                                                             |
| --------------------- | ------------------------------------------------------------------ |
| Framework             | [Astro](https://astro.build) (static output) + TypeScript (strict) |
| Content               | Markdown/MDX in Astro content collections, validated with Zod      |
| Styling               | Plain CSS with design tokens (CSS custom properties)               |
| Interactivity         | Small TypeScript islands (search, filters, CV toggle)              |
| Math                  | remark-math + rehype-katex                                         |
| Languages             | English and Spanish via Astro i18n routing (`/en`, `/es`)          |
| Interactive notebooks | marimo notebooks exported to WebAssembly                           |
| CV PDFs and tests     | Playwright                                                         |
| Code quality          | Prettier, ESLint, `astro check`                                    |

## Getting started

Requirements: **Node 26** and **npm 11** (pinned in `.nvmrc` and `package.json`; `npm` refuses
other versions).

```bash
npm ci          # install the exact dependency versions from package-lock.json
npm run dev     # start the dev server at http://localhost:4321
```

## Commands

| Command                      | What it does                                                     |
| ---------------------------- | ---------------------------------------------------------------- |
| `npm run dev`                | Dev server with live reload at `localhost:4321`                  |
| `npm run build`              | Production build into `dist/`                                    |
| `npm run preview`            | Serve the production build locally                               |
| `npm run check`              | Type-check `.astro` and `.ts` files                              |
| `npm run lint`               | ESLint (`npm run lint:fix` fixes what it can)                    |
| `npm run format`             | Format everything with Prettier (`format:check` only checks)     |
| `npm run deploy`             | Build and publish to Firebase Hosting (live site)                |
| `npm run deploy:preview`     | Build and publish to a temporary preview URL (expires in 7 days) |
| `npm run firebase -- <args>` | Run any Firebase CLI command, e.g. `npm run firebase -- login`   |
| `npm run validate`           | Everything CI runs: format check, lint, type-check and build     |

## Deploying

The site is hosted on Firebase Hosting, project `personal-website-juan-florez`
(default URL: https://personal-website-juan-florez.web.app). Configuration: `firebase.json`, `.firebaserc`.

```bash
npm run firebase -- login   # once per machine, opens Google sign-in
npm run deploy              # build and publish
```

## Project structure

```
docs/                     Source content, design notes and architecture
public/                   Static files served as-is (favicon, images, PDFs)
src/
  content/                Markdown content, one folder per language
    blog/{en,es}/
    projects/{en,es}/
  content.config.ts       Content schemas (required fields for posts and projects)
  data/                   Typed data: site settings (site.ts), CV (cv.ts)
  i18n/                   Languages (config.ts), UI strings (ui.ts), helpers (utils.ts)
  lib/                    Shared logic (content queries)
  components/             Reusable UI components
  layouts/                Page layouts (BaseLayout)
  pages/
    index.astro           Redirects "/" to "/en/"
    404.astro
    [lang]/               Every page, generated for /en and /es
  styles/                 Design tokens (tokens.css) and global styles
.github/workflows/ci.yml  CI: format, lint, type-check, build
```

## Site structure

- **Home:** intro, Now, Research, Works, Projects, Experience & community, Contact
- **/projects:** project gallery with tag filters
- **/blog:** articles with math support and RSS
- **/lab:** interactive notebooks that run in the browser
- **/cv:** two versions, AI/ML Engineer (`/cv/engineer`) and Researcher/Scientist (`/cv/research`),
  each with a PDF

## Adding content

- **Blog post:** add `src/content/blog/en/<slug>.md` and `src/content/blog/es/<slug>.md` with the same
  `translationKey`. Copy the fields from `example.md`; posts with `draft: true` are not published.
- **Project:** same pattern in `src/content/projects/{en,es}/`.
- **UI text** (menus, labels): `src/i18n/ui.ts`. Spanish must have every English key, or type-checking fails.
- **Name, links, domain:** `src/data/site.ts`.

## Branches

- `main`: default branch; released versions only.
- `juanflorez/version_0`: first version of the site, under development.
