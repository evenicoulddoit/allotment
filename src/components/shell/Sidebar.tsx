import { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { PARTS } from '../../content/parts'
import { SECTIONS_BY_PART, sectionPath } from '../../content/sections'
import styles from './Sidebar.module.css'

export function Sidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  const panelRef = useRef<HTMLElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  // Escape closes the drawer and focus returns to the menu button, which the
  // caller owns. Only do this while the drawer is actually showing.
  useEffect(() => {
    if (!open) return
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    closeRef.current?.focus()
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  return (
    <>
      <div
        className={`${styles.backdrop} ${open ? styles.backdropOpen : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <nav
        ref={panelRef}
        id="site-nav"
        className={`${styles.sidebar} ${open ? styles.open : ''}`}
        aria-label="Contents"
      >
        <div className={styles.head}>
          <span className={styles.brand}>
            The Allotment<br />Bible 2026–27
          </span>
          <button
            ref={closeRef}
            type="button"
            className={styles.close}
            onClick={onClose}
            aria-label="Close contents"
          >
            ✕
          </button>
        </div>

        <ol className={styles.list}>
          {PARTS.map((part) => (
            <li key={part.id} className={styles.part}>
              <span className={styles.partLabel}>{part.title}</span>
              <ul className={styles.sections}>
                {SECTIONS_BY_PART[part.id]?.map((s) => (
                  <li key={s.id}>
                    <NavLink
                      to={sectionPath(s.id)}
                      className={({ isActive }) =>
                        `${styles.link} ${isActive ? styles.active : ''}`
                      }
                    >
                      {s.nav}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}

