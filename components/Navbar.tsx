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

interface NavbarProps { compact?: boolean }

export default function Navbar({ compact = false }: NavbarProps) {
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
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: isScrolled || compact
          ? 'rgba(10,10,10,0.95)'
          : 'transparent',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        borderBottom: isScrolled ? '1px solid var(--border)' : '1px solid transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2 group">
            <span className="text-xl font-black uppercase tracking-tight">
              <span className="text-white">MG</span>
              <span style={{ color: 'var(--lime)' }}>.DIGUITAL</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-0">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-5 py-2 text-xs font-bold uppercase tracking-widest transition-all duration-200"
                style={{ color: 'var(--text-muted)' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--lime)' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-muted)' }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language selector */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 px-3 py-2 text-xs font-mono uppercase tracking-wider transition-colors duration-200"
                style={{
                  border: '1px solid var(--border)',
                  color: 'var(--text-muted)',
                  background: 'transparent',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--lime)'
                  e.currentTarget.style.color = 'var(--lime)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.color = 'var(--text-muted)'
                }}
              >
                <span>{currentLocale.flag}</span>
                <span>{currentLocale.name}</span>
              </button>

              {isLangOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setIsLangOpen(false)} />
                  <div
                    className="absolute right-0 mt-1 w-28 overflow-hidden z-50"
                    style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
                  >
                    {LOCALES.map((loc) => (
                      <button
                        key={loc.code}
                        onClick={() => handleLocaleChange(loc.code)}
                        className="w-full flex items-center gap-2 px-3 py-2.5 text-xs font-mono transition-colors"
                        style={{ color: loc.code === locale ? 'var(--lime)' : 'var(--text-muted)' }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--surface-2)' }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent' }}
                      >
                        <span>{loc.flag}</span>
                        <span>{loc.name}</span>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* CTA */}
            <a
              href="#contacto"
              className="px-6 py-3 text-xs font-black uppercase tracking-widest transition-all duration-200 hover:scale-105"
              style={{ background: 'var(--lime)', color: 'var(--black)' }}
            >
              Consultar
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 transition-colors"
            style={{ color: isMenuOpen ? 'var(--lime)' : 'rgba(255,255,255,0.7)' }}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-screen' : 'max-h-0'
        }`}
        style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }}
      >
        <div className="px-6 py-4 space-y-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-3 py-3 text-xs font-bold uppercase tracking-widest border-b"
              style={{ color: 'rgba(255,255,255,0.6)', borderColor: 'var(--border)' }}
            >
              <span style={{ color: 'var(--lime)' }}>→</span>
              {link.label}
            </a>
          ))}

          <div className="pt-4">
            <a
              href="#contacto"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center w-full py-4 text-xs font-black uppercase tracking-widest"
              style={{ background: 'var(--lime)', color: 'var(--black)' }}
            >
              Consultar Proyecto
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
