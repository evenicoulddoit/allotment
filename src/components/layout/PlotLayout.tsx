import styles from './PlotLayout.module.css'

/**
 * The plot drawn to scale: 8 m wide (east–west), 15.6 m long (north–south),
 * north at the top. Hand-authored rather than lifted from the PDF, whose
 * vector export is 600 KB of glyph paths. Geometry follows the bible's
 * drawing; each bed is labelled with its number so colour is never the only
 * cue, and the beds table below is the textual twin.
 *
 * The viewBox works in decimetres: 80 wide x 156 tall for the plot, with a
 * margin for the scale bar, north arrow and entrance label.
 */

const COLOURS = {
  wedding: '#f5cfdd',
  brassica: '#c9e3e1',
  strawberry: '#f3c6c0',
  roots: '#f0d0b5',
  perennials: '#dcd2f0',
  tomatoes: '#f3c6c0',
  summer: '#f6e2b0',
  herbs: '#cbe7c5',
  compost: '#e6e6de',
  planter: '#9a6e3f',
  ground: '#dce8d2',
  path: '#e2d5bb',
}

interface Bed {
  n: number
  x: number
  y: number
  w: number
  h: number
  fill: string
  label: string
  vertical?: boolean
}

// Values are decimetres on an 80 x 156 plot.
const BEDS: Bed[] = [
  { n: 1, x: 3, y: 42, w: 14, h: 96, fill: COLOURS.wedding, label: 'Wedding annuals', vertical: true },
  { n: 2, x: 22, y: 42, w: 14, h: 50, fill: COLOURS.brassica, label: 'Brassica block', vertical: true },
  { n: 3, x: 22, y: 97, w: 14, h: 41, fill: COLOURS.strawberry, label: 'Strawberries', vertical: true },
  { n: 4, x: 3, y: 22, w: 20, h: 13, fill: COLOURS.perennials, label: 'Perennials & foliage' },
  { n: 5, x: 46, y: 42, w: 14, h: 37, fill: COLOURS.roots, label: 'Onions and chives', vertical: true },
  { n: 6, x: 46, y: 80, w: 14, h: 58, fill: COLOURS.roots, label: 'Carrots and beetroot', vertical: true },
  { n: 7, x: 63, y: 42, w: 14, h: 60, fill: COLOURS.summer, label: 'Summer cutting and drying', vertical: true },
  { n: 8, x: 63, y: 104, w: 14, h: 34, fill: COLOURS.tomatoes, label: 'Tomatoes and peppers', vertical: true },
  { n: 9, x: 46, y: 143, w: 31, h: 10, fill: COLOURS.herbs, label: 'Herb bed' },
  { n: 10, x: 68, y: 22, w: 9, h: 13, fill: COLOURS.compost, label: 'Compost' },
  { n: 11, x: 3, y: 143, w: 24, h: 10, fill: COLOURS.compost, label: 'Work area' },
]

const PLANTERS = [
  { id: 'T', x: 10, y: 128, label: 'Tulips + alliums' },
  { id: 'R', x: 47, y: 128, label: 'Ranunculus' },
  { id: 'S1', x: 26, y: 23, label: 'Sweet peas' },
  { id: 'S2', x: 40, y: 23, label: 'Sweet peas' },
]

