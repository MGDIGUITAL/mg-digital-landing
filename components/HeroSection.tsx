'use client'

import { useTranslations } from 'next-intl'
import { ArrowRight, Cpu, Monitor, Database, Users, Settings, Zap, BarChart3, Globe, ShieldCheck, ChevronRight } from 'lucide-react'

export default function HeroSection() {
  const t = useTranslations('hero')

  const features = [
    { icon: Monitor, title: 'DESARROLLO WEB', desc: 'Sitios y aplicaciones web modernas, rápidas y adaptadas a tu negocio.' },
    { icon: Database, title: 'SISTEMAS ERP', desc: 'Soluciones integrales para gestionar y automatizar todos los procesos de tu empresa.' },
    { icon: Users, title: 'SISTEMAS CRM', desc: 'Gestiona tus clientes, mejora relaciones y aumenta tus ventas de forma eficiente.' },
    { icon: Settings, title: 'PROYECTOS A MEDIDA', desc: 'Desarrollamos soluciones personalizadas que se adaptan a tus necesidades específicas.' },
  ]

  const stats = [
    { icon: BarChart3, value: '98%', label: 'EFICIENCIA', sub: 'En procesos optimizados' },
    { icon: Zap, value: '24/7', label: 'MONITOREO', sub: 'Soporte y monitoreo continuo' },
    { icon: Globe, value: '50+', label: 'PROYECTOS', sub: 'Exitosos y entregados' },
    { icon: ShieldCheck, value: '100%', label: 'SATISFACCIÓN', sub: 'Clientes satisfechos' },
  ]

  return (
    <section id="inicio" className="relative min-h-screen flex flex-col pt-28 lg:pt-36 bg-[#020617] overflow-hidden">
      
      {/* Background Circuitry/Energy Patterns */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[150px] animate-pulse-slow" />
         <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-blue-900/10 to-transparent" />
         <div 
           className="absolute inset-0 opacity-[0.05] pointer-events-none"
           style={{
             backgroundImage: `radial-gradient(var(--blue-neon) 1px, transparent 1px)`,
             backgroundSize: '50px 50px',
           }}
         />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          
          {/* Left Side: Text Content */}
          <div className="fade-in-up">
            <div className="flex items-center gap-3 mb-8">
               <div className="w-8 h-8 rounded-full border border-blue-500/30 flex items-center justify-center bg-blue-500/5">
                  <Zap className="w-4 h-4 text-blue-400" />
               </div>
               <span className="text-[10px] lg:text-[12px] font-mono font-bold tracking-[0.3em] text-blue-400 uppercase">
                 OPTIMIZACIÓN INDUSTRIAL & SOFTWARE
               </span>
            </div>

            <h1 className="text-[4rem] lg:text-[7.5rem] font-black leading-[0.85] tracking-tighter mb-10">
              <span className="block text-white">DIGITALIZAMOS</span>
              <span className="block text-white">TU</span>
              <span className="block italic text-glow" style={{ color: 'var(--blue-neon)' }}>
                OPERACIÓN
              </span>
              <span className="block italic text-glow" style={{ color: 'var(--blue-neon)' }}>
                INDUSTRIAL
              </span>
            </h1>

            <p className="text-sm lg:text-lg leading-relaxed text-white/50 max-w-xl mb-12 font-medium">
              Expertos en creación de sistemas ERP, CRM y plataformas web de alto rendimiento diseñadas para optimizar la administración y productividad de tu empresa.
            </p>

            <div className="flex flex-wrap gap-5">
              <a
                href="#contacto"
                className="group flex items-center gap-4 px-10 py-5 font-black uppercase tracking-[0.2em] text-[11px] bg-blue-600 text-white shadow-[0_0_30px_rgba(0,163,255,0.4)] transition-all hover:scale-105"
              >
                CONSULTAR PROYECTO
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#servicios"
                className="flex items-center gap-4 px-10 py-5 font-black uppercase tracking-[0.2em] text-[11px] border border-white/20 text-white hover:bg-white/5 transition-all"
              >
                CONOCE NUESTROS SERVICIOS
              </a>
            </div>
          </div>

          {/* Right Side: 3D Cube */}
          <div className="relative flex justify-center items-center">
             <div className="absolute inset-0 bg-blue-500/5 blur-[120px] rounded-full animate-pulse" />
             <div className="relative animate-float">
                <img 
                  src="/mg_3d_isometric_cube_glow_1777268323155.png" 
                  alt="MG 3D Cube" 
                  className="w-[500px] lg:w-[700px] h-auto drop-shadow-[0_0_50px_rgba(0,163,255,0.2)]"
                />
             </div>
             {/* Floating UI elements placeholders as seen in image */}
             <div className="absolute top-10 right-0 p-4 glass-card rounded-xl hidden lg:block animate-pulse-slow">
                <div className="text-[8px] font-mono text-blue-400 mb-1">CRM DASHBOARD</div>
                <div className="text-xl font-black text-white">1,248</div>
                <div className="text-[7px] text-green-400">+12.5%</div>
             </div>
             <div className="absolute bottom-20 left-0 p-4 glass-card rounded-xl hidden lg:block">
                <div className="text-[8px] font-mono text-blue-400 mb-1">ERP SYSTEM</div>
                <div className="w-24 h-1 bg-white/10 rounded-full overflow-hidden">
                   <div className="w-2/3 h-full bg-blue-500" />
                </div>
             </div>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {features.map((item, i) => (
            <div 
              key={i} 
              className="glass-card p-10 group hover:-translate-y-2"
            >
              <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center mb-8 border border-blue-500/20 group-hover:bg-blue-600 group-hover:border-blue-400 transition-all">
                 <item.icon className="w-6 h-6 text-blue-400 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-4 text-white">{item.title}</h3>
              <p className="text-[11px] leading-relaxed text-white/40 group-hover:text-white/60 transition-colors">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Footer Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 py-16 border-t border-white/5">
           {stats.map((stat, i) => (
             <div key={i} className="flex items-center gap-6 group">
                <stat.icon className="w-10 h-10 text-blue-500/30 group-hover:text-blue-500 transition-all duration-500" />
                <div>
                   <div className="text-2xl lg:text-3xl font-black text-white">{stat.value}</div>
                   <div className="text-[9px] font-black uppercase tracking-[0.2em] text-blue-400">{stat.label}</div>
                   <div className="text-[8px] text-white/30 uppercase mt-0.5">{stat.sub}</div>
                </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  )
}
