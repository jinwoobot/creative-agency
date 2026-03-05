import { PROJECTS } from '@/lib/data'

export function Work() {
  return (
    <section id="work" className="py-20 md:py-28 px-6 md:px-10">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-[13px] text-white/40 uppercase tracking-wide mb-12">
          Selected Work
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative overflow-hidden aspect-[16/10] mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-[#FF0000] transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-[13px] text-white/40 mt-1">
                    {project.client}
                  </p>
                </div>
                <span className="text-[13px] text-white/30 shrink-0">
                  {project.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
