import { useState, useEffect, useCallback } from 'react'
import { HERO_SLIDES } from '@/lib/data'

const INTERVAL = 4000

export function Hero() {
  const [active, setActive] = useState(0)
  const [animKey, setAnimKey] = useState(0)

  const goTo = useCallback((index: number) => {
    setActive(index)
    setAnimKey((k) => k + 1)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((active + 1) % HERO_SLIDES.length)
    }, INTERVAL)
    return () => clearInterval(timer)
  }, [active, goTo])

  const slide = HERO_SLIDES[active]

  return (
    <section id="hero" className="relative h-[720px] md:h-screen max-h-[900px] overflow-hidden">
      {/* Background gradient (APMA deep blue) */}
      <div className={`absolute inset-0 bg-gradient-to-br ${slide.bgColor} transition-all duration-700`} />

      {/* Decorative grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Abstract light blob */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Slide content */}
      <div className="relative h-full max-w-content mx-auto px-6 md:px-10 flex flex-col justify-center">
        <div key={animKey} className="hero-slide-enter">
          <span className="inline-block text-white/60 text-xs font-medium uppercase tracking-[0.25em] mb-5 border border-white/20 px-3 py-1 rounded-full">
            {slide.tag}
          </span>

          <h1 className="font-display font-bold text-white text-[clamp(2.2rem,5vw,52px)] leading-[1.1] tracking-[-0.02em] mb-4 max-w-[18ch] whitespace-pre-line">
            {slide.headline}
          </h1>

          <p className="text-white/75 text-base md:text-lg mb-3 max-w-lg font-light">
            {slide.subheadline}
          </p>
          <p className="text-white/45 text-sm mb-10 max-w-md leading-relaxed">
            {slide.description}
          </p>

          <a
            href={slide.ctaHref}
            className="inline-flex items-center gap-2 bg-white text-apma-blue font-semibold text-sm px-7 py-3.5 rounded hover:bg-apma-blue-light hover:text-apma-blue transition-all duration-200 shadow-md w-fit"
          >
            {slide.cta}
          </a>
        </div>
      </div>

      {/* Tab navigation (nota.ai style) */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="max-w-content mx-auto px-6 md:px-10">
          {/* Desktop tabs */}
          <div className="hidden md:flex items-end gap-0">
            {HERO_SLIDES.map((s, i) => (
              <button
                key={s.id}
                onClick={() => goTo(i)}
                className={`group relative flex-1 text-left px-4 py-4 border-t-2 transition-all duration-200 ${
                  i === active
                    ? 'border-white bg-white/10 backdrop-blur-sm'
                    : 'border-white/20 hover:border-white/50 hover:bg-white/5'
                }`}
              >
                <p className={`text-xs font-medium uppercase tracking-widest mb-0.5 ${i === active ? 'text-white' : 'text-white/40 group-hover:text-white/70'}`}>
                  {String(i + 1).padStart(2, '0')}
                </p>
                <p className={`text-sm font-medium truncate ${i === active ? 'text-white' : 'text-white/50 group-hover:text-white/80'}`}>
                  {s.tag}
                </p>

                {/* Progress bar for active slide */}
                {i === active && (
                  <div className="absolute bottom-0 left-0 h-0.5 bg-white" style={{ animation: `progress ${INTERVAL}ms linear forwards` }} />
                )}
              </button>
            ))}
          </div>

          {/* Mobile dots */}
          <div className="flex md:hidden justify-center gap-2 pb-6">
            {HERO_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === active ? 'w-6 bg-white' : 'w-1.5 bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
