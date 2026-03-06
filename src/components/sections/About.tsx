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
            We are<br />
            W<span className="text-accent font-thin">/</span>CL.
          </h2>
          <p className="text-white/50 text-base md:text-xl leading-relaxed max-w-2xl">
            Founded in Seoul. Operating globally. W/CL (Wegooli Creative Lab) is a Hyper-Operation group — we integrate strategy, technology, and creative to maximize your business's operational fitness.
          </p>
        </div>

        {/* Two-column content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 mb-24">
          <div>
            <h3 className="text-white font-black text-2xl tracking-tight mb-4">
              The Optimization Navigator
            </h3>
            <p className="text-white/50 text-base leading-relaxed">
              With the spirit of a sailor navigating toward the horizon, we analyze every process in your business and sharpen it to its most efficient state. We don't talk about vague expansion — we focus on optimizing your business engine using real operational data we've proven ourselves.
            </p>
          </div>
          <div>
            <h3 className="text-white font-black text-2xl tracking-tight mb-4">
              A Living Business OS
            </h3>
            <p className="text-white/50 text-base leading-relaxed">
              The Business OS we design is not a fixed system. It's a living system that flexibly evolves with its environment to find optimal efficiency. Even after delivery, we provide AI empowerment training so your team can independently navigate and optimize the route — elevating your entire organization's intelligence.
            </p>
          </div>
        </div>

        {/* Manifesto block */}
        <div className="border-l-4 border-accent pl-8 md:pl-12 mb-24">
          <blockquote className="text-2xl md:text-4xl font-bold text-white leading-snug tracking-tight max-w-3xl">
            "우리는 비즈니스의 수평선을 넓히고, 그 항로 위의 모든 비효율을 최적화합니다."
          </blockquote>
          <p className="text-white/40 text-sm mt-4 uppercase tracking-widest">
            Ji-won Park — Executive Creative Director, W/CL
          </p>
        </div>

        {/* Three pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 mb-24">
          {[
            {
              label: '자산의 최적화',
              title: 'Asset Optimization',
              desc: 'Carsharing, co-living, and idle assets — we maximize the return on every resource you already own.',
            },
            {
              label: '운영의 최적화',
              title: 'Operations Optimization',
              desc: 'AI-driven automation eliminates repetitive tasks and human error from your core workflows.',
            },
            {
              label: '조직의 최적화',
              title: 'Organizational Optimization',
              desc: 'Through training, we make every member of your team a confident AI operator.',
            },
          ].map((pillar) => (
            <div key={pillar.title} className="bg-black p-8 group hover:bg-accent transition-colors duration-300">
              <p className="text-accent group-hover:text-white/70 text-xs uppercase tracking-widest mb-3 transition-colors duration-300">
                {pillar.label}
              </p>
              <h4 className="text-white font-bold text-lg tracking-tight mb-3">
                {pillar.title}
              </h4>
              <p className="text-white/40 group-hover:text-white/60 text-sm leading-relaxed transition-colors duration-300">
                {pillar.desc}
              </p>
            </div>
          ))}
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
                <div className="w-14 h-14 bg-white/10 group-hover:bg-white/20 mb-6 flex items-center justify-center text-white/20 font-black text-xl transition-colors duration-300">
                  {member.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <h3 className="text-white font-bold text-lg tracking-tight mb-1">
                  {member.name}
                </h3>
                <p className="text-white/50 group-hover:text-white/70 text-xs uppercase tracking-widest mb-4 transition-colors duration-300">
                  {member.role}
                </p>
                <p className="text-white/40 group-hover:text-white/60 text-sm leading-relaxed transition-colors duration-300">
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
