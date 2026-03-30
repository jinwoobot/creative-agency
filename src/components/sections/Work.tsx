import { PARTNERS, NEWS_ITEMS, BLOG_POSTS } from '@/lib/data'

const PARTNER_ROW_1 = PARTNERS.slice(0, 6)
const PARTNER_ROW_2 = PARTNERS.slice(6)

function PartnerLogo({ name }: { name: string }) {
  return (
    <div className="shrink-0 mx-6 flex items-center justify-center">
      <span className="text-nota-gray/60 font-semibold text-sm md:text-base tracking-wide whitespace-nowrap hover:text-apma-blue transition-colors">
        {name}
      </span>
    </div>
  )
}

export function Work() {
  return (
    <>
      {/* Business Cases — APMA card layout */}
      <section id="cases" className="py-20 md:py-28 px-6 md:px-10 bg-white">
        <div className="max-w-content mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-apma-blue text-xs font-semibold uppercase tracking-[0.25em] mb-3">
                Selected Projects
              </p>
              <h2 className="font-display font-bold text-nota-navy text-4xl md:text-5xl tracking-[-0.02em] leading-tight">
                Business Cases
              </h2>
            </div>
            <a href="#contact" className="link-underline text-apma-blue text-sm font-medium flex items-center gap-1.5 group">
              Start a project
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                client: 'Freez Mobility',
                title: 'AI Agent Fleet Management',
                result: '과태료 자동이관 및 사고 리스크 관리 에이전트 구축',
                category: 'Fleet AI',
                image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&auto=format&fit=crop&q=80',
              },
              {
                client: 'Living Space',
                title: 'Smart Assets OS',
                result: '코리빙 및 임대 자산 관리 자동화 솔루션',
                category: 'Asset OS',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80',
              },
              {
                client: 'Professional Services',
                title: 'Subscription Advisory',
                result: '사외이사 및 탑급 세일즈 팀장 구독 플랫폼 인프라',
                category: 'Advisory',
                image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&auto=format&fit=crop&q=80',
              },
            ].map((c) => (
              <div key={c.client} className="bg-nota-card rounded-lg border border-nota-border overflow-hidden card-hover shadow-card group">
                <div className="h-44 overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-apma-blue text-xs font-semibold uppercase tracking-widest bg-apma-blue-pale px-2.5 py-1 rounded-full">
                      {c.category}
                    </span>
                  </div>
                  <p className="text-nota-gray text-xs uppercase tracking-widest mb-1">{c.client}</p>
                  <h3 className="font-display font-bold text-nota-navy text-lg mb-2 tracking-[-0.01em]">{c.title}</h3>
                  <p className="text-nota-gray text-sm leading-relaxed">{c.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner logos marquee — nota.ai style */}
      <section className="py-14 bg-nota-bg border-y border-nota-border overflow-hidden">
        <div className="max-w-content mx-auto px-6 md:px-10 mb-8">
          <p className="text-nota-gray text-xs font-semibold uppercase tracking-[0.25em] text-center">
            Trusted Partners & Technology Stack
          </p>
        </div>

        {/* Row 1 — left scroll */}
        <div className="overflow-hidden mb-4">
          <div className="marquee-track-left">
            {[...PARTNER_ROW_1, ...PARTNER_ROW_1].map((p, i) => (
              <PartnerLogo key={`r1-${i}`} name={p.name} />
            ))}
          </div>
        </div>

        {/* Row 2 — right scroll */}
        <div className="overflow-hidden">
          <div className="marquee-track-right">
            {[...PARTNER_ROW_2, ...PARTNER_ROW_2].map((p, i) => (
              <PartnerLogo key={`r2-${i}`} name={p.name} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsroom — nota.ai style */}
      <section id="news" className="py-20 md:py-28 px-6 md:px-10 bg-white">
        <div className="max-w-content mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-apma-blue text-xs font-semibold uppercase tracking-[0.25em] mb-3">
                Newsroom
              </p>
              <h2 className="font-display font-bold text-nota-navy text-3xl md:text-4xl tracking-[-0.02em]">
                Stay Ahead with the Latest AI Insights
              </h2>
            </div>
            <a href="#contact" className="link-underline text-apma-blue text-sm font-medium flex items-center gap-1.5 group shrink-0">
              All News
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {NEWS_ITEMS.map((item) => (
              <article key={item.id} className="bg-nota-card rounded-lg border border-nota-border overflow-hidden card-hover shadow-card group">
                <div className="h-44 overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-apma-blue text-xs font-semibold uppercase tracking-widest bg-apma-blue-pale px-2.5 py-1 rounded-full">
                      {item.category}
                    </span>
                    <span className="text-nota-gray text-xs">{item.date}</span>
                  </div>
                  <h3 className="font-display font-bold text-nota-navy text-base leading-snug mb-2 tracking-[-0.01em] group-hover:text-apma-blue transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-nota-gray text-sm leading-relaxed line-clamp-2">{item.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Blog — nota.ai style */}
      <section className="py-20 md:py-24 px-6 md:px-10 bg-nota-bg">
        <div className="max-w-content mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <h2 className="font-display font-bold text-nota-navy text-3xl md:text-4xl tracking-[-0.02em]">
              Tech Blog
            </h2>
            <a href="#contact" className="link-underline text-apma-blue text-sm font-medium flex items-center gap-1.5 group shrink-0">
              Read More
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post) => (
              <article key={post.id} className="bg-nota-card rounded-lg border border-nota-border overflow-hidden card-hover shadow-card group">
                <div className="h-40 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-nota-gray text-xs">{post.date}</span>
                  </div>
                  <h3 className="font-display font-bold text-nota-navy text-base leading-snug tracking-[-0.01em] group-hover:text-apma-blue transition-colors">
                    {post.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
