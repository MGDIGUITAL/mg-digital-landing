'use client'

import { useTranslations } from 'next-intl'
import {
  Ship,
  FileCheck,
  Globe,
  Laptop,
  FolderOpen,
  Headphones,
  ArrowRight,
} from 'lucide-react'

// Mapeo de claves de servicio a íconos de Lucide
const SERVICE_ICONS = {
  import_export: Ship,
  customs:       FileCheck,
  logistics:     Globe,
  digital:       Laptop,
  documents:     FolderOpen,
  support:       Headphones,
} as const

type ServiceKey = keyof typeof SERVICE_ICONS

const SERVICE_KEYS: ServiceKey[] = [
  'import_export',
  'customs',
  'logistics',
  'digital',
  'documents',
  'support',
]

// Colores de acento por servicio para variedad visual
const ACCENT_COLORS = [
  'from-blue-500 to-cyan-500',
  'from-violet-500 to-purple-500',
  'from-emerald-500 to-teal-500',
  'from-orange-500 to-amber-500',
  'from-rose-500 to-pink-500',
  'from-sky-500 to-indigo-500',
]

export default function ServicesSection() {
  const t = useTranslations('services')

  return (
    <section id="servicios" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Fondo */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.05),_transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
            {t('badge')}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            {t('title')}
          </h2>
          <p className="max-w-2xl mx-auto text-slate-400 text-lg leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        {/* Grid de servicios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICE_KEYS.map((key, index) => {
            const Icon = SERVICE_ICONS[key]
            const accent = ACCENT_COLORS[index]

            return (
              <div
                key={key}
                className="group relative p-6 lg:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/50 hover:border-blue-500/30 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/20 cursor-default"
              >
                {/* Gradiente de fondo al hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600/0 to-cyan-600/0 group-hover:from-blue-600/5 group-hover:to-cyan-600/5 transition-all duration-300" />

                {/* Ícono */}
                <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${accent} p-0.5 mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-full h-full rounded-2xl bg-slate-900 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Contenido */}
                <h3 className="relative text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {t(`items.${key}.name`)}
                </h3>
                <p className="relative text-slate-400 leading-relaxed text-sm">
                  {t(`items.${key}.description`)}
                </p>

                {/* Arrow indicator */}
                <div className="relative mt-4 flex items-center gap-1 text-blue-400/0 group-hover:text-blue-400 transition-all duration-300 text-sm font-medium">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA hacia formulario */}
        <div className="text-center mt-14">
          <a
            href="#cotizaciones"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-2xl hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 shadow-xl hover:shadow-blue-500/30 hover:scale-105"
          >
            Solicitar Cotización
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
