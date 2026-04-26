'use client'

import { useTranslations } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'
import { Package, Mail, Phone, Camera, Globe } from 'lucide-react'

const LOCALES = [
  { code: 'es', flag: '🇨🇱', name: 'ES' },
  { code: 'en', flag: '🇺🇸', name: 'EN' },
  { code: 'ru', flag: '🇷🇺', name: 'RU' },
  { code: 'pt', flag: '🇧🇷', name: 'PT' },
  { code: 'fr', flag: '🇫🇷', name: 'FR' },
  { code: 'it', flag: '🇮🇹', name: 'IT' },
  { code: 'zh', flag: '🇨🇳', name: 'ZH' },
] as const

interface FooterProps {
  currentLocale: string
}

export default function Footer({ currentLocale }: FooterProps) {
  const t  = useTranslations('footer')
  const tn = useTranslations('nav')
  const router   = useRouter()
  const pathname = usePathname()

  const currentYear = new Date().getFullYear()

  function handleLocaleChange(newLocale: string) {
    const segments = pathname.split('/')
    segments[1] = newLocale
    router.push(segments.join('/'))
  }

  const navLinks = [
    { href: '#inicio',       label: tn('home') },
    { href: '#servicios',    label: tn('services') },
    { href: '#cotizaciones', label: tn('quotes') },
    { href: '#contacto',     label: tn('contact') },
  ]

  return (
    <footer id="contacto" className="relative bg-slate-950 border-t border-slate-800/50">
      {/* Gradiente superior */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Columna 1: Logo y tagline */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg">
                <Package className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">
                <span className="text-white">MG</span>
                <span className="text-blue-400"> DIGITAL</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              {t('tagline')}
            </p>
            <p className="text-slate-500 text-xs">CEO: Matías Espinoza Guerrero</p>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/mpeg.logistica/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex items-center gap-2 mt-4 text-slate-400 hover:text-pink-400 transition-colors text-sm"
            >
              <Camera className="w-4 h-4" />
              @mpeg.logistica
            </a>
          </div>

          {/* Columna 2: Navegación */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
              MG DIGITAL
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
              {t('contact_title')}
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:MPEG.LOGISTICA@GMAIL.COM"
                  className="flex items-center gap-3 text-slate-400 hover:text-blue-400 transition-colors text-sm group"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors flex-shrink-0">
                    <Mail className="w-4 h-4 text-blue-400" />
                  </div>
                  MPEG.LOGISTICA@GMAIL.COM
                </a>
              </li>
              <li>
                <a
                  href="tel:+56929645522"
                  className="flex items-center gap-3 text-slate-400 hover:text-blue-400 transition-colors text-sm group"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors flex-shrink-0">
                    <Phone className="w-4 h-4 text-blue-400" />
                  </div>
                  +56 9 2964 5522
                </a>
              </li>
            </ul>

            {/* Selector de idioma en el footer */}
            <div className="mt-6">
              <div className="flex items-center gap-2 mb-3 text-slate-500">
                <Globe className="w-3.5 h-3.5" />
                <span className="text-xs uppercase tracking-wider">Idioma</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {LOCALES.map((loc) => (
                  <button
                    key={loc.code}
                    onClick={() => handleLocaleChange(loc.code)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all duration-200 ${
                      loc.code === currentLocale
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
                    }`}
                    title={loc.flag}
                  >
                    {loc.flag} {loc.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-slate-800/50 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {currentYear} MG DIGITAL. {t('rights')}
          </p>
          <p className="text-slate-600 text-xs">{t('built_with')}</p>
        </div>
      </div>
    </footer>
  )
}
