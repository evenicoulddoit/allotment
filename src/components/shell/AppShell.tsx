import { useCallback, useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { SearchDialog } from '../search/SearchDialog'
import { Sidebar } from './Sidebar'
import { TopBar } from './TopBar'
import styles from './AppShell.module.css'

export function AppShell() {
  const [navOpen, setNavOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const location = useLocation()

  // Close the drawer whenever the route changes.
  useEffect(() => {
    setNavOpen(false)
  }, [location.pathname])

  // Cmd/Ctrl-K opens search from anywhere.
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setSearchOpen(true)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const closeNav = useCallback(() => setNavOpen(false), [])

  return (
    <div className={styles.shell}>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <TopBar
        navOpen={navOpen}
        onToggleNav={() => setNavOpen((v) => !v)}
        onOpenSearch={() => setSearchOpen(true)}
      />

      <Sidebar open={navOpen} onClose={closeNav} />

      <main id="main" className={styles.main} tabIndex={-1}>
        <Outlet />
        <footer className={styles.footer}>
          <p>
            The Allotment Bible 2026–27. Wedding flowers cut Sunday 30 May 2027.
          </p>
        </footer>
      </main>

      {searchOpen && <SearchDialog onClose={() => setSearchOpen(false)} />}
    </div>
  )
}
