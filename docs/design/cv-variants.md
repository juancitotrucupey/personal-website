# CV variants: AI/ML Engineer and Researcher/Scientist

Decided 2026-10-29: the site offers two CVs, each in English and Spanish.

## Principle: one source, two views

All CV facts live in **one data file** (`src/data/cv.ts`, typed with a Zod/TS schema). Each entry is
tagged with the audiences it belongs to and can carry different bullets per audience. Both web
pages and all PDFs are generated from that file, so a fact is never edited in more than one place.

```ts
// sketch
type Audience = "engineer" | "research";
interface CvEntry {
  id: string;
  title: Localized; // { en, es }
  org: string;
  start: string;
  end?: string;
  audiences: Audience[]; // where it appears
  priority?: Partial<Record<Audience, number>>; // ordering per variant
  bullets: Partial<Record<Audience, Localized[]>>; // emphasis per variant
  tags: string[]; // e.g. "hpc", "ml", "materials"
}
```

## What changes between the two

|                    | AI/ML Engineer                                                                      | Researcher/Scientist                                                                                                                                          |
| ------------------ | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Headline           | ML Engineer: distributed training, MLOps, generative models                         | Computational physicist: materials for energy, spectroscopy, modeling                                                                                         |
| Section order      | Summary → Experience → Skills → Projects/OSS → Education → Publications             | Research interests → Education (theses) → Publications → Talks & posters → Research experience → Teaching → Awards → Industry experience (condensed) → Skills |
| Experience bullets | Impact and metrics (2x tuning gain, 50x speed-up, 100+ sites/day), production stack | Methods and scientific results (LBM, cellular automata, generative models for time series, NLP research)                                                      |
| Skills             | Grouped by stack: languages, ML, MLOps/cloud, data, tooling                         | Grouped by scientific computing: HPC (CUDA, MPI, OpenMP, SLURM), numerical methods, ML for science, math (K-theory, NCG)                                      |
| Length             | 1–2 pages                                                                           | 2–3 pages (academic CV)                                                                                                                                       |

## On the site

- `/en/cv` shows the CV with a **toggle: Engineer | Researcher**. The toggle switches between two
  real pages, `/en/cv/engineer` and `/en/cv/research`, so each version has its own shareable URL.
  The same applies under `/es/cv/...`.
- Each page has a "Download PDF" button for that version and language.

## PDFs

- 4 files: `cv-engineer-en.pdf`, `cv-engineer-es.pdf`, `cv-research-en.pdf`, `cv-research-es.pdf`
  in `public/cv/`.
- Generated from the web pages with a print stylesheet + a Playwright script (`npm run cv:pdf`),
  run in CI on every content change. There is no separate LaTeX/Word CV to keep in sync.
