const HERO_IMAGE =
  'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=2400&q=85'

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt=""
          className="w-full h-full object-cover object-center scale-105"
          loading="eager"
        />
        {/* Heavy dark gradient so text dominates */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative max-w-screen-xl mx-auto w-full px-8 md:px-12 pb-16 md:pb-24 pt-32">
        {/* Eyebrow */}
        <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/35 mb-10">
          Wegooli Creative Lab
        </p>

        {/* Main headline */}
        <h1 className="font-black text-white leading-[0.9] tracking-[-0.04em] text-[clamp(3rem,8.5vw,8rem)] mb-10 max-w-[18ch]">
          An independent hyper-operation group navigating business toward{' '}
          <span className="text-[#FF0000]">the optimal horizon.</span>
        </h1>

        {/* Sub + CTA row */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-20">
          <p className="text-white/45 text-base md:text-lg leading-relaxed max-w-[480px]">
            We integrate strategy, technology, and creativity to maximize business
            operational capacity — building intelligent systems that keep improving.
          </p>
          <div className="flex items-center gap-6 shrink-0">
            <a
              href="#work"
              className="flex items-center gap-3 bg-white text-black font-bold uppercase tracking-widest text-[12px] px-7 py-4 hover:bg-[#FF0000] hover:text-white transition-all duration-200"
            >
              View Work
              <span className="text-base">→</span>
            </a>
            <a
              href="#contact"
              className="text-white/40 hover:text-white text-[12px] font-semibold uppercase tracking-widest transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Stats bar */}
        <div className="border-t border-white/10 pt-8 flex flex-wrap gap-10 md:gap-0 md:divide-x md:divide-white/10">
          {[
            { value: '120+', label: 'Projects' },
            { value: '40+', label: 'Global Clients' },
            { value: '12', label: 'Awards' },
            { value: '5+', label: 'Years' },
          ].map((stat) => (
            <div key={stat.label} className="md:px-10 first:pl-0">
              <p className="text-2xl md:text-3xl font-black text-white tracking-tight">
                {stat.value}
              </p>
              <p className="text-[11px] text-white/35 uppercase tracking-[0.2em] mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
