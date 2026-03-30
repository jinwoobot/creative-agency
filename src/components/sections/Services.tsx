import { SOLUTIONS } from '@/lib/data'

export function Services() {
  return (
    <section id="solutions" className="py-20 md:py-28 px-6 md:px-10 bg-white">
      <div className="max-w-content mx-auto">
        {/* Section header — nota.ai style */}
        <div className="text-center mb-14">
          <p className="text-apma-blue text-xs font-semibold uppercase tracking-[0.25em] mb-3">
            Core Technology
          </p>
          <h2 className="font-display font-bold text-nota-navy text-4xl md:text-5xl tracking-[-0.02em] leading-tight mb-4">
            High-Performance AI<br />on Any Operation.
          </h2>
          <p className="text-nota-gray text-base max-w-xl mx-auto leading-relaxed">
            산업 현장의 복잡한 운영 데이터를 가공하여, 비즈니스의 새로운 질서를 만드는 세 가지 핵심 기술.
          </p>
        </div>

        {/* Solutions grid — nota.ai card style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SOLUTIONS.map((sol) => (
            <div
              key={sol.id}
              className="bg-nota-card rounded-lg border border-nota-border p-8 card-hover shadow-card"
            >
              {/* Number + tag */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-apma-blue/40 font-mono text-sm font-medium">{sol.number}</span>
                <span className="text-apma-blue text-xs font-semibold uppercase tracking-widest bg-apma-blue-pale px-2.5 py-1 rounded-full">
                  {sol.tag}
                </span>
              </div>

              <h3 className="font-display font-bold text-nota-navy text-xl mb-3 tracking-[-0.01em]">
                {sol.title}
              </h3>
              <p className="text-nota-gray text-sm leading-relaxed mb-6">
                {sol.description}
              </p>

              {/* Feature list */}
              <ul className="flex flex-col gap-2">
                {sol.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-nota-dark">
                    <span className="w-4 h-px bg-apma-blue shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              {/* Learn more link — nota.ai style */}
              <a
                href="#contact"
                className="link-underline inline-flex items-center gap-1.5 text-apma-blue text-sm font-medium mt-7 group"
              >
                Learn More
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
