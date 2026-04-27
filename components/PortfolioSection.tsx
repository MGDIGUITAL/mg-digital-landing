'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'

const PROJECTS = [
  {
    title: 'Optimización Logística ABC',
    category: 'Sistemas ERP',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'E-commerce Premium Fashion',
    category: 'Desarrollo Web',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Portal de Clientes Industrial',
    category: 'Sistemas CRM',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Automatización Bodega 4.0',
    category: 'Innovación',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
  },
]

export default function PortfolioSection() {
  const [active, setActive] = useState(0)

  return (
    <section id="proyectos" className="py-24 bg-slate-50 overflow-hidden">
      <div className="container">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-black uppercase tracking-[0.3em] text-blue-600 mb-4">Portafolio</h2>
            <p className="text-4xl lg:text-5xl font-black text-slate-900 leading-tight">Nuestros Trabajos de Ingeniería Digital</p>
          </div>
          <div className="flex gap-4">
            <button className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-white hover:text-blue-600 hover:border-blue-600 transition-all">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-white hover:text-blue-600 hover:border-blue-600 transition-all">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROJECTS.map((p, i) => (
            <div key={p.title} className="group relative aspect-[4/5] rounded-3xl overflow-hidden cursor-pointer">
              <img 
                src={p.image} 
                alt={p.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400 mb-2 block">{p.category}</span>
                <h3 className="text-xl font-bold text-white mb-4 leading-tight">{p.title}</h3>
                <div className="flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500">
                  Ver detalle <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
