'use client'

import { useTranslations } from 'next-intl'
import { ArrowRight, Cpu, BarChart3, Globe } from 'lucide-react'

export default function HeroSection() {
  const t = useTranslations('hero')

  const stats = [
    { icon: BarChart3, value: '98%', label: 'Eficiencia' },
    { icon: Cpu,      value: '24/7', label: 'Monitoreo' },
    { icon: Globe,    value: '50+',  label: 'Proyectos' },
  ]

  return (
    <section
      id="inicio"
      className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-center overflow-hidden pt-20"
      style={{ background: 'var(--black)' }}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,255,0,0.05)_0%,transparent_70%)] z-10" />
        <div className="w-full h-full opacity-30 grayscale contrast-125 scale-105 motion-safe:animate-[pulse_10s_ease-in-out_infinite]">
            <img 
              src="/hero_industrial_tech_1777267554018.png" 
              alt="Industrial Technology" 
              className="w-full h-full object-cover"
            />
        </div>
      </div>

      {/* Grid tech background */}
      <div
        className="absolute inset-0 opacity-[0.03] z-10 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(197,255,0,0.8) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(197,255,0,0.8) 1px, transparent 1px)`,
          backgroundSize: '100px 100px',
        }}
      />

      {/* Main content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 py-32">

        {/* Badge */}
        <div
          className="inline-flex items-center gap-3 px-5 py-2.5 mb-10 text-xs font-mono uppercase tracking-[0.2em]"
          style={{
            border: '1px solid var(--lime)',
            color: 'var(--lime)',
            background: 'rgba(197,255,0,0.05)',
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full animate-ping" style={{ background: 'var(--lime)' }} />
          {t('badge')}
        </div>

        {/* Headline */}
        <h1
          className="font-black uppercase leading-[0.9] tracking-tighter mb-10"
          style={{ fontSize: 'clamp(3.5rem, 11vw, 10rem)' }}
        >
          <span className="block text-white mb-2">{t('headline').split(' ').slice(0, 2).join(' ')}</span>
          <span className="block italic" style={{ color: 'var(--lime)', WebkitTextStroke: '1px var(--lime)' }}>
            {t('headline').split(' ').slice(2).join(' ')}
          </span>
        </h1>

        {/* Subheadline + CTAs */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10 mb-24">
          <p className="text-base lg:text-xl leading-relaxed max-w-2xl font-medium" style={{ color: 'rgba(255,255,255,0.6)' }}>
            {t('subheadline')}
          </p>

          <div className="flex flex-wrap gap-5 lg:ml-auto">
            <a
              href="#contacto"
              className="group flex items-center gap-4 px-10 py-5 font-black uppercase tracking-widest text-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(197,255,0,0.2)]"
              style={{ background: 'var(--lime)', color: '#000' }}
            >
              {t('cta_primary')}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Technical Stats */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-0"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="py-10 px-8 flex items-center gap-6 group hover:bg-white/[0.02] transition-colors"
              style={{
                borderRight: i < stats.length - 1 ? '1px solid var(--border)' : 'none',
              }}
            >
              <stat.icon className="w-8 h-8 opacity-20 group-hover:opacity-100 transition-opacity" style={{ color: 'var(--lime)' }} />
              <div>
                  <div
                    className="text-3xl lg:text-4xl font-black uppercase tracking-tighter"
                    style={{ color: '#fff' }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.3em] font-mono mt-1" style={{ color: 'var(--text-muted)' }}>
                    {stat.label}
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
