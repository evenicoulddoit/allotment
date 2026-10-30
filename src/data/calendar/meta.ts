import type { Domain } from './dates'
import { daysBetween, inferISO, monthTicks } from './dates'

import type { ChartPlant, GroupDef, GroupId, JobDef, JobId, Span } from './types'
import { WEDDING } from './wedding'
import { OTHER } from './other'
import { VEG } from './veg'
import { HERBS } from './herbs'

/**
 * The bible's calendar runs from the week-one sowing (29 Oct 2026) to the
 * end of the first year's growing (Nov 2027). The chart in the revised plan
 * labels its first column "Nov", because October is only the last three days
 * of the month; starting the domain on 29 Oct keeps those first sowings from
 * being clipped at the left edge.
 */
export const DOMAIN: Domain = { start: '2026-10-29', endExclusive: '2027-12-01' }

/** Flowers are cut on the day before the wedding. */
export const HARVEST_DAY = '2027-05-30'
export const WEDDING_DAY = '2027-06-01'

export const JOBS: JobDef[] = [
  {
    id: 'sow',
    label: 'Sow',
    letter: 'S',
    colourVar: '--sow',
    description:
      'Sow seed into trays, modules or root trainers, or straight into the bed.',
  },
  {
    id: 'potup',
    label: 'Pot up',
    letter: 'U',
    colourVar: '--potup',
    description:
      'Move into a bigger pot. Corms and tubers go into pots first; seedlings that outgrow their cells move on.',
  },
  {
    id: 'harden',
    label: 'Harden off',
    letter: 'H',
    colourVar: '--harden',
    description:
      '7 to 10 days outdoors by day, in at night, before planting out.',
  },
  {
    id: 'plantout',
    label: 'Plant out',
    letter: 'P',
    colourVar: '--plant',
    description:
      'Into the final bed or planter. For bulbs this means planting them.',
  },
  {
    id: 'harvest',
    label: 'Harvest',
    letter: 'C',
    colourVar: '--harvest',
    description: 'Cut, pull or pick.',
  },
]

export const JOB_BY_ID: Record<JobId, JobDef> = Object.fromEntries(
  JOBS.map((j) => [j.id, j]),
) as Record<JobId, JobDef>

/**
 * Resolve the year-less `MM-DD` dates in the data files into full ISO days.
 * The domain disambiguates December 2026 from December 2027.
 */
function resolve(plants: ChartPlant[]): ChartPlant[] {
  return plants.map((p) => ({
    ...p,
    spans: p.spans.map((s): Span => {
      const from = inferISO(
        Number(s.from.slice(3)),
        Number(s.from.slice(0, 2)),
        DOMAIN,
      )
      return {
        ...s,
        from,
        // The end is resolved relative to the start so that spans crossing
        // the new year cannot flip backwards.
        to: inferISO(Number(s.to.slice(3)), Number(s.to.slice(0, 2)), DOMAIN, from),
      }
    }),
  }))
}

export const GROUPS: GroupDef[] = [
  { id: 'wedding', label: 'Wedding flowers', plants: resolve(WEDDING) },
  { id: 'other', label: 'Other flowers', plants: resolve(OTHER) },
  { id: 'veg', label: 'Veg and fruit', plants: resolve(VEG) },
  { id: 'herbs', label: 'Herbs (guard plants)', plants: resolve(HERBS) },
]

export const ALL_PLANTS: ChartPlant[] = GROUPS.flatMap((g) => g.plants)

export const PLANTS_BY_GROUP: Record<GroupId, ChartPlant[]> = Object.fromEntries(
  GROUPS.map((g) => [g.id, g.plants]),
) as Record<GroupId, ChartPlant[]>

/**
 * Editorial notes shown on the month cards. The revised plan prints these
 * beneath the job list for each month; they are fixed advice, not derived.
 */
export const MONTH_NOTES: Record<string, string[]> = {
  '2026-10': [
    'Tulips: lay mesh flat over the bed straight after planting and peg it every 20 cm.',
    'Alliums and chives: fleece or fine mesh over them. Leaf miner flies in Oct and Nov.',
    'Cold frame: line the base with 6 mm mesh, close every gap, mesh over each tray.',
    'Tulip batch 2: store in a lidded tin at 5 to 9 °C. Check weekly for mould.',
    'Buy snap traps, mesh, fleece, insect mesh and hoops. Order slug nematodes for March.',
  ],
  '2026-11': [
    'First frost (late Nov): lid on the frame, fleece over the trays inside.',
    'Start the weekly 5-minute rodent patrol.',
  ],
  '2026-12': [
    'Pinch sweet peas at 2 to 3 pairs of true leaves.',
    'Vent the frame on mild days. Fleece in frosts.',
    'Check stored bulbs for mould and gnawing, check every mesh, reset traps.',
    'Order the seed and plugs you still need.',
  ],
  '2027-01': [
    'Pinch any remaining sweet peas.',
    'Check the strawberry delivery date.',
  ],
  '2027-02': [
    'Ranunculus: soak corms 3 to 4 hours only. Longer rots them.',
    'Order slug nematodes if you have not.',
  ],
  '2027-03': [
    'Slug nematodes once the soil is above 5 °C.',
    'Netting up for larkspur, stocks and cornflower.',
    'Fleece alliums and chives again (leaf miner, Mar and Apr).',
    'Clarkia: pinch at 10 to 15 cm. Larkspur pinch is optional.',
  ],
  '2027-04': [
    'Fleece tender plants on frosty nights until May.',
    'Insect mesh on hoops over cabbages and carrots.',
    'Pinch cornflower, clarkia and orlaya.',
  ],
  '2027-05': [
    'Clear the fridge of fruit. Clean buckets and snips. Shade cloth ready.',
    '29 May evening: take tulips out, re-cut 2 cm, stand in cold water.',
    '30 May harvest day: cut early, sear poppy stems, condition cool and dark.',
    '31 May: sort and arrange. 1 June: wedding.',
  ],
  '2027-06': [
    'Clear planters T and R once flowers finish.',
    'Strawberries ripen: net the bed and pick daily.',
    'Cut back lavender and thyme after flowering.',
    'Sow Iceland poppies and Lunaria for flowers in 2028.',
  ],
  '2027-07': [
    'Cut and hang statice and helichrysum to dry.',
    'Last carrot sowing by mid-July. Take dahlia and rosemary cuttings.',
    'Order bulbs for next spring.',
  ],
  '2027-09': ['Lift and dry onions.'],
  '2027-10': [
    'Cut dahlias until the first frost, then mulch 10 to 15 cm or lift and store.',
    'Pick Red Kalibo. Clear beds and rotate families.',
    "Plant next year's bulbs by late October.",
  ],
}

/** Chart statistics shown in the stat-card row. Computed, never hardcoded. */
export const CHART_STATS = {
  plants: ALL_PLANTS.length,
  spans: ALL_PLANTS.reduce((n, p) => n + p.spans.length, 0),
  months: monthTicks(DOMAIN).length,
  days: daysBetween(DOMAIN.start, DOMAIN.endExclusive),
  jobCount: JOBS.length,
}
