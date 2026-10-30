import type { ComponentType } from 'react'
import { CalendarView } from '../calendar/CalendarView'
import { ColdFrameTable } from '../charts/ColdFrameTable'
import { CountdownTable } from '../charts/CountdownTable'
import { StemForecast } from '../charts/StemForecast'
import { PlantCards } from '../cards/PlantCards'
import { PlotLayout } from '../layout/PlotLayout'
import { PlantList } from '../plantlist/PlantList'

/**
 * The registry of interactive islands that markdown sections can embed with
 * a ```widget:<name>``` fence. Add an entry here and the name becomes
 * available to every content file.
 */
export const WIDGETS: Record<string, ComponentType> = {
  'calendar-chart': CalendarView,
  'cold-frame': ColdFrameTable,
  countdown: CountdownTable,
  'stem-forecast': StemForecast,
  'plant-cards': PlantCards,
  'plot-layout': PlotLayout,
  'plant-list': PlantList,
}
