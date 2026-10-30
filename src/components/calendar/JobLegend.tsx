import { JOBS } from '../../data/calendar/meta'
import type { JobId } from '../../data/calendar/types'
import styles from './JobLegend.module.css'

/**
 * The five job pills. Also the chart's visibility control: each pill is an
 * aria-pressed toggle for that job across every row.
 */
export function JobLegend({
  hidden,
  onToggle,
}: {
  hidden: Set<JobId>
  onToggle: (job: JobId) => void
}) {
  return (
    <div className={styles.legend}>
      {JOBS.map((job) => {
        const off = hidden.has(job.id)
        return (
          <button
            key={job.id}
            type="button"
            className={`${styles.item} ${off ? styles.off : ''}`}
            aria-pressed={!off}
            onClick={() => onToggle(job.id)}
            title={off ? `Show ${job.label} bars` : `Hide ${job.label} bars`}
          >
            <span
              className={styles.badge}
              style={{ background: `var(${job.colourVar})` }}
              aria-hidden="true"
            >
              {job.letter}
            </span>
            <span className={styles.text}>
              <span className={styles.label}>{job.label}</span>
              <span className={styles.desc}>{job.description}</span>
            </span>
          </button>
        )
      })}
    </div>
  )
}
