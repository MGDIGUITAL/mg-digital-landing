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
      style={{ background: 'var(--white)' }}
    >
      {/* Background with subtle tech pattern */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent z-10" />
        <img 
          src="/hero_corporate_tech_light_1777268082509.png" 
          alt="Corporate Technology" 
          className="absolute right-0 top-0 h-full w-2/3 object-cover grayscale opacity-20 transition-all duration-1000"
        />
        <div 
          className="absolute inset-0 opacity-[0.03] z-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(var(--blue-primary) 0.5px, transparent 0.5px)`,
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 py-20">

        {/* Badge */}
        <div
          className="inline-flex items-center gap-3 px-4 py-2 mb-10 text-[10px] font-mono uppercase tracking-[0.3em] font-bold"
          style={{
            borderLeft: '4px solid var(--blue-primary)',
            color: 'var(--blue-primary)',
            background: 'var(--blue-soft)',
          }}
        >
          {t('badge')}
        </div>

        {/* Headline */}
        <div className="max-w-4xl mb-12">
            <h1
              className="font-black uppercase leading-[0.95] tracking-tighter"
              style={{ fontSize: 'clamp(3.5rem, 9vw, 8.5rem)', color: 'var(--blue-deep)' }}
            >
              <span className="block mb-2">{t('headline').split(' ').slice(0, 2).join(' ')}</span>
              <span className="block" style={{ color: 'var(--blue-primary)' }}>
                {t('headline').split(' ').slice(2).join(' ')}
              </span>
            </h1>
        </div>

        {/* Subheadline + CTAs */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-16 mb-32">
          <p className="text-base lg:text-xl leading-relaxed max-w-xl font-medium text-slate-500">
            {t('subheadline')}
          </p>

          <div className="flex flex-wrap gap-6 lg:ml-auto">
            <a
              href="#contacto"
              className="group flex items-center gap-4 px-12 py-5 font-black uppercase tracking-[0.2em] text-[11px] bg-blue-600 text-white shadow-xl shadow-blue-500/20 transition-all duration-300 hover:bg-blue-700 hover:-translate-y-1"
            >
              {t('cta_primary')}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Corporate Stats */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-0 bg-white shadow-2xl shadow-blue-900/5 rounded-sm overflow-hidden"
          style={{ border: '1px solid var(--border)' }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="py-12 px-10 flex items-center gap-8 group hover:bg-slate-50 transition-colors"
              style={{
                borderRight: i < stats.length - 1 ? '1px solid var(--border)' : 'none',
              }}
            >
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center transition-colors group-hover:bg-blue-600">
                <stat.icon className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <div>
                  <div className="text-4xl font-black uppercase tracking-tighter text-slate-900">
                    {stat.value}
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.3em] font-mono mt-1 font-bold text-slate-400">
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
