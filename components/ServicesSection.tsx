'use client'

import { useRef, useEffect, useState } from 'react'
import {
  Cpu, Database, Layout, Zap, Search, LifeBuoy, ChevronRight,
} from 'lucide-react'

/* ── Data ─────────────────────────────────────────── */
const CATEGORIES = ['Todo', 'Software', 'Industrial', 'Soporte'] as const
type Category = typeof CATEGORIES[number]

const SERVICES = [
  {
    key: 'web',
    icon: Layout,
    category: 'Software' as Category,
    title: 'Desarrollo Web',
    headline: 'Plataformas que convierten',
    metric: '+300%',
    metricLabel: 'Tráfico',
    bullets: ['Optimización SEO', 'UX Avanzada', 'Deploy en Cloud'],
    color: '#6366f1',
  },
  {
    key: 'erp',
    icon: Database,
    category: 'Software' as Category,
    title: 'Sistemas ERP',
    headline: 'El cerebro de tu empresa',
    metric: '60%',
    metricLabel: 'Menos errores',
    bullets: ['Gestión Integral', 'Reportes en Vivo', 'Multi-sucursal'],
    color: '#00f2ff',
  },
  {
    key: 'crm',
    icon: Search,
    category: 'Software' as Category,
    title: 'Sistemas CRM',
    headline: 'Clientes bajo control',
    metric: '+45%',
    metricLabel: 'Ventas cerradas',
    bullets: ['Automatización Leads', 'Dashboard', 'Analytics'],
    color: '#22d3ee',
  },
  {
    key: 'industrial',
    icon: Cpu,
    category: 'Industrial' as Category,
    title: 'Optimización Industrial',
    headline: 'Producción al máximo',
    metric: '98%',
    metricLabel: 'Eficiencia',
    bullets: ['IoT', 'Mantenimiento Predictivo', 'Control SCADA'],
    color: '#f59e0b',
  },
  {
    key: 'automation',
    icon: Zap,
    category: 'Industrial' as Category,
    title: 'Automatización',
    headline: 'Procesos sin fricción',
    metric: '80%',
    metricLabel: 'Tiempo ahorrado',
    bullets: ['RPA', 'Integración API', 'Workflows Auto.'],
    color: '#a78bfa',
  },
  {
    key: 'support',
    icon: LifeBuoy,
    category: 'Soporte' as Category,
    title: 'Soporte 24/7',
    headline: 'Siempre en línea',
    metric: '99.9%',
    metricLabel: 'Uptime',
    bullets: ['SLA Garantizado', 'Respuesta Inmediata', 'Backups Diarios'],
    color: '#34d399',
  },
]

/* ── Mouse-tracking glow hook ── */
function useMouseGlow(ref: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      el.style.setProperty('--mx', `${x}px`)
      el.style.setProperty('--my', `${y}px`)
    }
    el.addEventListener('mousemove', onMove)
    return () => el.removeEventListener('mousemove', onMove)
  }, [])
}

