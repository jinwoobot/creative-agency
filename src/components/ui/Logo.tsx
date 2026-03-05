export function Logo() {
  return (
    <a href="#" className="flex items-center gap-2.5 group shrink-0">
      {/* Red W mark */}
      <svg
        width="36"
        height="28"
        viewBox="0 0 48 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <polygon
          points="0,0 10,0 18,26 24,10 30,10 38,26 46,0 48,0 40,36 28,36 24,24 20,36 8,36"
          fill="#FF2D20"
        />
      </svg>
      {/* WCL wordmark */}
      <span className="font-black text-white text-lg tracking-[0.12em] uppercase">
        WCL
      </span>
    </a>
  )
}