export function PlotLayout() {
  return (
    <div className={styles.wrap}>
      <svg
        viewBox="0 0 100 176"
        role="img"
        aria-labelledby="plotTitle plotDesc"
        className={styles.svg}
      >
        <title id="plotTitle">Plot layout drawn to scale</title>
        <desc id="plotDesc">
          An 8 by 15.6 metre plot with north at the top. Bed 1 wedding annuals
          runs down the west side, bed 2 the brassica block and bed 3
          strawberries in the middle, beds 5 onions and 6 carrots and beetroot,
          bed 7 summer cutting and bed 8 tomatoes and peppers on the east. The
          herb bed and work area sit at the south end by the entrance, with
          the tulip, ranunculus and sweet pea planters and the cold frame
          nearby. Compost is in the north-east corner.
        </desc>

        {/* Plot ground */}
        <rect x="2" y="20" width="80" height="134" fill={COLOURS.ground} />
        <rect
          x="2"
          y="20"
          width="80"
          height="134"
          fill="none"
          stroke="#16231c"
          strokeWidth="0.6"
          strokeDasharray="2.5 1.6"
        />

        {/* Main path down the middle, side paths, mown edge */}
        <rect x="17" y="42" width="5" height="98" fill={COLOURS.path} />
        <rect x="36" y="42" width="10" height="98" fill={COLOURS.path} />
        <rect x="60" y="42" width="3" height="98" fill={COLOURS.path} />

        {BEDS.map((b) => (
          <g key={b.n}>
            <rect
              x={b.x}
              y={b.y}
              width={b.w}
              height={b.h}
              fill={b.fill}
              stroke="#16231c"
              strokeWidth="0.35"
            />
            <circle cx={b.x + 2} cy={b.y + 2.2} r="1.55" fill="#16231c" />
            <text
              x={b.x + 2}
              y={b.y + 2.85}
              fill="#fff"
              fontSize="2.1"
              fontWeight="700"
              textAnchor="middle"
            >
              {b.n}
            </text>
            <text
              x={b.vertical ? b.x + b.w / 2 : b.x + 3}
              y={b.vertical ? b.y + b.h / 2 : b.y + 7}
              fill="#16231c"
              fontSize={b.vertical ? 2.4 : 2.2}
              textAnchor={b.vertical ? 'middle' : 'start'}
              transform={
                b.vertical
                  ? `rotate(-90 ${b.x + b.w / 2} ${b.y + b.h / 2})`
                  : undefined
              }
            >
              {b.label}
            </text>
          </g>
        ))}

        {/* Planters, with the daffodil ring around T and R */}
        {PLANTERS.map((p) => {
          const isGround = p.id === 'T' || p.id === 'R'
          return (
            <g key={p.id}>
              {isGround && (
                <rect
                  x={p.x - 2}
                  y={p.y - 2}
                  width="20"
                  height="12"
                  fill="none"
                  stroke="#d9a400"
                  strokeWidth="0.8"
                  strokeDasharray="1.4 1.6"
                  rx="1"
                />
              )}
              <rect
                x={p.x}
                y={p.y}
                width={16}
                height={8}
                fill="#e2d5bb"
                stroke={COLOURS.planter}
                strokeWidth="0.9"
              />
              <circle cx={p.x + 2} cy={p.y + 2} r="1.5" fill="#b03466" />
              <text
                x={p.x + 2}
                y={p.y + 2.65}
                fill="#fff"
                fontSize="1.9"
                fontWeight="700"
                textAnchor="middle"
              >
                {p.id}
              </text>
              <text
                x={p.x + 9}
                y={p.y + 5.1}
                fill="#16231c"
                fontSize="1.9"
                textAnchor="middle"
              >
                {p.label}
              </text>
            </g>
          )
        })}

        {/* Cold frame */}
        <rect x="3" y="127" width="5" height="9" fill="#e6e6de" stroke="#6b7f8c" strokeWidth="0.6" />
        <text x="5.5" y="132.4" fill="#16231c" fontSize="1.5" textAnchor="middle">
          Frame
        </text>

        {/* Entrance */}
        <path d="M36 160 l4 -5 l4 5" fill="none" stroke="#16231c" strokeWidth="0.5" />
        <text x="44" y="166" fill="#16231c" fontSize="2.2" textAnchor="middle">
          Entrance (south end)
        </text>

        {/* North arrow */}
        <path d="M86 40 l0 -14" stroke="#16231c" strokeWidth="0.7" />
        <path d="M86 24 l-2.2 4.4 h4.4 z" fill="#16231c" />
        <text x="86" y="46" fill="#16231c" fontSize="2.4" textAnchor="middle" fontWeight="700">
          N
        </text>

        {/* Scale bar: 2 m */}
        <path d="M3 172 h10" stroke="#16231c" strokeWidth="0.8" />
        <path d="M3 169.8 v4.4 M13 169.8 v4.4" stroke="#16231c" strokeWidth="0.8" />
        <text x="8" y="168" fill="#16231c" fontSize="2" textAnchor="middle">
          2 m
        </text>

        {/* Dimensions */}
        <text x="42" y="17" fill="#16231c" fontSize="2.3" textAnchor="middle">
          8 m
        </text>
        <text
          x="-87"
          y="1.5"
          fill="#16231c"
          fontSize="2.3"
          textAnchor="middle"
          transform="rotate(-90)"
        >
          15.6 m
        </text>
      </svg>

      <ul className={styles.key}>
        <KeySwatch colour={COLOURS.wedding} label="Wedding flowers" />
        <KeySwatch colour={COLOURS.summer} label="Summer cutting and drying" />
        <KeySwatch colour={COLOURS.brassica} label="Brassica block" />
        <KeySwatch colour={COLOURS.roots} label="Roots and onions" />
        <KeySwatch colour={COLOURS.perennials} label="Perennials" />
        <KeySwatch colour={COLOURS.tomatoes} label="Fruit, tomatoes, peppers" />
        <KeySwatch colour={COLOURS.herbs} label="Herbs and guard strips" />
        <KeySwatch colour={COLOURS.planter} label="Raised planter" ring />
        <KeySwatch colour={COLOURS.path} label="Paths and edge strip" />
      </ul>
    </div>
  )
}

function KeySwatch({
  colour,
  label,
  ring,
}: {
  colour: string
  label: string
  ring?: boolean
}) {
  return (
    <li className={styles.keyItem}>
      <span
        className={styles.swatch}
        style={{ background: ring ? 'transparent' : colour, borderColor: colour }}
      />
      {label}
    </li>
  )
}
