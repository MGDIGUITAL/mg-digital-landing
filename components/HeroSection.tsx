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
      className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-center overflow-hidden pt-24"
      style={{ background: 'var(--black)' }}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,255,0,0.03)_0%,transparent_70%)] z-10" />
        <div className="w-full h-full opacity-20 grayscale contrast-125 scale-105">
            <img 
              src="/hero_industrial_tech_1777267554018.png" 
              alt="Industrial Technology" 
              className="w-full h-full object-cover"
            />
        </div>
      </div>

      {/* Grid tech background */}
      <div
        className="absolute inset-0 opacity-[0.02] z-10 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(197,255,0,0.8) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(197,255,0,0.8) 1px, transparent 1px)`,
          backgroundSize: '120px 120px',
        }}
      />

      {/* Main content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 py-20">

        {/* Badge */}
        <div
          className="inline-flex items-center gap-3 px-4 py-2 mb-12 text-[10px] font-mono uppercase tracking-[0.3em]"
          style={{
            border: '1px solid rgba(197,255,0,0.2)',
            color: 'var(--lime)',
            background: 'rgba(197,255,0,0.03)',
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: 'var(--lime)' }} />
          {t('badge')}
        </div>

        {/* Headline */}
        <div className="max-w-5xl mb-12">
            <h1
              className="font-black uppercase leading-[0.85] tracking-tighter"
              style={{ fontSize: 'clamp(3rem, 10vw, 8.5rem)' }}
            >
              <span className="block text-white mb-2">{t('headline').split(' ').slice(0, 2).join(' ')}</span>
              <span className="block italic" style={{ color: 'var(--lime)', WebkitTextStroke: '1px var(--lime)' }}>
                {t('headline').split(' ').slice(2).join(' ')}
              </span>
            </h1>
        </div>

        {/* Subheadline + CTAs */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12 mb-32">
          <p className="text-sm lg:text-lg leading-relaxed max-w-xl" style={{ color: 'rgba(255,255,255,0.5)' }}>
            {t('subheadline')}
          </p>

          <div className="flex flex-wrap gap-6 lg:ml-auto">
            <a
              href="#contacto"
              className="group flex items-center gap-4 px-10 py-5 font-black uppercase tracking-[0.2em] text-[11px] transition-all duration-300 hover:scale-105"
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
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="py-12 px-8 flex items-center gap-6 group"
              style={{
                borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
              }}
            >
              <stat.icon className="w-6 h-6 opacity-30 group-hover:opacity-100 transition-opacity" style={{ color: 'var(--lime)' }} />
              <div>
                  <div className="text-3xl font-black uppercase tracking-tighter text-white">
                    {stat.value}
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.3em] font-mono mt-1 opacity-40">
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
