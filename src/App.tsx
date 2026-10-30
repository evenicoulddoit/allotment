import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AppShell } from './components/shell/AppShell'
import { SectionPage } from './components/shell/SectionPage'
import { SECTIONS, FIRST_SECTION_OF_PART } from './content/sections'
import { PARTS } from './content/parts'

export function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<AppShell />}>
          <Route index element={<Navigate to={`/${SECTIONS[0].id}`} replace />} />
          {PARTS.map((p) => (
            <Route
              key={p.id}
              path={`/p${p.id}`}
              element={<SectionPage section={FIRST_SECTION_OF_PART[p.id]} />}
            />
          ))}
          {SECTIONS.map((s) => (
            <Route key={s.id} path={`/${s.id}`} element={<SectionPage section={s} />} />
          ))}
          <Route path="*" element={<Navigate to={`/${SECTIONS[0].id}`} replace />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
