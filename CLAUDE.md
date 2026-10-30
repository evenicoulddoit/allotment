# Working on this project

An interactive web version of the Allotment Bible's Parts 1–8, built with React, TypeScript and Vite and deployed to GitHub Pages.

## Read this first

**`src/content/sections.ts` is the map.** It lists every section, its URL id, its nav label and its markdown file. Read that one file, then open only the section you need. Do not read `src/content/` wholesale: it holds about 110 KB of prose across 28 files, and most tasks touch one of them.

## Keep files small

The whole point of splitting the content is that a future session can load one section cheaply. Respect that:

- content files in `src/content/pN/` stay under about 12 KB each
- data files in `src/data/` stay under about 16 KB each
- if a content file grows past that, split it and add a section entry

Component files may be longer, but past roughly 200 lines consider splitting by responsibility.

## Where things live

| Need | Go to |
| --- | --- |
| Add or rename a section | `src/content/sections.ts`, then the markdown file |
| Change wording | the one markdown file for that section |
| Add a live widget | a component under `src/components/`, registered in `components/markdown/widgets.tsx`, then fenced as ` ```widget:name` |
| Change a calendar date | `src/data/calendar/{wedding,other,veg,herbs}.ts` (dates are `MM-DD`; the year is resolved in `meta.ts`) |
| Change a plant card | `src/data/cards/` |
| Change a colour or type size | `src/styles/tokens.css` |
| Change navigation or routing | `src/content/sections.ts` and `src/App.tsx` |

## Conventions

- **Design tokens only.** Colours come from `tokens.css`; there are no hard-coded hexes in components beyond the plot SVG's drawing palette.
- **One source of truth per dataset.** The calendar chart, its legend, the by-job tables and the month cards all render from `src/data/calendar/`. Never duplicate those dates into markdown.
- **Colour is never the only cue.** Job pills carry a letter (S/U/H/P/C); verdicts carry a word.
- **Verdict marks are SVG**, not emoji (`src/components/ui/StatusIcon.tsx`). Emoji render as tofu boxes when no emoji font is installed.

## Before committing

```bash
npm run typecheck
npm test
npm run build
```

The tests are deliberately light: they cover the date maths in `src/data/calendar/dates.ts` (where an off-by-one is silent) and one span invariant. This is a personal project, not production software.

## Deploying

Push to `master`. The workflow in `.github/workflows/deploy.yml` builds and publishes to pages.
