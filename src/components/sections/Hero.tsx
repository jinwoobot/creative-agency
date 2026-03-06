export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-16 md:pb-20 px-6 md:px-10 overflow-hidden">
      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1920&auto=format&fit=crop&q=80"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center"
        aria-hidden="true"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/30" />

      {/* Accent blob */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-accent/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-screen-xl mx-auto w-full">
        {/* Headline */}
        <h1 className="font-black text-white leading-[0.9] tracking-[-0.04em] text-[clamp(2.5rem,8vw,7rem)] mb-8 max-w-[20ch]">
          We navigate business<br />to the{' '}
          <span className="text-accent">horizon.</span>
        </h1>

        {/* Subtext + CTA row */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <p className="text-white/55 text-base md:text-lg font-normal max-w-[500px] leading-relaxed">
            W/CL is the Optimization Navigator — we widen your business horizon and eliminate every inefficiency on the route. Strategy, technology, and creative, integrated.
          </p>

          <div className="flex items-center gap-6 shrink-0">
            <a
              href="#work"
              className="inline-flex items-center gap-3 bg-white text-black font-bold uppercase tracking-widest text-sm px-8 py-4 hover:bg-accent hover:text-white transition-all duration-200"
            >
              View Work
              <span className="text-lg">→</span>
            </a>
            <a
              href="#services"
              className="text-white/50 hover:text-white text-sm uppercase tracking-widest transition-colors"
            >
              Our Services
            </a>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-14 pt-7 border-t border-white/10 grid grid-cols-3 gap-4 md:gap-0 md:flex md:items-center md:divide-x md:divide-white/10">
          {[
            { value: '80+', label: 'Projects Optimized' },
            { value: '30+', label: 'Partner Companies' },
            { value: '3×', label: 'Avg. Efficiency Gain' },
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
