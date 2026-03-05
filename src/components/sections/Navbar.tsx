import { useState } from 'react'
import { Logo } from '@/components/ui/Logo'
import { LanguageToggle } from '@/components/ui/LanguageToggle'
import { NAV_ITEMS } from '@/lib/data'

const TICKER_TEXT =
  'THE OPTIMIZATION NAVIGATOR · NAVIGATING BUSINESS TOWARD THE HORIZON · HYPER-OPERATION GROUP · WCL · '

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black">
      {/* Ticker bar */}
      <div className="border-b border-white/8 overflow-hidden h-7 flex items-center">
        <div className="flex animate-marquee whitespace-nowrap">
          {/* Duplicate for seamless loop */}
          {[0, 1].map((i) => (
            <span key={i} className="text-[10px] font-semibold tracking-[0.25em] text-white/25 uppercase pr-8">
              {TICKER_TEXT}
            </span>
          ))}
        </div>
      </div>

      {/* Main nav */}
      <nav className="border-b border-white/8 px-6 md:px-10 flex items-center justify-between h-16">
        <Logo />

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-xs font-semibold text-white/50 hover:text-white transition-colors duration-200 uppercase tracking-[0.18em]"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: language toggle + CTA */}
        <div className="hidden md:flex items-center gap-4">
          <LanguageToggle />
          <a
            href="#contact"
            className="text-xs font-bold uppercase tracking-[0.18em] border border-white/20 px-4 py-2.5 text-white/70 hover:text-white hover:border-white transition-all duration-200"
          >
            Start a Project
          </a>
        </div>

        {/* Mobile: language + hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <LanguageToggle />
          <button
            className="flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-black border-b border-white/10 px-6 py-8">
          <ul className="flex flex-col gap-6">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-3xl font-black uppercase tracking-tight text-white hover:text-accent transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 border border-white text-white text-xs font-bold uppercase tracking-widest px-5 py-3 hover:bg-white hover:text-black transition-all duration-200"
            onClick={() => setMenuOpen(false)}
          >
            Start a Project
          </a>
        </div>
      )}
    </header>
  )
}
