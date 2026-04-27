'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ChevronRight, ShieldCheck, Gauge, HeadphonesIcon, MessageCircle } from 'lucide-react'

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-white"
    >
      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 xl:gap-20">
          
          {/* ── LEFT: Content ── */}
          <div className={`flex-1 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <h1 className="text-5xl lg:text-6xl xl:text-[4rem] font-bold text-slate-800 leading-[1.1] tracking-tight mb-6">
              Soluciones digitales <br />
              que <span className="text-[#0055cc]">impulsan</span> tu negocio
            </h1>

            <p className="text-lg lg:text-xl text-slate-600 leading-relaxed max-w-lg mb-10">
              Desarrollamos sistemas web, ERP, CRM y plataformas personalizadas para ayudar a tu empresa a crecer y ser más eficiente.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-12">
              <Link
                href="/servicios"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#0055cc] text-white text-[15px] font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Conoce nuestros servicios <ChevronRight className="w-4 h-4" />
              </Link>
              <Link
                href="https://wa.me/56929645522"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-[#0055cc] border border-[#0055cc] text-[15px] font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                Solicitar asesoría <MessageCircle className="w-4 h-4" />
              </Link>
            </div>

            {/* Trust Badges Row */}
            <div className="flex flex-wrap items-center gap-8 pt-6">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-[#0055cc]" strokeWidth={1.5} />
                <div className="text-[13px] font-medium text-slate-600 leading-tight">
                  Seguridad <br />y Confidencialidad
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Gauge className="w-6 h-6 text-[#0055cc]" strokeWidth={1.5} />
                <div className="text-[13px] font-medium text-slate-600 leading-tight">
                  Tecnología <br />de Vanguardia
                </div>
              </div>
              <div className="flex items-center gap-3">
                <HeadphonesIcon className="w-6 h-6 text-[#0055cc]" strokeWidth={1.5} />
                <div className="text-[13px] font-medium text-slate-600 leading-tight">
                  Soporte y <br />Acompañamiento
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Laptop Image ── */}
          <div className={`flex-1 relative w-full max-w-[800px] transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <img 
              src="/professional_laptop_dashboard_mg_digital_1777331171419.png" 
              alt="MG Digital Dashboard" 
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
