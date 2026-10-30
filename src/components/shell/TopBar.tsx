import { useLocation } from 'react-router-dom'
import { PART_BY_ID } from '../../content/parts'
import { SECTION_BY_ID } from '../../content/sections'
import styles from './TopBar.module.css'

export function TopBar({
  navOpen,
  onToggleNav,
  onOpenSearch,
}: {
  navOpen: boolean
  onToggleNav: () => void
  onOpenSearch: () => void
}) {
  const { pathname } = useLocation()
  const id = pathname.replace(/^\//, '')
  const section = SECTION_BY_ID[id]
  const part = section ? PART_BY_ID[section.part] : undefined

  return (
    <header className={styles.bar}>
      <button
        type="button"
        className={styles.iconBtn}
        onClick={onToggleNav}
        aria-expanded={navOpen}
        aria-controls="site-nav"
        aria-label={navOpen ? 'Close contents' : 'Open contents'}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
          <path
            d="M3 5h14M3 10h14M3 15h14"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </button>

      <span className={styles.where} aria-live="polite">
        {part ? part.title : 'The Allotment Bible'}
      </span>

      <button
        type="button"
        className={`${styles.iconBtn} ${styles.search}`}
        onClick={onOpenSearch}
        aria-label="Search the bible"
      >
        <svg width="19" height="19" viewBox="0 0 20 20" aria-hidden="true">
          <circle cx="9" cy="9" r="5.5" stroke="currentColor" strokeWidth="1.8" fill="none" />
          <path d="M13.2 13.2 17 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </button>
    </header>
  )
}
