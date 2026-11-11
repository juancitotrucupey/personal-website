# Source content (Phase 1)

Raw content gathered for the website. This folder is the **single source of truth for wording** until the
Astro project exists; in Phase 3 it is converted into `src/data/` (CV) and `src/content/` (projects, blog).

Origin: https://trucupey.notion.site (extracted 2026-10-29).

| File                                      | Contains                                                                                                         | Goes to (new site)                                                                      |
| ----------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `cv.md`                                   | Identity, links, experience (short + long), education, publications, talks, workshops, awards, skills, languages | Home intro and both CV versions (Engineer / Researcher, see `../design/cv-variants.md`) |
| `projects.md`                             | Saber 11, Covid-19, opinion mining, traffic simulation, NC Brillouin torus, Hubrain                              | Projects collection                                                                     |
| `blog/non-commutative-brillouin-torus.md` | Full post with LaTeX (verified: 233 formulas identical to source)                                                | First blog post (needs KaTeX via remark-math/rehype-katex)                              |

## Deliberately not copied

- Personal references (third-party names, phones, emails) — should not be public.
- Phone number — recommend email + LinkedIn only.

## To resolve before publishing

1. **B.Sc. end date:** long CV says Dec 2018, 1-page CV says Jun 2019.
2. **Human Brain Technologies role:** "Machine Learning Ops Engineer" vs "ML Engineer".
3. **Contraloría numbers:** "more than 5000 public contracts" vs "over 1,000 entries".
4. **Unfinished bullet (HBT):** "topic extraction … which processed more than ." — number missing.
5. **Job titles:** Lyric Tech / Zapata: "MLOps Engineer/Data Scientist" (long CV) vs "ML Engineer" (1-page CV). Pick one.
6. **Dead link:** the "meritocracy fallacy" Notion page no longer exists.
7. **Blog figure:** hopping-matrices image did not load; needs the original file (and image rights: it is credited to an MDPI paper).
8. **Blog text** kept verbatim; it has typos (e.g. "intends and purposes", "Brullouin", "finte", "solid sate", second "Even Chern numbers" should be "Odd"). Fix during editing.
9. **Spanish versions:** none of this exists in Spanish yet.
10. **Images:** profile photo and cover images live in Notion; export originals if you want them.
