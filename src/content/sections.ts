/**
 * THE MAP. This is the one file to read first.
 *
 * Every section of the bible that the site publishes is listed here, in
 * reading order. Nav, routing, page titles and the search index all derive
 * from this array, so a section cannot exist in the nav without a file, or
 * the other way around.
 *
 * Each `load` is a separate dynamic import, so Vite emits one small chunk
 * per section and the browser only downloads the part being read.
 *
 * Content files live in src/content/pN/ and are plain markdown, kept under
 * ~12 KB each so a future session can read one section without loading the
 * rest of the corpus.
 */
export interface Section {
  /** Stable id used in the URL: "#/p3/calendar". */
  id: string
  part: number
  /** Short label for the sidebar. */
  nav: string
  /** Full heading shown at the top of the section. */
  title: string
  /** Word(s) above the title, e.g. "Revised 29 October 2026". */
  eyebrow?: string
  /** One-sentence introduction under the title. */
  standfirst?: string
  load: () => Promise<{ default: string }>
}

export const SECTIONS: Section[] = [
  // Part 1
  {
    id: 'p1/findings',
    part: 1,
    nav: 'The eight findings',
    title: 'The eight findings that shape everything',
    eyebrow: 'Read this first',
    standfirst:
      'The whole plan follows from these. Every later part assumes you have read them.',
    load: () => import('./p1/01-findings.md?raw'),
  },
  {
    id: 'p1/assumptions',
    part: 1,
    nav: 'Assumptions',
    title: 'Assumptions I have made (tell me if any are wrong)',
    load: () => import('./p1/02-assumptions.md?raw'),
  },
  {
    id: 'p1/unread',
    part: 1,
    nav: 'Could not read',
    title: 'Things I could not read or identify (please confirm)',
    load: () => import('./p1/03-unread.md?raw'),
  },
  {
    id: 'p1/dates',
    part: 1,
    nav: 'Key dates',
    title: 'Key dates at a glance',
    load: () => import('./p1/04-dates.md?raw'),
  },

  // Part 2
  {
    id: 'p2/wedding',
    part: 2,
    nav: 'Wedding flowers',
    title: 'Wedding flowers',
    eyebrow: 'Part 2 · Master plant list',
    standfirst:
      'What is on the list, what it is, and whether it can reach 30 May. The verdict key explains the marks.',
    load: () => import('./p2/01-wedding.md?raw'),
  },
  {
    id: 'p2/other',
    part: 2,
    nav: 'Other flowers',
    title: 'Other flowers (not for the wedding)',
    load: () => import('./p2/02-other.md?raw'),
  },
  {
    id: 'p2/veg',
    part: 2,
    nav: 'Veg and fruit',
    title: 'Vegetables and fruit',
    load: () => import('./p2/03-veg.md?raw'),
  },
  {
    id: 'p2/too-late',
    part: 2,
    nav: 'Why not in time',
    title: 'The five that cannot make it, and their fixes',
    load: () => import('./p2/04-too-late.md?raw'),
  },

  // Part 3
  {
    id: 'p3/intro',
    part: 3,
    nav: 'Overview',
    title: 'Visual dashboards and calendar',
    eyebrow: 'Part 3',
    standfirst:
      'Read these in this order: the by-job calendar, the cold-frame ledger, the stem forecast, the countdown, then the by-job tables.',
    load: () => import('./p3/01-intro.md?raw'),
  },
  {
    id: 'p3/calendar',
    part: 3,
    nav: 'Calendar by job',
    title: 'Calendar: each job on its own bar',
    standfirst:
      "The Bible's single orange bar is now five. Click a job to hide or show it.",
    load: () => import('./p3/02-calendar.md?raw'),
  },
  {
    id: 'p3/cold-frame',
    part: 3,
    nav: 'Cold frame',
    title: 'Cold frame: 18 trays',
    load: () => import('./p3/03-cold-frame.md?raw'),
  },
  {
    id: 'p3/stem-forecast',
    part: 3,
    nav: 'Stem forecast',
    title: 'Stem forecast for 30 May',
    load: () => import('./p3/04-stem-forecast.md?raw'),
  },
  {
    id: 'p3/countdown',
    part: 3,
    nav: 'Countdown',
    title: 'Countdown to 30 May',
    load: () => import('./p3/05-countdown.md?raw'),
  },

  // Part 4
  {
    id: 'p4/layout',
    part: 4,
    nav: 'Plot layout',
    title: 'Plot layout',
    eyebrow: 'Part 4 · Plot plan and rotation',
    standfirst:
      'Drawn to scale on your 8 × 15.6 m plot, north at the top. Tall things sit at the north so they shade nothing.',
    load: () => import('./p4/01-layout.md?raw'),
  },
  {
    id: 'p4/planters',
    part: 4,
    nav: 'Planters',
    title: 'Raised planters: how many, and what goes in',
    load: () => import('./p4/02-planters.md?raw'),
  },
  {
    id: 'p4/guards',
    part: 4,
    nav: 'Guard plants',
    title: 'Where the guard plants go',
    load: () => import('./p4/03-guards.md?raw'),
  },
  {
    id: 'p4/rotation',
    part: 4,
    nav: 'Rotation',
    title: 'Succession and rotation',
    load: () => import('./p4/04-rotation.md?raw'),
  },

  // Part 5
  {
    id: 'p5/threats',
    part: 5,
    nav: 'Who eats what',
    title: 'Who eats what',
    eyebrow: 'Part 5 · Vermin and pest defence',
    standfirst:
      'Rodents are the number-one threat to the wedding. The defence is built into the layout, not bolted on.',
    load: () => import('./p5/01-threats.md?raw'),
  },
  {
    id: 'p5/layers',
    part: 5,
    nav: 'The four layers',
    title: 'Four layers of defence',
    load: () => import('./p5/02-layers.md?raw'),
  },
  {
    id: 'p5/fleece',
    part: 5,
    nav: 'Fleece and mesh',
    title: 'How to apply fleece',
    load: () => import('./p5/03-fleece.md?raw'),
  },
  {
    id: 'p5/companions',
    part: 5,
    nav: 'Companion planting',
    title: 'Companion planting for pest control (honest evidence note)',
    load: () => import('./p5/04-companions.md?raw'),
  },

  // Part 6
  {
    id: 'p6/harvest-day',
    part: 6,
    nav: 'Harvest day',
    title: 'Harvest-day plan: Sunday 30 May 2027',
    eyebrow: 'Part 6 · Cut-flower handling',
    standfirst:
      'Cut early, condition cool, and keep the stems away from fruit. That is the whole job.',
    load: () => import('./p6/01-harvest-day.md?raw'),
  },
  {
    id: 'p6/stages',
    part: 6,
    nav: 'Stage to cut',
    title: 'Stage to cut, treatment and vase life',
    load: () => import('./p6/02-stages.md?raw'),
  },
  {
    id: 'p6/rescue',
    part: 6,
    nav: 'Rescue the window',
    title: 'Extending, shifting or rescuing the bloom window',
    load: () => import('./p6/03-rescue.md?raw'),
  },

  // Part 7
  {
    id: 'p7/cards',
    part: 7,
    nav: 'All plant cards',
    title: 'Plant cards',
    eyebrow: 'Part 7',
    standfirst:
      'Every plant has one card with the same rows in the same order. Filter by group or by the 30 May verdict, and open only the cards you need.',
    load: () => import('./p7/01-cards.md?raw'),
  },

  // Part 8
  {
    id: 'p8/week-one',
    part: 8,
    nav: 'Week one',
    title: 'Week one: 29 October to 15 November',
    eyebrow: 'Part 8 · Month by month',
    standfirst:
      'Only what must happen in this window. Everything else waits.',
    load: () => import('./p8/01-week-one.md?raw'),
  },
  {
    id: 'p8/year',
    part: 8,
    nav: 'The year',
    title: 'The year, month by month',
    load: () => import('./p8/02-year.md?raw'),
  },
  {
    id: 'p8/shopping',
    part: 8,
    nav: 'Shopping list',
    title: 'Shopping list',
    load: () => import('./p8/03-shopping.md?raw'),
  },
]

export const SECTION_BY_ID: Record<string, Section> = Object.fromEntries(
  SECTIONS.map((s) => [s.id, s]),
)

export const SECTIONS_BY_PART: Record<number, Section[]> = SECTIONS.reduce<
  Record<number, Section[]>
>((acc, s) => {
  ;(acc[s.part] ??= []).push(s)
  return acc
}, {})

export function sectionHref(id: string): string {
  return `#/${id}`
}

/** The first section of each part — used as the target for a bare part link. */
export const FIRST_SECTION_OF_PART: Record<number, Section> = Object.fromEntries(
  Object.entries(SECTIONS_BY_PART).map(([part, list]) => [part, list[0]]),
)

/** Every part's sections, in PARTS order. */
export const SECTION_ORDER: string[] = SECTIONS.map((s) => s.id)

export function neighbours(id: string): { prev?: Section; next?: Section } {
  const i = SECTIONS.findIndex((s) => s.id === id)
  if (i < 0) return {}
  return { prev: SECTIONS[i - 1], next: SECTIONS[i + 1] }
}
