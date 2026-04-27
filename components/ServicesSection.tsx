"use client";

import { motion } from "framer-motion";
import { Monitor, Box, Users, FileText, Cloud, Smartphone } from "lucide-react";

const SERVICES = [
  { icon: Monitor, title: "Páginas Web", desc: "Diseñamos sitios web modernos, responsivos y enfocados en convertir visitas en clientes con UX/UI de primer nivel." },
  { icon: Box, title: "Sistemas ERP", desc: "Desarrollamos ERP personalizados para optimizar y automatizar los procesos operativos y financieros de tu empresa." },
  { icon: Users, title: "Plataformas CRM", desc: "Creamos soluciones CRM a medida para gestionar tus clientes, automatizar seguimientos y aumentar tus ventas." },
  { icon: FileText, title: "Sistemas de Folios", desc: "Digitaliza y organiza tus documentos con sistemas de folios electrónicos seguros y de alta eficiencia." },
  { icon: Cloud, title: "Transformación Digital", desc: "Soluciones 100% cloud para llevar toda la infraestructura de tu negocio al siguiente nivel de eficiencia." },
  { icon: Smartphone, title: "Aplicaciones Móviles", desc: "Desarrollamos aplicaciones móviles nativas y multiplataforma de alta calidad para iOS y Android." },
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

export default function ServicesSection() {
  return (
    <section className="py-32 bg-slate-50" id="servicios">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100/50 border border-blue-200 text-blue-700 text-xs font-bold tracking-[0.2em] uppercase mb-4">
            Ecosistema de Soluciones
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            Ingeniería digital para <br className="hidden md:block"/>cada necesidad de tu negocio
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Combinamos diseño de alto nivel con arquitectura de software robusta para crear productos que dominan el mercado.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {SERVICES.map((s, i) => (
            <motion.div 
              key={i}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-white p-8 lg:p-10 rounded-[2rem] shadow-sm hover:shadow-2xl hover:shadow-blue-900/5 border border-slate-100 transition-all group relative overflow-hidden"
            >
              {/* Decorative background shape */}
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-50 rounded-full blur-3xl group-hover:bg-blue-100 transition-colors z-0" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-300">
                  <s.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{s.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
