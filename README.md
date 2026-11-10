# personal-website

Personal website of **Juan Sebastián Flórez Jiménez**: portfolio, CV and blog of a computational
physicist moving into materials science and engineering (computational spectroscopy, materials
modeling, synthesis and characterization, functional materials for the energy sector).

## Hosting

- **Hosting:** Google Cloud **Firebase Hosting**, on the free (Spark) plan.
- **Domain:** registered with **Namecheap**; its DNS points to Firebase Hosting, which provides HTTPS.
- **Source and CI:** this GitHub repository, with GitHub Actions for checks, builds and deploys.

## Stack

| Layer | Choice |
|---|---|
| Framework | [Astro](https://astro.build) (static output) + TypeScript (strict) |
| Content | Markdown/MDX in Astro content collections, validated with Zod |
| Styling | Plain CSS with design tokens (CSS custom properties) |
| Interactivity | Small TypeScript islands (search, filters, CV toggle) |
| Math | remark-math + rehype-katex |
| Languages | English and Spanish via Astro i18n routing (`/en`, `/es`) |
| Interactive notebooks | marimo notebooks exported to WebAssembly |
| CV PDFs and tests | Playwright |
| Code quality | Prettier, ESLint, `astro check` |

## Site structure

- **Home:** intro, Now, Research, Works, Projects, Experience & community, Contact
- **/projects:** project gallery with tag filters
- **/blog:** articles with math support and RSS
- **/lab:** interactive notebooks that run in the browser
- **/cv:** two versions, AI/ML Engineer and Researcher/Scientist, each with a PDF

## Branches

- `main`: default branch; released versions only.
- `juanflorez/version_0`: first version of the site, under development.