/* ── Service Card ─────────────────────────────────── */
function ServiceCard({ svc, index }: { svc: typeof SERVICES[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const el = cardRef.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.1 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative rounded-2xl overflow-hidden transition-all duration-500"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? hovered ? 'translateY(-6px) scale(1.01)' : 'translateY(0) scale(1)'
          : 'translateY(28px) scale(0.97)',
        transition: `opacity 0.5s ${index * 0.07}s ease, transform 0.4s ease, box-shadow 0.4s ease`,
        background: 'rgba(5, 15, 35, 0.7)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: `1px solid ${hovered ? svc.color + '70' : 'rgba(0,242,255,0.12)'}`,
        boxShadow: hovered
          ? `0 0 0 1px ${svc.color}30, 0 20px 60px ${svc.color}20, inset 0 0 30px ${svc.color}06`
          : '0 4px 24px rgba(0,0,0,0.4)',
      }}
    >
      {/* Animated top border glow */}
      <div
        className="absolute top-0 left-0 right-0 h-[1.5px] transition-all duration-500"
        style={{
          background: hovered
            ? `linear-gradient(90deg, transparent 0%, ${svc.color} 50%, transparent 100%)`
            : 'transparent',
          boxShadow: hovered ? `0 0 10px ${svc.color}` : 'none',
        }}
      />

      <div className="p-6 flex flex-col gap-4">
        {/* Icon + title row */}
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300"
            style={{
              background: `${svc.color}20`,
              border: `1px solid ${svc.color}40`,
              boxShadow: hovered ? `0 0 14px ${svc.color}50` : 'none',
            }}
          >
            <svc.icon className="w-4.5 h-4.5" style={{ color: svc.color, width: '18px', height: '18px' }} />
          </div>
          <h3 className="font-bold text-base text-white">
            <span style={{ color: svc.color }}>+ </span>{svc.title}
          </h3>
        </div>

        {/* Metric row */}
        <div className="flex items-baseline gap-4">
          <span
            className="text-4xl font-black leading-none transition-all duration-300"
            style={{ color: svc.color, textShadow: hovered ? `0 0 20px ${svc.color}80` : 'none' }}
          >
            {svc.metric}
          </span>
          <div className="flex flex-col">
            <span className="text-xs font-bold text-white/80">{svc.metricLabel}</span>
            <span className="text-[11px]" style={{ color: 'var(--slate)' }}>{svc.headline}</span>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full" style={{ background: 'rgba(255,255,255,0.05)' }} />

        {/* Bullet features */}
        <ul className="flex flex-col gap-2">
          {svc.bullets.map(b => (
            <li key={b} className="flex items-center gap-2.5">
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: svc.color, boxShadow: `0 0 6px ${svc.color}` }}
              />
              <span className="text-xs text-white/70">{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

/* ── Section ─────────────────────────────────────── */
export default function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState<Category>('Todo')
  const sectionRef = useRef<HTMLDivElement>(null)

  const filtered = SERVICES.filter(
    s => activeCategory === 'Todo' || s.category === activeCategory
  )

  return (
    <section
      id="servicios"
      className="relative py-32 scroll-mt-24 overflow-hidden"
    >
      {/* ── PCB / Robot background ── */}
      <div className="absolute inset-0 z-0">
        <img
          src="/services_bg.png"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
          style={{ opacity: 0.18 }}
        />
        {/* Dark overlay for readability */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(0,5,13,0.85) 0%, rgba(5,15,35,0.78) 50%, rgba(0,5,13,0.92) 100%)',
          }}
        />
        {/* Scanlines */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, rgba(0,242,255,0.012) 0px, rgba(0,242,255,0.012) 1px, transparent 1px, transparent 3px)',
          }}
        />
      </div>

      {/* ── Content ── */}
      <div className="container relative z-10">

        {/* Header — centered */}
        <div className="text-center mb-10">
          <div className="section-label justify-center">
            <span>01 // Soluciones Digitales</span>
          </div>
          <h2
            className="font-black leading-tight tracking-tight mb-4"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)' }}
          >
            Soluciones <span className="text-cyan">Digitales</span>
            <br />
            para la Industria
          </h2>

          {/* Filter pills — centered */}
          <div className="flex items-center justify-center gap-2 flex-wrap mb-4">
            {CATEGORIES.map(cat => {
              const isActive = cat === activeCategory
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="relative px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300"
                  style={{
                    background: isActive ? 'var(--cyan)' : 'rgba(0,242,255,0.07)',
                    color: isActive ? 'var(--bg-deep)' : 'var(--slate)',
                    border: `1px solid ${isActive ? 'var(--cyan)' : 'rgba(0,242,255,0.12)'}`,
                    boxShadow: isActive ? '0 0 22px rgba(0,242,255,0.4)' : 'none',
                    transform: isActive ? 'scale(1.06)' : 'scale(1)',
                  }}
                >
                  {isActive && (
                    <span
                      className="absolute -top-1 -right-1 w-2 h-2 rounded-full"
                      style={{ background: '#22c55e', boxShadow: '0 0 6px #22c55e', animation: 'ledBlink 2s infinite' }}
                    />
                  )}
                  {cat}
                </button>
              )
            })}
            <span className="text-xs font-mono ml-2" style={{ color: 'var(--slate)' }}>
              {filtered.length} soluciones disponibles
            </span>
          </div>

          <p className="text-sm max-w-md mx-auto" style={{ color: 'var(--slate)' }}>
            Elige la solución que tu empresa necesita y descubre cómo la implementamos para maximizar resultados.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {filtered.map((svc, i) => (
            <ServiceCard key={svc.key} svc={svc} index={i} />
          ))}
        </div>

        {/* CTA button — centered, neon border */}
        <div className="flex flex-col items-center gap-4">
          <a
            href="#contacto"
            className="group relative inline-flex items-center gap-3 px-10 py-4 font-bold uppercase tracking-[0.2em] text-sm text-white rounded-full transition-all duration-400"
            style={{
              background: 'rgba(0,242,255,0.06)',
              border: '1.5px solid var(--cyan)',
              boxShadow: '0 0 24px rgba(0,242,255,0.25)',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget
              el.style.background = 'rgba(0,242,255,0.12)'
              el.style.boxShadow = '0 0 50px rgba(0,242,255,0.45)'
              el.style.transform = 'scale(1.04)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget
              el.style.background = 'rgba(0,242,255,0.06)'
              el.style.boxShadow = '0 0 24px rgba(0,242,255,0.25)'
              el.style.transform = 'scale(1)'
            }}
          >
            <span style={{ color: 'var(--cyan)' }}>Consultar Proyecto</span>
            <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" style={{ color: 'var(--cyan)' }} />
          </a>

          <p className="text-xs text-center" style={{ color: 'var(--slate)' }}>
            <span style={{ color: 'var(--cyan)' }}>¿No encuentras lo que buscas?</span>
            {' '}Desarrollamos soluciones completamente a medida.
          </p>
        </div>
      </div>
    </section>
  )
}
