export function Logo() {
  return (
    <a href="#" className="flex items-center gap-3 group">
      {/* Sail mark */}
      <svg
        width="26"
        height="30"
        viewBox="0 0 26 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-white shrink-0"
      >
        {/* Mast */}
        <line x1="13" y1="1" x2="13" y2="24" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        {/* Main sail (right of mast) */}
        <path d="M13 2 L24 23 L13 23 Z" fill="currentColor" />
        {/* Jib (left of mast, smaller) */}
        <path d="M12.5 7 L4 23 L12.5 23 Z" fill="currentColor" fillOpacity="0.42" />
        {/* Hull curve */}
        <path d="M3 25 Q13 28.5 23 25" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" />
      </svg>

      {/* Wordmark: W/CL */}
      <span className="font-black text-[1.15rem] tracking-[-0.03em] text-white leading-none">
        W<span className="text-accent font-thin mx-[1px]">/</span>CL
      </span>
    </a>
  )
}
