'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, Monitor, Database, Users, BarChart, Globe, Zap } from 'lucide-react'

const NAV_LINKS = [
  { 
    label: 'Inicio', 
    href: '/' 
  },
  { 
    label: 'Servicios', 
    href: '/servicios',
    dropdown: [
      { label: 'Páginas Web', href: '/servicios/web', icon: Globe },
      { label: 'Sistemas ERP', href: '/servicios/erp', icon: Database },
      { label: 'Sistemas CRM', href: '/servicios/crm', icon: Users },
      { label: 'Automatización', href: '/servicios/automatizacion', icon: Zap },
    ]
  },
  { 
    label: 'Soluciones', 
    href: '/soluciones',
    dropdown: [
      { label: 'Más Folios', href: '/soluciones/folios', icon: Monitor },
      { label: 'Todo Digital', href: '/soluciones/digital', icon: BarChart },
      { label: 'Aplicaciones', href: '/soluciones/apps', icon: Globe },
    ]
  },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Proyectos', href: '/proyectos' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0, 85, 204, 0.1)' : 'none',
        height: '80px',
      }}
    >
      <div className="container h-full">
        <div className="flex items-center justify-between h-full">

          {/* ── Logo ── */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 flex items-center justify-center font-black text-sm italic text-white rounded-lg transition-transform duration-300 group-hover:scale-110"
                 style={{ background: 'linear-gradient(135deg, #0055cc, #00aaff)' }}>
              MG
              <div className="absolute -inset-1 rounded-lg opacity-20 group-hover:opacity-40 transition-opacity" style={{ background: '#0055cc', filter: 'blur(8px)' }} />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-xl font-black tracking-tight" style={{ color: 'var(--white)' }}>
                MG<span style={{ color: '#0055cc' }}>.DIGUITAL</span>
              </span>
              <span className="text-[9px] font-mono tracking-[0.25em] uppercase mt-1" style={{ color: 'var(--slate)' }}>
                Ingeniería · Software · Futuro
              </span>
            </div>
          </Link>

          {/* ── Desktop Nav ── */}
          <nav className="hidden lg:flex items-center gap-2 h-full">
            {NAV_LINKS.map(link => (
              <div 
                key={link.label}
                className="relative h-full flex items-center"
                onMouseEnter={() => setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="px-4 py-2 text-sm font-semibold flex items-center gap-1.5 transition-colors duration-200"
                  style={{
                    color: pathname === link.href ? '#0055cc' : 'var(--white)',
                  }}
                >
                  {link.label}
                  {link.dropdown && (
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === link.label ? 'rotate-180' : ''}`} />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {link.dropdown && (
                  <div 
                    className={`absolute top-full left-0 w-64 pt-2 transition-all duration-300 ${activeDropdown === link.label ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}
                  >
                    <div className="bg-white rounded-xl shadow-2xl border border-slate-100 p-2 overflow-hidden">
                      {link.dropdown.map(item => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group/item"
                        >
                          <div className="w-8 h-8 rounded-md bg-blue-50 flex items-center justify-center text-blue-600 group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors">
                            <item.icon className="w-4 h-4" />
                          </div>
                          <span className="text-sm font-bold text-slate-700 group-hover/item:text-blue-600">
                            {item.label}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* ── CTA ── */}
          <div className="flex items-center gap-4">
            <Link
              href="https://wa.me/56929645522"
              target="_blank"
              className="hidden md:inline-flex px-6 py-3 bg-[#0055cc] text-white text-xs font-black uppercase tracking-widest rounded-full shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all active:scale-95"
            >
              Cotizar Proyecto
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
        className={`lg:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-2xl transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-[80vh] opacity-100 visible' : 'max-h-0 opacity-0 invisible'}`}
      >
        <div className="container py-8 flex flex-col gap-4">
          {NAV_LINKS.map(link => (
            <div key={link.label}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-lg font-bold text-slate-900 flex items-center justify-between"
              >
                {link.label}
              </Link>
              {link.dropdown && (
                <div className="mt-2 ml-4 flex flex-col gap-2 border-l-2 border-blue-50 pl-4">
                  {link.dropdown.map(item => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="text-sm font-medium text-slate-500 py-1"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href="https://wa.me/56929645522"
            target="_blank"
            className="mt-6 w-full py-4 bg-[#0055cc] text-white text-center font-black uppercase tracking-widest rounded-xl"
          >
            Cotizar Proyecto
          </Link>
        </div>
      </div>
    </header>
  )
}

