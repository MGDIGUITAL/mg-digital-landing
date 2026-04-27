'use client'

import { useTranslations } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'
import { Package, Mail, Phone, Instagram, Globe } from 'lucide-react'

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
    { href: '#soluciones',   label: 'Soluciones' },
    { href: '#contacto',     label: 'Proyectos' },
  ]

  return (
    <footer id="contacto" className="relative bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mb-20">
          
          {/* Columna 1: Logo y tagline */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-2xl font-black uppercase tracking-tighter">
                <span style={{ color: 'var(--blue-deep)' }}>MG</span>
                <span style={{ color: 'var(--blue-primary)' }}>.DIGUITAL</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">
              {t('tagline')}
            </p>
            <div className="flex items-center gap-4">
                <a
                  href="https://www.instagram.com/mpeg.logistica/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-200 transition-all"
                >
                  <Instagram className="w-4 h-4" />
                </a>
            </div>
          </div>

          {/* Columna 2: Navegación */}
          <div>
            <h3 className="text-slate-900 font-black mb-8 text-[11px] uppercase tracking-[0.25em]">
              Sistemas MG
            </h3>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-500 hover:text-blue-600 text-[13px] font-medium transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div>
            <h3 className="text-slate-900 font-black mb-8 text-[11px] uppercase tracking-[0.25em]">
              Soporte Directo
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:mpeg.logistica@gmail.com"
                  className="flex items-center gap-4 text-slate-500 hover:text-blue-600 transition-colors text-[13px] font-medium"
                >
                  <Mail className="w-4 h-4 text-blue-400" />
                  mpeg.logistica@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+56929645522"
                  className="flex items-center gap-4 text-slate-500 hover:text-blue-600 transition-colors text-[13px] font-medium"
                >
                  <Phone className="w-4 h-4 text-blue-400" />
                  +56 9 2964 5522
                </a>
              </li>
            </ul>

            <div className="mt-12">
              <div className="flex flex-wrap gap-2">
                {LOCALES.map((loc) => (
                  <button
                    key={loc.code}
                    onClick={() => handleLocaleChange(loc.code)}
                    className={`px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all ${
                      loc.code === currentLocale
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                        : 'bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-slate-600'
                    }`}
                  >
                    {loc.flag} {loc.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-slate-50 pt-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-slate-400 text-[11px] font-medium">
            © {currentYear} MG.DIGUITAL. {t('rights')}
          </p>
          <p className="text-slate-300 text-[10px] font-mono uppercase tracking-widest">{t('built_with')}</p>
        </div>
      </div>
    </footer>
  )
}
