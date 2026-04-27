'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowRight, ChevronRight } from 'lucide-react'

/* ── Animated counter hook ── */
function useCountUp(target: number, duration = 1800, suffix = '') {
  const [value, setValue] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const start = performance.now()
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1)
          // Elastic easing
          const eased = progress < 1
            ? 1 - Math.pow(2, -10 * progress) * Math.cos((progress * 10 - 0.75) * (2 * Math.PI) / 3)
            : 1
          setValue(Math.round(eased * target))
          if (progress < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      }
    }, { threshold: 0.4 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [target, duration])

  return { ref, display: value + suffix }
}

/* ── Individual stat counter ── */
function StatCounter({ value, suffix, label, sub }: {
  value: number; suffix: string; label: string; sub: string
}) {
  const { ref, display } = useCountUp(value, 1600, suffix)
  return (
    <div ref={ref} className="flex flex-col gap-1">
      <span className="text-4xl lg:text-5xl font-black stat-number" style={{ color: 'var(--cyan)' }}>
        {display}
      </span>
      <span className="text-sm font-bold text-white uppercase tracking-widest">{label}</span>
      <span className="text-xs" style={{ color: 'var(--slate)' }}>{sub}</span>
    </div>
  )
}

/* ── Mini live chart ── */
function MiniChart() {
  const [points, setPoints] = useState([40, 55, 35, 60, 45, 70, 50, 65, 42, 75])

  useEffect(() => {
    const interval = setInterval(() => {
      setPoints(prev => {
        const next = [...prev.slice(1), Math.round(30 + Math.random() * 50)]
        return next
      })
    }, 1200)
    return () => clearInterval(interval)
  }, [])

  const pts = points.map((y, i) => `${i * 11},${80 - y}`).join(' ')

  return (
    <svg viewBox="0 0 99 80" className="w-full h-16" preserveAspectRatio="none">
      <defs>
        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--cyan)" stopOpacity="0.4" />
          <stop offset="100%" stopColor="var(--cyan)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polyline
        points={pts}
        fill="none"
        stroke="var(--cyan)"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
        style={{ transition: 'all 0.8s ease' }}
      />
      <polygon
        points={`0,80 ${pts} 99,80`}
        fill="url(#chartGrad)"
        style={{ transition: 'all 0.8s ease' }}
      />
    </svg>
  )
}

/* ── Feature cards below hero ── */
const FEATURES = [
  { icon: '⌗', title: 'Desarrollo Web', desc: 'Sitios y apps modernas, rápidas y adaptadas a tu negocio.' },
  { icon: '◈', title: 'Sistemas ERP', desc: 'Gestiona y automatiza todos los procesos de tu empresa.' },
  { icon: '⬡', title: 'Sistemas CRM', desc: 'Mejora relaciones con clientes y aumenta ventas.' },
  { icon: '⊕', title: 'Proyectos a Medida', desc: 'Soluciones personalizadas para tus necesidades específicas.' },
]

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-center pt-20 pb-0 overflow-hidden grid-bg"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full opacity-20 blur-[120px]"
             style={{ background: 'var(--cyan)' }} />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full opacity-10 blur-[100px]"
             style={{ background: '#0066cc' }} />
      </div>

      {/* ══ MAIN HERO GRID ══ */}
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center min-h-[calc(100vh-5rem)] py-16">

          {/* LEFT — Content */}
          <div className="flex flex-col gap-8">
            {/* Label */}
            <div className="fade-up-1 flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="led" />
                <span className="led" style={{ animationDelay: '0.8s' }} />
                <span className="led" style={{ animationDelay: '1.6s' }} />
              </div>
              <span className="text-xs font-mono tracking-[0.3em] uppercase" style={{ color: 'var(--cyan)' }}>
                Optimización Industrial · Software
              </span>
            </div>

            {/* Headline */}
            <div className="fade-up-2">
              <h1 className="font-black leading-[1.0] tracking-tight" style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}>
                Desarrollamos<br />
                <span className="text-glow">software que hace</span><br />
                crecer tu negocio
              </h1>
            </div>

            {/* Subheadline */}
            <p className="fade-up-3 text-lg leading-relaxed max-w-lg" style={{ color: 'var(--slate)' }}>
              Creamos sistemas ERP, CRM y plataformas web a medida para digitalizar y optimizar la operación industrial de tu empresa.
            </p>

            {/* CTAs */}
            <div className="fade-up-4 flex flex-wrap gap-4">
              <a href="#contacto" className="btn-primary">
                Consultar Proyecto <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#servicios" className="btn-ghost">
                Nuestros Servicios <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* Trust badges */}
            <div className="fade-up-5 flex flex-wrap items-center gap-6 pt-4"
                 style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
              {[
                { value: '+50', label: 'Proyectos entregados' },
                { value: '24/7', label: 'Soporte continuo' },
                { value: '98%', label: 'Satisfacción' },
              ].map(b => (
                <div key={b.label} className="flex items-baseline gap-2">
                  <span className="text-xl font-black" style={{ color: 'var(--cyan)' }}>{b.value}</span>
                  <span className="text-xs" style={{ color: 'var(--slate)' }}>{b.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — 3D Cube + floating panels */}
          <div className="relative flex items-center justify-end">
            {/* Orbit rings */}
            <div className="orbit-ring orbit-ring-1"><span className="orbit-dot" /></div>
            <div className="orbit-ring orbit-ring-2"><span className="orbit-dot" /></div>
            <div className="orbit-ring orbit-ring-3"><span className="orbit-dot" /></div>

            {/* Cube */}
            <div className="cube-wrapper">
              <div className="cube">
                <div className="cube-face front">MG</div>
                <div className="cube-face back">DIG</div>
                <div className="cube-face left">ERP</div>
                <div className="cube-face right">CRM</div>
                <div className="cube-face top">WEB</div>
                <div className="cube-face bottom">4.0</div>
              </div>
            </div>

            {/* Floating card — live chart */}
            <div className="glass absolute top-4 right-0 p-4 w-48 hidden lg:block"
                 style={{ animation: 'fadeUp 0.6s 0.8s ease both' }}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono" style={{ color: 'var(--cyan)' }}>UPTIME</span>
                <span className="text-[10px] font-bold text-green-400">● 99.9%</span>
              </div>
              <MiniChart />
            </div>

            {/* Floating card — CRM metric */}
            <div className="glass absolute bottom-8 left-0 p-4 w-44 hidden lg:block"
                 style={{ animation: 'fadeUp 0.6s 1.1s ease both' }}>
              <div className="text-[10px] font-mono mb-1" style={{ color: 'var(--cyan)' }}>CRM ACTIVO</div>
              <div className="text-2xl font-black text-white">1,248</div>
              <div className="text-[10px] text-green-400 mt-0.5">↑ 12.5% este mes</div>
            </div>
          </div>
        </div>
      </div>

      {/* ══ FEATURE CARDS ══ */}
      <div className="relative z-10" style={{ background: 'rgba(5,20,40,0.5)', borderTop: '1px solid rgba(0,242,255,0.07)' }}>
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f, i) => (
              <div
                key={f.title}
                className="group flex flex-col gap-4 p-8 cursor-default transition-all duration-300"
                style={{
                  borderRight: i < 3 ? '1px solid rgba(0,242,255,0.05)' : 'none',
                  animationDelay: `${i * 0.1}s`,
                }}
              >
                <span className="text-2xl" style={{ color: 'var(--cyan)', opacity: 0.7 }}>{f.icon}</span>
                <h3 className="font-bold text-sm tracking-wide text-white group-hover:text-[var(--cyan)] transition-colors">
                  {f.title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--slate)' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
