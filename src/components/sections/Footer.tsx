import { Logo } from '@/components/ui/Logo'
import { NAV_ITEMS } from '@/lib/data'

export function Footer() {
  return (
    <footer className="bg-nota-navy text-white">
      {/* Top bar */}
      <div className="max-w-content mx-auto px-6 md:px-10 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-1">
          <Logo inverted />
          <p className="text-white/45 text-sm leading-relaxed mt-4 max-w-[200px]">
            The Intelligence that Drives the Mission.
          </p>
        </div>

        {/* Nav columns */}
        {NAV_ITEMS.map((item) => (
          <div key={item.href}>
            <h4 className="text-white/80 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              {item.label}
            </h4>
            <ul className="flex flex-col gap-2">
              {(item.children ?? [{ label: item.label, href: item.href }]).map((child) => (
                <li key={child.href + child.label}>
                  <a
                    href={child.href}
                    className="text-white/40 hover:text-white text-sm transition-colors"
                  >
                    {child.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-content mx-auto px-6 md:px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            © 2026 Hailor AI. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            Seoul | Global Operations
          </p>
          <div className="flex gap-5">
            {['LinkedIn', 'Twitter(X)', 'GitHub'].map((s) => (
              <a key={s} href="#" className="text-white/30 hover:text-white text-xs transition-colors">
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
