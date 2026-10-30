export interface Part {
  id: number
  nav: string
  title: string
}

export const PARTS: Part[] = [
  { id: 1, nav: 'Read this first', title: 'Part 1. Read this first' },
  {
    id: 2,
    nav: 'Plant list',
    title: 'Part 2. Master plant list with wedding verdicts',
  },
  {
    id: 3,
    nav: 'Calendar',
    title: 'Part 3. Visual dashboards and calendar',
  },
  { id: 4, nav: 'Plot and rotation', title: 'Part 4. Plot plan and rotation' },
  { id: 5, nav: 'Pests', title: 'Part 5. Vermin and pest defence plan' },
  { id: 6, nav: 'Cut flowers', title: 'Part 6. Cut-flower handling' },
  { id: 7, nav: 'Plant cards', title: 'Part 7. Plant cards' },
  { id: 8, nav: 'Month by month', title: 'Part 8. Month-by-month checklist' },
]

export const PART_BY_ID = Object.fromEntries(PARTS.map((p) => [p.id, p]))
