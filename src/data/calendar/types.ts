import type { ISODate } from './dates'

export type JobId = 'sow' | 'potup' | 'harden' | 'plantout' | 'harvest'
export type GroupId = 'wedding' | 'other' | 'veg' | 'herbs'

export interface Span {
  job: JobId
  /** First day of the operation, inclusive. */
  from: ISODate
  /** Last day of the operation, inclusive. */
  to: ISODate
  /** Optional detail shown in the tooltip, e.g. "pull with bulb, fridge". */
  note?: string
}

export interface ChartPlant {
  id: string
  /** Display name, without the parenthetical detail. */
  name: string
  /** Muted second line under the name, e.g. "about 48 bulbs, planter T". */
  note?: string
  spans: Span[]
}

export interface JobDef {
  id: JobId
  label: string
  /** The letter shown inside the pill. Colour is never the only cue. */
  letter: string
  /** CSS custom property holding the job's colour. */
  colourVar: string
  description: string
}

export interface GroupDef {
  id: GroupId
  label: string
  plants: ChartPlant[]
}
