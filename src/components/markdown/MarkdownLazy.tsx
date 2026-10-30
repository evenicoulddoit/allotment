import { lazy, Suspense } from 'react'

/**
 * react-markdown and its remark/unified dependencies are the bulk of the
 * bundle. Split them into their own chunk so a first visit only downloads
 * React plus the section being read.
 */
const MarkdownImpl = lazy(() => import('./Markdown'))

export function Markdown({ source }: { source: string }) {
  return (
    <Suspense fallback={<p aria-busy="true">Loading…</p>}>
      <MarkdownImpl source={source} />
    </Suspense>
  )
}
