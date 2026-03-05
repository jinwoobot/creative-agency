import { useState } from 'react'
import { Logo } from '@/components/ui/Logo'
import { NAV_ITEMS } from '@/lib/data'

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black">
      <nav className="max-w-screen-xl mx-auto px-6 md:px-10 flex items-center justify-between h-14 md:h-16">
        <Logo />

        <ul className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-[13px] text-white/60 hover:text-white transition-colors duration-200"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:block text-[13px] text-white/60 hover:text-white transition-colors duration-200"
        >
          Contact
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-px bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[4px]' : ''}`} />
          <span className={`block w-5 h-px bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[4px]' : ''}`} />
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-black px-6 pb-8 pt-4">
          <ul className="flex flex-col gap-5">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-2xl font-bold text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
