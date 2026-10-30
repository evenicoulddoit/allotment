import { HERB_CARDS } from './herbs'
import { OTHER_CARDS } from './other'
import type { CardGroup, PlantCard } from './types'
import { VEG_CARDS } from './veg'
import { WEDDING_A } from './wedding-a'
import { WEDDING_B } from './wedding-b'
import { WEDDING_C } from './wedding-c'

export const ALL_CARDS: PlantCard[] = [
  ...WEDDING_A,
  ...WEDDING_B,
  ...WEDDING_C,
  ...OTHER_CARDS,
  ...VEG_CARDS,
  ...HERB_CARDS,
]

export const CARD_GROUPS: { id: CardGroup; label: string }[] = [
  { id: 'wedding', label: 'Wedding flowers' },
  { id: 'other', label: 'Other flowers' },
  { id: 'veg', label: 'Veg and fruit' },
  { id: 'herbs', label: 'Herbs' },
]

export const CARDS_BY_GROUP: Record<CardGroup, PlantCard[]> = {
  wedding: [...WEDDING_A, ...WEDDING_B, ...WEDDING_C],
  other: OTHER_CARDS,
  veg: VEG_CARDS,
  herbs: HERB_CARDS,
}

export * from './types'
