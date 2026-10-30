import type { GroupId } from '../../data/calendar/types'
import styles from './CategoryTabs.module.css'

export type TabId = 'all' | GroupId

export const TABS: { id: TabId; label: string }[] = [
  { id: 'all', label: 'All plants' },
  { id: 'wedding', label: 'Wedding flowers' },
  { id: 'other', label: 'Other flowers' },
  { id: 'veg', label: 'Veg and fruit' },
  { id: 'herbs', label: 'Herbs (guard plants)' },
]

export function CategoryTabs({
  active,
  onChange,
}: {
  active: TabId
  onChange: (id: TabId) => void
}) {
  return (
    <div className={styles.tabs} role="tablist" aria-label="Plant group">
      {TABS.map((tab) => (
        <button
          key={tab.id}
          type="button"
          role="tab"
          aria-selected={active === tab.id}
          className={`${styles.tab} ${active === tab.id ? styles.active : ''}`}
          onClick={() => onChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}
