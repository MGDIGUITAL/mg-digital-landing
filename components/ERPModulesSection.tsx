'use client'

import { LayoutDashboard, ShoppingCart, ShoppingBag, Box, Users, Truck, Calculator, FileText } from 'lucide-react'

const MODULES = [
  { icon: LayoutDashboard, name: 'Dashboard' },
  { icon: ShoppingCart, name: 'Ventas' },
  { icon: ShoppingBag, name: 'Compras' },
  { icon: Box, name: 'Inventario' },
  { icon: Users, name: 'Clientes' },
  { icon: Truck, name: 'Proveedores' },
  { icon: Calculator, name: 'Contabilidad' },
  { icon: FileText, name: 'Reportes' },
]

export default function ERPModulesSection() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-sm font-black uppercase tracking-[0.3em] text-blue-600 mb-4">Ecosistema ERP</h2>
          <p className="text-3xl lg:text-4xl font-black text-slate-900">Módulos Inteligentes e Integrados</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
          {MODULES.map((m, i) => (
            <div 
              key={m.name}
              className="flex flex-col items-center gap-4 group cursor-default"
              style={{ width: '120px' }}
            >
              <div className="w-20 h-20 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 border border-slate-100 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-xl group-hover:shadow-blue-500/20 group-hover:-translate-y-2">
                <m.icon className="w-8 h-8" />
              </div>
              <span className="text-sm font-bold text-slate-600 group-hover:text-blue-600 transition-colors">
                {m.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
