import { useState } from 'react'
import { SERVICES } from '@/lib/data'

export function Services() {
  const [openId, setOpenId] = useState<number | null>(1)

  return (
    <section id="services" className="py-20 md:py-28 px-6 md:px-10">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-[13px] text-white/40 uppercase tracking-wide mb-12">
          What We Do
        </h2>

        <div className="border-t border-white/10">
          {SERVICES.map((service) => {
            const isOpen = openId === service.id
            return (
              <div key={service.id} className="border-b border-white/10">
                <button
                  className="w-full flex items-center justify-between py-6 md:py-8 text-left group"
                  onClick={() => setOpenId(isOpen ? null : service.id)}
                >
                  <h3
                    className={`text-2xl md:text-4xl font-bold tracking-tight transition-colors duration-200 ${
                      isOpen ? 'text-[#FF0000]' : 'text-white group-hover:text-[#FF0000]'
                    }`}
                  >
                    {service.title}
                  </h3>
                  <span
                    className={`text-white/30 text-xl transition-transform duration-300 shrink-0 ml-4 ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className="pb-8 md:pb-10 md:pl-0">
                    <div className="flex flex-col md:flex-row gap-6 md:gap-16">
                      <p className="text-white/50 text-base leading-relaxed md:max-w-md">
                        {service.description}
                      </p>
                      <ul className="flex flex-col gap-2">
                        {service.items.map((item) => (
                          <li
                            key={item}
                            className="text-[13px] text-white/40"
                          >
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
