'use client'

import { useTranslations } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'
import { Mail, Phone, Instagram, ArrowUpRight } from 'lucide-react'

const LOCALES = [
  { code: 'es', flag: '🇨🇱', name: 'ES' },
  { code: 'en', flag: '🇺🇸', name: 'EN' },
] as const

interface FooterProps {
  currentLocale: string
}

export default function Footer({ currentLocale }: FooterProps) {
  const t  = useTranslations('footer')
  const router   = useRouter()
  const pathname = usePathname()
  const currentYear = new Date().getFullYear()

  function handleLocaleChange(newLocale: string) {
    const segments = pathname.split('/')
    segments[1] = newLocale
    router.push(segments.join('/'))
  }

  return (
    <footer className="relative bg-[#020617] border-t border-white/5 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20">
          
          {/* Brand Col */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-8">
               <div className="w-12 h-12 flex items-center justify-center border-2 border-blue-500/50 shadow-[0_0_15px_rgba(0,163,255,0.2)]">
                  <span className="text-xl font-black text-white italic">MG</span>
               </div>
               <div className="flex flex-col">
                  <span className="text-2xl font-black uppercase tracking-tighter text-white">
                    MG<span className="text-blue-500">.DIGUITAL</span>
                  </span>
                  <span className="text-[9px] font-mono tracking-[0.2em] text-white/30 uppercase">
                    SOFTWARE | ERP | CRM | WEB
                  </span>
               </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-sm mb-10 font-medium">
              Transformamos la complejidad industrial en eficiencia digital mediante sistemas de gestión de alto rendimiento.
            </p>
            <div className="flex items-center gap-6">
                <a href="#" className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-white/30 hover:text-blue-400 hover:border-blue-500 transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-white/30 hover:text-blue-400 hover:border-blue-500 transition-all">
                  <Mail className="w-5 h-5" />
                </a>
            </div>
          </div>

          {/* Links Col */}
          <div>
            <h3 className="text-blue-500 font-black mb-10 text-[11px] uppercase tracking-[0.3em]">
              PLATAFORMA
            </h3>
            <ul className="space-y-5">
              {['INICIO', 'SERVICIOS', 'SOLUCIONES', 'NOSOTROS', 'CONTACTO'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-white/40 hover:text-white text-[12px] font-black tracking-widest transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h3 className="text-blue-500 font-black mb-10 text-[11px] uppercase tracking-[0.3em]">
              CONEXIÓN TÉCNICA
            </h3>
            <div className="space-y-6">
               <a href="mailto:mpeg.logistica@gmail.com" className="block p-6 glass-card rounded-2xl group">
                  <div className="text-[9px] font-mono text-blue-400 mb-2 uppercase tracking-widest">Soporte 24/7</div>
                  <div className="text-xs font-black text-white group-hover:text-blue-400 transition-colors">mpeg.logistica@gmail.com</div>
               </a>
               <a href="tel:+56929645522" className="block p-6 glass-card rounded-2xl group">
                  <div className="text-[9px] font-mono text-blue-400 mb-2 uppercase tracking-widest">Línea Directa</div>
                  <div className="text-xs font-black text-white group-hover:text-blue-400 transition-colors">+56 9 2964 5522</div>
               </a>
            </div>

            <div className="mt-12 flex gap-4">
                {LOCALES.map((loc) => (
                  <button
                    key={loc.code}
                    onClick={() => handleLocaleChange(loc.code)}
                    className={`px-4 py-2 rounded-lg text-[10px] font-black tracking-widest transition-all ${
                      loc.code === currentLocale
                        ? 'bg-blue-600 text-white shadow-[0_0_20px_rgba(0,163,255,0.3)]'
                        : 'bg-white/5 text-white/30 hover:bg-white/10'
                    }`}
                  >
                    {loc.flag} {loc.name}
                  </button>
                ))}
            </div>
          </div>
        </div>

        <div className="mt-32 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-white/20 text-[11px] font-bold tracking-widest">
            © {currentYear} MG.DIGUITAL. TODOS LOS DERECHOS RESERVADOS.
          </p>
          <div className="flex items-center gap-3">
             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
             <p className="text-white/20 text-[10px] font-mono uppercase tracking-widest">SISTEMAS OPERATIVOS / ESTABLE</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
