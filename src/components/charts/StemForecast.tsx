import { FLOWERS_TOTAL, FOLIAGE, STEM_ROWS } from '../../data/stems'
import type { StemRow } from '../../data/stems'
import { StatRow } from '../ui/StatRow'
import styles from './StemForecast.module.css'

const ROWS = [...STEM_ROWS].sort((a, b) => b.cautious - a.cautious)
const MAX = Math.max(...ROWS.map((r) => r.card), ...FOLIAGE.map((r) => r.card))

/**
 * One series: the cautious figure is the bar (the number to plan on) and the
 * card estimate is a tick at the end of it. Two quantities, one colour, no
 * legend needed.
 */
export function StemForecast() {
  return (
    <div className={styles.wrap}>
      <StatRow
        stats={[
          { value: FLOWERS_TOTAL.card.toLocaleString('en-GB'), label: 'Card estimate' },
          { value: FLOWERS_TOTAL.cautious.toLocaleString('en-GB'), label: 'Cautious (plan on this)' },
          { value: String(STEM_ROWS.length), label: 'Flower lines' },
          { value: '30 May', label: 'The day' },
        ]}
      />

      <figure className={styles.figure}>
        <div className={styles.chart} role="img" aria-label="Stems forecast for 30 May by plant">
          {ROWS.map((row) => (
            <div key={row.plant} className={styles.row}>
              <span className={styles.name}>{row.plant}</span>
              <span className={styles.track}>
                <span
                  className={styles.bar}
                  style={{ width: `${(row.cautious / MAX) * 100}%` }}
                />
                <span
                  className={styles.tick}
                  style={{ left: `${(row.card / MAX) * 100}%` }}
                  title={`Card estimate ${row.card}`}
                />
                <span className={styles.value}>{row.cautious}</span>
              </span>
            </div>
          ))}
        </div>
        <figcaption className={styles.caption}>
          Bar: cautious figure, the low end of each card's range. Tick: the card's
          central estimate. Sorted by the cautious figure.
        </figcaption>
      </figure>

      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th scope="col">Plant</th>
              <th scope="col" className={styles.num}>Plants</th>
              <th scope="col" className={styles.num}>Card</th>
              <th scope="col" className={styles.num}>Cautious</th>
              <th scope="col">Confidence</th>
              <th scope="col">Note</th>
            </tr>
          </thead>
          <tbody>
            {STEM_ROWS.map((row) => <Row key={row.plant} row={row} />)}
            <tr className={styles.total}>
              <th scope="row">Flowers total</th>
              <td className={styles.num} />
              <td className={styles.num}>{FLOWERS_TOTAL.card.toLocaleString('en-GB')}</td>
              <td className={styles.num}>{FLOWERS_TOTAL.cautious.toLocaleString('en-GB')}</td>
              <td />
              <td />
            </tr>
            {FOLIAGE.map((row) => <Row key={row.plant} row={row} />)}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function Row({ row }: { row: StemRow }) {
  return (
    <tr>
      <th scope="row">{row.plant}</th>
      <td className={styles.num}>{row.plants ?? '—'}</td>
      <td className={styles.num}>{row.card}</td>
      <td className={styles.num}>{row.cautious}</td>
      <td className={styles[row.confidence.toLowerCase() as 'low' | 'medium' | 'high']}>
        {row.confidence}
      </td>
      <td className={styles.note}>{row.note}</td>
    </tr>
  )
}
