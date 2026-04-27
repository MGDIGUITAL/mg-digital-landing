'use client'

import { useTranslations } from 'next-intl'
import { Cpu, Database, Layout, Zap, Search, LifeBuoy, ArrowUpRight } from 'lucide-react'

const SERVICE_ICONS = {
  industrial_opt: Cpu,
  erp_crm:        Database,
  web_dev:        Layout,
  automation:     Zap,
  consulting:     Search,
  support:        LifeBuoy,
} as const

type ServiceKey = keyof typeof SERVICE_ICONS

const SERVICE_KEYS: ServiceKey[] = [
  'industrial_opt', 'erp_crm', 'web_dev', 'automation', 'consulting', 'support',
]

export default function ServicesSection() {
  const t = useTranslations('services')

  return (
    <section id="servicios" className="relative overflow-hidden" style={{ background: 'var(--black)' }}>
      <div className="w-full h-px" style={{ background: 'var(--border)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="py-20 flex flex-col lg:flex-row lg:items-end gap-6 justify-between">
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

        <div className="w-full h-px" style={{ background: 'var(--border)' }} />

        {SERVICE_KEYS.map((key, index) => {
          const Icon = SERVICE_ICONS[key]
          const num  = String(index + 1).padStart(2, '0')

          return (
            <div
              key={key}
              className="group flex items-center gap-6 py-8 cursor-default transition-all duration-300"
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
              <span
                className="text-xs font-mono w-8 flex-shrink-0"
                style={{ color: 'var(--text-muted)' }}
              >
                {num}
              </span>

              <div
                className="w-12 h-12 flex-shrink-0 flex items-center justify-center transition-all duration-300"
                style={{ border: '1px solid var(--border)' }}
              >
                <Icon className="w-5 h-5 text-white group-hover:hidden" />
                <Icon className="w-5 h-5 hidden group-hover:block" style={{ color: 'var(--lime)' }} />
              </div>

              <div className="flex-1">
                <h3
                  className="font-bold uppercase tracking-wider text-sm lg:text-base transition-colors duration-200"
                  style={{ color: '#fff' }}
                >
                  {t(`items.${key}.name`)}
                </h3>
                <p className="text-xs leading-relaxed mt-1 block lg:hidden" style={{ color: 'var(--text-muted)' }}>
                  {t(`items.${key}.description`)}
                </p>
              </div>

              <span
                className="hidden lg:block flex-1 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ color: 'var(--text-muted)' }}
              >
                {t(`items.${key}.description`)}
              </span>

              <ArrowUpRight
                className="w-5 h-5 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-x-2 group-hover:translate-x-0"
                style={{ color: 'var(--lime)' }}
              />
            </div>
          )
        })}

        <div className="py-20 flex justify-center">
          <a
            href="#contacto"
            className="flex items-center gap-3 px-12 py-5 font-bold uppercase tracking-wider text-sm transition-all duration-200 hover:scale-105 hover:shadow-[0_0_30px_rgba(197,255,0,0.15)]"
            style={{ background: 'var(--lime)', color: '#000' }}
          >
            Optimizar Mi Empresa
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
