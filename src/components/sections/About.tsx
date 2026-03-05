import { TEAM_MEMBERS } from '@/lib/data'

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 px-6 md:px-10">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-[13px] text-white/40 uppercase tracking-wide mb-12">
          About
        </h2>

        <div className="mb-20 max-w-4xl">
          <p className="text-3xl md:text-5xl font-bold text-white leading-snug tracking-tight mb-8">
            We chart the horizon of business, optimizing every inefficiency on the route.
          </p>
          <p className="text-white/50 text-base md:text-lg leading-relaxed max-w-2xl">
            WCL is a hyper-operation group that integrates strategy, technology, and creativity to maximize business operational capacity. We don't talk about vague expansion — we automate complex processes with AI and elevate the intelligence of entire organizations.
          </p>
        </div>

        {/* Team */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {TEAM_MEMBERS.map((member) => (
            <div key={member.id} className="group">
              <div className="aspect-[3/4] overflow-hidden mb-3">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-sm font-semibold text-white">{member.name}</h3>
              <p className="text-[12px] text-white/40 mt-0.5">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
