export function Logo() {
  return (
    <a href="#" className="flex items-center gap-3 shrink-0 group">
      {/* Polyline W mark — clean letterform */}
      <svg
        width="38"
        height="26"
        viewBox="0 0 46 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polyline
          points="0,2 9,28 23,10 37,28 46,2"
          stroke="#FF0000"
          strokeWidth="5"
          strokeLinejoin="miter"
          strokeLinecap="square"
          fill="none"
        />
      </svg>
      <span className="font-black text-white text-[15px] tracking-[0.08em] uppercase">
        WCL
      </span>
    </a>
  )
}
