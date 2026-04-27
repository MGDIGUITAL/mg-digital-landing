'use client'

import { useState, useEffect } from 'react'
import { useLocale } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { href: '#inicio',     label: 'INICIO' },
  { href: '#servicios',  label: 'SERVICIOS' },
  { href: '#soluciones', label: 'SOLUCIONES' },
  { href: '#nosotros',   label: 'NOSOTROS' },
  { href: '#proyectos',  label: 'PROYECTOS' },
  { href: '#contacto',   label: 'CONTACTO' },
]

export default function Navbar() {
  const locale   = useLocale()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: isScrolled ? 'rgba(2,6,23,0.95)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(15px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 lg:h-28">

          {/* Logo & Subtitle */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <div className="w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center border-2 border-blue-500/50 group-hover:border-blue-400 transition-all shadow-[0_0_15px_rgba(0,163,255,0.3)]">
                <span className="text-xl lg:text-2xl font-black text-white italic">MG</span>
            </div>
            <div className="flex flex-col -gap-1">
              <span className="text-lg lg:text-xl font-black tracking-tight leading-none">
                <span className="text-white">MG</span>
                <span style={{ color: 'var(--blue-neon)' }}>.DIGUITAL</span>
              </span>
              <span className="text-[8px] lg:text-[9px] font-mono tracking-[0.2em] text-white/40 uppercase">
                SOFTWARE | ERP | CRM | WEB
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-[11px] font-bold tracking-[0.15em] text-white/70 hover:text-white transition-all group py-2"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Right Side: Lang + CTA */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-2 text-[11px] font-bold tracking-widest text-white/50">
              <span className="text-white hover:text-blue-400 cursor-pointer transition-colors">ES</span>
              <span className="opacity-20">|</span>
              <span className="hover:text-blue-400 cursor-pointer transition-colors">CL</span>
            </div>

            <a
              href="#contacto"
              className="px-8 py-3.5 text-[11px] font-black uppercase tracking-[0.2em] bg-blue-600 text-white shadow-[0_0_20px_rgba(0,163,255,0.4)] hover:bg-blue-500 hover:scale-105 transition-all duration-300"
            >
              CONSULTAR
            </a>
          </div>

          {/* Mobile button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-white">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-500 overflow-hidden ${isMenuOpen ? 'max-h-screen border-t border-white/5 bg-slate-950' : 'max-h-0'}`}>
        <div className="p-8 flex flex-col gap-6">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-sm font-bold tracking-widest text-white/70 hover:text-blue-400">
              {link.label}
            </a>
          ))}
          <a href="#contacto" className="w-full py-4 bg-blue-600 text-center font-black tracking-widest text-xs">CONSULTAR</a>
        </div>
      </div>
    </nav>
  )
}
