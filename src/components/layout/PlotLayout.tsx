import styles from './PlotLayout.module.css'

/**
 * The plot drawn to scale: 8 m wide (east-west) by 15.6 m long (north-south),
 * north at the top.
 *
 * Every coordinate below is in decimetres, measured straight off the bible's
 * own drawing (page 21) so the proportions match the PDF. The viewBox is
 * 0 0 92 176: the plot occupies x 0-80, y 0-156, with a margin on the right
 * for the north arrow and below for the entrance label and scale bar.
 *
 * Each bed carries its number inside a dark disc, so colour is never the only
 * cue, and the beds table follows as the textual twin.
 */

const PLOT = { x: 0, y: 0, w: 80, h: 156 }

const C = {
  ground: '#dce8d2',
  path: '#e2d5bb',
  wedding: '#f5cfdd',
  brassica: '#c9e3e1',
  strawberry: '#f3c6c0',
  roots: '#f0d0b5',
  perennials: '#dcd2f0',
  tomatoes: '#f3c6c0',
  summer: '#f6e2b0',
  herbs: '#cbe7c5',
  grey: '#e6e6de',
  planter: '#9a6e3f',
  ring: '#d9a400',
  mesh: '#2d6cc0',
  frame: '#6b7f8c',
  ink: '#16231c',
}

interface Bed {
  n: number
  x: number
  y: number
  w: number
  h: number
  fill: string
  label: string
  /** Rotate the label to run down a tall, narrow bed. */
  vertical?: boolean
  /** Override the label size where the bed is tight. */
  fontSize?: number
}

// Measured from the PDF, in decimetres. Note bed 2 runs 25-75 and bed 3
// 80-121 with the guard strip between them, and the planter row sits at
// y 128-146 below every bed.
const BEDS: Bed[] = [
  { n: 1, x: 3, y: 25, w: 13, h: 96, fill: C.wedding, label: 'Wedding annuals', vertical: true },
  { n: 2, x: 22, y: 25, w: 13, h: 50, fill: C.brassica, label: 'Brassica block', vertical: true },
  { n: 3, x: 22, y: 80, w: 13, h: 41, fill: C.strawberry, label: 'Strawberries', vertical: true },
  { n: 4, x: 3, y: 4, w: 19, h: 13, fill: C.perennials, label: 'Perennials' },
  { n: 5, x: 45, y: 25, w: 13, h: 35, fill: C.roots, label: 'Onions and chives', vertical: true },
  { n: 6, x: 45, y: 60, w: 13, h: 61, fill: C.roots, label: 'Carrots and beetroot', vertical: true },
  { n: 7, x: 64, y: 25, w: 13, h: 60, fill: C.summer, label: 'Summer cutting and drying', vertical: true },
  { n: 8, x: 64, y: 89, w: 13, h: 32, fill: C.tomatoes, label: 'Tomatoes and peppers', vertical: true, fontSize: 2.1 },
  { n: 9, x: 46, y: 145, w: 31, h: 10, fill: C.herbs, label: 'Herb bed' },
  { n: 10, x: 66, y: 4, w: 11, h: 11, fill: C.grey, label: 'Compost', fontSize: 1.9 },
  { n: 11, x: 3, y: 145, w: 32, h: 10, fill: C.grey, label: 'Work area' },
]

/** Blue dashed outlines: insect mesh or net on hoops. */
const MESH: { x: number; y: number; w: number; h: number }[] = [
  { x: 21.2, y: 24.2, w: 14.7, h: 51.7 },
  { x: 21.2, y: 79.2, w: 14.7, h: 42.7 },
  { x: 44.2, y: 59.2, w: 14.7, h: 62.8 },
]

/** The mown guard strip between the brassicas and the strawberries. */
const GUARD_STRIP = { x: 22, y: 75, w: 13, h: 5 }

/** Planter T and R sit on a dashed daffodil ring (the yellow band). */
const PLANTERS = [
  { id: 'T', x: 15, y: 130, label: 'Tulips' },
  { id: 'R', x: 47, y: 130, label: 'Ranunculus' },
]

