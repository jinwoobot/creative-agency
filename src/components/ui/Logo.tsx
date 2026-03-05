export function Logo() {
  return (
    <a href="#" className="flex items-center gap-3 group shrink-0">
      {/* W mark SVG */}
      <svg
        width="34"
        height="34"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <polygon
          points="4,12 16,12 24,42 32,20 40,20 48,42 56,12 66,12 52,52 40,52 34,34 28,52 16,52 2,12"
          fill="white"
        />
        <rect x="46" y="46" width="14" height="14" fill="#FF2D20" />
      </svg>

      {/* Wordmark */}
      <div className="flex flex-col leading-none gap-0.5">
        <span className="text-white font-black text-sm tracking-[0.18em] uppercase">
          WCL
        </span>
        <span className="text-white/35 font-medium text-[8.5px] tracking-[0.22em] uppercase">
          Wegooli Creative Lab
        </span>
      </div>
    </a>
  )
}
