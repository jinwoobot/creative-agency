import { useState } from 'react'
import { SERVICES } from '@/lib/data'

export function Services() {
  const [openId, setOpenId] = useState<number | null>(1)

  return (
    <section id="services" className="py-24 md:py-32 px-6 md:px-10 bg-white text-black">
      <div className="max-w-screen-xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <p className="text-accent text-xs font-semibold uppercase tracking-[0.3em] mb-3">
            What We Do
          </p>
          <h2 className="text-5xl md:text-7xl font-black tracking-[-0.04em] leading-[0.9]">
            Our services.
          </h2>
        </div>

        {/* Accordion */}
        <div className="border-t border-black/10">
          {SERVICES.map((service, index) => {
            const isOpen = openId === service.id
            return (
              <div
                key={service.id}
                className="border-b border-black/10"
              >
                <button
                  className="w-full flex items-center justify-between py-6 md:py-8 text-left group"
                  onClick={() => setOpenId(isOpen ? null : service.id)}
                >
                  <div className="flex items-center gap-6 md:gap-10">
                    <span className="text-black/20 text-sm font-mono w-6 shrink-0">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3
                      className={`text-2xl md:text-4xl font-bold tracking-tight transition-colors duration-200 ${
                        isOpen ? 'text-accent' : 'group-hover:text-accent'
                      }`}
                    >
                      {service.title}
                    </h3>
                  </div>
                  <span
                    className={`text-xl font-light transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className="pb-8 pl-12 md:pl-16 pr-8">
                    <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                      <p className="text-black/60 text-base leading-relaxed md:max-w-md">
                        {service.description}
                      </p>
                      <ul className="flex flex-col gap-2 md:gap-3">
                        {service.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-3 text-sm font-medium text-black/80 uppercase tracking-widest"
                          >
                            <span className="w-4 h-px bg-accent" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
