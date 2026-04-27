'use client'

import { Code2, Cubes, Handshake, FileText, CloudCog, Smartphone } from 'lucide-react'

const SERVICES = [
  {
    icon: Code2,
    title: 'PÁGINAS WEB',
    desc: 'Diseñamos sitios web modernos, responsivos y enfocados en convertir visitas en clientes.',
  },
  {
    icon: Cubes,
    title: 'SISTEMAS ERP',
    desc: 'Desarrollamos sistemas ERP personalizados para optimizar y automatizar los procesos de tu negocio.',
  },
  {
    icon: Handshake,
    title: 'CRM',
    desc: 'Creamos soluciones CRM a medida para gestionar tus clientes y aumentar tus ventas.',
  },
  {
    icon: FileText,
    title: 'MÁS FOLIOS',
    desc: 'Digitaliza y organiza tus documentos con sistemas de folios electrónicos seguros y eficientes.',
  },
  {
    icon: CloudCog,
    title: 'TODO DIGITAL',
    desc: 'Soluciones 100% digitales para llevar tu negocio al siguiente nivel.',
  },
  {
    icon: Smartphone,
    title: 'APLICACIONES',
    desc: 'Desarrollamos aplicaciones móviles a medida para iOS y Android.',
  },
]

export default function ServicesSection() {
  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-[22px] font-bold text-slate-700 tracking-wide mb-2 uppercase">Nuestros Servicios</h2>
          <p className="text-[15px] text-slate-500">Soluciones digitales completas para cada necesidad de tu negocio.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          {SERVICES.map((s, i) => (
            <div 
              key={s.title} 
              className="flex flex-col items-center text-center p-6 rounded-2xl border border-blue-100 hover:shadow-lg hover:-translate-y-1 transition-all bg-white"
            >
              <s.icon className="w-12 h-12 text-[#0055cc] mb-6" strokeWidth={1.2} />
              <h3 className="text-[14px] font-bold text-slate-800 mb-3 uppercase">{s.title}</h3>
              <p className="text-[13px] text-slate-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
