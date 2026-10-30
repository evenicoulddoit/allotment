import { Fragment } from 'react'
import { JOB_BY_ID } from '../../data/calendar/meta'
import type { ChartPlant, JobId } from '../../data/calendar/types'
import styles from './CalendarTable.module.css'

const fmt = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    timeZone: 'UTC',
  })

/**
 * The by-job table. This is the accessible twin of the chart: every value in
 * a tooltip is also readable here, so the tooltip is an enhancement rather
 * than the only route to the information.
 */
export function CalendarTable({
  plants,
  hiddenJobs,
}: {
  plants: ChartPlant[]
  hiddenJobs: Set<JobId>
}) {
  const rows = plants
    .map((plant) => ({
      plant,
      spans: plant.spans.filter((s) => !hiddenJobs.has(s.job)),
    }))
    .filter((r) => r.spans.length > 0)

  return (
    <div className={styles.wrap}>
      <table className={styles.table}>
        <caption className="visually-hidden">
          Every plant and the dates of each job
        </caption>
        <thead>
          <tr>
            <th scope="col">Plant</th>
            <th scope="col">Job</th>
            <th scope="col">Dates</th>
            <th scope="col">Note</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(({ plant, spans }) => (
            <Fragment key={plant.id}>
              {spans.map((s, i) => {
                const job = JOB_BY_ID[s.job]
                return (
                  <tr key={`${s.job}-${i}`} className={i === 0 ? styles.firstOfPlant : styles.cont}>
                    {i === 0 && (
                      <th
                        scope="rowgroup"
                        rowSpan={spans.length}
                        className={styles.plant}
                      >
                        {plant.name}
                        {plant.note && (
                          <span className={styles.note}>{plant.note}</span>
                        )}
                      </th>
                    )}
                    <td className={styles.jobCell}>
                      <span
                        className={styles.jobDot}
                        style={{ background: `var(${job.colourVar})` }}
                        aria-hidden="true"
                      >
                        {job.letter}
                      </span>
                      {job.label}
                    </td>
                    <td className={styles.dates}>
                      {fmt(s.from)} – {fmt(s.to)}
                    </td>
                    <td className={styles.noteCell}>{s.note ?? ''}</td>
                  </tr>
                )
              })}
            </Fragment>
          ))}
        </tbody>
      </table>
    </div>
  )
}
