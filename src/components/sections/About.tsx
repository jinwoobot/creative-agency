import { TEAM_MEMBERS } from '@/lib/data'

const STUDIO_IMAGE = 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80'

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-screen-xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <p className="text-accent text-xs font-semibold uppercase tracking-[0.3em] mb-3">
            About Us
          </p>
          <h2 className="text-5xl md:text-7xl font-black tracking-[-0.04em] leading-[0.9] text-white mb-8">
            We are<br />WCL.
          </h2>
          <p className="text-white/50 text-base md:text-xl leading-relaxed max-w-2xl">
            Founded in Seoul. Operating globally. Wegooli Creative Lab is an independent creative company built for a world where every brand must be a technology company, and every technology company must be a brand.
          </p>
        </div>

        {/* Studio image */}
        <div className="relative mb-20 overflow-hidden aspect-[21/9]">
          <img
            src={STUDIO_IMAGE}
            alt="WCL Studio"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
            <p className="text-white/40 text-xs uppercase tracking-widest">Our Studio · Seoul, KR</p>
          </div>
        </div>

        {/* Manifesto block */}
        <div className="border-l-4 border-accent pl-8 md:pl-12 mb-24">
          <blockquote className="text-2xl md:text-4xl font-bold text-white leading-snug tracking-tight max-w-3xl">
            "The best creative work doesn't just look good. It changes how people feel about something — permanently."
          </blockquote>
          <p className="text-white/40 text-sm mt-4 uppercase tracking-widest">
            Jinwoo Choi — Executive Creative Director
          </p>
        </div>

        {/* Team grid */}
        <div>
          <p className="text-white/40 text-xs font-semibold uppercase tracking-[0.3em] mb-10">
            Our People
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-white/10">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.id}
                className="relative overflow-hidden group cursor-pointer"
              >
                {/* Photo */}
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300" />
                {/* Name & role always visible at bottom */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">
                  <h3 className="text-white font-bold text-sm tracking-tight leading-tight">
                    {member.name}
                  </h3>
                  <p className="text-white/50 text-[10px] uppercase tracking-widest mt-0.5">
                    {member.role}
                  </p>
                </div>
                {/* Bio on hover */}
                <div className="absolute inset-0 flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white/80 text-xs leading-relaxed text-center mt-[-2rem]">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
