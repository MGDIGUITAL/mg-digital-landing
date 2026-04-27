'use client'

import { useRef, useEffect, useState } from 'react'
import { Cpu, Database, Layout, Zap, Search, LifeBuoy, ArrowUpRight } from 'lucide-react'

const SERVICES = [
  {
    key: 'industrial',
    icon: Cpu,
    title: 'Optimización Industrial',
    desc: 'Automatizamos líneas de producción y detectamos cuellos de botella con análisis de datos en tiempo real.',
    badge: 'INDUSTRIA 4.0',
  },
  {
    key: 'erp',
    icon: Database,
    title: 'Sistemas ERP',
    desc: 'Soluciones integrales para gestionar inventario, finanzas, RRHH y producción en una sola plataforma.',
    badge: 'CORE SYSTEM',
  },
  {
    key: 'web',
    icon: Layout,
    title: 'Desarrollo Web',
    desc: 'Plataformas web de alto rendimiento, SEO optimizado y experiencias de usuario que convierten.',
    badge: 'FULL STACK',
  },
  {
    key: 'automation',
    icon: Zap,
    title: 'Automatización',
    desc: 'Robots de procesos (RPA), integraciones API y flujos de trabajo sin fricción entre sistemas.',
    badge: 'RPA · API',
  },
  {
    key: 'crm',
    icon: Search,
    title: 'Sistemas CRM',
    desc: 'Centraliza la gestión comercial, pipeline de ventas y atención al cliente en un ecosistema propio.',
    badge: 'VENTAS',
  },
  {
    key: 'support',
    icon: LifeBuoy,
    title: 'Soporte 24/7',
    desc: 'Monitoreo continuo, SLAs garantizados y equipo técnico disponible cuando tu operación lo exige.',
    badge: 'SLA GARANTIZADO',
  },
]

function ServiceCard({ svc, index }: { svc: typeof SERVICES[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="glass border-animated group flex flex-col gap-6 p-8 cursor-default"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.5s ${index * 0.08}s ease, transform 0.5s ${index * 0.08}s ease`,
      }}
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
             style={{ background: 'rgba(0,242,255,0.08)', border: '1px solid rgba(0,242,255,0.15)' }}>
          <svc.icon className="w-5 h-5 transition-colors duration-300"
                    style={{ color: 'var(--cyan)' }} />
        </div>
        <span className="text-[9px] font-mono font-bold tracking-[0.25em] px-2 py-1 rounded"
              style={{ color: 'var(--cyan)', background: 'rgba(0,242,255,0.07)' }}>
          {svc.badge}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 flex-1">
        <h3 className="text-base font-bold text-white group-hover:text-[var(--cyan)] transition-colors duration-300">
          {svc.title}
        </h3>
        <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--slate)' }}>
          {svc.desc}
        </p>
      </div>

      {/* Footer */}
      <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0"
           style={{ color: 'var(--cyan)' }}>
        Ver módulo <ArrowUpRight className="w-3.5 h-3.5" />
      </div>
    </div>
  )
}

export default function ServicesSection() {
  return (
    <section id="servicios" className="py-32" style={{ background: 'var(--bg-surface)' }}>
      <div className="container">
        {/* Header */}
        <div className="section-label"><span>01 // Servicios Técnicos</span></div>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <h2 className="font-black leading-tight tracking-tighter" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            Soluciones <span className="text-cyan">Digitales</span><br />
            para la Industria
          </h2>
          <p className="max-w-sm text-sm leading-relaxed lg:text-right" style={{ color: 'var(--slate)' }}>
            Implementamos infraestructura crítica y software de gestión para empresas que necesitan operar al máximo nivel.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((svc, i) => (
            <ServiceCard key={svc.key} svc={svc} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 flex justify-center">
          <a href="#contacto"
             className="btn-primary text-sm">
            Iniciar Transformación Digital
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