/** The daffodil ring: individual bulbs planted every 15 cm round T and R. */
const RING_DOTS: { x: number; y: number }[] = [
  { x: 12.5, y: 127.6 },
  { x: 12.5, y: 141.6 },
  { x: 15.5, y: 127.6 },
  { x: 15.5, y: 141.6 },
  { x: 18.5, y: 127.6 },
  { x: 18.5, y: 141.6 },
  { x: 21.5, y: 127.6 },
  { x: 21.5, y: 141.6 },
  { x: 24.5, y: 127.6 },
  { x: 24.5, y: 141.6 },
  { x: 27.5, y: 127.6 },
  { x: 27.5, y: 141.6 },
  { x: 30.5, y: 127.6 },
  { x: 30.5, y: 141.6 },
  { x: 33.5, y: 127.6 },
  { x: 33.5, y: 141.6 },
  { x: 12.5, y: 130.6 },
  { x: 34.5, y: 130.6 },
  { x: 12.5, y: 133.6 },
  { x: 34.5, y: 133.6 },
  { x: 12.5, y: 136.6 },
  { x: 34.5, y: 136.6 },
  { x: 12.5, y: 139.6 },
  { x: 34.5, y: 139.6 },
  { x: 45.5, y: 127.6 },
  { x: 45.5, y: 141.6 },
  { x: 48.5, y: 127.6 },
  { x: 48.5, y: 141.6 },
  { x: 51.5, y: 127.6 },
  { x: 51.5, y: 141.6 },
  { x: 54.5, y: 127.6 },
  { x: 54.5, y: 141.6 },
  { x: 57.5, y: 127.6 },
  { x: 57.5, y: 141.6 },
  { x: 60.5, y: 127.6 },
  { x: 60.5, y: 141.6 },
  { x: 63.5, y: 127.6 },
  { x: 63.5, y: 141.6 },
  { x: 66.5, y: 127.6 },
  { x: 66.5, y: 141.6 },
  { x: 45.5, y: 130.6 },
  { x: 67.5, y: 130.6 },
  { x: 45.5, y: 133.6 },
  { x: 67.5, y: 133.6 },
  { x: 45.5, y: 136.6 },
  { x: 67.5, y: 136.6 },
  { x: 45.5, y: 139.6 },
  { x: 67.5, y: 139.6 },
]

const BEAN_PLANTERS = [
  { id: 'S1', x: 22, y: 8 },
  { id: 'S2', x: 40, y: 8 },
]

/** Guard-plant markers, measured from the drawing. */
const GUARD_COLOURS: Record<string, string> = {
  marigold: '#e8730c',
  chives: '#2e9e4f',
  thyme: '#12857b',
  allium: '#8e44c9',
  mint: '#3563c9',
}

