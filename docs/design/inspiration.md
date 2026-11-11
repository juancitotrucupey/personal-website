# Design inspiration (Phase 2 input)

Researched 2026-10-29. Every site below was opened and checked live.
Goal: an eye-catching, modern, easy-to-navigate site for a **computational physicist moving into
materials science & engineering** (computational spectroscopy, materials modeling, synthesis &
characterization, next-gen functional materials for energy: NH3, H2, catalysts, ceramics for
fusion/fission, supercapacitors, solid electrolytes).

## Sites you shared

| Site                                                                                 | What makes it work                                                                                                                                                         | Take                                                                                | Avoid                                                                                            |
| ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| [Distill blog template](https://huggingface.co/spaces/lvwerra/distill-blog-template) | Distill.pub layout: wide figures, table of contents, KaTeX math, citations, footnotes, interactive Plotly widgets, byline block                                            | Use for **blog + project write-ups** (your Brillouin-torus post needs exactly this) | Not a home page; generic system font                                                             |
| [Alex Sludds](https://alexsludds.github.io/)                                         | Single-page CV: photo, one-line role, resume button, 2-column year/role tables, publications with [paper] links                                                            | Clarity: the whole CV is scannable in 30 s; date column layout                      | Dated Bootstrap/jQuery look, no nav                                                              |
| [Dirk Englund](https://englund-website-580973493460.us-central1.run.app/)            | ASCII-art name, JetBrains Mono accents, **"Ask Dirk's AI" terminal chat** about his research, news feed with media, nav: Research · Works · Projects · Gallery · News · CV | Mono "lab-instrument" accents; AI assistant over your papers/CV as a later feature  | Very long single page (80k px)                                                                   |
| [QPAI @ MIT (TUI)](https://qp.mit.edu/tui/)                                          | Whole site as a terminal app (Python Textual in the browser): tabs, stat counters, publication table                                                                       | Offer a **hidden/alternate terminal mode** as an easter egg                         | As the main site it's poor for SEO, accessibility and mobile — they keep it as an alternate view |

## Materials / atomistic researchers

| Site                                                                                                           | Notes                                                                                                                                                                                                                                             |
| -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [janosh.dev](https://janosh.dev) — Janosh Riebesell, computational materials scientist (DFT + ML force fields) | **Closest to what you want to become.** Dark teal, centered avatar, icon links (GitHub, Scholar, ORCID, LinkedIn, CV), "Recent Work" cards with logo, Paper/Code chips and date. Built with Svelte.                                               |
| [Matbench Discovery](https://matbench-discovery.materialsproject.org) — Janosh's benchmark site                | Shows how a materials site can be **interactive**: sortable heat-map leaderboard, presets, filters. His open-source [MatterViz](https://github.com/janosh/matterviz) renders crystal structures, periodic tables and phonon bands in the browser. |
| [Kevin M. Jablonka](https://kjablonka.com) — AI for materials chemistry                                        | Editorial calm: Newsreader serif, a sharp one-sentence mission ("We need actionable understanding…"), dated "Recent notes" list, RSS. Shows how strong _writing_ stands out.                                                                      |
| [Digital Synthesis Lab](https://dskoda.com) — D. Schwalbe-Koda, predictive materials synthesis                 | Custom illustrations (flask, zeolite lattice, graph networks) as the hero; clear calls to action. Good model for illustrating _synthesis + computation_.                                                                                          |
| [Tess Smidt](https://blondegeek.github.io) — geometric deep learning for atoms                                 | Memorable tagline ("Atomic architect. Wrangler of neural nets. Geometry junkie.") makes up for a plain layout.                                                                                                                                    |

## Computer-science / design-engineer sites (better taste)

| Site                                          | Notes                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Brittany Chiang](https://brittanychiang.com) | Best-in-class easy navigation: **sticky left column** (name, role, one-liner, section nav with scroll-spy, socials) + scrolling right column (About, Experience, Projects). Deep navy, subtle cursor spotlight.                                                                                                                                                                                                                                                                  |
| [Bartosz Ciechanowski](https://ciechanow.ski) | Gold standard of interactive explainers (e.g. _Moon_: drag the 3D Moon, scrub the date). Inspiration for physics/spectroscopy explainers.                                                                                                                                                                                                                                                                                                                                        |
| [Maggie Appleton](https://maggieappleton.com) | Dark warm palette, large serif statement headline, "digital garden" of essays/notes.                                                                                                                                                                                                                                                                                                                                                                                             |
| [Rauno Freiberg](https://rauno.me)            | Playful, crafted interactions (yellow circle, horizontal scroll). Polish, but too experimental to copy.                                                                                                                                                                                                                                                                                                                                                                          |
| Also worth a look                             | [Josh Comeau](https://www.joshwcomeau.com) (delightful micro-interactions), [Lilian Weng](https://lilianweng.github.io) (long-form ML notes), [Amelia Wattenberger](https://wattenberger.com) (data-viz essays), [Sam Rose](https://samwho.dev) (interactive essays), [Emil Kowalski](https://emilkowal.ski) (animation craft), [Jon Barron](https://jonbarron.info) (classic research template), [Aron Walsh / WMD group](https://wmd-group.github.io) (materials design group) |

## Patterns that repeat across the best sites

1. One **sharp sentence** of positioning above the fold, then proof (work cards).
2. **Few top-level pages**, with section nav that is always visible (sticky sidebar or top bar + ⌘K).
3. Work shown as **cards with chips** (Paper · Code · Data · Date), not walls of text.
4. One **signature interactive element** that matches the person's field (Ciechanowski's 3D Moon, Janosh's crystal viewers, Englund's AI chat).
5. Serif or editorial type for writing, monospace for "technical" labels — a pairing used again and again.
6. Dark-first palette with one accent color; light mode available.

## Direction (revised 2026-10-29): "modern research hub", modeled on Dirk Englund's site

Juan's choice: a holistic, modern setup like the
[Englund site](https://englund-website-580973493460.us-central1.run.app/), not the look of
atomistic-simulation researchers. The materials sites above stay as content references only.

### What the Englund site does (studied page by page)

- **Look:** light, airy, thin borders, cards with a small radius; system sans for text,
  JetBrains Mono for the name, labels, tags and metadata; uppercase mono section labels
  (`RECENT`, `RESEARCH`, `WORKS`); blue links; hamburger menu.
- **Home = one long page with anchor sections:** ASCII-art name → "Ask my AI" terminal box →
  Recent (news cards with media) → Research → Recognitions → **Works** → Projects →
  Entrepreneurship (venture cards with logos) → News → Contact.
- **Works:** tabbed (Publications · Conferences · Patents · GitHub Repos), searchable table with
  `#`, entry, type and year columns; each paper has "Ask" (AI) and "Digital twin" links.
- **Projects gallery (`/projects/gallery`):** cards with year and mono tag chips, plus a tag filter bar.
- **nonlocally (`/nonlocally`):** 22 **interactive marimo notebooks** that run in the browser
  (photonics, ray optics). This is the signature feature: visitors _use_ the research.
- **CV page** (`/cv`) and an AI assistant on every page (floating button).

### Juan's version

| Englund                   | Juan                                                                                                                                                                                                                                   | v1?                                                            |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| ASCII name + terminal box | Typographic/ASCII name + terminal-style intro (`$ whoami`) with quick links                                                                                                                                                            | yes                                                            |
| Recent / News             | "Now": what I'm working on, posts, talks, milestones                                                                                                                                                                                   | yes                                                            |
| Research                  | Research statement + focus areas (energy materials, spectroscopy, modeling, synthesis)                                                                                                                                                 | yes                                                            |
| Works table               | Tabs: Publications · Talks & posters · Code · Theses; client-side search                                                                                                                                                               | yes                                                            |
| Projects gallery          | Tagged cards + tag filter (ML, HPC, physics, materials, NLP…)                                                                                                                                                                          | yes                                                            |
| Entrepreneurship          | **Experience & community**: Lyric Tech, Zapata AI, Human Brain Tech, Hubrain, teaching                                                                                                                                                 | yes                                                            |
| nonlocally notebooks      | **Lab**: interactive notebooks (marimo exported to WebAssembly, so they run in the browser with no server), e.g. Lattice Boltzmann flow, traffic cellular automaton, a band-structure/Brillouin-zone toy, later spectroscopy/DFT demos | v1 with 1–2 notebooks                                          |
| Blog                      | Long-form posts with math (Distill-style layout)                                                                                                                                                                                       | yes                                                            |
| CV page                   | Web CV + PDF download                                                                                                                                                                                                                  | yes                                                            |
| AI assistant              | "Ask about my research", grounded on CV/papers                                                                                                                                                                                         | **later**: needs a small backend, an API key and rate limiting |

### Technical fit

Astro stays the right choice: static pages for SEO/speed; client-side search and tag filters
are small TypeScript islands; marimo notebooks are static WASM bundles under `public/lab/`;
the AI assistant can be added later as one serverless endpoint without restructuring.

## Content implication

Today's CV reads as ML engineering. The site needs to tell the **bridge story**: the HPC/Lattice
Boltzmann simulations, the solid-state topology thesis (Brillouin torus = band theory of
crystals), and generative/ML modeling skills all carry over to computational materials science.
The home sentence and the research grid should lead with materials; the ML career is the evidence.
