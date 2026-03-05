import { Logo } from '@/components/ui/Logo'
import { NAV_ITEMS } from '@/lib/data'

export function Footer() {
  return (
    <footer className="border-t border-white/8 px-8 md:px-12">
      <div className="max-w-screen-xl mx-auto">
        {/* Main row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 py-12">
          <Logo />

          <nav className="flex flex-wrap gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[13px] text-white/40 hover:text-white transition-colors tracking-wide"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex gap-6">
            {['Instagram', 'LinkedIn', 'X'].map((s) => (
              <a
                key={s}
                href="#"
                className="text-[12px] text-white/30 hover:text-white transition-colors uppercase tracking-wide"
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
          <p className="text-[12px] text-white/20">
            © {new Date().getFullYear()} Wegooli Creative Lab. All rights reserved.
          </p>
          <p className="text-[12px] text-white/15 tracking-wider uppercase">
            The Optimization Navigator
          </p>
        </div>
      </div>
    </footer>
  )
}