/** Guard-plant markers, at the positions the bible's drawing uses. */
const GUARDS: { x: number; y: number; k: string }[] = [
  { x: 5.0, y: 120.1, k: 'marigold' },
  { x: 9.5, y: 120.1, k: 'chives' },
  { x: 14.0, y: 120.1, k: 'marigold' },
  { x: 5.0, y: 27.0, k: 'marigold' },
  { x: 9.5, y: 27.0, k: 'chives' },
  { x: 15.0, y: 52.0, k: 'marigold' },
  { x: 15.0, y: 86.1, k: 'chives' },
  { x: 15.0, y: 105.1, k: 'thyme' },
  { x: 34.0, y: 30.0, k: 'thyme' },
  { x: 34.0, y: 42.0, k: 'marigold' },
  { x: 34.0, y: 54.0, k: 'thyme' },
  { x: 34.0, y: 66.0, k: 'mint' },
  { x: 23.0, y: 73.1, k: 'marigold' },
  { x: 26.0, y: 77.6, k: 'chives' },
  { x: 31.0, y: 77.6, k: 'thyme' },
  { x: 23.0, y: 84.1, k: 'thyme' },
  { x: 23.0, y: 100.1, k: 'chives' },
  { x: 34.0, y: 92.1, k: 'marigold' },
  { x: 34.0, y: 112.1, k: 'thyme' },
  { x: 47.0, y: 59.0, k: 'chives' },
  { x: 53.0, y: 59.0, k: 'chives' },
  { x: 57.0, y: 76.1, k: 'thyme' },
  { x: 57.0, y: 96.1, k: 'chives' },
  { x: 57.0, y: 116.1, k: 'thyme' },
  { x: 65.0, y: 30.0, k: 'marigold' },
  { x: 65.0, y: 50.0, k: 'marigold' },
  { x: 65.0, y: 70.0, k: 'thyme' },
  { x: 76.0, y: 83.1, k: 'marigold' },
  { x: 66.0, y: 92.1, k: 'thyme' },
  { x: 70.0, y: 92.1, k: 'marigold' },
  { x: 74.0, y: 92.1, k: 'thyme' },
  { x: 65.0, y: 120.1, k: 'chives' },
  { x: 20.5, y: 12.5, k: 'thyme' },
  { x: 59.5, y: 12.5, k: 'marigold' },
  { x: 48.5, y: 134.6, k: 'chives' },
  { x: 63.5, y: 134.6, k: 'chives' },
  { x: 17.0, y: 132.1, k: 'allium' },
  { x: 21.0, y: 137.1, k: 'allium' },
  { x: 25.0, y: 132.1, k: 'allium' },
  { x: 29.0, y: 137.1, k: 'allium' },
  { x: 32.0, y: 132.6, k: 'allium' },
  { x: 49.0, y: 152.6, k: 'thyme' },
  { x: 54.0, y: 152.6, k: 'thyme' },
  { x: 59.0, y: 152.6, k: 'thyme' },
  { x: 65.0, y: 152.6, k: 'mint' },
  { x: 70.0, y: 152.6, k: 'mint' },
  { x: 74.5, y: 152.6, k: 'chives' },
]

