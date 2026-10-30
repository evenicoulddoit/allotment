/**
 * Cold-frame tray ledger. Tray-equivalents are estimates (24 modules, 40
 * plugs or about 32 root-trainer cells per standard 38 x 24 cm tray),
 * rounded to half a tray. Capacity is about 18 trays.
 */
export interface FrameRow {
  label: string
  /** One entry per snapshot. `null` means nothing of this crop is in the frame. */
  values: (number | null)[]
}

export const CAPACITY = 18

export const SNAPSHOTS = [
  '5 Nov',
  'Dec–Jan',
  '28 Feb',
  '10 Mar',
  '1 Apr',
  '20 Apr',
  '10 May',
]

export const FRAME_ROWS: FrameRow[] = [
  { label: 'Sweet peas ×74, root trainers (48 for the plot, 26 for home)', values: [2.5, 2.5, 2.5, 2.5, null, null, null] },
  { label: 'Stocks, batch 1', values: [1.5, 1.5, 1.5, 1.5, null, null, null] },
  { label: 'Stocks, batch 2 (back-up)', values: [null, null, 1, 1, 1, null, null] },
  { label: 'Larkspur, clarkia, orlaya', values: [3, 3, 3, 3, null, null, null] },
  { label: 'Nigella ×40, root trainers', values: [1.5, 1.5, 1.5, 1.5, null, null, null] },
  { label: 'Cornflower ×60 and Thlaspi ×20', values: [1.5, 1.5, 1.5, 1.5, null, null, null] },
  { label: 'Bridal Silk poppy ×30, root trainers', values: [1, 1, 1, 1, null, null, null] },
  { label: 'Gambles: Iceland poppy, scabiosa, clary sage', values: [1.5, 1.5, 1.5, 1.5, 0.5, null, null] },
  { label: 'Ranunculus, batch 1 (about 40 corms)', values: [1.5, 1.5, 1.5, 1.5, null, null, null] },
  { label: 'Ranunculus, batch 2 (about 39 corms)', values: [null, null, 1.5, 1.5, 1.5, null, null] },
  { label: 'Cabbages (Primo II, Red Kalibo)', values: [null, null, null, 1, 1, 1.5, 1.5] },
  { label: 'Dahlias ×7 in 3 L pots', values: [null, null, null, null, 2, 2, 2] },
  { label: 'Onion seedlings, hardening off', values: [null, null, null, null, 1, null, null] },
  { label: 'Tender plants, hardening off', values: [null, null, null, null, null, 3, 6] },
]

export const TOTALS = [14, 14, 16.5, 17.5, 7, 6.5, 9.5]

/** Index of the fullest snapshot (10 March, 17.5 of 18). */
export const PEAK_INDEX = TOTALS.indexOf(Math.max(...TOTALS))

export const OVERFLOW_ADVICE =
  'If the frame fills: drop the gambles first (1.5 trays), then raise Primo II cabbage on a windowsill.'

export const NEEDS_WARMTH =
  'Still needs a windowsill or propagator: onions, Didiscus, peppers, eucalyptus, scabiosa main sowing, rudbeckia, statice, lemon bergamot, lavender, tomatoes, helichrysum, basil.'
