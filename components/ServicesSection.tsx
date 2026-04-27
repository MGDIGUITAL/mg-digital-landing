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
      <div className="w-full h-px opacity-10" style={{ background: 'var(--lime)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="py-24 lg:py-32 flex flex-col lg:flex-row lg:items-end gap-12 justify-between">
          <div className="max-w-3xl">
            <span
              className="text-[10px] font-mono tracking-[0.4em] uppercase mb-6 block"
              style={{ color: 'var(--lime)' }}
            >
              01 // SERVICIOS TÉCNICOS
            </span>
            <h2
              className="font-black uppercase leading-[0.9] tracking-tighter"
              style={{ fontSize: 'clamp(2.5rem, 6.5vw, 6rem)', color: '#fff' }}
            >
              {t('title')}
            </h2>
          </div>
          <p
            className="max-w-xs text-sm leading-relaxed opacity-40"
          >
            {t('subtitle')}
          </p>
        </div>

        <div className="w-full h-px bg-white/5" />

        {SERVICE_KEYS.map((key, index) => {
          const Icon = SERVICE_ICONS[key]
          const num  = String(index + 1).padStart(2, '0')

          return (
            <div
              key={key}
              className="group flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12 py-12 cursor-default transition-all duration-500"
              style={{
                borderBottom: '1px solid rgba(255,255,255,0.03)',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget
                el.style.background = 'rgba(255,255,255,0.01)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.background = 'transparent'
              }}
            >
              <div className="flex items-center gap-6 flex-shrink-0">
                  <span
                    className="text-[10px] font-mono w-8 flex-shrink-0 opacity-20 group-hover:opacity-100 transition-opacity"
                    style={{ color: 'var(--lime)' }}
                  >
                    {num}
                  </span>

                  <div
                    className="w-14 h-14 flex-shrink-0 flex items-center justify-center transition-all duration-500 border border-white/5 group-hover:border-lime-500/50"
                  >
                    <Icon className="w-6 h-6 text-white/20 group-hover:text-lime-500 transition-colors" />
                  </div>
              </div>

              <div className="flex-1 lg:max-w-xs">
                <h3
                  className="font-black uppercase tracking-[0.15em] text-[13px] lg:text-[15px] transition-colors duration-200"
                  style={{ color: '#fff' }}
                >
                  {t(`items.${key}.name`)}
                </h3>
              </div>

              <div
                className="flex-1 text-[11px] leading-relaxed opacity-30 group-hover:opacity-60 transition-opacity duration-500 max-w-xl"
              >
                {t(`items.${key}.description`)}
              </div>

              <div className="ml-auto opacity-0 group-hover:opacity-100 transition-all -translate-x-8 group-hover:translate-x-0">
                  <ArrowUpRight
                    className="w-6 h-6"
                    style={{ color: 'var(--lime)' }}
                  />
              </div>
            </div>
          )
        })}

        <div className="py-24 lg:py-40 flex justify-center">
          <a
            href="#contacto"
            className="flex items-center gap-4 px-14 py-6 font-black uppercase tracking-[0.3em] text-[11px] transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(197,255,0,0.2)]"
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
