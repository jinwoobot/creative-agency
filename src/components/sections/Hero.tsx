export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center px-6 md:px-10 overflow-hidden">
      {/* Deep Navy to Black gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-hailor-navy via-hailor-navy/70 to-hailor-black" />

      {/* Abstract fluid elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[20%] -right-[15%] w-[700px] h-[700px] bg-hailor-cobalt/8 rounded-full blur-[140px]" />
        <div className="absolute top-[40%] -left-[10%] w-[500px] h-[500px] bg-hailor-navy rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-[20%] w-[400px] h-[300px] bg-hailor-cobalt/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-screen-xl mx-auto w-full pt-32 pb-20">
        <p className="text-hailor-cobalt text-xs font-semibold uppercase tracking-[0.3em] mb-8">
          Hailor.ai — The Neo-AI Identity
        </p>

        <h1 className="font-display font-bold text-hailor-white leading-[1.05] tracking-tight text-[clamp(2.5rem,5.5vw,5rem)] mb-6 max-w-[22ch]">
          The Intelligence that<br />Drives the Mission.
        </h1>

        <p className="text-hailor-white/70 text-base md:text-lg font-normal max-w-[560px] leading-relaxed mb-3">
          Context Engineering & Agentic Workflow for the Physical World.
        </p>

        <p className="text-hailor-white/35 text-sm max-w-[480px] leading-relaxed mb-14">
          우리는 공개되어 있지만 해석하기 힘든 데이터를 가공하여, 비즈니스의 새로운 질서를 만듭니다.
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <a
            href="#labs"
            className="inline-flex items-center gap-3 bg-hailor-cobalt text-hailor-white font-semibold uppercase tracking-[0.1em] text-sm px-8 py-4 hover:bg-hailor-cobalt/80 transition-all duration-200"
          >
            Explore AI Labs
            <span className="text-lg">→</span>
          </a>
          <a
            href="#cases"
            className="text-hailor-white/50 hover:text-hailor-white text-sm uppercase tracking-widest transition-colors"
          >
            View Cases
          </a>
        </div>

        {/* Key indicators */}
        <div className="mt-20 pt-8 border-t border-hailor-white/10 grid grid-cols-3 gap-4 md:gap-0 md:flex md:items-center md:divide-x md:divide-hailor-white/10">
          {[
            { value: '90%', label: 'Fleet Automation' },
            { value: 'Real-time', label: 'Risk Processing' },
            { value: 'Agent-driven', label: 'Operating OS' },
          ].map((stat) => (
            <div key={stat.label} className="md:px-10 first:pl-0">
              <p className="text-2xl md:text-3xl font-display font-bold text-hailor-white tracking-tight">
                {stat.value}
              </p>
              <p className="text-hailor-white/40 text-xs uppercase tracking-widest mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
