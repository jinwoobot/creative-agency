import { Logo } from '@/components/ui/Logo'
import { NAV_ITEMS } from '@/lib/data'

export function Footer() {
  return (
    <footer className="border-t border-hailor-white/10 px-6 md:px-10 py-10">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <Logo />
        <nav className="flex flex-wrap gap-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-hailor-white/30 hover:text-hailor-cobalt text-xs uppercase tracking-widest transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex flex-col gap-1 text-right">
          <p className="text-hailor-white/20 text-xs">
            © 2026 Hailor AI. All rights reserved.
          </p>
          <p className="text-hailor-white/15 text-xs">
            Seoul | Global Operations
          </p>
        </div>
      </div>
    </footer>
  )
}
