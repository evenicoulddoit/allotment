export type CardGroup = 'wedding' | 'other' | 'veg' | 'herbs'

export type VerdictId = 'ok' | 'warn' | 'gamble' | 'fail' | 'unknown'

/** The canonical rows, in the fixed order the bible uses on every card. */
export const ROW_ORDER = [
  'glance',
  'sow',
  'potup',
  'pinch',
  'plantout',
  'support',
  'protect',
  'pair',
  'avoid',
  'backup',
  'harvestWhen',
  'harvestHow',
  'stems',
  'yield',
] as const

export type RowId = (typeof ROW_ORDER)[number]

export const ROW_LABELS: Record<RowId, string> = {
  glance: 'At a glance',
  sow: 'Sow / plant',
  potup: 'Pot up',
  pinch: 'Pinch out',
  plantout: 'Plant out / space',
  support: 'Support',
  protect: 'Protect',
  pair: 'Pair with',
  avoid: 'Keep away from',
  backup: 'Back-up plan',
  harvestWhen: 'Harvest: when',
  harvestHow: 'Harvest: how',
  stems: 'Stems on 30 May',
  yield: 'Yield',
}

type RowFields = Record<Exclude<RowId, 'yield'>, string> & { yield?: string }

export interface PlantCard {
  id: string
  group: CardGroup
  title: string
  /** Short name used in filters and search. */
  name: string
  verdict: VerdictId
  /** The verdict's qualifying words, shown next to the badge. */
  verdictNote?: string
  rows: RowFields
}

export const VERDICT_META: Record<VerdictId, { word: string }> = {
  ok: { word: 'On track' },
  warn: { word: 'Borderline' },
  gamble: { word: 'Gamble' },
  fail: { word: 'Not in time' },
  unknown: { word: 'Unknown' },
}
