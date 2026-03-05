interface KoreanFlagProps {
  className?: string
}

export function KoreanFlag({ className = '' }: KoreanFlagProps) {
  return (
    <svg
      viewBox="0 0 30 20"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Korean"
    >
      {/* White background */}
      <rect width="30" height="20" fill="#FFFFFF" />

      {/* ── Trigrams ── */}
      {/* Top-left: 건 (Geon / Heaven) — 3 solid lines */}
      <line x1="2.5" y1="3.5" x2="7.5" y2="3.5" stroke="#000" strokeWidth="1.1" />
      <line x1="2.5" y1="5.2" x2="7.5" y2="5.2" stroke="#000" strokeWidth="1.1" />
      <line x1="2.5" y1="6.9" x2="7.5" y2="6.9" stroke="#000" strokeWidth="1.1" />

      {/* Top-right: 감 (Gam / Water) — broken middle */}
      <line x1="22.5" y1="3.5" x2="27.5" y2="3.5" stroke="#000" strokeWidth="1.1" />
      <line x1="22.5" y1="5.2" x2="24.7" y2="5.2" stroke="#000" strokeWidth="1.1" />
      <line x1="25.3" y1="5.2" x2="27.5" y2="5.2" stroke="#000" strokeWidth="1.1" />
      <line x1="22.5" y1="6.9" x2="27.5" y2="6.9" stroke="#000" strokeWidth="1.1" />

      {/* Bottom-left: 이 (Yi / Fire) — broken top and bottom */}
      <line x1="2.5" y1="13.1" x2="4.7" y2="13.1" stroke="#000" strokeWidth="1.1" />
      <line x1="5.3" y1="13.1" x2="7.5" y2="13.1" stroke="#000" strokeWidth="1.1" />
      <line x1="2.5" y1="14.8" x2="7.5" y2="14.8" stroke="#000" strokeWidth="1.1" />
      <line x1="2.5" y1="16.5" x2="4.7" y2="16.5" stroke="#000" strokeWidth="1.1" />
      <line x1="5.3" y1="16.5" x2="7.5" y2="16.5" stroke="#000" strokeWidth="1.1" />

      {/* Bottom-right: 곤 (Gon / Earth) — 3 broken lines */}
      <line x1="22.5" y1="13.1" x2="24.7" y2="13.1" stroke="#000" strokeWidth="1.1" />
      <line x1="25.3" y1="13.1" x2="27.5" y2="13.1" stroke="#000" strokeWidth="1.1" />
      <line x1="22.5" y1="14.8" x2="24.7" y2="14.8" stroke="#000" strokeWidth="1.1" />
      <line x1="25.3" y1="14.8" x2="27.5" y2="14.8" stroke="#000" strokeWidth="1.1" />
      <line x1="22.5" y1="16.5" x2="24.7" y2="16.5" stroke="#000" strokeWidth="1.1" />
      <line x1="25.3" y1="16.5" x2="27.5" y2="16.5" stroke="#000" strokeWidth="1.1" />

      {/* ── Taeguk (태극) ── */}
      {/* Red upper half */}
      <path
        d="M11 10 A4 4 0 0 1 19 10 A2 2 0 0 0 15 10 A2 2 0 0 1 11 10Z"
        fill="#CD2E3A"
      />
      {/* Blue lower half */}
      <path
        d="M11 10 A4 4 0 0 0 19 10 A2 2 0 0 1 15 10 A2 2 0 0 0 11 10Z"
        fill="#003478"
      />
      {/* Inner circles */}
      <circle cx="15" cy="8" r="1.2" fill="#003478" />
      <circle cx="15" cy="12" r="1.2" fill="#CD2E3A" />
    </svg>
  )
}
