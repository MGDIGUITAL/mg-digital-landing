'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Shield, Zap, Headphones } from 'lucide-react'

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-20 pb-32 overflow-hidden bg-white"
    >
      {/* ── Background Elements ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: 'radial-gradient(#0055cc 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        {/* Soft color blobs */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-50 rounded-full blur-[120px] opacity-60" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-cyan-50 rounded-full blur-[100px] opacity-40" />
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 xl:gap-24">
          
          {/* ── LEFT: Content ── */}
          <div className={`flex-1 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-blue-700">Digitalización Industrial 4.0</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.05] tracking-tight mb-8">
              Transformamos <br />
              <span className="text-blue-600">tu empresa</span> <br />
              en el futuro.
            </h1>

            <p className="text-xl text-slate-500 leading-relaxed max-w-xl mb-10">
              Desarrollamos ecosistemas digitales a medida: ERP, CRM y plataformas industriales de alto rendimiento diseñadas para optimizar cada rincón de tu operación.
            </p>

            <div className="flex flex-wrap gap-5">
              <Link
                href="https://wa.me/56929645522"
                target="_blank"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-xl font-bold transition-all hover:bg-blue-600 hover:shadow-xl hover:shadow-blue-200"
              >
                Consultar Proyecto
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/servicios"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-xl font-bold transition-all hover:bg-slate-50"
              >
                Nuestros Servicios
              </Link>
            </div>

            {/* Trust Badges Row */}
            <div className="mt-16 pt-8 border-t border-slate-100 flex flex-wrap gap-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center text-green-600">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Seguridad</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-widest">Encriptación Total</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Vanguardia</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-widest">Tecnología 2024</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600">
                  <Headphones className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Soporte</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-widest">Asistencia 24/7</div>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Animated Laptop ── */}
          <div className={`flex-1 relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="relative z-10 animate-float">
              {/* The Laptop Image */}
              <div className="relative rounded-2xl p-2 bg-slate-800 shadow-2xl shadow-blue-900/20 preserve-3d">
                <img 
                  src="/professional_laptop_dashboard_mg_digital_1777331171419.png" 
                  alt="MG Digital Dashboard" 
                  className="rounded-xl w-full h-auto shadow-inner"
                />
              </div>

              {/* Floating Badge 1: Metrics */}
              <div className="absolute -top-10 -right-10 bg-white p-5 rounded-2xl shadow-2xl border border-slate-50 animate-float-slow hidden md:block">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                    84%
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Productividad</div>
                    <div className="text-xl font-black text-slate-900">+12.5% ↑</div>
                  </div>
                </div>
                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600 w-[84%]" />
                </div>
              </div>

              {/* Floating Badge 2: Systems Active */}
              <div className="absolute -bottom-8 -left-8 bg-white px-6 py-4 rounded-2xl shadow-2xl border border-slate-50 animate-float-delayed hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm font-bold text-slate-900 uppercase tracking-widest">Sistemas Estables</span>
                </div>
                <div className="text-xs text-slate-400 mt-1">Uptime Garantizado 99.9%</div>
              </div>
            </div>

            {/* Decorative orbit */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-blue-50 rounded-full -z-10 opacity-40 animate-spin-slow" />
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotateX(2deg) rotateY(-5deg); }
          50% { transform: translateY(-20px) rotateX(4deg) rotateY(-2deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(10px, -15px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-8px, -12px); }
        }
        @keyframes spin-slow {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 7s ease-in-out infinite 1s; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .preserve-3d { transform-style: preserve-3d; perspective: 1000px; }
      `}</style>
    </section>
  )
}
