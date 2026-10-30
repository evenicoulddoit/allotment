import type { ChartPlant } from './types'

/**
 * Other rows, transcribed from the bible's Part 3
 * "Calendar tables by job" (pp. 15-20). Dates omit the year: MM-DD only.
 * They are resolved against the domain in meta.ts.
 */
export const OTHER: ChartPlant[] = [
  {
    id: 'daffodils',
    name: "Daffodils",
    note: "rodent ring round T and R",
    spans: [
      { job: 'plantout', from: '10-29', to: '11-15' },
      { job: 'harvest', from: '03-01', to: '04-30', note: "stand alone in water first" },
    ],
  },
  {
    id: 'dahlias',
    name: "Dahlias",
    note: "7 tubers",
    spans: [
      { job: 'potup', from: '03-25', to: '04-10', note: "tubers into 3 L pots" },
      { job: 'harden', from: '05-01', to: '05-14' },
      { job: 'plantout', from: '05-15', to: '05-25' },
      { job: 'harvest', from: '08-01', to: '10-31' },
    ],
  },
  {
    id: 'marigold',
    name: "Marigold Fireball",
    note: "guard plant",
    spans: [
      { job: 'sow', from: '03-15', to: '04-15' },
      { job: 'harden', from: '05-10', to: '05-20' },
      { job: 'plantout', from: '05-20', to: '05-31' },
      { job: 'harvest', from: '07-01', to: '10-31' },
    ],
  },
  {
    id: 'candytuft',
    name: "Candytuft Spangles",
    note: "brassica block",
    spans: [
      { job: 'sow', from: '03-15', to: '05-15', note: "direct, thin to 15 cm" },
      { job: 'harvest', from: '06-15', to: '08-31' },
    ],
  },
  {
    id: 'rudbeckia',
    name: "Rudbeckia",
    spans: [
      { job: 'sow', from: '02-15', to: '03-15' },
      { job: 'harden', from: '05-01', to: '05-09' },
      { job: 'plantout', from: '05-10', to: '05-20' },
      { job: 'harvest', from: '07-01', to: '10-31' },
    ],
  },
  {
    id: 'statice',
    name: "Statice",
    note: "for drying",
    spans: [
      { job: 'sow', from: '02-15', to: '03-15' },
      { job: 'harden', from: '05-10', to: '05-19' },
      { job: 'plantout', from: '05-20', to: '05-31' },
      { job: 'harvest', from: '07-01', to: '09-30' },
    ],
  },
  {
    id: 'helichrysum',
    name: "Helichrysum (both)",
    note: "for drying",
    spans: [
      { job: 'sow', from: '03-15', to: '04-15' },
      { job: 'harden', from: '05-10', to: '05-19' },
      { job: 'plantout', from: '05-20', to: '05-31' },
      { job: 'harvest', from: '07-01', to: '09-30' },
    ],
  },
  {
    id: 'lunaria',
    name: "Lunaria (for 2028)",
    note: "flowers spring 2028",
    spans: [
      { job: 'sow', from: '06-01', to: '07-15' },
      { job: 'plantout', from: '09-15', to: '10-31' },
    ],
  },
]
