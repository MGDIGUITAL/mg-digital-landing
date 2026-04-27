'use client'

import { useRef, useEffect, useState } from 'react'
import {
  Cpu, Database, Layout, Zap, Search, LifeBuoy,
  ArrowUpRight, CheckCircle2, ChevronRight,
} from 'lucide-react'

/* ── Data ─────────────────────────────────────────────── */
const CATEGORIES = ['Todo', 'Software', 'Industrial', 'Soporte'] as const
type Category = typeof CATEGORIES[number]

const SERVICES = [
  {
    key: 'web',
    icon: Layout,
    category: 'Software' as Category,
    badge: 'FULL STACK',
    title: 'Desarrollo Web',
    headline: 'Plataformas que convierten',
    desc: 'Sitios y apps web de alto rendimiento, SEO optimizado y UI/UX diseñados para convertir visitantes en clientes.',
    features: ['Next.js & React', 'SEO Técnico', 'Diseño Responsivo', 'Deploy en Cloud'],
    metric: { value: '+300%', label: 'Más tráfico' },
    color: '#6366f1',
  },
  {
    key: 'erp',
    icon: Database,
    category: 'Software' as Category,
    badge: 'CORE SYSTEM',
    title: 'Sistemas ERP',
    headline: 'El cerebro de tu empresa',
    desc: 'Gestión integral de inventario, finanzas, RRHH y producción en una plataforma unificada y escalable.',
    features: ['Módulo Financiero', 'Control de Stock', 'Reportes en Vivo', 'Multi-sucursal'],
    metric: { value: '60%', label: 'Menos errores' },
    color: '#0ea5e9',
  },
  {
    key: 'crm',
    icon: Search,
    category: 'Software' as Category,
    badge: 'VENTAS',
    title: 'Sistemas CRM',
    headline: 'Clientes bajo control',
    desc: 'Centraliza tu pipeline comercial, historial de clientes y automatización de seguimiento para cerrar más negocios.',
    features: ['Pipeline Visual', 'Automatización', 'Email Marketing', 'Analytics'],
    metric: { value: '+45%', label: 'Ventas cerradas' },
    color: '#22d3ee',
  },
  {
    key: 'industrial',
    icon: Cpu,
    category: 'Industrial' as Category,
    badge: 'INDUSTRIA 4.0',
    title: 'Optimización Industrial',
    headline: 'Producción al máximo',
    desc: 'Automatizamos líneas de producción, detectamos cuellos de botella y reducimos desperdicios con análisis predictivo.',
    features: ['Sensores IoT', 'Gemelo Digital', 'Control SCADA', 'Mantenimiento Pred.'],
    metric: { value: '98%', label: 'Eficiencia' },
    color: '#f59e0b',
  },
  {
    key: 'automation',
    icon: Zap,
    category: 'Industrial' as Category,
    badge: 'RPA · API',
    title: 'Automatización',
    headline: 'Procesos sin fricción',
    desc: 'Robots de procesos, integraciones API y flujos de trabajo automáticos que eliminan tareas manuales repetitivas.',
    features: ['RPA Empresarial', 'Integración API', 'Workflows', 'Notificaciones Auto.'],
    metric: { value: '80%', label: 'Tiempo ahorrado' },
    color: '#a78bfa',
  },
  {
    key: 'support',
    icon: LifeBuoy,
    category: 'Soporte' as Category,
    badge: 'SLA GARANTIZADO',
    title: 'Soporte 24/7',
    headline: 'Siempre en línea',
    desc: 'Monitoreo continuo, SLAs garantizados por contrato y equipo técnico disponible cuando tu operación lo exige.',
    features: ['Monitoreo 24/7', 'Respuesta < 1h', 'Backups Diarios', 'SLA por Contrato'],
    metric: { value: '99.9%', label: 'Uptime' },
    color: '#34d399',
  },
]

