'use client'

import { LayoutDashboard, ShoppingCart, ShoppingBag, Package, Users, User, Receipt, BarChart3, Settings } from 'lucide-react'

const MODULES = [
  { icon: LayoutDashboard, name: 'Dashboard', desc: 'Resumen general de tu empresa en tiempo real.' },
  { icon: ShoppingCart, name: 'Ventas', desc: 'Cotizaciones, órdenes, facturación y boletas electrónicas.' },
  { icon: ShoppingBag, name: 'Compras', desc: 'Gestión de compras, órdenes a proveedores y recepciones.' },
  { icon: Package, name: 'Inventario', desc: 'Control de stock, productos, bodegas y movimientos.' },
  { icon: Users, name: 'Clientes', desc: 'Gestión de clientes, contactos y segmentación avanzada.' },
  { icon: User, name: 'Proveedores', desc: 'Gestión de proveedores, evaluaciones y pagos.' },
  { icon: Receipt, name: 'Contabilidad', desc: 'Plan de cuentas, ingresos, egresos y conciliaciones.' },
  { icon: BarChart3, name: 'Reportes', desc: 'Reportes personalizados y análisis para tomar mejores decisiones.' },
  { icon: Settings, name: 'Configuración', desc: 'Usuarios, permisos, parámetros y respaldo de datos.' },
]

export default function ERPModulesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        
        {/* Enclosing Light Blue Box */}
        <div className="bg-[#f8fbff] rounded-3xl p-10 lg:p-14 border border-blue-50">
          
          <div className="text-center mb-16">
            <h2 className="text-[22px] font-bold text-slate-700 tracking-wide uppercase">
              SISTEMA ERP - MÓDULOS PRINCIPALES
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-9 gap-4 lg:gap-2">
            {MODULES.map((m, i) => (
              <div 
                key={m.name}
                className="flex flex-col items-center text-center p-3 hover:-translate-y-1 transition-transform group cursor-pointer"
              >
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-[#0055cc] shadow-sm mb-4 border border-blue-100 group-hover:shadow-md transition-shadow">
                  <m.icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <span className="text-[14px] font-bold text-slate-800 mb-2 group-hover:text-[#0055cc] transition-colors">
                  {m.name}
                </span>
                <p className="text-[11px] text-slate-500 leading-snug">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  )
}
