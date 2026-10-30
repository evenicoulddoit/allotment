/**
 * Stems cuttable on 30 May, from the "Stems on 30 May" line of each plant
 * card. `card` is the card's central figure; `cautious` is the low end of its
 * range and is the number to plan the wedding on. Foliage is separate.
 */
export interface StemRow {
  plant: string
  plants: number | null
  card: number
  cautious: number
  confidence: 'Low' | 'Medium' | 'High'
  note: string
}

export const STEM_ROWS: StemRow[] = [
  { plant: 'Ranunculus', plants: 79, card: 300, cautious: 200, confidence: 'Medium', note: '3 to 5 stems a plant on the day is the top of the usual range for first-year corms' },
  { plant: 'Cornflower', plants: 60, card: 240, cautious: 120, confidence: 'Medium', note: 'Autumn sowing; 4 open stems a plant needs a mild spring' },
  { plant: 'Orlaya', plants: 40, card: 200, cautious: 100, confidence: 'Medium', note: 'Good filler; flowers from mid-May' },
  { plant: 'Clarkia', plants: 40, card: 120, cautious: 30, confidence: 'Low', note: 'Starts about 25 May, so 30 May is the first day' },
  { plant: 'Nigella', plants: 40, card: 120, cautious: 60, confidence: 'Medium', note: 'Seedpods also usable' },
  { plant: 'Thlaspi', plants: 20, card: 100, cautious: 60, confidence: 'Medium', note: 'Flowers or green seed discs' },
  { plant: 'Sweet peas, 3 varieties', plants: 24, card: 96, cautious: 60, confidence: 'Medium', note: '24 plants in planter S2, one per cane at 15 cm; 16 more in your garden are a bonus' },
  { plant: 'Sweet peas, Spring Sunshine', plants: 24, card: 96, cautious: 60, confidence: 'Medium', note: '24 plants in planter S1; 10 more in your garden are a bonus. May start earlier' },
  { plant: 'Tulips', plants: 105, card: 90, cautious: 70, confidence: 'High', note: 'Pulled with the bulb, so one stem per bulb, minus rodent and rot losses' },
  { plant: 'Stocks', plants: 45, card: 65, cautious: 45, confidence: 'Medium', note: 'About 1.5 spikes a plant; batch 2 is the back-up' },
  { plant: 'Larkspur', plants: 30, card: 60, cautious: 30, confidence: 'Low', note: 'Starts about 25 May' },
  { plant: 'Geum', plants: 5, card: 40, cautious: 25, confidence: 'Medium', note: 'First-year plants, flowering from about 20 May' },
  { plant: 'Bridal Silk poppy', plants: 30, card: 30, cautious: 10, confidence: 'Low', note: 'Borderline; June is more likely' },
  { plant: 'Alliums', plants: 10, card: 9, cautious: 6, confidence: 'High', note: 'One stem per bulb' },
]

export const FOLIAGE: StemRow[] = [
  { plant: 'Eucalyptus (foliage)', plants: 15, card: 90, cautious: 20, confidence: 'Low', note: 'Planted out 15 to 20 May but cut from 25 May: cut lightly or buy plants (the cautious figure assumes this)' },
]

export const FLOWERS_TOTAL = { card: 1566, cautious: 876 }

export const NOT_FORECAST = [
  'Scabiosa', 'Didiscus', 'Iceland poppies', 'Clary sage',
  'Achillea', 'Lunaria', 'Lemon bergamot foliage', 'Mint',
]
