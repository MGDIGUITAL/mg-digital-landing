'use client'

import { useRouter, usePathname } from 'next/navigation'
import { Mail, Phone, Instagram, ArrowUpRight } from 'lucide-react'

const LOCALES = [
  { code: 'es', flag: '🇨🇱', name: 'ES' },
  { code: 'en', flag: '🇺🇸', name: 'EN' },
  { code: 'pt', flag: '🇧🇷', name: 'PT' },
] as const

interface FooterProps { currentLocale: string }

export default function Footer({ currentLocale }: FooterProps) {
  const router   = useRouter()
  const pathname = usePathname()
  const year     = new Date().getFullYear()

  function changeLang(code: string) {
    const parts = pathname.split('/')
    parts[1] = code
    router.push(parts.join('/'))
  }

  return (
    <footer style={{ background: 'var(--bg-surface)', borderTop: '1px solid rgba(0,242,255,0.07)' }}>
      <div className="container py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="md:col-span-2 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center font-black text-sm italic text-white"
                   style={{ border: '1.5px solid rgba(0,242,255,0.4)', borderRadius: '6px' }}>
                MG
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-lg font-black">
                  <span className="text-white">MG</span>
                  <span style={{ color: 'var(--cyan)' }}>.DIGUITAL</span>
                </span>
                <span className="text-[8px] font-mono tracking-[0.22em] opacity-30 uppercase mt-0.5">
                  SOFTWARE · ERP · CRM · WEB
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: 'var(--slate)' }}>
              Transformamos la complejidad industrial en eficiencia digital mediante sistemas de gestión de alto rendimiento.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://www.instagram.com/mpeg.logistica/" target="_blank" rel="noopener noreferrer"
                 className="glass w-10 h-10 flex items-center justify-center transition-colors hover:text-[var(--cyan)]"
                 style={{ color: 'var(--slate)', borderRadius: '8px' }}>
                <Instagram className="w-4 h-4" />
              </a>
              <a href="mailto:mpeg.logistica@gmail.com"
                 className="glass w-10 h-10 flex items-center justify-center transition-colors hover:text-[var(--cyan)]"
                 style={{ color: 'var(--slate)', borderRadius: '8px' }}>
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Nav */}
          <div className="flex flex-col gap-5">
            <h3 className="text-xs font-mono font-bold tracking-[0.3em] uppercase" style={{ color: 'var(--cyan)' }}>
              Plataforma
            </h3>
            {['#inicio', '#servicios', '#soluciones', '#nosotros', '#proyectos'].map(href => (
              <a key={href} href={href}
                 className="text-sm font-medium transition-colors hover:text-white"
                 style={{ color: 'var(--slate)' }}>
                {href.slice(1).charAt(0).toUpperCase() + href.slice(2)}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-5">
            <h3 className="text-xs font-mono font-bold tracking-[0.3em] uppercase" style={{ color: 'var(--cyan)' }}>
              Contacto
            </h3>
            <a href="mailto:mpeg.logistica@gmail.com"
               className="glass flex flex-col gap-1 p-4 group" style={{ borderRadius: '10px' }}>
              <span className="text-[10px] font-mono" style={{ color: 'var(--cyan)' }}>Soporte 24/7</span>
              <span className="text-xs font-semibold text-white group-hover:text-[var(--cyan)] transition-colors">
                mpeg.logistica@gmail.com
              </span>
            </a>
            <a href="tel:+56929645522"
               className="glass flex flex-col gap-1 p-4 group" style={{ borderRadius: '10px' }}>
              <span className="text-[10px] font-mono" style={{ color: 'var(--cyan)' }}>Línea Directa</span>
              <span className="text-xs font-semibold text-white group-hover:text-[var(--cyan)] transition-colors">
                +56 9 2964 5522
              </span>
            </a>

            {/* Language selector */}
            <div className="flex gap-2 pt-2">
              {LOCALES.map(loc => (
                <button
                  key={loc.code}
                  onClick={() => changeLang(loc.code)}
                  className="px-3 py-1.5 rounded-lg text-[10px] font-bold tracking-widest transition-all"
                  style={loc.code === currentLocale
                    ? { background: 'var(--cyan)', color: 'var(--bg-deep)' }
                    : { background: 'rgba(255,255,255,0.05)', color: 'var(--slate)' }}
                >
                  {loc.flag} {loc.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
             style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>
            © {year} MG.DIGUITAL. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[10px] font-mono uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.2)' }}>
              Sistemas operativos · Estable
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
