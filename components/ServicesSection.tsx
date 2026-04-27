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
    <section id="servicios" className="relative overflow-hidden" style={{ background: 'var(--white)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="py-24 lg:py-32 flex flex-col lg:flex-row lg:items-end gap-12 justify-between">
          <div className="max-w-3xl">
            <span
              className="text-[10px] font-mono tracking-[0.4em] uppercase mb-6 block font-bold"
              style={{ color: 'var(--blue-primary)' }}
            >
              01 // SERVICIOS TÉCNICOS
            </span>
            <h2
              className="font-black uppercase leading-[0.95] tracking-tighter text-slate-900"
              style={{ fontSize: 'clamp(2.5rem, 6.5vw, 6rem)' }}
            >
              {t('title')}
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-slate-500 font-medium">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-slate-100">
          {SERVICE_KEYS.map((key, index) => {
            const Icon = SERVICE_ICONS[key]
            const num  = String(index + 1).padStart(2, '0')

            return (
              <div
                key={key}
                className="group p-10 lg:p-14 border-r border-b border-slate-100 transition-all duration-500 hover:bg-slate-50"
              >
                <div className="flex justify-between items-start mb-10">
                    <span className="text-[10px] font-mono font-bold text-slate-300 group-hover:text-blue-500 transition-colors">
                      {num}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition-all">
                        <Icon className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                </div>

                <h3 className="font-black uppercase tracking-[0.15em] text-[15px] mb-6 text-slate-900 group-hover:text-blue-600 transition-colors">
                  {t(`items.${key}.name`)}
                </h3>

                <p className="text-[12px] leading-relaxed text-slate-500 font-medium mb-8">
                  {t(`items.${key}.description`)}
                </p>

                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-blue-600 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                  <span>Saber Más</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            )
          })}
        </div>

        <div className="py-24 lg:py-40 flex justify-center">
          <a
            href="#contacto"
            className="flex items-center gap-4 px-14 py-6 font-black uppercase tracking-[0.3em] text-[11px] bg-blue-600 text-white shadow-2xl shadow-blue-500/20 transition-all duration-500 hover:scale-105"
          >
            Optimizar Mi Empresa
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
