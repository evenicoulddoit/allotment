import type { ChartPlant } from './types'

/**
 * Herbs rows, transcribed from the bible's Part 3
 * "Calendar tables by job" (pp. 15-20). Dates omit the year: MM-DD only.
 * They are resolved against the domain in meta.ts.
 */
export const HERBS: ChartPlant[] = [
  {
    id: 'chives',
    name: "Chives",
    note: "buy or divide for early guard",
    spans: [
      { job: 'sow', from: '03-01', to: '04-15' },
      { job: 'plantout', from: '04-15', to: '05-31' },
      { job: 'harvest', from: '05-15', to: '10-31' },
    ],
  },
  {
    id: 'thyme',
    name: "Thyme",
    spans: [
      { job: 'sow', from: '03-01', to: '04-15' },
      { job: 'plantout', from: '04-15', to: '05-31', note: "or buy a pot plant" },
      { job: 'harvest', from: '06-01', to: '10-31' },
    ],
  },
  {
    id: 'mint',
    name: "Mint and applemint",
    note: "sunk pots only",
    spans: [
      { job: 'plantout', from: '03-15', to: '04-30', note: "plants or divisions" },
      { job: 'harvest', from: '05-01', to: '10-31' },
    ],
  },
  {
    id: 'rosemary',
    name: "Rosemary",
    note: "buy a plant in April",
    spans: [
      { job: 'plantout', from: '04-15', to: '05-15', note: "buy plants" },
      { job: 'harvest', from: '06-01', to: '10-31' },
    ],
  },
  {
    id: 'lavender',
    name: "Lavender",
    note: "first flowers 2028",
    spans: [
      { job: 'sow', from: '02-15', to: '03-15' },
      { job: 'plantout', from: '05-15', to: '06-15' },
    ],
  },
  {
    id: 'basil',
    name: "Basil",
    note: "tomato bed",
    spans: [
      { job: 'sow', from: '04-20', to: '05-10' },
      { job: 'potup', from: '05-15', to: '06-05', note: "prick out" },
      { job: 'harden', from: '06-05', to: '06-14' },
      { job: 'plantout', from: '06-15', to: '06-25' },
      { job: 'harvest', from: '07-01', to: '09-30' },
    ],
  },
]
