import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import type { Section } from '../../content/sections'
import { neighbours, sectionHref } from '../../content/sections'
import { useDocumentTitle } from '../../lib/useDocumentTitle'
import { Markdown } from '../markdown/MarkdownLazy'
import styles from './SectionPage.module.css'

type State =
  | { status: 'loading' }
  | { status: 'ready'; source: string }
  | { status: 'error'; message: string }

export function SectionPage({ section }: { section: Section }) {
  const [state, setState] = useState<State>({ status: 'loading' })
  useDocumentTitle(section.title)

  useEffect(() => {
    let cancelled = false
    setState({ status: 'loading' })
    section
      .load()
      .then((mod) => {
        if (!cancelled) setState({ status: 'ready', source: mod.default })
      })
      .catch((err: unknown) => {
        if (cancelled) return
        setState({
          status: 'error',
          message: `${section.id}: ${(err as Error).message ?? 'could not load'}`,
        })
      })
    return () => {
      cancelled = true
    }
  }, [section])

  // A new section starts at the top; a deep link to an anchor is handled by
  // the browser once the content is mounted.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [section.id])

  const { prev, next } = neighbours(section.id)

  return (
    <article className={styles.page}>
      <header className={styles.header}>
        {section.eyebrow && <p className={styles.eyebrow}>{section.eyebrow}</p>}
        <h1 className={styles.title}>{section.title}</h1>
        {section.standfirst && <p className={styles.standfirst}>{section.standfirst}</p>}
        <hr className={styles.rule} />
      </header>

      {state.status === 'loading' && <p className={styles.loading}>Loading…</p>}

      {state.status === 'error' && (
        <p className={styles.error}>
          This section could not be loaded. <code>{state.message}</code>
        </p>
      )}

      {state.status === 'ready' && <Markdown source={state.source} />}

      <nav className={styles.pager} aria-label="Previous and next section">
        {prev ? (
          <Link to={sectionHref(prev.id)} className={styles.pagerLink}>
            <span className={styles.pagerDir}>Previous</span>
            <span className={styles.pagerTitle}>{prev.title}</span>
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link to={sectionHref(next.id)} className={`${styles.pagerLink} ${styles.pagerNext}`}>
            <span className={styles.pagerDir}>Next</span>
            <span className={styles.pagerTitle}>{next.title}</span>
          </Link>
        )}
      </nav>
    </article>
  )
}
