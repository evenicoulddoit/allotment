import type { VerdictId } from '../../data/cards'

/**
 * Verdict marks drawn as inline SVG rather than emoji.
 *
 * The bible uses ✅ ⚠ 🎲 ❌ ❓. Emoji depend on a system emoji font, which is
 * often missing on Linux and renders as a tofu box, so the shape is drawn
 * here instead. The colour is a secondary cue only: every verdict is also
 * labelled in words.
 */
export function StatusIcon({
  verdict,
  size = 14,
}: {
  verdict: VerdictId
  size?: number
}) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 16 16',
    'aria-hidden': true as const,
    style: { flex: 'none', display: 'inline-block', verticalAlign: '-0.15em' },
  }

  switch (verdict) {
    case 'ok':
      return (
        <svg {...common}>
          <circle cx="8" cy="8" r="7.2" fill="#15803d" />
          <path
            d="M4.6 8.3l2.2 2.2 4.6-4.8"
            fill="none"
            stroke="#fff"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'warn':
      return (
        <svg {...common}>
          <path
            d="M8 1.6L15.2 14H0.8z"
            fill="#e9b800"
            stroke="#8a6a00"
            strokeWidth="0.8"
            strokeLinejoin="round"
          />
          <path d="M8 5.6v4.2" stroke="#16231c" strokeWidth="1.7" strokeLinecap="round" />
          <circle cx="8" cy="11.9" r="0.95" fill="#16231c" />
        </svg>
      )
    case 'gamble':
      return (
        <svg {...common}>
          <rect x="1.4" y="1.4" width="13.2" height="13.2" rx="2.6" fill="#9a6e3f" />
          <circle cx="5.3" cy="5.3" r="1.25" fill="#fff" />
          <circle cx="10.7" cy="5.3" r="1.25" fill="#fff" />
          <circle cx="8" cy="8" r="1.25" fill="#fff" />
          <circle cx="5.3" cy="10.7" r="1.25" fill="#fff" />
          <circle cx="10.7" cy="10.7" r="1.25" fill="#fff" />
        </svg>
      )
    case 'fail':
      return (
        <svg {...common}>
          <circle cx="8" cy="8" r="7.2" fill="#be185d" />
          <path
            d="M5.2 5.2l5.6 5.6M10.8 5.2l-5.6 5.6"
            stroke="#fff"
            strokeWidth="1.9"
            strokeLinecap="round"
          />
        </svg>
      )
    default:
      return (
        <svg {...common}>
          <circle
            cx="8"
            cy="8"
            r="7.2"
            fill="none"
            stroke="#586960"
            strokeWidth="1.4"
            strokeDasharray="2.4 1.8"
          />
          <path
            d="M6.2 6.1a1.9 1.9 0 113.1 1.5c-.6.5-1.3.8-1.3 1.7"
            fill="none"
            stroke="#586960"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <circle cx="8" cy="11.9" r="0.85" fill="#586960" />
        </svg>
      )
  }
}
