import { useT } from '@/hooks/useT'
import { useLanguage } from '@/contexts/LanguageContext'

export function Hero() {
  const t = useT()
  const { lang } = useLanguage()

  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-16 md:pb-28 px-6 md:px-10 bg-black overflow-hidden pt-24">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '100px 100px',
        }}
      />

      {/* Red accent glow — top right */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] max-w-[700px] max-h-[700px] bg-accent/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-screen-xl mx-auto w-full">
        {/* Eyebrow */}
        <p className="text-white/35 text-[11px] font-semibold uppercase tracking-[0.35em] mb-10 md:mb-14">
          {t('hero_eyebrow')}
        </p>

        {/* Headline — R/GA style: one massive statement */}
        <div className="mb-12 md:mb-16">
          {lang === 'ko' ? (
            <>
              <h1 className="font-black text-white leading-[0.88] tracking-[-0.05em] text-[clamp(3.2rem,9vw,8.5rem)]">
                We navigate business
              </h1>
              <h1 className="font-black text-accent leading-[0.88] tracking-[-0.05em] text-[clamp(3.2rem,9vw,8.5rem)]">
                최적화(Optimizing)
              </h1>
              <h1 className="font-black text-white leading-[0.88] tracking-[-0.05em] text-[clamp(3.2rem,9vw,8.5rem)]">
                toward the horizon.
              </h1>
            </>
          ) : (
            <>
              <h1 className="font-black text-white leading-[0.88] tracking-[-0.05em] text-[clamp(3.2rem,9vw,8.5rem)]">
                We navigate
              </h1>
              <h1 className="font-black text-white leading-[0.88] tracking-[-0.05em] text-[clamp(3.2rem,9vw,8.5rem)]">
                business toward
              </h1>
              <h1 className="font-black text-accent leading-[0.88] tracking-[-0.05em] text-[clamp(3.2rem,9vw,8.5rem)]">
                the horizon.
              </h1>
            </>
          )}
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 border-t border-white/10 pt-8">
          <p className="text-white/45 text-sm md:text-base leading-relaxed max-w-[520px]">
            {t('hero_sub')}
          </p>

          <div className="flex items-center gap-4 shrink-0">
            <a
              href="#work"
              className="inline-flex items-center gap-3 bg-white text-black font-bold uppercase tracking-widest text-xs px-7 py-4 hover:bg-accent hover:text-white transition-all duration-200"
            >
              {t('cta_work')}
              <span className="text-base">→</span>
            </a>
            <a
              href="#contact"
              className="text-white/40 hover:text-white text-xs font-semibold uppercase tracking-widest transition-colors"
            >
              {t('cta_project')}
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-14 md:mt-20 grid grid-cols-3 md:flex md:items-center md:gap-0 md:divide-x md:divide-white/10">
          {[
            { value: '120+', label: 'Projects' },
            { value: '40+', label: 'Clients' },
            { value: '12', label: 'Awards' },
          ].map((stat) => (
            <div key={stat.label} className="md:pr-10 md:pl-10 first:pl-0">
              <p className="text-2xl md:text-3xl font-black text-white tracking-tight">
                {stat.value}
              </p>
              <p className="text-white/30 text-[10px] uppercase tracking-[0.2em] mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
