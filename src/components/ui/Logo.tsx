export function Logo() {
  return (
    <a href="#" className="flex items-center gap-2 shrink-0">
      <svg
        width="32"
        height="22"
        viewBox="0 0 64 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Refined geometric W — two overlapping V shapes */}
        <path
          d="M0 4L12 40H18L28 16L38 40H44L56 4H50L42 28L32 4H24L14 28L6 4H0Z"
          fill="#FF0000"
        />
      </svg>
      <span className="font-black text-white text-base tracking-[0.06em]">
        WCL
      </span>
    </a>
  )
}
