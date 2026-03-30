const FEATURES = [
  {
    id: 1,
    number: '01',
    title: 'Context Engineering',
    desc: '파편화된 운영 데이터를 지능형 컨텍스트로 구조화하여 의사결정 속도를 혁신합니다.',
  },
  {
    id: 2,
    number: '02',
    title: 'Agentic Workflow',
    desc: '스스로 사고하고 실행하는 산업별 맞춤형 AI 에이전트 파이프라인을 구축합니다.',
  },
  {
    id: 3,
    number: '03',
    title: 'Meta-Prompting',
    desc: '모델의 한계를 넘어서는 고차원적 프롬프트 제어로 정교한 결과물을 도출합니다.',
  },
]

export function Services() {
  return (
    <section id="labs" className="py-24 md:py-32 px-6 md:px-10" style={{ background: 'linear-gradient(to bottom, #001A3D22, #050505)' }}>
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-hailor-cobalt text-xs font-semibold uppercase tracking-[0.3em] mb-3">
              Core Technology Architecture
            </p>
            <h2 className="font-display font-bold text-5xl md:text-7xl tracking-tight leading-[1.0] text-hailor-white">
              Hailor AI Labs
            </h2>
          </div>
          <p className="text-hailor-white/40 text-sm md:text-base max-w-xs leading-relaxed">
            산업 현장의 복잡성을 지능으로 풀어내는 핵심 기술 아키텍처.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-hailor-white/10">
          {FEATURES.map((feature) => (
            <div
              key={feature.id}
              className="bg-hailor-black p-10 group hover:bg-hailor-navy/40 transition-colors duration-300"
            >
              <p className="text-hailor-cobalt/50 font-mono text-xs mb-8 tracking-widest">
                {feature.number}
              </p>
              <h3 className="font-display font-bold text-2xl text-hailor-white tracking-tight mb-4 group-hover:text-hailor-cobalt transition-colors duration-200">
                {feature.title}
              </h3>
              <p className="text-hailor-white/50 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
