import {
  CAPACITY,
  FRAME_ROWS,
  NEEDS_WARMTH,
  OVERFLOW_ADVICE,
  PEAK_INDEX,
  SNAPSHOTS,
  TOTALS,
} from '../../data/coldframe'
import styles from './ColdFrameTable.module.css'

export function ColdFrameTable() {
  const peak = Math.max(...TOTALS)
  return (
    <div className={styles.wrap}>
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <caption className="visually-hidden">
            What occupies the cold frame at each point in the year
          </caption>
          <thead>
            <tr>
              <th scope="col">In the frame</th>
              {SNAPSHOTS.map((s, i) => (
                <th
                  key={s}
                  scope="col"
                  className={`${styles.num} ${i === PEAK_INDEX ? styles.peakHead : ''}`}
                >
                  {s}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {FRAME_ROWS.map((row) => (
              <tr key={row.label}>
                <th scope="row">{row.label}</th>
                {row.values.map((v, i) => (
                  <td
                    key={SNAPSHOTS[i]}
                    className={styles.num}
                    style={v == null ? undefined : { background: fill(v, peak) }}
                  >
                    {v ?? '–'}
                  </td>
                ))}
              </tr>
            ))}
            <tr className={styles.total}>
              <th scope="row">Trays used (of {CAPACITY})</th>
              {TOTALS.map((t, i) => (
                <td
                  key={SNAPSHOTS[i]}
                  className={`${styles.num} ${i === PEAK_INDEX ? styles.peakCell : ''}`}
                >
                  {t}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      <p className={styles.advice}>{OVERFLOW_ADVICE}</p>
      <p className={styles.advice}>{NEEDS_WARMTH}</p>
    </div>
  )
}

/** A single-hue alpha ramp, so counts read as depth rather than as hue. */
function fill(value: number, max: number): string {
  const alpha = Math.min(0.06 + (value / max) * 0.26, 0.32)
  return `color-mix(in srgb, var(--ink) ${Math.round(alpha * 100)}%, transparent)`
}
