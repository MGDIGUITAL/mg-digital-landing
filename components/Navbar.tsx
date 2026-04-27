'use client'

import { useState, useEffect } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'
import { Globe, Package, Menu, X, Instagram } from 'lucide-react'

// Configuración de idiomas con banderas y nombres nativos
const LOCALES = [
  { code: 'es', flag: '🇨🇱', name: 'Español' },
  { code: 'en', flag: '🇺🇸', name: 'English' },
  { code: 'ru', flag: '🇷🇺', name: 'Русский' },
  { code: 'pt', flag: '🇧🇷', name: 'Português' },
  { code: 'fr', flag: '🇫🇷', name: 'Français' },
  { code: 'it', flag: '🇮🇹', name: 'Italiano' },
  { code: 'zh', flag: '🇨🇳', name: '中文' },
] as const

// Menú de navegación principal de MG DIGITAL
const NAV_LINKS = [
  { href: '#servicios',   label: 'Servicios' },
  { href: '#nosotros',   label: 'Nosotros' },
  { href: '#cobertura',  label: 'Cobertura' },
  { href: '#contacto',   label: 'Contacto' },
  { href: '#seguimiento', label: 'Seguimiento' },
]

interface NavbarProps {
  compact?: boolean
}

export default function Navbar({ compact = false }: NavbarProps) {
  const locale   = useLocale()
  const router   = useRouter()
  const pathname = usePathname()

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  // Efecto de scroll: activa fondo y detecta sección activa
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      // Detectar sección activa para subrayado dinámico
      const sections = NAV_LINKS.map(l => l.href.replace('#', ''))
      for (const id of sections.reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id)
          break
        }
      }
    }
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || compact
          ? 'bg-slate-950/95 backdrop-blur-xl border-b border-slate-800/60 shadow-2xl shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* ── Logo ── */}
          <a href="#inicio" className="flex items-center gap-3 group flex-shrink-0">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300 group-hover:scale-110">
              <Package className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">
              <span className="text-white">MG</span>
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> DIGITAL</span>
            </span>
          </a>

          {/* ── Navegación desktop ── */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.replace('#', '')
              const isActive  = activeSection === sectionId
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 group ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
                  }`}
                >
                  {link.label}
                  {/* Línea animada debajo */}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full transition-all duration-300 ${
                      isActive ? 'w-4/5' : 'w-0 group-hover:w-4/5'
                    }`}
                  />
                </a>
              )
            })}
          </div>

          {/* ── Acciones desktop ── */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/mpeg.logistica/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram MG DIGITAL"
              className="p-2 rounded-lg text-slate-400 hover:text-pink-400 hover:bg-pink-500/10 transition-all duration-200"
            >
              <Instagram className="w-5 h-5" />
            </a>

            {/* Selector de idioma */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-800/60 border border-slate-700/50 hover:border-blue-500/50 hover:bg-slate-800 transition-all duration-200 text-sm"
                aria-label="Selector de idioma"
              >
                <Globe className="w-4 h-4 text-blue-400" />
                <span>{currentLocale.flag}</span>
                <span className="text-slate-300 hidden xl:block">{currentLocale.name}</span>
              </button>

              {isLangOpen && (
                <>
                  {/* Overlay para cerrar */}
                  <div className="fixed inset-0 z-40" onClick={() => setIsLangOpen(false)} />
                  <div className="absolute right-0 mt-2 w-44 bg-slate-900/98 backdrop-blur-xl border border-slate-700/60 rounded-xl shadow-2xl overflow-hidden z-50">
                    {LOCALES.map((loc) => (
                      <button
                        key={loc.code}
                        onClick={() => handleLocaleChange(loc.code)}
                        className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-slate-800 transition-colors ${
                          loc.code === locale ? 'text-blue-400 bg-slate-800/50' : 'text-slate-300'
                        }`}
                      >
                        <span>{loc.flag}</span>
                        <span>{loc.name}</span>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* CTA "Cotizar Ahora" — destacado */}
            <a
              href="#cotizaciones"
              className="relative px-5 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm font-bold rounded-xl hover:from-blue-500 hover:to-cyan-500 transition-all duration-200 shadow-lg hover:shadow-blue-500/40 hover:scale-105 overflow-hidden group"
            >
              <span className="relative z-10">Cotizar Ahora</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </div>

          {/* ── Botón hamburguesa mobile ── */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all"
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* ── Menú mobile (drawer) ── */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } bg-slate-950/98 backdrop-blur-xl border-b border-slate-800/50`}
      >
        <div className="px-4 py-4 space-y-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all text-sm font-medium group"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400/50 group-hover:bg-blue-400 transition-colors" />
              {link.label}
            </a>
          ))}

          {/* CTA mobile */}
          <div className="pt-3">
            <a
              href="#cotizaciones"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm font-bold rounded-xl shadow-lg"
            >
              ✦ Cotizar Ahora
            </a>
          </div>

          {/* Selector de idioma mobile */}
          <div className="pt-3 border-t border-slate-800/50">
            <p className="px-4 py-2 text-xs text-slate-500 uppercase tracking-wider font-medium">Idioma</p>
            <div className="grid grid-cols-2 gap-1">
              {LOCALES.map((loc) => (
                <button
                  key={loc.code}
                  onClick={() => handleLocaleChange(loc.code)}
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                    loc.code === locale
                      ? 'text-blue-400 bg-slate-800/70 font-medium'
                      : 'text-slate-300 hover:bg-slate-800/50'
                  }`}
                >
                  <span>{loc.flag}</span>
                  <span>{loc.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Instagram mobile */}
          <div className="pt-2 px-4 flex items-center gap-3">
            <a
              href="https://www.instagram.com/mpeg.logistica/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-400 hover:text-pink-400 transition-colors text-sm"
            >
              <Instagram className="w-4 h-4" />
              <span>@mpeg.logistica</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
