import styles from './StatRow.module.css'

export function StatRow({
  stats,
}: {
  stats: { value: string; label: string }[]
}) {
  return (
    <dl className={styles.row}>
      {stats.map((s) => (
        <div key={s.label} className={styles.stat}>
          <dt className={styles.label}>{s.label}</dt>
          <dd className={styles.value}>{s.value}</dd>
        </div>
      ))}
    </dl>
  )
}
