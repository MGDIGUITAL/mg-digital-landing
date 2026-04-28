"use client";
import { motion } from "framer-motion";
import { Settings, Database, Code2, HeadphonesIcon } from "lucide-react";

const PILARES = [
  { icon: Settings, title: "Optimización Industrial", desc: "Reducción de costos con IoT y automatización." },
  { icon: Database, title: "Sistemas ERP & CRM", desc: "El cerebro de tu empresa bajo control total." },
  { icon: Code2, title: "Desarrollo Web Pro", desc: "Interfaces de alto nivel que convierten." },
  { icon: HeadphonesIcon, title: "Soporte 24/7", desc: "Ingeniería de vanguardia siempre activa." }
];

export default function ServicesSection() {
  return (
    <section className="py-24 w-full relative z-10" id="pilares">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-extrabold text-white tracking-tight mb-4">
            Pilares de la <span className="text-[#00f0ff]">Firma</span>
          </h2>
          <div className="w-24 h-1 bg-[#00f0ff] mx-auto rounded-full shadow-[0_0_15px_rgba(0,240,255,0.6)]" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {PILARES.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[2rem] flex flex-col items-center text-center hover:bg-white/10 hover:border-[#00f0ff]/40 shadow-xl hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] transition-all cursor-pointer"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#00f0ff]/10 border border-[#00f0ff]/30 flex items-center justify-center mb-6 shadow-[inset_0_0_20px_rgba(0,240,255,0.1)]">
                <p.icon className="w-8 h-8 text-[#00f0ff]" strokeWidth={2} />
              </div>
              <h3 className="text-lg font-extrabold text-white mb-2 tracking-wide">{p.title}</h3>
              <p className="text-slate-400 text-sm">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
