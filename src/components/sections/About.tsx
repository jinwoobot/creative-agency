import { TEAM_MEMBERS } from '@/lib/data'

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-screen-xl mx-auto">
        {/* Section header */}
        <div className="mb-20">
          <p className="text-accent text-xs font-semibold uppercase tracking-[0.3em] mb-3">
            About Us
          </p>
          <h2 className="text-5xl md:text-7xl font-black tracking-[-0.04em] leading-[0.9] text-white mb-8">
            We are<br />STUDIOFORM.
          </h2>
          <p className="text-white/50 text-base md:text-xl leading-relaxed max-w-2xl">
            Founded in Seoul. Operating globally. We are an independent creative company built for a world where every brand must be a technology company, and every technology company must be a brand.
          </p>
        </div>

        {/* Manifesto block */}
        <div className="border-l-4 border-accent pl-8 md:pl-12 mb-24">
          <blockquote className="text-2xl md:text-4xl font-bold text-white leading-snug tracking-tight max-w-3xl">
            "The best creative work doesn't just look good. It changes how people feel about something — permanently."
          </blockquote>
          <p className="text-white/40 text-sm mt-4 uppercase tracking-widest">
            Ji-won Park — Executive Creative Director
          </p>
        </div>

        {/* Team grid */}
        <div>
          <p className="text-white/40 text-xs font-semibold uppercase tracking-[0.3em] mb-10">
            Our People
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.id}
                className="bg-black p-8 group hover:bg-accent transition-colors duration-300"
              >
                {/* Avatar placeholder */}
                <div className="w-14 h-14 bg-white/10 group-hover:bg-white/20 mb-6 flex items-center justify-center text-white/20 font-black text-xl">
                  {member.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <h3 className="text-white font-bold text-lg tracking-tight mb-1">
                  {member.name}
                </h3>
                <p className="text-white/50 group-hover:text-white/70 text-xs uppercase tracking-widest mb-4">
                  {member.role}
                </p>
                <p className="text-white/40 group-hover:text-white/60 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
