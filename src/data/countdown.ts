/** Milestones counted backwards from harvest day, Sunday 30 May 2027. */
export interface Milestone {
  weeks: string
  text: string
}

export const COUNTDOWN: Milestone[] = [
  { weeks: '30', text: 'Sow sweet peas and hardy annuals; plant tulip batch 1 and alliums (29 Oct to 15 Nov)' },
  { weeks: '30', text: 'Pot up ranunculus batch 1 (1 to 8 Nov)' },
  { weeks: '21', text: 'Plant tulip batch 2 (3 to 10 Jan)' },
  { weeks: '14', text: 'Pot up ranunculus batch 2 (20 to 28 Feb)' },
  { weeks: '12', text: 'Frame fullest, 17.5 of 18 trays (10 Mar)' },
  { weeks: '12 to 10', text: 'Harden off and plant out the autumn-sown annuals and ranunculus batch 1 (5 to 25 Mar)' },
  { weeks: '9 to 8', text: 'Plant out sweet peas (25 Mar to 5 Apr)' },
  { weeks: '3', text: 'Pull tulip batch 1 (9 to 16 May)' },
  { weeks: '1', text: 'Pull tulip batch 2 (20 to 23 May)' },
  {
    weeks: '0',
    text: '29 May evening: tulips out of the fridge, re-cut. 30 May: harvest day. 31 May: arrange. 1 June: wedding',
  },
]
