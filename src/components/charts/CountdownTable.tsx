import { COUNTDOWN } from '../../data/countdown'
import styles from './CountdownTable.module.css'

export function CountdownTable() {
  return (
    <div className={styles.wrap}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th scope="col">Weeks before 30 May</th>
            <th scope="col">Milestone</th>
          </tr>
        </thead>
        <tbody>
          {COUNTDOWN.map((m, i) => (
            <tr key={i} className={m.weeks === '0' ? styles.final : undefined}>
              <th scope="row" className={styles.weeks}>
                {m.weeks}
              </th>
              <td>{m.text}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
