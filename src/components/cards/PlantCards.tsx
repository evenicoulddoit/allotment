import { useMemo, useState } from 'react'
import {
  ALL_CARDS,
  CARD_GROUPS,
  ROW_LABELS,
  ROW_ORDER,
  VERDICT_META,
} from '../../data/cards'
import type { CardGroup, PlantCard, RowId, VerdictId } from '../../data/cards'
import { StatusIcon } from '../ui/StatusIcon'
import styles from './PlantCards.module.css'

type GroupFilter = 'all' | CardGroup
type VerdictFilter = 'all' | VerdictId

const VERDICTS: VerdictId[] = ['ok', 'warn', 'gamble', 'fail', 'unknown']

export function PlantCards() {
  const [group, setGroup] = useState<GroupFilter>('all')
  const [verdict, setVerdict] = useState<VerdictFilter>('all')

  const cards = useMemo(
    () =>
      ALL_CARDS.filter(
        (c) =>
          (group === 'all' || c.group === group) &&
          (verdict === 'all' || c.verdict === verdict),
      ),
    [group, verdict],
  )

  const filtered = group !== 'all' || verdict !== 'all'

  return (
    <div className={styles.wrap}>
      <div className={styles.filters}>
        <ChipRow
          label="Group"
          options={[
            { id: 'all', label: 'All' },
            ...CARD_GROUPS.map((g) => ({ id: g.id, label: g.label })),
          ]}
          value={group}
          onChange={(v) => setGroup(v as GroupFilter)}
        />
        <ChipRow
          label="30 May verdict"
          options={[
            { id: 'all', label: 'All' },
            ...VERDICTS.map((v) => ({
              id: v,
              label: VERDICT_META[v].word,
            })),
          ]}
          value={verdict}
          onChange={(v) => setVerdict(v as VerdictFilter)}
        />
      </div>

      <p className={styles.count} aria-live="polite">
        Showing {cards.length} of {ALL_CARDS.length} cards
        {filtered && (
          <button
            type="button"
            className={styles.clear}
            onClick={() => {
              setGroup('all')
              setVerdict('all')
            }}
          >
            Clear filters
          </button>
        )}
      </p>

      {cards.length === 0 && (
        <p className={styles.empty}>
          No cards match those filters. Try clearing one of them.
        </p>
      )}

      <div className={styles.list}>
        {cards.map((card) => (
          <Card key={card.id} card={card} defaultOpen={card.group === 'wedding'} />
        ))}
      </div>
    </div>
  )
}

function ChipRow({
  label,
  options,
  value,
  onChange,
}: {
  label: string
  options: { id: string; label: string }[]
  value: string
  onChange: (id: string) => void
}) {
  return (
    <div className={styles.chipRow} role="group" aria-label={label}>
      <span className={styles.chipLabel}>{label}</span>
      <div className={styles.chips}>
        {options.map((o) => (
          <button
            key={o.id}
            type="button"
            className={`${styles.chip} ${value === o.id ? styles.chipOn : ''}`}
            aria-pressed={value === o.id}
            onClick={() => onChange(o.id)}
          >
            {o.label}
          </button>
        ))}
      </div>
    </div>
  )
}

function Card({ card, defaultOpen }: { card: PlantCard; defaultOpen: boolean }) {
  const v = VERDICT_META[card.verdict]
  // Show only the rows this card actually has: 'yield' is optional.
  const rows = ROW_ORDER.filter((r) => card.rows[r] !== undefined)

  return (
    <details className={styles.card} open={defaultOpen} id={`card-${card.id}`}>
      <summary className={styles.summary}>
        <span className={styles.title}>{card.title}</span>
        <span className={`${styles.verdict} ${styles[card.verdict]}`}>
          <StatusIcon verdict={card.verdict} />
          <span>{card.verdictNote ?? v.word}</span>
        </span>
      </summary>

      <table className={styles.fields}>
        <tbody>
          {rows.map((r) => (
            <tr key={r}>
              <th scope="row">{ROW_LABELS[r as RowId]}</th>
              <td>{card.rows[r]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </details>
  )
}