export function PlotLayout() {
  return (
    <div className={styles.wrap}>
      <svg
        viewBox="0 0 92 178"
        role="img"
        aria-labelledby="plotTitle plotDesc"
        className={styles.svg}
      >
        <title id="plotTitle">Plot layout drawn to scale</title>
        <desc id="plotDesc">
          An 8 by 15.6 metre plot with north at the top. Bed 1, wedding
          annuals, runs down the west side from y 2.5 to 12.1 metres. In the
          middle column, bed 2 is the brassica block and bed 3 the
          strawberries. Beds 5 and 6 hold onions, then carrots and beetroot.
          Beds 7 and 8 on the east hold summer cutting and tomatoes. The herb
          bed and work area sit at the south end by the entrance, with the
          tulip and ranunculus planters and the cold frame between them. The
          sweet pea planters S1 and S2 are at the north end. Compost is in the
          north-east corner.
        </desc>

        {/* The plot itself, with a dashed boundary for the perimeter. */}
        <rect
          x={PLOT.x}
          y={PLOT.y}
          width={PLOT.w}
          height={PLOT.h}
          fill={C.ground}
          stroke={C.ink}
          strokeWidth="0.7"
          strokeDasharray="3 2"
        />

        {/* Paths: a spine down the middle and two cross paths. */}
        <rect x="35" y="19" width="10" height="137.1" fill={C.path} />
        <rect x="3" y="19" width="74" height="6" fill={C.path} />
        <rect x="3" y="121.1" width="74" height="6" fill={C.path} />
        <rect x="16" y="25" width="6" height="96.1" fill={C.path} />
        <rect x="58" y="25" width="6" height="96.1" fill={C.path} />

        {/* Mesh outlines, drawn under the bed fills so they read as edges. */}
        {MESH.map((m) => (
          <rect
            key={`${m.x}-${m.y}`}
            x={m.x}
            y={m.y}
            width={m.w}
            height={m.h}
            fill="none"
            stroke={C.mesh}
            strokeWidth="0.65"
            strokeDasharray="2 1.6"
            rx="1"
          />
        ))}

        {/* Mown guard strip between the brassicas and the strawberries. */}
        <rect
          x={GUARD_STRIP.x}
          y={GUARD_STRIP.y}
          width={GUARD_STRIP.w}
          height={GUARD_STRIP.h}
          fill={C.herbs}
          stroke={C.ink}
          strokeWidth="0.4"
        />

        {BEDS.map((b) => (
          <BedShape key={b.n} bed={b} />
        ))}

        {/* Guard-plant markers on the planters and herb bed. */}
        {GUARDS.map((g) => (
          <circle
            key={`${g.k}-${g.x}-${g.y}`}
            cx={g.x}
            cy={g.y}
            r="0.85"
            fill={GUARD_COLOURS[g.k]}
          />
        ))}


        {RING_DOTS.map((r) => (
          <circle key={`ring-${r.x}-${r.y}`} cx={r.x} cy={r.y} r="0.75" fill={C.ring} />
        ))}

        {PLANTERS.map((p) => (
          <g key={p.id}>
            <rect
              x={p.x}
              y={p.y}
              width="18"
              height="9"
              fill={C.path}
              stroke={C.planter}
              strokeWidth="1"
            />
            <Badge x={p.x + 2} y={p.y + 2} label={p.id} tone="marker" />
            <text
              x={p.x + 10}
              y={p.y + 6}
              fill={C.ink}
              fontSize="2.1"
              textAnchor="middle"
            >
              {p.label}
            </text>
          </g>
        ))}

        {BEAN_PLANTERS.map((p) => (
          <g key={p.id}>
            <rect
              x={p.x}
              y={p.y}
              width="18"
              height="9"
              fill={C.path}
              stroke={C.planter}
              strokeWidth="1"
            />
            <Badge x={p.x + 2} y={p.y + 2} label={p.id} tone="marker" />
            <text
              x={p.x + 10}
              y={p.y + 6}
              fill={C.ink}
              fontSize="2.1"
              textAnchor="middle"
            >
              Sweet peas
            </text>
          </g>
        ))}

        {/* Cold frame, west of planter T. */}
        <rect
          x="3"
          y="128"
          width="8"
          height="13"
          fill={C.grey}
          stroke={C.frame}
          strokeWidth="0.8"
        />
        <text
          x="7"
          y="135"
          fill={C.ink}
          fontSize="1.8"
          textAnchor="middle"
          transform="rotate(-90 7 135)"
        >
          Frame
        </text>

        {/* Entrance at the south end. */}
        <path
          d="M36 163 L40 158 L44 163"
          fill="none"
          stroke={C.ink}
          strokeWidth="0.6"
        />
        <text x="40" y="169" fill={C.ink} fontSize="2.4" textAnchor="middle">
          Entrance (south end)
        </text>

        {/* North arrow. */}
        <path d="M86 38 V22" stroke={C.ink} strokeWidth="0.8" />
        <path d="M86 20 L83.4 25 h5.2 z" fill={C.ink} />
        <text x="86" y="44" fill={C.ink} fontSize="2.6" fontWeight="700" textAnchor="middle">
          N
        </text>

        {/* 2 m scale bar. */}
        <path d="M3 174 h20" stroke={C.ink} strokeWidth="0.9" />
        <path d="M3 171.5 v5 M23 171.5 v5" stroke={C.ink} strokeWidth="0.9" />
        <text x="13" y="170.6" fill={C.ink} fontSize="2.1" textAnchor="middle">
          2 m
        </text>

        {/* Dimensions. */}
        <text x="40" y="176" fill={C.ink} fontSize="2.2" textAnchor="middle">
          8 m across
        </text>
        <text
          x="0"
          y="0"
          fill={C.ink}
          fontSize="2.2"
          textAnchor="middle"
          transform="translate(2 78) rotate(-90)"
        >
          15.6 m
        </text>
      </svg>

      <ul className={styles.key}>
        <KeySwatch colour={C.wedding} label="Wedding flowers" />
        <KeySwatch colour={C.summer} label="Summer cutting and drying" />
        <KeySwatch colour={C.brassica} label="Brassica block" />
        <KeySwatch colour={C.roots} label="Roots and onions" />
        <KeySwatch colour={C.perennials} label="Perennials" />
        <KeySwatch colour={C.tomatoes} label="Fruit, tomatoes, peppers" />
        <KeySwatch colour={C.herbs} label="Herbs and guard strips" />
        <KeySwatch colour={C.planter} label="Raised planter" ring />
        <KeySwatch colour={C.path} label="Paths and edge strip" />
        <KeySwatch colour={C.mesh} label="Insect mesh or net on hoops" dash />
        <DotSwatch colour={C.ring} label="Daffodil ring (every 15 cm)" />
        <DotSwatch colour={GUARD_COLOURS.marigold} label="Marigold" />
        <DotSwatch colour={GUARD_COLOURS.chives} label="Chives" />
        <DotSwatch colour={GUARD_COLOURS.thyme} label="Thyme, rosemary, sage" />
        <DotSwatch colour={GUARD_COLOURS.allium} label="Alliums" />
        <DotSwatch colour={GUARD_COLOURS.mint} label="Mint in a sunk pot" />
      </ul>
    </div>
  )
}

