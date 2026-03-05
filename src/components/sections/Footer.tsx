import { Logo } from '@/components/ui/Logo'
import { NAV_ITEMS } from '@/lib/data'

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 md:px-10 py-10">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <Logo />
        <nav className="flex flex-wrap gap-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-white/30 hover:text-white text-xs uppercase tracking-widest transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <p className="text-white/20 text-xs">
          © {new Date().getFullYear()} STUDIOFORM. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
