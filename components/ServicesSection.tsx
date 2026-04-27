'use client'

import { Globe, Database, Users, Monitor, BarChart, Smartphone, ChevronRight } from 'lucide-react'

const SERVICES = [
  {
    icon: Globe,
    title: 'Páginas Web',
    desc: 'Sitios corporativos y e-commerce de alto impacto visual y rendimiento.',
    color: 'bg-blue-500',
  },
  {
    icon: Database,
    title: 'Sistemas ERP',
    desc: 'Planificación de recursos empresariales para el control total de procesos.',
    color: 'bg-indigo-600',
  },
  {
    icon: Users,
    title: 'Sistemas CRM',
    desc: 'Gestión inteligente de relaciones con clientes para potenciar tus ventas.',
    color: 'bg-cyan-500',
  },
  {
    icon: Monitor,
    title: 'Más Folios',
    desc: 'Soluciones de facturación electrónica y gestión tributaria automatizada.',
    color: 'bg-blue-700',
  },
  {
    icon: BarChart,
    title: 'Todo Digital',
    desc: 'Digitalización completa de archivos y flujos de trabajo tradicionales.',
    color: 'bg-violet-600',
  },
  {
    icon: Smartphone,
    title: 'Aplicaciones',
    desc: 'Apps móviles nativas e híbridas diseñadas para escalar tu negocio.',
    color: 'bg-sky-500',
  },
]

export default function ServicesSection() {
  return (
    <section id="servicios" className="py-24 bg-slate-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-sm font-black uppercase tracking-[0.3em] text-blue-600 mb-4">Soluciones Digitales</h2>
          <p className="text-4xl lg:text-5xl font-black text-slate-900">Especialización Técnica</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((s, i) => (
            <div 
              key={s.title} 
              className="group bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-14 h-14 ${s.color} rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform`}>
                <s.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{s.title}</h3>
              <p className="text-slate-500 leading-relaxed mb-8">{s.desc}</p>
              <div className="flex items-center gap-2 text-blue-600 font-bold text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all">
                Saber más <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
