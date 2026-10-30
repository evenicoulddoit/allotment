# The Allotment Bible 2026–27

An interactive, phone-first web version of the Allotment Bible's Parts 1–8, styled after the revised plan of 29 October 2026.

Live: <https://evenicoulddoit.github.io/allotment/>

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
```

```bash
npm run build      # production build into dist/
npm run preview    # serve the build locally
npm test           # date and data-integrity checks
```

## Deploy

Pushing to `master` triggers `.github/workflows/deploy.yml`, which builds with Vite and publishes `dist/` to GitHub Pages. The Pages source must be set to **GitHub Actions** in the repository settings.

`vite.config.ts` sets `base` to `/allotment/` only when `GITHUB_ACTIONS` is set, so local development runs at `/` and the deployed site runs under the repo subpath.

## Editing the content

Content is plain markdown, one small file per section, in `src/content/pN/`.

- **`src/content/sections.ts` is the map.** Read it first. It lists every section, its URL, its nav label and its file.
- A section cannot appear in the nav without a file, or the other way round: both come from that one array.
- Interactive blocks are fenced code blocks with a `widget:` language, for example:

  ````markdown
  ```widget:calendar-chart
  ```
  ````

  The available names are the keys of `src/components/markdown/widgets.tsx`.

Content files are deliberately small (roughly 2–8 KB) so a future session can read one section without loading the whole corpus.

## Layout

| Path | What it is |
| --- | --- |
| `src/content/` | Markdown sections, one file each, plus the `sections.ts` map |
| `src/data/` | Typed datasets: the calendar, plant cards, stem forecast, cold frame, countdown |
| `src/components/` | React components: shell, calendar, cards, charts, plot layout |
| `src/styles/` | Design tokens (colours and type scale taken from the revised plan) |
| `source/` | The original PDFs, kept for reference; never fetched by the app |

## A note on the source

Where the bible and the revised plan disagree, the bible wins: it is newer and broader. The allium count is the one known conflict — the revised plan's chart says 30, the bible's plant card and week-one page say 10. The site uses 10.
