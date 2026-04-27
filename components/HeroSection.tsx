'use client'

import { useTranslations } from 'next-intl'
import { ArrowRight } from 'lucide-react'

export default function HeroSection() {
  const t = useTranslations('hero')

  const stats = [
    { value: '45+',   label: t('stat_countries') },
    { value: '300+',  label: t('stat_clients') },
    { value: '12',    label: t('stat_experience') },
    { value: '2.4K+', label: t('stat_shipments') },
  ]

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20"
      style={{ background: 'var(--black)' }}
    >
      {/* Grid tech background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(197,255,0,0.8) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(197,255,0,0.8) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Lime radial glow top-right */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(197,255,0,0.08) 0%, transparent 70%)',
        }}
      />

      {/* Section label */}
      <div className="absolute top-24 left-6 lg:left-12 flex items-center gap-3">
        <span
          className="text-xs font-mono tracking-[0.3em] uppercase"
          style={{ color: 'var(--lime)' }}
        >
          00 / INICIO
        </span>
        <div className="w-12 h-px" style={{ background: 'var(--lime)' }} />
      </div>

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-32">

        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-xs font-mono uppercase tracking-widest"
          style={{
            border: '1px solid var(--lime)',
            color: 'var(--lime)',
            background: 'var(--lime-dim)',
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: 'var(--lime)' }} />
          {t('badge')}
        </div>

        {/* Headline — huge, bold, split color */}
        <h1
          className="font-black uppercase leading-none tracking-tight mb-8"
          style={{ fontSize: 'clamp(3.5rem, 10vw, 9rem)' }}
        >
          <span className="block text-white">{t('headline').split(' ').slice(0, 2).join(' ')}</span>
          <span className="block" style={{ color: 'var(--lime)', WebkitTextStroke: '0' }}>
            {t('headline').split(' ').slice(2).join(' ')}
          </span>
        </h1>

        {/* Divider */}
        <div className="w-full h-px mb-8" style={{ background: 'var(--border)' }} />

        {/* Subheadline + CTAs side by side */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 mb-20">
          <p className="text-base lg:text-lg leading-relaxed max-w-xl" style={{ color: 'var(--text-muted)' }}>
            {t('subheadline')}
          </p>

          <div className="flex flex-wrap gap-4 lg:ml-auto">
            <a
              href="#cotizaciones"
              className="group flex items-center gap-3 px-8 py-4 font-bold uppercase tracking-wider text-sm transition-all duration-200 hover:scale-105"
              style={{ background: 'var(--lime)', color: '#000' }}
            >
              {t('cta_primary')}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#servicios"
              className="group flex items-center gap-3 px-8 py-4 font-bold uppercase tracking-wider text-sm transition-all duration-200 hover:scale-105"
              style={{
                border: '1px solid var(--border)',
                color: 'rgba(255,255,255,0.7)',
                background: 'transparent',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--lime)'
                e.currentTarget.style.color = 'var(--lime)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.color = 'rgba(255,255,255,0.7)'
              }}
            >
              {t('cta_secondary')}
            </a>
          </div>
        </div>

        {/* Stats row */}
        <div
          className="grid grid-cols-2 lg:grid-cols-4"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="py-8 px-6 flex flex-col gap-1"
              style={{
                borderRight: i < stats.length - 1 ? '1px solid var(--border)' : 'none',
              }}
            >
              <span
                className="text-4xl lg:text-5xl font-black uppercase tracking-tight"
                style={{ color: 'var(--lime)' }}
              >
                {stat.value}
              </span>
              <span className="text-xs uppercase tracking-widest font-mono" style={{ color: 'var(--text-muted)' }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
