"use client";
import { motion } from "framer-motion";
import { LayoutDashboard, ShoppingCart, ShoppingBag, Package, Users, Truck, Calculator, FileBarChart, Settings } from "lucide-react";

const MODULES = [
  { icon: LayoutDashboard, title: "Dashboard", desc: "Resumen general de tu empresa en tiempo real." },
  { icon: ShoppingCart, title: "Ventas", desc: "Cotizaciones, órdenes, facturación y boletas electrónicas." },
  { icon: ShoppingBag, title: "Compras", desc: "Gestión de compras, órdenes a proveedores y recepciones." },
  { icon: Package, title: "Inventario", desc: "Control de stock, productos, bodegas y movimientos." },
  { icon: Users, title: "Clientes", desc: "Gestión de clientes, contactos y segmentación avanzada." },
  { icon: Truck, title: "Proveedores", desc: "Gestión de proveedores, evaluaciones y pagos." },
  { icon: Calculator, title: "Contabilidad", desc: "Plan de cuentas, ingresos, egresos y conciliaciones." },
  { icon: FileBarChart, title: "Reportes", desc: "Reportes personalizados y análisis para tomar mejores decisiones." },
];

export default function ERPModulesSection() {
  return (
    <section className="py-24 w-full" id="erp">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 uppercase">
            Sistema ERP - <span className="text-cyan-500">Módulos Principales</span>
          </h2>
          <p className="text-slate-500 font-medium max-w-2xl mx-auto">
            El cerebro de tu empresa, con todas las herramientas necesarias.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 w-full">
          {MODULES.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-2xl flex flex-col items-center text-center shadow-sm border border-slate-100 hover:shadow-lg hover:border-cyan-100 transition-all cursor-pointer group"
            >
              <div className="w-14 h-14 rounded-xl bg-slate-50 flex items-center justify-center mb-4 group-hover:bg-cyan-50 transition-colors">
                <m.icon className="w-7 h-7 text-slate-700 group-hover:text-cyan-500 transition-colors" strokeWidth={1.5} />
              </div>
              <h3 className="text-sm md:text-base font-bold text-slate-900 mb-2">{m.title}</h3>
              <p className="text-xs text-slate-500">
                {m.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
