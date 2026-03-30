const KEY_INDICATORS = [
  { label: 'Fleet Optimization', value: '90% Automation' },
  { label: 'Risk Prediction', value: 'Real-time Processing' },
  { label: 'Operating OS', value: 'Agent-driven' },
]

export function About() {
  return (
    <>
      {/* Wegooli Mobility AI Lab */}
      <section id="mobility" className="py-24 md:py-32 px-6 md:px-10 bg-hailor-black">
        <div className="max-w-screen-xl mx-auto">
          <div className="mb-16">
            <p className="text-hailor-cobalt text-xs font-semibold uppercase tracking-[0.3em] mb-3">
              Real-World Data, Proven Intelligence
            </p>
            <h2 className="font-display font-bold text-5xl md:text-7xl tracking-tight leading-[1.0] text-hailor-white mb-6">
              Wegooli<br />Mobility AI Lab
            </h2>
            <p className="text-hailor-white/50 text-base md:text-lg leading-relaxed max-w-2xl">
              위굴리의 모빌리티 운영 도메인 지식과 Hailor의 AI 기술이 결합된 실증 연구소입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Dashboard concept */}
            <div className="relative border border-hailor-white/10 p-8 bg-hailor-navy/20">
              <p className="text-hailor-white/30 text-xs uppercase tracking-widest mb-6">
                Live Operations Dashboard
              </p>
              <div className="flex flex-col gap-4">
                {KEY_INDICATORS.map((indicator) => (
                  <div
                    key={indicator.label}
                    className="flex items-center justify-between border-b border-hailor-white/10 pb-4 last:border-0 last:pb-0"
                  >
                    <span className="text-hailor-white/50 text-sm uppercase tracking-widest">
                      {indicator.label}
                    </span>
                    <span className="font-display font-bold text-hailor-cobalt text-lg tracking-tight">
                      {indicator.value}
                    </span>
                  </div>
                ))}
              </div>
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-hailor-cobalt/40" />
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-hailor-cobalt/40" />
            </div>

            {/* Description */}
            <div>
              <div className="mb-10">
                <h3 className="font-display font-bold text-2xl text-hailor-white tracking-tight mb-4">
                  Mobility Domain Intelligence
                </h3>
                <p className="text-hailor-white/50 text-base leading-relaxed">
                  카쉐어링 운영 현장에서 수집된 실제 데이터를 기반으로, AI 에이전트가 차량 스케줄링부터 리스크 예측까지 자동으로 처리합니다.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-2xl text-hailor-white tracking-tight mb-4">
                  Proven in the Field
                </h3>
                <p className="text-hailor-white/50 text-base leading-relaxed">
                  연구실이 아닌 실제 운영 환경에서 검증된 AI 기술로, 모빌리티 산업의 복잡한 도전 과제를 해결합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy — Time Quality Agency */}
      <section id="studio" className="py-24 md:py-32 px-6 md:px-10" style={{ background: 'linear-gradient(135deg, #001A3D, #050505)' }}>
        <div className="max-w-screen-xl mx-auto">
          <div className="max-w-4xl">
            <p className="text-hailor-cobalt text-xs font-semibold uppercase tracking-[0.3em] mb-6">
              Our Philosophy
            </p>
            <h2 className="font-display font-bold text-5xl md:text-7xl tracking-tight leading-[1.0] text-hailor-white mb-10">
              Time Quality<br />Agency
            </h2>
            <p className="text-hailor-white/60 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl">
              우리는 고객의 시간을 값지게 하기 위해 존재합니다. 단순한 대행을 넘어, 기술로 삶의 퀄리티를 혁신하는 외과의사 같은 파트너가 되겠습니다.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 border border-hailor-white/30 text-hailor-white font-semibold uppercase tracking-[0.1em] text-sm px-8 py-4 hover:border-hailor-cobalt hover:text-hailor-cobalt transition-all duration-200"
            >
              Explore the Future with Hailor
              <span className="text-lg">→</span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
