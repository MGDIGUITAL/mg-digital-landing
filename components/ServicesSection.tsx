"use client";
import { motion } from "framer-motion";
import { Monitor, Box, Users, FileText, Cloud, Smartphone } from "lucide-react";

const SERVICES = [
  { icon: Monitor, title: "Páginas Web", desc: "Diseñamos sitios web modernos, responsivos y enfocados en convertir visitas en clientes." },
  { icon: Box, title: "Sistemas ERP", desc: "Desarrollamos sistemas ERP personalizados para optimizar y automatizar los procesos de tu negocio." },
  { icon: Users, title: "CRM", desc: "Creamos soluciones CRM a medida para gestionar tus clientes y aumentar tus ventas." },
  { icon: FileText, title: "Más Folios", desc: "Digitaliza y organiza tus documentos con sistemas de folios electrónicos seguros y eficientes." },
  { icon: Cloud, title: "Todo Digital", desc: "Soluciones 100% digitales para llevar tu negocio al siguiente nivel operativo." },
  { icon: Smartphone, title: "Aplicaciones", desc: "Desarrollamos aplicaciones móviles nativas y a medida para plataformas iOS y Android." },
];

export default function ServicesSection() {
  return (
    <section className="py-24 w-full bg-[var(--color-background)]" id="servicios">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4 uppercase">
            Nuestros <span className="text-[var(--color-primary)] drop-shadow-[0_0_10px_rgba(230,0,0,0.4)]">Servicios</span>
          </h2>
          <p className="text-gray-400 font-medium max-w-2xl mx-auto">
            Soluciones digitales completas para cada necesidad de tu negocio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {SERVICES.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-[var(--color-surface)] border border-[var(--color-border)] p-10 rounded-3xl flex flex-col items-center text-center hover:shadow-[0_0_25px_rgba(230,0,0,0.15)] hover:border-[var(--color-primary)] transition-all cursor-pointer group"
            >
              <div className="w-20 h-20 rounded-2xl bg-[var(--color-surface-light)] flex items-center justify-center mb-6 group-hover:bg-[var(--color-primary)]/10 group-hover:shadow-[0_0_15px_rgba(230,0,0,0.3)] transition-all">
                <s.icon className="w-10 h-10 text-gray-300 group-hover:text-[var(--color-primary)] transition-colors" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
