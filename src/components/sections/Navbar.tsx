import { useState, useEffect } from 'react'
import { Logo } from '@/components/ui/Logo'
import { NAV_ITEMS } from '@/lib/data'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-nota-border'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-content mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-[68px]">
        <Logo inverted={!scrolled} />

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <li
              key={item.href}
              className="relative group"
              onMouseEnter={() => setOpenSubmenu(item.label)}
              onMouseLeave={() => setOpenSubmenu(null)}
            >
              <a
                href={item.href}
                className={`flex items-center gap-1 text-[13px] font-medium px-3 py-2 rounded transition-colors duration-150 ${
                  scrolled
                    ? 'text-nota-dark hover:text-apma-blue hover:bg-apma-blue-pale'
                    : 'text-white/85 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
                {item.children && (
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="opacity-60">
                    <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </a>

              {/* Dropdown */}
              {item.children && openSubmenu === item.label && (
                <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded shadow-card border border-nota-border py-1 z-50">
                  {item.children.map((child) => (
                    <a
                      key={child.href + child.label}
                      href={child.href}
                      className="block px-4 py-2.5 text-[13px] text-nota-dark hover:text-apma-blue hover:bg-apma-blue-pale transition-colors"
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className={`text-[13px] font-medium px-4 py-2 rounded border transition-all duration-150 ${
              scrolled
                ? 'border-apma-blue text-apma-blue hover:bg-apma-blue hover:text-white'
                : 'border-white/70 text-white hover:bg-white hover:text-nota-navy'
            }`}
          >
            Contact Us
          </a>
          <a
            href="#labs"
            className="text-[13px] font-medium px-4 py-2 rounded bg-apma-blue text-white hover:bg-apma-blue-mid transition-all duration-150"
          >
            Get Started
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden flex flex-col gap-1.5 p-2 ${scrolled ? '' : 'text-white'}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? 'bg-nota-navy' : 'bg-white'} ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? 'bg-nota-navy' : 'bg-white'} ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? 'bg-nota-navy' : 'bg-white'} ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-nota-border px-6 py-6 shadow-lg">
          <ul className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block py-3 text-base font-medium text-nota-dark hover:text-apma-blue border-b border-nota-border/50 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="mt-6 inline-flex items-center gap-2 bg-apma-blue text-white text-sm font-medium px-6 py-3 rounded hover:bg-apma-blue-mid transition-all duration-150"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </a>
        </div>
      )}
    </header>
  )
}
