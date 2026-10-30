import { useMemo, useState } from 'react'
import type { CSSProperties } from 'react'
import { domainDays, fractionOf, monthTicks } from '../../data/calendar/dates'
import { DOMAIN, HARVEST_DAY, JOB_BY_ID } from '../../data/calendar/meta'
import type { ChartPlant, JobId } from '../../data/calendar/types'
import styles from './CalendarChart.module.css'

interface Tooltip {
  span: { job: JobId; from: string; to: string; note?: string }
  plant: ChartPlant
  x: number
  y: number
}

const fmt = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  })

export function CalendarChart({
  plants,
  hiddenJobs,
}: {
  plants: ChartPlant[]
  hiddenJobs: Set<JobId>
}) {
  const [tip, setTip] = useState<Tooltip | null>(null)
  const ticks = useMemo(() => monthTicks(DOMAIN), [])
  const markerAt = fractionOf(HARVEST_DAY, DOMAIN)
  const oneDay = 1 / domainDays(DOMAIN)

  return (
    <div className={styles.frame}>
      <div className={styles.scroll}>
        <div className={styles.grid}>
          {/* Header: month labels sit over their gridlines. */}
          <div className={styles.corner} aria-hidden="true" />
          <div className={styles.axis}>
            {ticks.map((t) => (
              <span
                key={t.iso}
                className={styles.monthLabel}
                style={{ left: `${t.fraction * 100}%` }}
              >
                {t.label}
              </span>
            ))}
            <span
              className={styles.harvestLabel}
              style={{ left: `${markerAt * 100}%` }}
            >
              30 May
            </span>
          </div>

          {plants.map((plant) => {
            const visible = plant.spans.filter((s) => !hiddenJobs.has(s.job))
            const all = plant.spans
            const first = all.reduce(
              (a, s) => (s.from < a ? s.from : a),
              all[0]?.from ?? DOMAIN.start,
            )
            const last = all.reduce(
              (a, s) => (s.to > a ? s.to : a),
              all[0]?.to ?? DOMAIN.start,
            )

            return (
              <div key={plant.id} className={styles.row}>
                <div className={styles.name}>
                  <span className={styles.plantName}>{plant.name}</span>
                  {plant.note && <span className={styles.plantNote}>{plant.note}</span>}
                </div>

                <div className={styles.plot}>
                  {ticks.map((t) => (
                    <span
                      key={t.iso}
                      className={styles.gridline}
                      style={{ left: `${t.fraction * 100}%` }}
                      aria-hidden="true"
                    />
                  ))}

                  <span
                    className={styles.connector}
                    style={{
                      left: `${fractionOf(first, DOMAIN) * 100}%`,
                      width: `${(fractionOf(last, DOMAIN) - fractionOf(first, DOMAIN)) * 100}%`,
                    }}
                    aria-hidden="true"
                  />

                  <span
                    className={styles.marker}
                    style={{ left: `${markerAt * 100}%` }}
                    aria-hidden="true"
                  />

                  {visible.map((s, i) => {
                    const left = fractionOf(s.from, DOMAIN)
                    const right = fractionOf(s.to, DOMAIN) + oneDay
                    const job = JOB_BY_ID[s.job]
                    return (
                      <button
                        key={`${s.job}-${i}`}
                        type="button"
                        className={styles.bar}
                        style={
                          {
                            left: `${left * 100}%`,
                            width: `${Math.max(right - left, 0.006) * 100}%`,
                            background: `var(${job.colourVar})`,
                          } as CSSProperties
                        }
                        aria-label={`${plant.name}: ${job.label}, ${fmt(s.from)} to ${fmt(s.to)}${s.note ? `. ${s.note}` : ''}`}
                        onMouseEnter={(e) => {
                          const r = e.currentTarget.getBoundingClientRect()
                          setTip({ span: s, plant, x: r.left + r.width / 2, y: r.top })
                        }}
                        onMouseLeave={() => setTip(null)}
                        onFocus={(e) => {
                          const r = e.currentTarget.getBoundingClientRect()
                          setTip({ span: s, plant, x: r.left + r.width / 2, y: r.top })
                        }}
                        onBlur={() => setTip(null)}
                        onClick={(e) => {
                          const r = e.currentTarget.getBoundingClientRect()
                          setTip((cur) =>
                            cur ? null : { span: s, plant, x: r.left + r.width / 2, y: r.top },
                          )
                        }}
                      />
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {tip && <TooltipCard tip={tip} />}
    </div>
  )
}

function TooltipCard({ tip }: { tip: Tooltip }) {
  const job = JOB_BY_ID[tip.span.job]
  // Clamp to the viewport so a bar near an edge does not push the card offscreen.
  const x = Math.min(Math.max(tip.x, 130), window.innerWidth - 130)
  const y = Math.max(tip.y - 12, 8)
  return (
    <div className={styles.tip} style={{ left: x, top: y }} role="tooltip">
      <span className={styles.tipJob} style={{ color: `var(${job.colourVar})` }}>
        {job.label}
      </span>
      <strong className={styles.tipPlant}>{tip.plant.name}</strong>
      <span className={styles.tipDates}>
        {fmt(tip.span.from)} – {fmt(tip.span.to)}
      </span>
      {tip.span.note && <span className={styles.tipNote}>{tip.span.note}</span>}
    </div>
  )
}
