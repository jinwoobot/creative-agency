import { INDUSTRIES } from '@/lib/data'

export function About() {
  return (
    <>
      {/* Industry Applications Mosaic — nota.ai style */}
      <section id="labs" className="py-20 md:py-28 px-6 md:px-10 bg-nota-bg">
        <div className="max-w-content mx-auto">
          <div className="text-center mb-12">
            <p className="text-apma-blue text-xs font-semibold uppercase tracking-[0.25em] mb-3">
              Where AI Drives the Mission
            </p>
            <h2 className="font-display font-bold text-nota-navy text-4xl md:text-5xl tracking-[-0.02em] leading-tight mb-4">
              AI for Every Industry
            </h2>
            <p className="text-nota-gray text-base max-w-lg mx-auto">
              Hailor AI가 실질적인 가치를 만들어내는 12개 이상의 핵심 산업 분야.
            </p>
          </div>

          {/* Mosaic grid — nota.ai style */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {INDUSTRIES.map((industry) => (
              <div
                key={industry.id}
                className="bg-white rounded-lg border border-nota-border p-5 flex flex-col items-center justify-center gap-3 text-center card-hover shadow-sm group"
              >
                <span className="text-3xl">{industry.icon}</span>
                <span className="text-sm font-medium text-nota-dark group-hover:text-apma-blue transition-colors">
                  {industry.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wegooli Mobility AI Lab — APMA blue deep section */}
      <section id="mobility" className="py-20 md:py-28 px-6 md:px-10 bg-apma-blue text-white">
        <div className="max-w-content mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Left */}
            <div>
              <p className="text-white/60 text-xs font-semibold uppercase tracking-[0.25em] mb-4">
                Real-World Data · Proven Intelligence
              </p>
              <h2 className="font-display font-bold text-4xl md:text-5xl tracking-[-0.02em] leading-tight mb-5">
                Wegooli<br />Mobility AI Lab
              </h2>
              <p className="text-white/75 text-base leading-relaxed mb-8 max-w-lg">
                위굴리의 모빌리티 운영 도메인 지식과 Hailor의 AI 기술이 결합된 실증 연구소입니다. 연구실이 아닌 실제 운영 환경에서 검증된 AI 기술로, 모빌리티 산업의 복잡한 도전 과제를 해결합니다.
              </p>
              <a
                href="#cases"
                className="inline-flex items-center gap-2 bg-white text-apma-blue font-semibold text-sm px-6 py-3 rounded hover:bg-apma-blue-light transition-all duration-200"
              >
                View Business Cases →
              </a>
            </div>

            {/* Right — Dashboard card */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8">
              <p className="text-white/50 text-xs uppercase tracking-widest mb-6 font-medium">
                Live Operations
              </p>
              {[
                { label: 'Fleet Optimization', value: '90% Automation', change: '+12%' },
                { label: 'Risk Prediction', value: 'Real-time Processing', change: 'Active' },
                { label: 'Operating OS', value: 'Agent-driven', change: 'Online' },
                { label: 'Incidents Prevented', value: '2,847', change: 'This Month' },
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between py-3.5 border-b border-white/10 last:border-0"
                >
                  <span className="text-white/65 text-sm">{row.label}</span>
                  <div className="text-right">
                    <span className="text-white font-bold text-sm">{row.value}</span>
                    <span className="text-white/45 text-xs ml-2">{row.change}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
