import type { CSSProperties, ReactNode } from 'react'
import styles from './Pill.module.css'

/**
 * A job badge: a coloured pill carrying the job's letter.
 * Colour is never the only cue, so the letter is always rendered.
 */
export function Pill({
  letter,
  colourVar,
  label,
  compact = false,
}: {
  letter: string
  colourVar: string
  label: string
  compact?: boolean
}) {
  return (
    <span
      className={`${styles.pill} ${compact ? styles.compact : ''}`}
      style={{ background: `var(${colourVar})` } as CSSProperties}
    >
      <span aria-hidden="true">{letter}</span>
      <span className={styles.label}>{label}</span>
    </span>
  )
}

/** A verdict badge for the plant cards: icon plus word, never colour alone. */
export function VerdictBadge({
  icon,
  word,
  tone,
  children,
}: {
  icon: string
  word: string
  tone: 'ok' | 'warn' | 'gamble' | 'fail' | 'unknown'
  children?: ReactNode
}) {
  return (
    <span className={`${styles.verdict} ${styles[tone]}`}>
      <span aria-hidden="true">{icon}</span>
      <span>{children ?? word}</span>
    </span>
  )
}
