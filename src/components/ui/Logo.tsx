interface LogoProps {
  inverted?: boolean
}

export function Logo({ inverted = false }: LogoProps) {
  const textColor = inverted ? 'text-white' : 'text-nota-navy'
  const accentColor = inverted ? 'text-white/70' : 'text-apma-blue'

  return (
    <a href="#" className="flex items-center gap-2 group">
      {/* Minimal geometric mark */}
      <div className="relative w-7 h-7 shrink-0">
        <div className={`absolute inset-0 ${inverted ? 'bg-white/20' : 'bg-apma-blue'} rotate-45 scale-75`} />
        <div className={`absolute inset-[3px] ${inverted ? 'bg-white/10' : 'bg-apma-blue-light'} rotate-45 scale-75`} />
      </div>
      <span className={`font-display font-bold text-[1.2rem] tracking-[-0.02em] leading-none ${textColor}`}>
        HAILOR
        <span className={`text-xs font-normal ml-0.5 ${accentColor}`}>.ai</span>
      </span>
    </a>
  )
}
