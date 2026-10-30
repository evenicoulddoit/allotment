import { describe, expect, it } from 'vitest'
import {
  addDays,
  daysBetween,
  fractionOf,
  inferISO,
  monthTicks,
  toTime,
} from './dates'

// Matches meta.ts: the domain opens on the week-one sowing, 29 Oct 2026.
const DOMAIN = { start: '2026-10-29', endExclusive: '2027-12-01' }

describe('toTime', () => {
  it('is stable regardless of local timezone', () => {
    expect(toTime('2027-05-30') - toTime('2027-05-29')).toBe(86_400_000)
  })
})

describe('daysBetween', () => {
  it('counts the days in the calendar domain', () => {
    expect(daysBetween(DOMAIN.start, DOMAIN.endExclusive)).toBe(398)
  })

  it('is negative when the second date is earlier', () => {
    expect(daysBetween('2027-05-30', '2027-05-01')).toBe(-29)
  })
})

describe('fractionOf', () => {
  it('maps the domain start to 0 and the exclusive end to 1', () => {
    expect(fractionOf(DOMAIN.start, DOMAIN)).toBe(0)
    expect(fractionOf(DOMAIN.endExclusive, DOMAIN)).toBe(1)
  })

  it('puts harvest day inside the plot', () => {
    const f = fractionOf('2027-05-30', DOMAIN)
    expect(f).toBeGreaterThan(0.5)
    expect(f).toBeLessThan(0.65)
  })
})

describe('addDays', () => {
  it('crosses a month boundary', () => {
    expect(addDays('2026-11-28', 4)).toBe('2026-12-02')
  })
})

describe('inferISO', () => {
  it('reads December as the first year and January as the second', () => {
    expect(inferISO(5, 12, DOMAIN)).toBe('2026-12-05')
    expect(inferISO(10, 1, DOMAIN)).toBe('2027-01-10')
  })

  it('keeps an October date in the start year', () => {
    expect(inferISO(29, 10, DOMAIN)).toBe('2026-10-29')
  })
})

describe('monthTicks', () => {
  const ticks = monthTicks(DOMAIN)

  it('emits one tick per month in the domain', () => {
    expect(ticks).toHaveLength(13)
  })

  it('labels only the first month of each year with a year', () => {
    expect(ticks[0].label).toBe('Nov')
    expect(ticks[2].label).toBe("Jan '27")
    expect(ticks[3].label).toBe('Feb')
  })

  it('starts after the partial October margin', () => {
    expect(ticks[0].month).toBe(11)
    expect(ticks[0].fraction).toBeGreaterThan(0)
  })

  it('keeps ticks ascending and inside 0..1', () => {
    for (let i = 1; i < ticks.length; i += 1) {
      expect(ticks[i].fraction).toBeGreaterThan(ticks[i - 1].fraction)
    }
    expect(ticks.at(-1)!.fraction).toBeLessThan(1)
  })
})
