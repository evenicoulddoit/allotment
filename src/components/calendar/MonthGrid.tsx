import { useMemo } from 'react'
import { monthTicks } from '../../data/calendar/dates'
import { DOMAIN, JOB_BY_ID, MONTH_NOTES } from '../../data/calendar/meta'
import type { ChartPlant, JobId } from '../../data/calendar/types'
import styles from './MonthGrid.module.css'

const JOB_ORDER: JobId[] = ['sow', 'potup', 'harden', 'plantout', 'harvest']

interface Entry {
  start: string
  label: string
  job: JobId
  dates: string
}

const fmtShort = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    timeZone: 'UTC',
  })

/**
 * Each job appears in the month it starts, exactly as the revised plan's
 * "What to do, month by month" cards do. Derived from the same chart data,
 * so the cards can never disagree with the chart or the tables.
 */
export function MonthGrid({ plants }: { plants: ChartPlant[] }) {
  const ticks = useMemo(() => monthTicks(DOMAIN), [])
  const today = new Date()

  const byMonth = useMemo(() => {
    const map = new Map<string, Entry[]>()
    for (const plant of plants) {
      for (const span of plant.spans) {
        const key = span.from.slice(0, 7)
        const list = map.get(key) ?? []
        list.push({
          start: span.from,
          label: plant.name,
          job: span.job,
          dates: `${fmtShort(span.from)}–${fmtShort(span.to)}`,
        })
        map.set(key, list)
      }
    }
    for (const list of map.values()) {
      list.sort((a, b) =>
        a.start === b.start
          ? JOB_ORDER.indexOf(a.job) - JOB_ORDER.indexOf(b.job)
          : a.start.localeCompare(b.start),
      )
    }
    return map
  }, [plants])

  return (
    <div className={styles.grid}>
      {ticks.map((t) => {
        const key = `${t.year}-${String(t.month).padStart(2, '0')}`
        const entries = byMonth.get(key) ?? []
        const notes = MONTH_NOTES[key] ?? []
        const current =
          today.getFullYear() === t.year && today.getMonth() + 1 === t.month
        if (entries.length === 0 && notes.length === 0) return null

        return (
          <section
            key={key}
            className={`${styles.card} ${current ? styles.current : ''}`}
            aria-labelledby={`m-${key}`}
          >
            <header className={styles.head}>
              <h3 id={`m-${key}`} className={styles.month}>
                {t.label}
              </h3>
              <span className={styles.count}>
                {entries.length} {entries.length === 1 ? 'job' : 'jobs'}
              </span>
            </header>

            <ul className={styles.entries}>
              {entries.map((e, i) => {
                const job = JOB_BY_ID[e.job]
                return (
                  <li key={`${e.label}-${e.job}-${i}`} className={styles.entry}>
                    <span
                      className={styles.job}
                      style={{ background: `var(${job.colourVar})` }}
                    >
                      {job.label}
                    </span>
                    <span className={styles.what}>
                      <span className={styles.plant}>{e.label}</span>
                      <span className={styles.dates}>{e.dates}</span>
                    </span>
                  </li>
                )
              })}
            </ul>

            {notes.length > 0 && (
              <ul className={styles.notes}>
                {notes.map((n) => (
                  <li key={n}>{n}</li>
                ))}
              </ul>
            )}
          </section>
        )
      })}
    </div>
  )
}
