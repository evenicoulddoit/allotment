import type { ChartPlant } from './types'

/**
 * Wedding rows, transcribed from the bible's Part 3
 * "Calendar tables by job" (pp. 15-20). Dates omit the year: MM-DD only.
 * They are resolved against the domain in meta.ts.
 */
export const WEDDING: ChartPlant[] = [
  {
    id: 'tulips-1',
    name: "Tulips, batch 1",
    note: "about 48 bulbs, planter T",
    spans: [
      { job: 'plantout', from: '10-29', to: '11-20' },
      { job: 'harvest', from: '05-09', to: '05-16', note: "pull with bulb, fridge" },
    ],
  },
  {
    id: 'tulips-2',
    name: "Tulips, batch 2",
    note: "about 47 bulbs, kept in a tin",
    spans: [
      { job: 'plantout', from: '01-03', to: '01-10' },
      { job: 'harvest', from: '05-20', to: '05-23', note: "pull with bulb, fridge" },
    ],
  },
  {
    id: 'ranunculus-1',
    name: "Ranunculus, batch 1",
    note: "about 40 corms",
    spans: [
      { job: 'potup', from: '11-01', to: '11-08', note: "corms into trays" },
      { job: 'harden', from: '03-05', to: '03-14' },
      { job: 'plantout', from: '03-15', to: '03-25' },
      { job: 'harvest', from: '04-25', to: '05-25' },
    ],
  },
  {
    id: 'ranunculus-2',
    name: "Ranunculus, batch 2",
    note: "about 39 corms",
    spans: [
      { job: 'potup', from: '02-20', to: '02-28', note: "corms into trays" },
      { job: 'harden', from: '03-25', to: '04-03' },
      { job: 'plantout', from: '04-01', to: '04-10' },
      { job: 'harvest', from: '05-15', to: '06-15' },
    ],
  },
  {
    id: 'allium',
    name: "Allium (late variety)",
    note: "10 bulbs, ground ring",
    spans: [
      { job: 'plantout', from: '10-29', to: '11-15' },
      { job: 'harvest', from: '05-20', to: '06-10' },
    ],
  },
  {
    id: 'sweet-peas-muse',
    name: "Sweet peas: Muse, Fire & Ice, High Scent",
    note: "40 plants",
    spans: [
      { job: 'sow', from: '10-29', to: '11-10' },
      { job: 'harden', from: '03-15', to: '03-24' },
      { job: 'plantout', from: '03-25', to: '04-05' },
      { job: 'harvest', from: '05-10', to: '07-15' },
    ],
  },
  {
    id: 'sweet-peas-spring',
    name: "Sweet peas: Spring Sunshine",
    note: "34 plants",
    spans: [
      { job: 'sow', from: '10-29', to: '11-10' },
      { job: 'harden', from: '03-15', to: '03-24' },
      { job: 'plantout', from: '03-25', to: '04-05' },
      { job: 'harvest', from: '05-10', to: '07-15', note: "may start earlier" },
    ],
  },
  {
    id: 'stocks-1',
    name: "Stocks, batch 1",
    note: "3 varieties",
    spans: [
      { job: 'sow', from: '10-29', to: '11-05' },
      { job: 'harden', from: '03-05', to: '03-14' },
      { job: 'plantout', from: '03-15', to: '03-25' },
      { job: 'harvest', from: '05-01', to: '06-10' },
    ],
  },
  {
    id: 'stocks-2',
    name: "Stocks, batch 2",
    note: "back-up",
    spans: [
      { job: 'sow', from: '02-15', to: '02-28' },
      { job: 'harden', from: '04-01', to: '04-10' },
      { job: 'plantout', from: '04-12', to: '04-20' },
      { job: 'harvest', from: '05-20', to: '06-10' },
    ],
  },
  {
    id: 'larkspur',
    name: "Larkspur",
    note: "30 plants",
    spans: [
      { job: 'sow', from: '10-29', to: '11-15' },
      { job: 'harden', from: '03-05', to: '03-14' },
      { job: 'plantout', from: '03-15', to: '03-25' },
      { job: 'harvest', from: '05-25', to: '06-30' },
    ],
  },
  {
    id: 'clarkia',
    name: "Clarkia",
    note: "40 plants",
    spans: [
      { job: 'sow', from: '10-29', to: '11-15' },
      { job: 'harden', from: '03-05', to: '03-14' },
      { job: 'plantout', from: '03-15', to: '03-25' },
      { job: 'harvest', from: '05-25', to: '07-15' },
    ],
  },
  {
    id: 'orlaya',
    name: "Orlaya",
    note: "40 plants",
    spans: [
      { job: 'sow', from: '10-29', to: '11-15' },
      { job: 'harden', from: '03-05', to: '03-14' },
      { job: 'plantout', from: '03-15', to: '03-25' },
      { job: 'harvest', from: '05-15', to: '06-30' },
    ],
  },
  {
    id: 'nigella',
    name: "Nigella",
    note: "40 plants, root trainers",
    spans: [
      { job: 'sow', from: '10-29', to: '11-15' },
      { job: 'harden', from: '03-05', to: '03-14' },
      { job: 'plantout', from: '03-15', to: '03-25' },
      { job: 'harvest', from: '05-15', to: '07-15' },
    ],
  },
  {
    id: 'cornflower',
    name: "Cornflower",
    note: "60 plants",
    spans: [
      { job: 'sow', from: '10-29', to: '11-15' },
      { job: 'harden', from: '03-05', to: '03-14' },
      { job: 'plantout', from: '03-15', to: '03-25' },
      { job: 'harvest', from: '05-15', to: '07-15' },
    ],
  },
  {
    id: 'thlaspi',
    name: "Thlaspi",
    note: "20 plants",
    spans: [
      { job: 'sow', from: '10-29', to: '11-15' },
      { job: 'harden', from: '03-05', to: '03-14' },
      { job: 'plantout', from: '03-15', to: '03-25' },
      { job: 'harvest', from: '04-15', to: '06-15' },
    ],
  },
  {
    id: 'poppy-bridal',
    name: "Poppy Bridal Silk",
    note: "30 plants, root trainers",
    spans: [
      { job: 'sow', from: '10-29', to: '11-15' },
      { job: 'harden', from: '03-05', to: '03-14' },
      { job: 'plantout', from: '03-15', to: '03-25', note: "seedlings, handle roots gently" },
      { job: 'harvest', from: '05-25', to: '06-30', note: "sear stems" },
    ],
  },
  {
    id: 'iceland-poppies',
    name: "Iceland poppies (gamble)",
    note: "Iceland Giant, Colibri Dolce Vita",
    spans: [
      { job: 'sow', from: '10-29', to: '11-15', note: "gamble" },
      { job: 'plantout', from: '03-15', to: '03-31' },
      { job: 'harvest', from: '05-25', to: '07-31', note: "0 to 1 stem a plant by 30 May" },
    ],
  },
  {
    id: 'scabiosa',
    name: "Scabiosa (gamble, then main)",
    note: "Salmon Queen",
    spans: [
      { job: 'sow', from: '10-29', to: '11-15', note: "gamble" },
      { job: 'sow', from: '02-15', to: '03-15', note: "main sowing, windowsill" },
      { job: 'harden', from: '04-01', to: '04-14' },
      { job: 'plantout', from: '04-15', to: '04-25' },
      { job: 'harvest', from: '06-01', to: '09-30' },
    ],
  },
  {
    id: 'clary-sage',
    name: "Clary sage (check the packet)",
    note: "Salvia viridis only",
    spans: [
      { job: 'sow', from: '10-29', to: '11-15', note: "if S. viridis" },
      { job: 'plantout', from: '03-15', to: '03-31' },
      { job: 'harvest', from: '06-01', to: '07-15' },
    ],
  },
  {
    id: 'didiscus',
    name: "Didiscus",
    note: "individual pots, windowsill",
    spans: [
      { job: 'sow', from: '01-25', to: '02-15' },
      { job: 'harden', from: '04-12', to: '04-22' },
      { job: 'plantout', from: '04-23', to: '04-30' },
      { job: 'harvest', from: '06-15', to: '07-31', note: "bonus if early" },
    ],
  },
  {
    id: 'eucalyptus',
    name: "Eucalyptus (foliage)",
    note: "15 plants",
    spans: [
      { job: 'sow', from: '02-10', to: '02-25' },
      { job: 'potup', from: '04-01', to: '04-15', note: "grows 30 cm a week" },
      { job: 'harden', from: '05-05', to: '05-14' },
      { job: 'plantout', from: '05-15', to: '05-20' },
      { job: 'harvest', from: '05-25', to: '07-31' },
    ],
  },
  {
    id: 'geum',
    name: "Geum Cosmopolitan",
    note: "5 plants in 1 L pots",
    spans: [
      { job: 'plantout', from: '10-29', to: '11-15' },
      { job: 'harvest', from: '05-20', to: '07-15' },
    ],
  },
  {
    id: 'achillea',
    name: "Achillea The Pearl",
    note: "buy 1 L plants",
    spans: [
      { job: 'plantout', from: '04-15', to: '05-15', note: "buy plants" },
      { job: 'harvest', from: '07-01', to: '08-31', note: "few stems at most in May" },
    ],
  },
  {
    id: 'lemon-bergamot',
    name: "Lemon bergamot (foliage)",
    note: "scented green for 30 May",
    spans: [
      { job: 'sow', from: '02-15', to: '03-15' },
      { job: 'harden', from: '04-25', to: '05-09' },
      { job: 'plantout', from: '05-10', to: '05-20' },
      { job: 'harvest', from: '05-25', to: '09-30', note: "foliage" },
    ],
  },
]
