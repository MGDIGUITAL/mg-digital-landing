"use client";
import { motion } from "framer-motion";
import { LayoutDashboard, ShoppingCart, ShoppingBag, Package, Users, Truck, Calculator, FileBarChart } from "lucide-react";

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function ERPModulesSection() {
  return (
    <section className="py-24 w-full bg-[var(--color-surface-light)]" id="erp">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4 uppercase">
            Sistema ERP - <span className="text-[var(--color-primary)] drop-shadow-[0_0_10px_rgba(230,0,0,0.4)]">Módulos Principales</span>
          </h2>
          <p className="text-white font-medium max-w-2xl mx-auto">
            El cerebro de tu empresa, con todas las herramientas necesarias.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
        >
          {MODULES.map((m, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="bg-[var(--color-background)] p-6 rounded-2xl flex flex-col items-center text-center border border-[var(--color-border)] shadow-sm transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(230,0,0,0.15)] hover:border-[var(--color-primary)] cursor-pointer group"
            >
              <div className="w-16 h-16 rounded-xl bg-[var(--color-surface)] flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-[var(--color-primary)]/10">
                <m.icon className="w-8 h-8 text-white transition-transform duration-300 group-hover:text-[var(--color-primary)] group-hover:scale-110" strokeWidth={1.5} />
              </div>
              <h3 className="text-base md:text-lg font-bold text-white mb-2">{m.title}</h3>
              <p className="text-xs md:text-sm text-white leading-relaxed">
                {m.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
