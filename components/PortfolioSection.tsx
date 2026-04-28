"use client";
import { motion } from "framer-motion";

export default function PortfolioSection() {
  return (
    <section className="py-24 w-full relative z-10" id="portafolio">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-extrabold text-white tracking-tight mb-4 uppercase">
            Ingeniería de <span className="text-[#00f0ff] drop-shadow-[0_0_10px_rgba(0,240,255,0.8)]">Vanguardia</span>
          </h2>
          <div className="w-24 h-1 bg-[#00f0ff] mx-auto rounded-full shadow-[0_0_15px_rgba(0,240,255,0.6)]" />
        </motion.div>

        <div className="w-full flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="w-full max-w-5xl rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,240,255,0.1)] relative group cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-[#050510]/60 to-transparent z-10 transition-opacity group-hover:opacity-80" />
            
            {/* The Unsplash Placeholder Image as requested */}
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop" 
              alt="Cybernetics Tech" 
              className="w-full h-[400px] md:h-[600px] object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700"
            />
            
            <div className="absolute bottom-12 left-0 right-0 z-20 flex flex-col items-center px-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <div className="inline-block px-4 py-1.5 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-[#00f0ff] text-[10px] font-bold tracking-[0.3em] uppercase mb-4 shadow-[0_0_10px_rgba(0,240,255,0.3)]">
                Desarrollo Futuro
              </div>
              <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Arquitectura de Alto Nivel</h3>
              <p className="text-slate-300 max-w-3xl text-sm md:text-base font-medium">Integrando hardware y software de última generación para lograr niveles de eficiencia sin precedentes en tu operación.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
