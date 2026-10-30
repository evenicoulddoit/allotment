import { useEffect, useRef } from 'react'
import styles from './SearchDialog.module.css'

export function SearchDialog({ onClose }: { onClose: () => void }) {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-label="Search the bible"
        onClick={(e) => e.stopPropagation()}
      >
        <input
          ref={inputRef}
          type="search"
          className={styles.input}
          placeholder="Search plants, dates and jobs…"
          aria-label="Search query"
        />
        <p className={styles.hint}>Search is being wired up.</p>
      </div>
    </div>
  )
}
