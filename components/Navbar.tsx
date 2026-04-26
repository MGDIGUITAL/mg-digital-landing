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

interface NavbarProps {
  compact?: boolean
}

export default function Navbar({ compact = false }: NavbarProps) {
  const t = useTranslations('nav')
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Efecto de scroll para el navbar
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const currentLocale = LOCALES.find((l) => l.code === locale) ?? LOCALES[0]

  // Cambia el idioma reemplazando el segmento [locale] en la URL
  function handleLocaleChange(newLocale: string) {
    const segments = pathname.split('/')
    segments[1] = newLocale
    router.push(segments.join('/'))
    setIsLangOpen(false)
    setIsMenuOpen(false)
  }

  const navLinks = [
    { href: '#inicio', label: t('home') },
    { href: '#servicios', label: t('services') },
    { href: '#cotizaciones', label: t('quotes') },
    { href: '#contacto', label: t('contact') },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || compact
          ? 'bg-slate-950/95 backdrop-blur-md border-b border-slate-800/50 shadow-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-blue-500/40 transition-all duration-300 group-hover:scale-110">
              <Package className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">
              <span className="text-white">MG</span>
              <span className="text-blue-400"> DIGITAL</span>
            </span>
          </a>

          {/* Navegación desktop */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-300 hover:text-white text-sm font-medium transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Acciones desktop */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/mpeg.logistica/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram MG DIGITAL"
              className="text-slate-400 hover:text-pink-400 transition-colors duration-200"
            >
              <Instagram className="w-5 h-5" />
            </a>

            {/* Selector de idioma */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-800/60 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-200 text-sm"
                aria-label="Selector de idioma"
              >
                <Globe className="w-4 h-4 text-blue-400" />
                <span>{currentLocale.flag}</span>
                <span className="text-slate-300">{currentLocale.name}</span>
              </button>

              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl overflow-hidden z-50">
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
              )}
            </div>

            {/* CTA Cotización */}
            <a
              href="#cotizaciones"
              className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm font-semibold rounded-xl hover:from-blue-500 hover:to-cyan-500 transition-all duration-200 shadow-lg hover:shadow-blue-500/30"
            >
              {t('quotes')}
            </a>
          </div>

          {/* Botón hamburguesa mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all"
            aria-label="Abrir menú"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Menú mobile */}
      {isMenuOpen && (
        <div className="lg:hidden bg-slate-950/98 backdrop-blur-md border-b border-slate-800/50">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all text-sm font-medium"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-2 border-t border-slate-800/50">
              <p className="px-4 py-2 text-xs text-slate-500 uppercase tracking-wider">Idioma</p>
              <div className="grid grid-cols-2 gap-1">
                {LOCALES.map((loc) => (
                  <button
                    key={loc.code}
                    onClick={() => handleLocaleChange(loc.code)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                      loc.code === locale
                        ? 'text-blue-400 bg-slate-800/70'
                        : 'text-slate-300 hover:bg-slate-800/50'
                    }`}
                  >
                    <span>{loc.flag}</span>
                    <span>{loc.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3 px-4">
              <a
                href="https://www.instagram.com/mpeg.logistica/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-pink-400 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#cotizaciones"
                onClick={() => setIsMenuOpen(false)}
                className="flex-1 text-center py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm font-semibold rounded-xl"
              >
                {t('quotes')}
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
