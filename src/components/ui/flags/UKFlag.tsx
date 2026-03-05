interface UKFlagProps {
  className?: string
}

export function UKFlag({ className = '' }: UKFlagProps) {
  return (
    <svg
      viewBox="0 0 30 20"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="English"
    >
      {/* Blue background */}
      <rect width="30" height="20" fill="#012169" />

      {/* St Andrew's Cross (white diagonals) */}
      <line x1="0" y1="0" x2="30" y2="20" stroke="white" strokeWidth="5" />
      <line x1="30" y1="0" x2="0" y2="20" stroke="white" strokeWidth="5" />

      {/* St Patrick's Cross (red diagonals, offset upper-left/lower-right) */}
      <line x1="0" y1="0" x2="30" y2="20" stroke="#C8102E" strokeWidth="1.8" strokeDasharray="0" />
      <line x1="30" y1="0" x2="0" y2="20" stroke="#C8102E" strokeWidth="1.8" />

      {/* St George's Cross — white horizontal */}
      <rect x="0" y="7.5" width="30" height="5" fill="white" />
      {/* St George's Cross — white vertical */}
      <rect x="12.5" y="0" width="5" height="20" fill="white" />

      {/* St George's Cross — red horizontal */}
      <rect x="0" y="8.5" width="30" height="3" fill="#C8102E" />
      {/* St George's Cross — red vertical */}
      <rect x="13.5" y="0" width="3" height="20" fill="#C8102E" />
    </svg>
  )
}
