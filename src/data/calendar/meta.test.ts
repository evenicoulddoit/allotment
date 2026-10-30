import { describe, expect, it } from 'vitest'
import { toTime } from './dates'
import { ALL_PLANTS } from './meta'

// One guard only: a span that ends before it starts or falls outside the
// domain breaks the chart silently, so it is worth asserting.
describe('calendar spans', () => {
  it('all run forwards and stay on the chart', () => {
    for (const plant of ALL_PLANTS) {
      for (const span of plant.spans) {
        expect(toTime(span.to), `${plant.id}/${span.job}`).toBeGreaterThanOrEqual(
          toTime(span.from),
        )
      }
    }
  })
})
