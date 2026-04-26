'use client'

import { useTranslations } from 'next-intl'
import { ArrowRight, Play, Globe2, Users, Award, TrendingUp } from 'lucide-react'

export default function HeroSection() {
  const t = useTranslations('hero')

  const stats = [
    { icon: Globe2, value: '45+', label: t('stat_countries') },
    { icon: Users,  value: '300+', label: t('stat_clients') },
    { icon: Award,  value: '12',   label: t('stat_experience') },
    { icon: TrendingUp, value: '2.4K+', label: t('stat_shipments') },
  ]

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Fondo con gradiente y malla animada */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/30 to-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(59,130,246,0.15),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(6,182,212,0.10),_transparent_50%)]" />

      {/* Grid decorativo */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Orbes decorativos */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-16 -left-32 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl animate-pulse [animation-delay:2s]" />

      {/* Contenido principal */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium backdrop-blur-sm">
          <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
          {t('badge')}
        </div>

        {/* Headline principal */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
          <span className="text-white">{t('headline').split(' ').slice(0, 2).join(' ')}</span>
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
            {t('headline').split(' ').slice(2).join(' ')}
          </span>
        </h1>

        {/* Subtítulo */}
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-400 mb-10 leading-relaxed">
          {t('subheadline')}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <a
            href="#cotizaciones"
            className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-2xl hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 shadow-xl hover:shadow-blue-500/40 hover:scale-105"
          >
            {t('cta_primary')}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#servicios"
            className="group flex items-center gap-2 px-8 py-4 bg-slate-800/60 text-white font-semibold rounded-2xl border border-slate-700/50 hover:border-blue-500/50 hover:bg-slate-800/80 transition-all duration-300 backdrop-blur-sm"
          >
            <Play className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
            {t('cta_secondary')}
          </a>
        </div>

        {/* Estadísticas */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {stats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="group flex flex-col items-center gap-2 p-6 rounded-2xl bg-slate-900/50 border border-slate-800/50 hover:border-blue-500/30 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center mb-1 group-hover:bg-blue-500/20 transition-colors">
                <Icon className="w-5 h-5 text-blue-400" />
              </div>
              <span className="text-3xl font-extrabold text-white">{value}</span>
              <span className="text-sm text-slate-400 text-center">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-px h-8 bg-gradient-to-b from-transparent to-blue-400/50" />
        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
      </div>
    </section>
  )
}
