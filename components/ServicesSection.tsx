'use client'

import { useTranslations } from 'next-intl'
import { Ship, FileCheck, Globe, Laptop, FolderOpen, Headphones, ArrowUpRight } from 'lucide-react'

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
  'import_export', 'customs', 'logistics', 'digital', 'documents', 'support',
]

export default function ServicesSection() {
  const t = useTranslations('services')

  return (
    <section id="servicios" className="relative overflow-hidden" style={{ background: 'var(--black)' }}>
      {/* Top border */}
      <div className="w-full h-px" style={{ background: 'var(--border)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="py-16 flex flex-col lg:flex-row lg:items-end gap-6 justify-between">
          <div>
            <span
              className="text-xs font-mono tracking-[0.3em] uppercase mb-4 block"
              style={{ color: 'var(--lime)' }}
            >
              01 / SERVICIOS
            </span>
            <h2
              className="font-black uppercase leading-none tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: '#fff' }}
            >
              {t('title')}
            </h2>
          </div>
          <p
            className="max-w-sm text-sm leading-relaxed"
            style={{ color: 'var(--text-muted)' }}
          >
            {t('subtitle')}
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-px" style={{ background: 'var(--border)' }} />

        {/* Services list — horizontal rows */}
        {SERVICE_KEYS.map((key, index) => {
          const Icon = SERVICE_ICONS[key]
          const num  = String(index + 1).padStart(2, '0')

          return (
            <div
              key={key}
              className="group flex items-center gap-6 py-7 cursor-default transition-all duration-300"
              style={{
                borderBottom: '1px solid var(--border)',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget
                el.style.paddingLeft = '24px'
                el.style.background = 'var(--surface)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.paddingLeft = '0px'
                el.style.background = 'transparent'
              }}
            >
              {/* Number */}
              <span
                className="text-xs font-mono w-8 flex-shrink-0"
                style={{ color: 'var(--text-muted)' }}
              >
                {num}
              </span>

              {/* Icon */}
              <div
                className="w-10 h-10 flex-shrink-0 flex items-center justify-center transition-all duration-300"
                style={{ border: '1px solid var(--border)' }}
              >
                <Icon className="w-4 h-4 text-white group-hover:hidden" />
                <Icon className="w-4 h-4 hidden group-hover:block" style={{ color: 'var(--lime)' }} />
              </div>

              {/* Name */}
              <span
                className="flex-1 font-bold uppercase tracking-wider text-sm lg:text-base transition-colors duration-200"
                style={{ color: '#fff' }}
              >
                {t(`items.${key}.name`)}
              </span>

              {/* Description — visible on hover */}
              <span
                className="hidden lg:block flex-1 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ color: 'var(--text-muted)' }}
              >
                {t(`items.${key}.description`)}
              </span>

              {/* Arrow */}
              <ArrowUpRight
                className="w-5 h-5 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-x-2 group-hover:translate-x-0"
                style={{ color: 'var(--lime)' }}
              />
            </div>
          )
        })}

        {/* CTA */}
        <div className="py-14 flex justify-center">
          <a
            href="#cotizaciones"
            className="flex items-center gap-3 px-10 py-4 font-bold uppercase tracking-wider text-sm transition-all duration-200 hover:scale-105 hover:shadow-lg"
            style={{ background: 'var(--lime)', color: '#000' }}
          >
            Solicitar Cotización
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Bottom border */}
      <div className="w-full h-px" style={{ background: 'var(--border)' }} />
    </section>
  )
}
