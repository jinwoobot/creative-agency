const CASES = [
  {
    id: 1,
    client: 'Freez Mobility',
    title: 'AI Agent Fleet Management',
    result: '과태료 자동이관 및 사고 리스크 관리 에이전트 구축',
    category: 'Fleet AI',
  },
  {
    id: 2,
    client: 'Living Space',
    title: 'Smart Assets OS',
    result: '코리빙 및 임대 자산 관리 자동화 솔루션',
    category: 'Asset OS',
  },
  {
    id: 3,
    client: 'Professional Services',
    title: 'Subscription Advisory',
    result: '사외이사 및 탑급 세일즈 팀장 구독 플랫폼 인프라',
    category: 'Advisory',
  },
]

export function Work() {
  return (
    <section id="cases" className="py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-screen-xl mx-auto">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-hailor-cobalt text-xs font-semibold uppercase tracking-[0.3em] mb-3">
              Selected Projects
            </p>
            <h2 className="font-display font-bold text-5xl md:text-7xl tracking-tight leading-[1.0] text-hailor-white">
              Business<br />Cases
            </h2>
          </div>
          <p className="text-hailor-white/40 text-sm md:text-base max-w-sm leading-relaxed">
            실제 산업 현장에서 검증된 AI 에이전트 구축 사례들.
          </p>
        </div>

        {/* Cases list */}
        <div className="border-t border-hailor-white/10">
          {CASES.map((item, index) => (
            <div
              key={item.id}
              className="group border-b border-hailor-white/10 py-10 md:py-12 relative hover:pl-4 md:hover:pl-6 transition-all duration-300"
            >
              {/* Cobalt accent bar on hover */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-hailor-cobalt opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                {/* Index + client + title */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-hailor-white/20 font-mono text-xs">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-hailor-cobalt/70 text-xs font-semibold uppercase tracking-widest border border-hailor-cobalt/20 px-2.5 py-1">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-2xl md:text-3xl text-hailor-white tracking-tight group-hover:text-hailor-cobalt transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-hailor-white/40 text-sm mt-1 uppercase tracking-widest">
                    {item.client}
                  </p>
                </div>

                {/* Result */}
                <div className="md:max-w-sm">
                  <p className="text-hailor-white/50 text-sm leading-relaxed">
                    {item.result}
                  </p>
                </div>

                {/* Arrow */}
                <div className="shrink-0">
                  <span className="text-2xl text-hailor-white/20 group-hover:text-hailor-cobalt group-hover:translate-x-2 transition-all duration-300 inline-block">
                    →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-end">
          <a
            href="#contact"
            className="text-hailor-white/40 hover:text-hailor-cobalt text-sm uppercase tracking-widest transition-colors flex items-center gap-2"
          >
            Start a project <span>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