/* ── Animated card ──────────────────────────────────────── */
function ServiceCard({
  svc,
  index,
  isActive,
  onClick,
}: {
  svc: typeof SERVICES[0]
  index: number
  isActive: boolean
  onClick: () => void
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      onClick={onClick}
      className="group relative cursor-pointer rounded-2xl overflow-hidden transition-all duration-500"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(32px) scale(0.97)',
        transition: `opacity 0.5s ${index * 0.07}s ease, transform 0.5s ${index * 0.07}s ease, box-shadow 0.3s ease`,
        background: isActive
          ? `linear-gradient(135deg, rgba(${hexToRgb(svc.color)}, 0.12) 0%, rgba(5,20,40,0.95) 60%)`
          : 'rgba(5, 20, 40, 0.6)',
        border: `1px solid ${isActive ? svc.color + '55' : 'rgba(0,242,255,0.08)'}`,
        boxShadow: isActive ? `0 0 40px ${svc.color}25, inset 0 0 40px ${svc.color}08` : 'none',
      }}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-700"
        style={{ background: `linear-gradient(90deg, ${svc.color}, transparent)` }}
      />

      <div className="p-7 flex flex-col gap-5">
        {/* Header row */}
        <div className="flex items-start justify-between">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
            style={{ background: `${svc.color}18`, border: `1px solid ${svc.color}35` }}
          >
            <svc.icon className="w-5 h-5" style={{ color: svc.color }} />
          </div>
          <span
            className="text-[9px] font-mono font-bold tracking-[0.25em] px-2.5 py-1 rounded-full"
            style={{ color: svc.color, background: `${svc.color}18` }}
          >
            {svc.badge}
          </span>
        </div>

        {/* Title */}
        <div>
          <p className="text-[10px] font-mono mb-1 transition-colors duration-300"
             style={{ color: isActive ? svc.color : 'var(--slate)' }}>
            {svc.headline}
          </p>
          <h3
            className="text-lg font-bold text-white group-hover:text-white transition-colors duration-300"
            style={{ color: isActive ? 'white' : undefined }}
          >
            {svc.title}
          </h3>
        </div>

        {/* Description — visible on active or hover */}
        <p
          className="text-sm leading-relaxed transition-all duration-500"
          style={{
            color: 'var(--slate)',
            maxHeight: isActive ? '100px' : '0',
            opacity: isActive ? 1 : 0,
            overflow: 'hidden',
          }}
        >
          {svc.desc}
        </p>

        {/* Features list */}
        <ul
          className="flex flex-col gap-2 transition-all duration-500"
          style={{
            maxHeight: isActive ? '200px' : '0',
            opacity: isActive ? 1 : 0,
            overflow: 'hidden',
          }}
        >
          {svc.features.map(f => (
            <li key={f} className="flex items-center gap-2 text-xs" style={{ color: 'var(--slate)' }}>
              <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" style={{ color: svc.color }} />
              {f}
            </li>
          ))}
        </ul>

        {/* Metric + CTA */}
        <div className="flex items-end justify-between pt-2 border-t border-white/5">
          <div>
            <span className="text-2xl font-black" style={{ color: svc.color }}>{svc.metric.value}</span>
            <p className="text-[10px] mt-0.5" style={{ color: 'var(--slate)' }}>{svc.metric.label}</p>
          </div>
          <div
            className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest transition-all duration-300"
            style={{
              color: svc.color,
              opacity: isActive ? 1 : 0,
              transform: isActive ? 'translateX(0)' : 'translateX(-8px)',
            }}
          >
            Ver más <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── Hex helper ─────────────────────────────────────────── */
function hexToRgb(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `${r},${g},${b}`
}

/* ── Section ────────────────────────────────────────────── */
export default function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState<Category>('Todo')
  const [activeCard, setActiveCard] = useState<string | null>('erp')

  const filtered = SERVICES.filter(
    s => activeCategory === 'Todo' || s.category === activeCategory
  )

  return (
    <section
      id="servicios"
      className="py-32 scroll-mt-24"
      style={{ background: 'var(--bg-surface)' }}
    >
      <div className="container">

        {/* ── Header ── */}
        <div className="section-label"><span>01 // Soluciones Digitales</span></div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div>
            <h2
              className="font-black leading-tight tracking-tighter"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
            >
              Soluciones <span className="text-cyan">Digitales</span>
              <br />
              para la Industria
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed lg:text-right" style={{ color: 'var(--slate)' }}>
            Elige la solución que tu empresa necesita y descubre cómo la implementamos para maximizar resultados.
          </p>
        </div>

        {/* ── Category filter menu ── */}
        <div className="flex items-center gap-3 mb-10 flex-wrap">
          {CATEGORIES.map((cat, i) => {
            const isSelected = cat === activeCategory
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="relative px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300"
                style={{
                  background: isSelected ? 'var(--cyan)' : 'rgba(0,242,255,0.05)',
                  color: isSelected ? 'var(--bg-deep)' : 'var(--slate)',
                  border: `1px solid ${isSelected ? 'var(--cyan)' : 'rgba(0,242,255,0.1)'}`,
                  boxShadow: isSelected ? '0 0 25px rgba(0,242,255,0.3)' : 'none',
                  transform: isSelected ? 'scale(1.05)' : 'scale(1)',
                  animationDelay: `${i * 0.06}s`,
                }}
              >
                {/* Dot indicator for active */}
                {isSelected && (
                  <span
                    className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full"
                    style={{ background: '#22c55e', boxShadow: '0 0 8px #22c55e', animation: 'ledBlink 2s infinite' }}
                  />
                )}
                {cat}
                {cat !== 'Todo' && (
                  <span
                    className="ml-2 text-[10px] font-bold px-1.5 py-0.5 rounded-full"
                    style={{ background: isSelected ? 'rgba(0,5,13,0.2)' : 'rgba(0,242,255,0.1)' }}
                  >
                    {SERVICES.filter(s => s.category === cat).length}
                  </span>
                )}
              </button>
            )
          })}

          {/* Live count */}
          <span className="ml-auto text-xs font-mono hidden sm:block" style={{ color: 'var(--slate)' }}>
            {filtered.length} solución{filtered.length !== 1 ? 'es' : ''} disponible{filtered.length !== 1 ? 's' : ''}
          </span>
        </div>

        {/* ── Cards grid ── */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          style={{ transition: 'all 0.4s ease' }}
        >
          {filtered.map((svc, i) => (
            <ServiceCard
              key={svc.key}
              svc={svc}
              index={i}
              isActive={activeCard === svc.key}
              onClick={() => setActiveCard(prev => prev === svc.key ? null : svc.key)}
            />
          ))}
        </div>

        {/* ── Bottom CTA strip ── */}
        <div
          className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-2xl"
          style={{
            background: 'linear-gradient(135deg, rgba(0,242,255,0.06) 0%, rgba(5,20,40,0.8) 100%)',
            border: '1px solid rgba(0,242,255,0.1)',
          }}
        >
          <div>
            <p className="text-sm font-mono mb-1" style={{ color: 'var(--cyan)' }}>¿No encuentras lo que buscas?</p>
            <p className="font-bold text-white">Desarrollamos soluciones completamente a medida.</p>
          </div>
          <a
            href="#contacto"
            className="btn-primary whitespace-nowrap flex-shrink-0"
          >
            Consultar Proyecto <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
