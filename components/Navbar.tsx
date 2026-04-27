'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, Send } from 'lucide-react'

const NAV_LINKS = [
  { label: 'INICIO', href: '/' },
  { label: 'SERVICIOS', href: '/servicios', hasDropdown: true },
  { label: 'SISTEMAS', href: '/sistemas', hasDropdown: true },
  { label: 'ERP', href: '/erp', hasDropdown: true },
  { label: 'FOLIOS', href: '/folios', hasDropdown: true },
  { label: 'NOSOTROS', href: '/nosotros' },
  { label: 'CONTACTO', href: '/contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white"
      style={{
        boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.05)' : 'none',
        height: '90px',
      }}
    >
      <div className="container h-full">
        <div className="flex items-center justify-between h-full">

          {/* ── Logo ── */}
          <Link href="/" className="flex flex-col justify-center gap-0.5 group">
            <span className="text-3xl font-black tracking-tight flex items-baseline">
              <span className="text-[#0055cc]">MG</span>
              <span className="text-slate-800">.DIGUITAL</span>
            </span>
            <span className="text-[9px] font-bold tracking-[0.1em] text-slate-500 uppercase">
              Soluciones Digitales a tu medida
            </span>
          </Link>

          {/* ── Desktop Nav ── */}
          <nav className="hidden lg:flex items-center gap-6 h-full ml-auto mr-8">
            {NAV_LINKS.map(link => {
              const isActive = pathname === link.href || (link.href === '/' && pathname === '/es')
              return (
                <div key={link.label} className="relative h-full flex items-center group cursor-pointer">
                  <Link
                    href={link.href}
                    className="text-[13px] font-bold text-slate-700 flex items-center gap-1 transition-colors hover:text-[#0055cc]"
                  >
                    {link.label}
                    {link.hasDropdown && <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0055cc]" />}
                  </Link>
                  {/* Active Indicator */}
                  {isActive && (
                    <div className="absolute bottom-[28px] left-0 right-0 h-0.5 bg-[#0055cc] rounded-full" />
                  )}
                </div>
              )
            })}
          </nav>

          {/* ── CTA ── */}
          <div className="flex items-center gap-4">
            <Link
              href="https://wa.me/56929645522"
              target="_blank"
              className="hidden md:flex items-center gap-2 px-6 py-3 bg-[#0055cc] text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Cotizar proyecto <Send className="w-4 h-4" />
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 text-slate-900"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      <div 
        className={`lg:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-2xl transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-[80vh] opacity-100 visible py-4' : 'max-h-0 opacity-0 invisible py-0'}`}
      >
        <div className="container flex flex-col gap-2">
          {NAV_LINKS.map(link => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-bold text-slate-700 flex items-center justify-between p-3 rounded-lg hover:bg-slate-50"
            >
              {link.label}
              {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
            </Link>
          ))}
          <Link
            href="https://wa.me/56929645522"
            target="_blank"
            className="mt-4 flex items-center justify-center gap-2 w-full py-4 bg-[#0055cc] text-white text-sm font-semibold rounded-xl"
          >
            Cotizar proyecto <Send className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </header>
  )
}

