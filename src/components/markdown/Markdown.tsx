import { memo, useMemo } from 'react'
import ReactMarkdown, { type Components } from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { WIDGETS } from './widgets'
import styles from './Markdown.module.css'

/**
 * Markdown renderer for the bible's prose sections.
 *
 * Interactive islands are declared with a fenced block whose language is
 * `widget:<name>`:
 *
 *     ```widget:calendar-chart
 *     ```
 *
 * Everything else is ordinary markdown, and tables get the bible's
 * grey-header styling automatically.
 */
function MarkdownImpl({ source }: { source: string }) {
  const components = useMemo<Components>(
    () => ({
      h2: ({ children, ...props }) => (
        <h2 className={styles.h2} {...props}>
          {children}
        </h2>
      ),
      h3: ({ children, ...props }) => (
        <h3 className={styles.h3} {...props}>
          {children}
        </h3>
      ),
      h4: ({ children, ...props }) => (
        <h4 className={styles.h4} {...props}>
          {children}
        </h4>
      ),
      p: ({ children, ...props }) => (
        <p className={styles.p} {...props}>
          {children}
        </p>
      ),
      ul: ({ children, ...props }) => (
        <ul className={styles.list} {...props}>
          {children}
        </ul>
      ),
      ol: ({ children, ...props }) => (
        <ol className={styles.list} {...props}>
          {children}
        </ol>
      ),
      blockquote: ({ children, ...props }) => (
        <blockquote className={styles.quote} {...props}>
          {children}
        </blockquote>
      ),
      table: ({ children, ...props }) => (
        <div className={styles.tableWrap}>
          <table className={styles.table} {...props}>
            {children}
          </table>
        </div>
      ),
      a: ({ children, href, ...props }) => (
        <a className={styles.a} href={href} {...props}>
          {children}
        </a>
      ),
      code: ({ className, children, ...props }) => {
        const match = /language-(\S+)/.exec(className ?? '')
        const lang = match?.[1]
        if (lang?.startsWith('widget:')) {
          const name = lang.slice('widget:'.length)
          const Widget = WIDGETS[name]
          if (Widget) return <Widget />
          return (
            <p className={styles.unknownWidget}>
              Unknown widget <code>{name}</code>
            </p>
          )
        }
        return (
          <code className={className} {...props}>
            {children}
          </code>
        )
      },
      pre: ({ children }) => <>{children}</>,
    }),
    [],
  )

  return (
    <div className={styles.prose}>
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {source}
      </ReactMarkdown>
    </div>
  )
}

export const Markdown = memo(MarkdownImpl)
export default Markdown
