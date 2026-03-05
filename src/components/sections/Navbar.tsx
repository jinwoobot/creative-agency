import { useState, useEffect } from 'react'
import { Logo } from '@/components/ui/Logo'
import { NAV_ITEMS } from '@/lib/data'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-black transition-shadow duration-300 ${
        scrolled ? 'shadow-[0_1px_0_rgba(255,255,255,0.06)]' : ''
      }`}
    >
      <nav className="max-w-screen-xl mx-auto px-8 md:px-12 flex items-center justify-between h-[70px]">
        <Logo />

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-10">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-[13px] font-medium text-white/55 hover:text-white transition-colors duration-200 tracking-wide"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:flex items-center gap-2 border border-white/20 px-5 py-2.5 text-[12px] font-semibold uppercase tracking-widest text-white/70 hover:border-white hover:text-white transition-all duration-200"
        >
          Start a Project
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center gap-[5px] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-px bg-white transition-all duration-300 ${
              menuOpen ? 'rotate-45 translate-y-[6px]' : ''
            }`}
          />
          <span
            className={`block w-6 h-px bg-white transition-all duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-px bg-white transition-all duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-[6px]' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-white/8 px-8 pt-6 pb-10">
          <ul className="flex flex-col gap-5 mb-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-2xl font-bold text-white/80 hover:text-white transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-white/30 px-5 py-3 text-[12px] font-semibold uppercase tracking-widest text-white/70"
            onClick={() => setMenuOpen(false)}
          >
            Start a Project
          </a>
        </div>
      )}
    </header>
  )
}
