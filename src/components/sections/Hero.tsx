export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-16 md:pb-24 px-6 md:px-10 overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Accent blob */}
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-screen-xl mx-auto w-full">
        {/* Eyebrow */}
        <p className="text-white/40 text-xs font-semibold uppercase tracking-[0.3em] mb-8">
          Creative Innovation Agency
        </p>

        {/* Headline */}
        <h1 className="font-black text-white leading-[0.9] tracking-[-0.04em] text-[clamp(3rem,10vw,9rem)] mb-10 max-w-[18ch]">
          We build brands for the{' '}
          <span className="text-accent">intelligence</span>{' '}
          age.
        </h1>

        {/* Subtext + CTA row */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <p className="text-white/50 text-base md:text-lg font-normal max-w-[480px] leading-relaxed">
            STUDIOFORM is an independent creative agency. We combine strategy, design, and technology to create experiences that move people — and move culture.
          </p>

          <div className="flex items-center gap-6 shrink-0">
            <a
              href="#work"
              className="inline-flex items-center gap-3 bg-white text-black font-bold uppercase tracking-widest text-sm px-8 py-4 hover:bg-accent hover:text-white transition-all duration-200"
            >
              View Work
              <span className="text-lg">→</span>
            </a>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-3 gap-4 md:gap-0 md:flex md:items-center md:divide-x md:divide-white/10">
          {[
            { value: '120+', label: 'Projects Delivered' },
            { value: '40+', label: 'Global Clients' },
            { value: '12', label: 'Industry Awards' },
          ].map((stat) => (
            <div key={stat.label} className="md:px-10 first:pl-0">
              <p className="text-3xl md:text-4xl font-black text-white tracking-tight">
                {stat.value}
              </p>
              <p className="text-white/40 text-xs uppercase tracking-widest mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
