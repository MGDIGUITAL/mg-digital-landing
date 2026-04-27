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
    <section id="servicios" className="relative overflow-hidden bg-[#020617]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="py-24 lg:py-32 flex flex-col lg:flex-row lg:items-end gap-12 justify-between">
          <div className="max-w-3xl">
            <span
              className="text-[10px] font-mono tracking-[0.4em] uppercase mb-6 block font-bold text-blue-400"
            >
              01 // SERVICIOS TÉCNICOS
            </span>
            <h2
              className="text-[3rem] lg:text-[5.5rem] font-black uppercase leading-[0.9] tracking-tighter text-white"
            >
              SOLUCIONES <span style={{ color: 'var(--blue-neon)' }}>DIGITALES</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-white/30 font-medium">
            Implementamos infraestructura crítica y software de gestión para la industria 4.0.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICE_KEYS.map((key, index) => {
            const Icon = SERVICE_ICONS[key]
            const num  = String(index + 1).padStart(2, '0')

            return (
              <div
                key={key}
                className="group p-10 lg:p-14 glass-card rounded-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="flex justify-between items-start mb-10">
                    <span className="text-[10px] font-mono font-black text-white/10 group-hover:text-blue-500 transition-colors">
                      {num}
                    </span>
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-blue-600/20 group-hover:border-blue-500 transition-all duration-500">
                        <Icon className="w-7 h-7 text-white/20 group-hover:text-blue-400 transition-colors" />
                    </div>
                </div>

                <h3 className="font-black uppercase tracking-[0.15em] text-[16px] mb-6 text-white group-hover:text-blue-400 transition-colors">
                  {t(`items.${key}.name`)}
                </h3>

                <p className="text-[12px] leading-relaxed text-white/30 font-medium mb-10 group-hover:text-white/60 transition-colors">
                  {t(`items.${key}.description`)}
                </p>

                <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-blue-400 opacity-40 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                  <span>EXPANDIR MÓDULO</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            )
          })}
        </div>

        <div className="py-24 lg:py-40 flex justify-center">
          <a
            href="#contacto"
            className="flex items-center gap-6 px-16 py-7 font-black uppercase tracking-[0.3em] text-[11px] bg-blue-600 text-white shadow-[0_0_50px_rgba(0,163,255,0.3)] transition-all duration-500 hover:scale-105 hover:bg-blue-500"
          >
            INICIAR TRANSFORMACIÓN
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