function BedShape({ bed }: { bed: Bed }) {
  const cx = bed.x + bed.w / 2
  const cy = bed.y + bed.h / 2
  return (
    <g>
      <rect
        x={bed.x}
        y={bed.y}
        width={bed.w}
        height={bed.h}
        fill={bed.fill}
        stroke={C.ink}
        strokeWidth="0.45"
      />
      <Badge x={bed.x + 2} y={bed.y + 2.4} label={String(bed.n)} tone="ink" />
      <text
        x={bed.vertical ? cx : bed.w <= 12 ? cx : bed.x + 4.6}
        /* Short beds sit their label left of the guard dots. */
        y={bed.vertical ? cy : bed.h <= 12 ? bed.y + 6 : bed.y + 8.2}
        fill={C.ink}
        fontSize={bed.fontSize ?? (bed.vertical ? 2.5 : 2.2)}
        textAnchor={bed.vertical || bed.w <= 12 ? 'middle' : 'start'}
        transform={bed.vertical ? `rotate(-90 ${cx} ${cy})` : undefined}
      >
        {bed.label}
      </text>
    </g>
  )
}

/** A small dark disc carrying a number or letter. */
function Badge({
  x,
  y,
  label,
  tone,
}: {
  x: number
  y: number
  label: string
  tone: 'ink' | 'marker'
}) {
  return (
    <>
      <circle cx={x} cy={y} r="1.7" fill={tone === 'ink' ? C.ink : '#b03466'} />
      <text
        x={x}
        y={y + 0.8}
        fill="#fff"
        fontSize="2"
        fontWeight="700"
        textAnchor="middle"
      >
        {label}
      </text>
    </>
  )
}

function KeySwatch({
  colour,
  label,
  ring,
  dash,
}: {
  colour: string
  label: string
  ring?: boolean
  dash?: boolean
}) {
  return (
    <li className={styles.keyItem}>
      <span
        className={styles.swatch}
        style={{
          background: ring ? 'transparent' : dash ? 'transparent' : colour,
          borderColor: colour,
          borderStyle: dash || ring ? 'dashed' : 'solid',
        }}
      />
      {label}
    </li>
  )
}

/** A round marker in the key, matching the guard-plant dots on the plan. */
function DotSwatch({ colour, label }: { colour: string; label: string }) {
  return (
    <li className={styles.keyItem}>
      <span className={styles.dot} style={{ background: colour }} />
      {label}
    </li>
  )
}
