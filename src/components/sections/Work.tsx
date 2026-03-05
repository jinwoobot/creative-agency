import { useState } from 'react'
import { PROJECTS } from '@/lib/data'

const CATEGORY_COLORS: Record<string, string> = {
  'Brand Design': 'bg-accent/10 text-accent border-accent/20',
  'Product Design': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  'Campaign': 'bg-green-500/10 text-green-400 border-green-500/20',
  'Digital Experience': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
}

export function Work() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="work" className="py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-screen-xl mx-auto">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
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

        {/* Project list */}
        <div className="border-t border-white/10">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className={`group relative border-b border-white/10 py-8 md:py-10 cursor-pointer transition-all duration-300 ${
                hoveredId === project.id ? 'pl-4 md:pl-6' : ''
              }`}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Hover accent bar */}
              <div
                className={`absolute left-0 top-0 bottom-0 w-1 bg-accent transition-all duration-300 ${
                  hoveredId === project.id ? 'opacity-100' : 'opacity-0'
                }`}
              />

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span
                      className={`text-xs font-semibold uppercase tracking-widest px-2.5 py-1 border rounded-full ${
                        CATEGORY_COLORS[project.category] ?? 'bg-white/10 text-white/60 border-white/10'
                      }`}
                    >
                      {project.category}
                    </span>
                    <span className="text-white/30 text-xs">{project.year}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight group-hover:text-accent transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-white/50 text-sm mt-1">{project.client}</p>
                </div>

                <div className="md:max-w-sm">
                  <p className="text-white/40 text-sm leading-relaxed mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-white/30 uppercase tracking-widest"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center shrink-0">
                  <span
                    className={`text-2xl transition-all duration-300 ${
                      hoveredId === project.id ? 'text-accent translate-x-2' : 'text-white/20'
                    }`}
                  >
                    →
                  </span>
                </div>
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
