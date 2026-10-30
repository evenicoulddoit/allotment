/** All dates in the content model are plain ISO days: YYYY-MM-DD. */
export type ISODate = string

const MS_PER_DAY = 86_400_000

/** Parse an ISO day into a UTC timestamp (no local-time drift). */
export function toTime(iso: ISODate): number {
  const [y, m, d] = iso.split('-').map(Number)
  return Date.UTC(y, m - 1, d)
}

export function fromTime(t: number): ISODate {
  const d = new Date(t)
  return d.toISOString().slice(0, 10)
}

/** Whole days between two ISO days; negative if b is before a. */
export function daysBetween(a: ISODate, b: ISODate): number {
  return Math.round((toTime(b) - toTime(a)) / MS_PER_DAY)
}

export function addDays(iso: ISODate, n: number): ISODate {
  return fromTime(toTime(iso) + n * MS_PER_DAY)
}

export interface Domain {
  start: ISODate
  /** Exclusive upper bound: the day after the last rendered day. */
  endExclusive: ISODate
}

export function domainDays(domain: Domain): number {
  return daysBetween(domain.start, domain.endExclusive)
}

/**
 * Position of an ISO day within the domain, as 0..1.
 * A span's end day is treated as *inclusive*, so it is advanced by one day
 * before measuring. This is what makes "29 Oct – 20 Nov" look like a bar that
 * includes 20 November rather than stopping at its start.
 */
export function fractionOf(iso: ISODate, domain: Domain): number {
  const total = domainDays(domain)
  if (total <= 0) return 0
  return (toTime(iso) - toTime(domain.start)) / MS_PER_DAY / total
}

export interface MonthTick {
  /** First day of the month, ISO. */
  iso: ISODate
  /** 0..1 position of that day. */
  fraction: number
  /** Short axis label, e.g. "Nov" or "Jan '27". */
  label: string
  year: number
  month: number
}

const MONTHS = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
]

/**
 * Month boundaries across a domain. A tick is emitted for every month that
 * starts at or after the domain start and before its exclusive end.
 */
export function monthTicks(domain: Domain): MonthTick[] {
  const startYear = Number(domain.start.slice(0, 4))
  const ticks: MonthTick[] = []
  // Walk back to January of the start year, then step forward.
  let year = startYear
  let month = 1
  for (;;) {
    const iso = `${year}-${String(month).padStart(2, '0')}-01`
    if (toTime(iso) >= toTime(domain.endExclusive)) break
    // Only months that begin inside the domain get a gridline and label.
    // A partial first month (the last three days of October) is deliberately
    // unlabelled: it is the left margin the early sowings start from.
    if (toTime(iso) >= toTime(domain.start)) {
      const prev = ticks[ticks.length - 1]
      const showYear = !prev || prev.year !== year
      ticks.push({
        iso,
        fraction: fractionOf(iso, domain),
        label: showYear && prev
          ? `${MONTHS[month - 1]} '${String(year).slice(2)}`
          : MONTHS[month - 1],
        year,
        month,
      })
    }
    month += 1
    if (month > 12) {
      month = 1
      year += 1
    }
  }
  return ticks
}

/** Months in the domain, in order, as { year, month } pairs. */
export function monthsInDomain(domain: Domain): { year: number; month: number }[] {
  return monthTicks(domain).map((t) => ({ year: t.year, month: t.month }))
}

export function monthKey(year: number, month: number): string {
  return `${year}-${String(month).padStart(2, '0')}`
}

export function monthName(month: number): string {
  return MONTHS[month - 1]
}

/**
 * Infer a full ISO date from a bare day/month as written in the bible
 * (no year), choosing the first occurrence that falls inside the domain.
 * The bible's calendar runs Oct 2026 → Nov 2027, so December means 2026
 * and January means 2027; the domain disambiguates without guessing.
 *
 * `notBefore` pins the earliest acceptable day. Pass the span's start date
 * when resolving its end: "1 Aug – 31 Oct" must not resolve its end back to
 * the previous October.
 */
export function inferISO(
  day: number,
  month: number,
  domain: Domain,
  notBefore?: ISODate,
): ISODate {
  const startYear = Number(domain.start.slice(0, 4))
  const endYear = Number(domain.endExclusive.slice(0, 4))
  const floor = Math.max(
    toTime(domain.start),
    notBefore ? toTime(notBefore) : -Infinity,
  )
  for (let year = startYear; year <= endYear; year += 1) {
    const iso = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`
    const t = toTime(iso)
    if (t >= floor && t < toTime(domain.endExclusive)) return iso
  }
  // Fall back to the start year so a typo surfaces as a validation error
  // rather than silently disappearing.
  return `${startYear}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`
}
