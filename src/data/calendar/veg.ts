import type { ChartPlant } from './types'

/**
 * Veg rows, transcribed from the bible's Part 3
 * "Calendar tables by job" (pp. 15-20). Dates omit the year: MM-DD only.
 * They are resolved against the domain in meta.ts.
 */
export const VEG: ChartPlant[] = [
  {
    id: 'onion',
    name: "Onion Red Herald",
    note: "clumps of 5",
    spans: [
      { job: 'sow', from: '01-15', to: '02-15' },
      { job: 'harden', from: '03-25', to: '04-05' },
      { job: 'plantout', from: '04-05', to: '04-15' },
      { job: 'harvest', from: '08-01', to: '09-30' },
    ],
  },
  {
    id: 'cabbage-primo',
    name: "Cabbage Primo II",
    note: "12 plants",
    spans: [
      { job: 'sow', from: '03-01', to: '03-15' },
      { job: 'harden', from: '04-15', to: '04-24' },
      { job: 'plantout', from: '04-25', to: '05-15' },
      { job: 'harvest', from: '07-01', to: '10-31' },
    ],
  },
  {
    id: 'cabbage-kalibo',
    name: "Cabbage Red Kalibo",
    note: "8 in planter T",
    spans: [
      { job: 'sow', from: '04-01', to: '04-10' },
      { job: 'potup', from: '05-10', to: '05-20', note: "optional" },
      { job: 'harden', from: '05-25', to: '05-31' },
      { job: 'plantout', from: '06-01', to: '06-15' },
      { job: 'harvest', from: '09-01', to: '11-30' },
    ],
  },
  {
    id: 'carrots',
    name: "Carrots (both)",
    note: "sow in rounds",
    spans: [
      { job: 'sow', from: '03-20', to: '07-15', note: "every 3 to 4 weeks" },
      { job: 'harvest', from: '07-01', to: '11-30' },
    ],
  },
  {
    id: 'beetroot',
    name: "Beetroot Detroit 2",
    note: "sow in rounds",
    spans: [
      { job: 'sow', from: '03-25', to: '07-15', note: "every 3 weeks" },
      { job: 'harvest', from: '06-15', to: '10-31' },
    ],
  },
  {
    id: 'tomatoes',
    name: "Tomatoes (both)",
    note: "Buffalosteak, Toddler",
    spans: [
      { job: 'sow', from: '03-10', to: '03-25' },
      { job: 'potup', from: '04-10', to: '04-25' },
      { job: 'harden', from: '05-15', to: '05-24' },
      { job: 'plantout', from: '05-25', to: '06-10' },
      { job: 'harvest', from: '07-01', to: '10-15' },
    ],
  },
  {
    id: 'peppers',
    name: "Peppers (both)",
    note: "sweet, Snackbite",
    spans: [
      { job: 'sow', from: '02-15', to: '03-05' },
      { job: 'potup', from: '04-01', to: '04-20' },
      { job: 'harden', from: '05-25', to: '06-04' },
      { job: 'plantout', from: '06-05', to: '06-15' },
      { job: 'harvest', from: '08-01', to: '10-31' },
    ],
  },
  {
    id: 'strawberry',
    name: "Strawberry Fenella",
    note: "20 plants arrive in March",
    spans: [
      { job: 'plantout', from: '03-01', to: '03-31' },
      { job: 'harvest', from: '06-01', to: '07-31', note: "small crop in year 1" },
    ],
  },
]
