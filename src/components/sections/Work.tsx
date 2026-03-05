import { useState } from 'react'
import { PROJECTS } from '@/lib/data'

export function Work() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="work" className="py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-screen-xl mx-auto">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-accent text-xs font-semibold uppercase tracking-[0.3em] mb-3">
              Selected Work
            </p>
            <h2 className="text-5xl md:text-7xl font-black tracking-[-0.04em] text-white leading-[0.9]">
              What we've<br />made.
            </h2>
          </div>
          <p className="text-white/40 text-sm md:text-base max-w-sm leading-relaxed">
            A selection of work from our studio. Every project starts with a question and ends with something unforgettable.
          </p>
        </div>

        {/* Project grid — large featured card on top, three below */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
          {/* Featured project — full width */}
          {PROJECTS.slice(0, 1).map((project) => (
            <div
              key={project.id}
              className="md:col-span-2 relative overflow-hidden cursor-pointer group aspect-[16/7]"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <img
                src={project.image}
                alt={project.title}
                className={`w-full h-full object-cover transition-transform duration-700 ${
                  hoveredId === project.id ? 'scale-105' : 'scale-100'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-white/60 text-xs font-semibold uppercase tracking-[0.2em]">
                    {project.category}
                  </span>
                  <span className="text-white/30 text-xs">·</span>
                  <span className="text-white/40 text-xs">{project.year}</span>
                </div>
                <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-2 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <div className="flex items-center justify-between gap-4">
                  <p className="text-white/50 text-sm md:text-base max-w-xl leading-relaxed">
                    {project.description}
                  </p>
                  <span
                    className={`text-3xl shrink-0 transition-all duration-300 ${
                      hoveredId === project.id ? 'text-accent translate-x-2' : 'text-white/20'
                    }`}
                  >
                    →
                  </span>
                </div>
              </div>
            </div>
          ))}

          {/* Remaining projects */}
          {PROJECTS.slice(1).map((project) => (
            <div
              key={project.id}
              className="relative overflow-hidden cursor-pointer group aspect-[4/3]"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <img
                src={project.image}
                alt={project.title}
                className={`w-full h-full object-cover transition-transform duration-700 ${
                  hoveredId === project.id ? 'scale-105' : 'scale-100'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                <span className="text-white/50 text-xs font-semibold uppercase tracking-[0.2em] mb-2">
                  {project.category} · {project.year}
                </span>
                <h3 className="text-xl md:text-2xl font-black text-white tracking-tight mb-2 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] text-white/30 uppercase tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div
                className={`absolute top-6 right-6 text-2xl transition-all duration-300 ${
                  hoveredId === project.id ? 'text-accent opacity-100' : 'opacity-0'
                }`}
              >
                →
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-end">
          <a
            href="#contact"
            className="text-white/40 hover:text-white text-sm uppercase tracking-widest transition-colors flex items-center gap-2"
          >
            See all projects <span>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
