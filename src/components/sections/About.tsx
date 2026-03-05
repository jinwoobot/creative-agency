import { useT } from '@/hooks/useT'
import { TEAM_MEMBERS } from '@/lib/data'

const STUDIO_IMAGE =
  'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80'

export function About() {
  const t = useT()

  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-screen-xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <p className="text-accent text-[11px] font-semibold uppercase tracking-[0.3em] mb-3">
            {t('about_eyebrow')}
          </p>
          <h2 className="text-5xl md:text-7xl font-black tracking-[-0.04em] leading-[0.9] text-white mb-8">
            {t('about_title_1')}<br />
            <span className="text-accent">{t('about_title_2')}</span>
          </h2>
          <p className="text-white/50 text-base md:text-lg leading-relaxed max-w-2xl">
            {t('about_sub')}
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
            <p className="text-white/40 text-[10px] uppercase tracking-[0.25em]">
              WCL HQ · Seoul, KR
            </p>
          </div>
          {/* Brand pill */}
          <div className="absolute top-8 right-8 md:top-10 md:right-10 border border-white/20 px-4 py-2 backdrop-blur-sm bg-black/30">
            <p className="text-white text-[10px] font-bold uppercase tracking-[0.2em]">
              The Optimization Navigator
            </p>
          </div>
        </div>

        {/* Manifesto */}
        <div className="border-l-[3px] border-accent pl-8 md:pl-12 mb-24">
          <blockquote className="text-xl md:text-3xl font-bold text-white leading-snug tracking-tight max-w-3xl">
            {t('about_quote')}
          </blockquote>
          <p className="text-white/35 text-[11px] mt-5 uppercase tracking-[0.25em]">
            {t('about_quote_attr')}
          </p>
        </div>

        {/* Team grid */}
        <div>
          <p className="text-white/30 text-[11px] font-semibold uppercase tracking-[0.3em] mb-10">
            Our People
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-white/8">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.id}
                className="relative overflow-hidden group cursor-pointer"
              >
                {/* Photo */}
                <div className="aspect-[3/4] overflow-hidden bg-white/5">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                  />
                </div>

                {/* Gradient + name (always visible) */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/60 to-transparent pt-10 p-4">
                  <h3 className="text-white font-bold text-sm tracking-tight leading-tight">
                    {member.name}
                  </h3>
                  <p className="text-white/40 text-[9px] uppercase tracking-[0.2em] mt-0.5">
                    {member.role}
                  </p>
                </div>

                {/* Bio on hover */}
                <div className="absolute inset-0 bg-black/75 flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center">
                    <p className="text-accent font-black text-sm mb-2">{member.name}</p>
                    <p className="text-white/70 text-[11px] leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
