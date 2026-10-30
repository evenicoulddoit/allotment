import { useMemo, useState } from 'react'
import {
  DOMAIN,
  GROUPS,
  HARVEST_DAY,
  PLANTS_BY_GROUP,
} from '../../data/calendar/meta'
import { monthTicks } from '../../data/calendar/dates'
import type { ChartPlant, JobId } from '../../data/calendar/types'
import { CalendarChart } from './CalendarChart'
import { CategoryTabs, type TabId } from './CategoryTabs'
import { JobLegend } from './JobLegend'
import { MonthGrid } from './MonthGrid'
import { CalendarTable } from './CalendarTable'
import { StatRow } from '../ui/StatRow'
import styles from './CalendarView.module.css'

type View = 'chart' | 'months' | 'tables'

export function CalendarView() {
  const [tab, setTab] = useState<TabId>('all')
  const [hidden, setHidden] = useState<Set<JobId>>(new Set())
  // The month cards are the better phone view; the chart is better on a
  // wide screen. Read once at mount, then the reader is in charge.
  const [view, setView] = useState<View>(() =>
    typeof window !== 'undefined' &&
    window.matchMedia('(max-width: 760px)').matches
      ? 'months'
      : 'chart',
  )

  const plants: ChartPlant[] = useMemo(
    () => (tab === 'all' ? GROUPS.flatMap((g) => g.plants) : PLANTS_BY_GROUP[tab]),
    [tab],
  )

  const stats = useMemo(() => {
    const spans = plants.reduce((n, p) => n + p.spans.length, 0)
    return [
      { value: String(plants.length), label: plants.length === 1 ? 'Plant' : 'Plants' },
      { value: String(spans), label: 'Jobs scheduled' },
      { value: String(monthTicks(DOMAIN).length), label: 'Months covered' },
      { value: '30 May', label: 'Harvest day' },
    ]
  }, [plants])

  function toggleJob(job: JobId) {
    setHidden((cur) => {
      const next = new Set(cur)
      if (next.has(job)) next.delete(job)
      else next.add(job)
      return next
    })
  }

  return (
    <div className={styles.view}>
      <StatRow stats={stats} />

      <JobLegend hidden={hidden} onToggle={toggleJob} />

      <div className={styles.controls}>
        <CategoryTabs active={tab} onChange={setTab} />
        <div className={styles.viewToggle} role="group" aria-label="Calendar view">
          {(['chart', 'months', 'tables'] as View[]).map((v) => (
            <button
              key={v}
              type="button"
              className={`${styles.viewBtn} ${view === v ? styles.viewActive : ''}`}
              aria-pressed={view === v}
              onClick={() => setView(v)}
            >
              {v === 'chart' ? 'Chart' : v === 'months' ? 'Months' : 'Tables'}
            </button>
          ))}
        </div>
      </div>

      {view === 'chart' && <CalendarChart plants={plants} hiddenJobs={hidden} />}

      {view === 'months' && <MonthGrid plants={plants} />}

      {view === 'tables' && (
        <CalendarTable plants={plants} hiddenJobs={hidden} />
      )}

      <p className={styles.footnote}>
        Hover a bar, or focus it with the keyboard, for its dates. Thin grey
        lines join the first and last job of a plant. The dashed rose line marks
        harvest day,{' '}
        {new Date(`${HARVEST_DAY}T00:00:00Z`).toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
          timeZone: 'UTC',
        })}
        . Dates are for mild southern England; move any of them by one to two
        weeks with the weather.
      </p>
    </div>
  )
}
