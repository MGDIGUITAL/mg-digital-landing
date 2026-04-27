'use client'

import Link from 'next/link'
import { Mail, Phone, Instagram, Linkedin, MessageSquare, Shield, Zap, Headphones } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-slate-400 pt-24">
      <div className="container">
        
        {/* ── CTA BOX ── */}
        <div className="relative -mt-40 mb-24 p-10 lg:p-16 rounded-[2rem] bg-[#0055cc] overflow-hidden shadow-2xl shadow-blue-900/40">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 text-center lg:text-left">
            <div className="max-w-2xl">
              <h3 className="text-3xl lg:text-4xl font-black text-white mb-4">¿Listo para digitalizar tu operación?</h3>
              <p className="text-blue-100 text-lg">Hablemos de tu próximo sistema ERP, CRM o plataforma web a medida.</p>
            </div>
            <Link
              href="https://wa.me/56929645522"
              target="_blank"
              className="px-10 py-5 bg-white text-[#0055cc] font-black uppercase tracking-widest rounded-2xl shadow-xl hover:scale-105 active:scale-95 transition-all"
            >
              Contactar Ahora
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Brand Info */}
          <div className="flex flex-col gap-8">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 flex items-center justify-center font-black text-sm italic text-white rounded-lg bg-[#0055cc]">
                MG
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-xl font-black text-white">
                  MG.DIGUITAL
                </span>
                <span className="text-[9px] font-mono tracking-[0.2em] uppercase mt-1 text-slate-500">
                  Ingeniería Digital
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              Lideramos la transformación digital de la industria mediante sistemas de gestión inteligentes y software de alta precisión.
            </p>
            <div className="flex items-center gap-4">
              {[Instagram, Linkedin, MessageSquare].map((Icon, i) => (
                <Link 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-lg border border-slate-800 flex items-center justify-center hover:bg-[#0055cc] hover:text-white hover:border-[#0055cc] transition-all"
                >
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Nav Columns */}
          <div className="flex flex-col gap-6">
            <h4 className="text-sm font-black uppercase tracking-widest text-white">Compañía</h4>
            <div className="flex flex-col gap-3 text-sm">
              <Link href="/nosotros" className="hover:text-blue-500 transition-colors">Nosotros</Link>
              <Link href="/proyectos" className="hover:text-blue-500 transition-colors">Portafolio</Link>
              <Link href="/servicios" className="hover:text-blue-500 transition-colors">Servicios</Link>
              <Link href="/contacto" className="hover:text-blue-500 transition-colors">Contacto</Link>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="text-sm font-black uppercase tracking-widest text-white">Servicios</h4>
            <div className="flex flex-col gap-3 text-sm">
              <Link href="/servicios/erp" className="hover:text-blue-500 transition-colors">Sistemas ERP</Link>
              <Link href="/servicios/crm" className="hover:text-blue-500 transition-colors">Sistemas CRM</Link>
              <Link href="/servicios/web" className="hover:text-blue-500 transition-colors">Desarrollo Web</Link>
              <Link href="/soluciones/folios" className="hover:text-blue-500 transition-colors">Más Folios</Link>
            </div>
          </div>

          {/* Trust Features */}
          <div className="flex flex-col gap-6">
            <h4 className="text-sm font-black uppercase tracking-widest text-white">Confianza</h4>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-blue-500" />
                <span className="text-xs">Seguridad Garantizada</span>
              </div>
              <div className="flex items-center gap-3">
                <Zap className="w-5 h-5 text-blue-500" />
                <span className="text-xs">Velocidad y Precisión</span>
              </div>
              <div className="flex items-center gap-3">
                <Headphones className="w-5 h-5 text-blue-500" />
                <span className="text-xs">Soporte Técnico 24/7</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="py-10 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs">
            © {year} MG.DIGUITAL. Todos los derechos reservados. Diseñado para la Excelencia Industrial.
          </p>
          <div className="flex items-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
            <Link href="/legal" className="hover:text-white transition-colors">Legal</Link>
            <Link href="/privacidad" className="hover:text-white transition-colors">Privacidad</Link>
            <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
