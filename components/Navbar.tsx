'use client'

import { useState, useEffect } from 'react'
import { useLocale } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const LOCALES = [
  { code: 'es', flag: '🇨🇱', name: 'ES' },
  { code: 'en', flag: '🇺🇸', name: 'EN' },
  { code: 'ru', flag: '🇷🇺', name: 'RU' },
  { code: 'pt', flag: '🇧🇷', name: 'PT' },
  { code: 'fr', flag: '🇫🇷', name: 'FR' },
  { code: 'it', flag: '🇮🇹', name: 'IT' },
  { code: 'zh', flag: '🇨🇳', name: 'ZH' },
] as const

const NAV_LINKS = [
  { href: '#servicios',  label: 'Servicios' },
  { href: '#soluciones', label: 'Soluciones' },
  { href: '#nosotros',   label: 'Nosotros' },
  { href: '#contacto',   label: 'Proyectos' },
]

export default function Navbar() {
  const locale   = useLocale()
  const router   = useRouter()
  const pathname = usePathname()

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const currentLocale = LOCALES.find((l) => l.code === locale) ?? LOCALES[0]

  function handleLocaleChange(newLocale: string) {
    const segments = pathname.split('/')
    segments[1] = newLocale
    router.push(segments.join('/'))
    setIsLangOpen(false)
    setIsMenuOpen(false)
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: isScrolled ? 'rgba(255,255,255,0.95)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        boxShadow: isScrolled ? '0 10px 40px -10px rgba(0,0,0,0.05)' : 'none',
        borderBottom: isScrolled ? '1px solid #f1f5f9' : '1px solid transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 lg:h-24">

          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2 group">
            <span className="text-2xl font-black uppercase tracking-tighter transition-transform duration-300 group-hover:scale-105">
              <span style={{ color: 'var(--blue-deep)' }}>MG</span>
              <span style={{ color: 'var(--blue-primary)' }}>.DIGUITAL</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-12">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300"
                style={{ color: isScrolled ? 'var(--text-muted)' : 'rgba(0,0,0,0.6)' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--blue-primary)' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = isScrolled ? 'var(--text-muted)' : 'rgba(0,0,0,0.6)' }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-3 px-4 py-2 text-[10px] font-mono uppercase tracking-widest border border-slate-200 transition-colors"
                style={{ color: 'var(--text-muted)' }}
              >
                <span>{currentLocale.flag}</span>
                <span>{currentLocale.name}</span>
              </button>

              {isLangOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setIsLangOpen(false)} />
                  <div className="absolute right-0 mt-2 w-32 bg-white border border-slate-100 shadow-xl z-50 rounded-lg overflow-hidden">
                    {LOCALES.map((loc) => (
                      <button
                        key={loc.code}
                        onClick={() => handleLocaleChange(loc.code)}
                        className="w-full flex items-center gap-3 px-4 py-3 text-[10px] font-mono transition-colors hover:bg-slate-50"
                        style={{ color: loc.code === locale ? 'var(--blue-primary)' : 'var(--text-muted)' }}
                      >
                        <span>{loc.flag}</span>
                        <span>{loc.name}</span>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            <a
              href="#contacto"
              className="px-8 py-4 text-[10px] font-black uppercase tracking-[0.2em] bg-blue-600 text-white rounded-sm transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5"
            >
              Consultar Proyecto
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2"
            style={{ color: 'var(--blue-deep)' }}
          >
            {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-500 overflow-hidden bg-white ${
          isMenuOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className="px-6 py-8 space-y-2 border-t border-slate-100">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-4 py-4 text-xs font-bold uppercase tracking-widest border-b border-slate-50 text-slate-600"
            >
              <span className="text-blue-500">→</span>
              {link.label}
            </a>
          ))}
          <div className="pt-8">
            <a
              href="#contacto"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center w-full py-5 text-xs font-black uppercase tracking-widest bg-blue-600 text-white"
            >
              Consultar Proyecto
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
