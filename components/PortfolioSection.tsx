"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function PortfolioSection() {
  return (
    <section className="py-32 bg-white" id="trabajos">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6"
        >
          <div>
            <div className="inline-block px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold tracking-[0.2em] uppercase mb-4">
              Casos de Éxito
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Proyectos que generan <br className="hidden md:block"/>resultados reales
            </h2>
          </div>
          
          <div className="flex gap-3">
            <button className="w-12 h-12 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-600 transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700 hover:shadow-lg transition-all hover:scale-105">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Card 1: Web */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="group cursor-pointer"
          >
            <div className="bg-slate-50 rounded-[2rem] p-8 lg:p-12 mb-6 relative overflow-hidden h-[300px] sm:h-[400px] flex items-center justify-center">
              {/* Laptop Mockup */}
              <div className="relative w-[80%] max-w-[400px] z-10 transition-transform duration-500 group-hover:scale-105">
                <div className="bg-slate-800 rounded-t-2xl p-2 pb-0 shadow-2xl">
                  <div className="bg-slate-900 rounded-t-xl overflow-hidden aspect-[16/10] relative">
                     {/* Screen Content Fake */}
                     <div className="absolute inset-0 bg-blue-50 p-4">
                        <div className="w-full h-8 bg-white rounded-md mb-4 flex items-center px-4 gap-2 shadow-sm">
                          <div className="w-2 h-2 rounded-full bg-red-400" />
                          <div className="w-2 h-2 rounded-full bg-amber-400" />
                          <div className="w-2 h-2 rounded-full bg-green-400" />
                        </div>
                        <div className="w-1/2 h-12 bg-blue-100 rounded-lg mb-4" />
                        <div className="flex gap-2 mb-4">
                          <div className="w-1/3 h-24 bg-white rounded-lg shadow-sm" />
                          <div className="w-1/3 h-24 bg-white rounded-lg shadow-sm" />
                          <div className="w-1/3 h-24 bg-white rounded-lg shadow-sm" />
                        </div>
                     </div>
                  </div>
                </div>
                <div className="bg-slate-300 h-4 rounded-b-xl w-[110%] -ml-[5%] relative shadow-xl">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/4 h-1 bg-slate-400 rounded-b-md" />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Corporate Landing Pages</h3>
            <p className="text-slate-500">Diseño UI/UX • Desarrollo Frontend • Optimización SEO</p>
          </motion.div>

          {/* Card 2: Mobile / App */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="group cursor-pointer"
          >
            <div className="bg-slate-50 rounded-[2rem] p-8 lg:p-12 mb-6 relative overflow-hidden h-[300px] sm:h-[400px] flex items-center justify-center">
              {/* Phone Mockup */}
              <div className="relative w-[180px] h-[360px] bg-slate-800 rounded-[3rem] p-3 shadow-2xl z-10 transition-transform duration-500 group-hover:scale-105">
                <div className="w-full h-full bg-slate-900 rounded-[2.25rem] overflow-hidden relative">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-800 rounded-b-2xl z-20" />
                  {/* Screen Content Fake */}
                  <div className="absolute inset-0 bg-slate-50 pt-10 px-4">
                     <div className="w-12 h-12 bg-blue-600 rounded-2xl mb-6 shadow-lg shadow-blue-500/30" />
                     <div className="w-3/4 h-6 bg-slate-200 rounded-full mb-3" />
                     <div className="w-1/2 h-4 bg-slate-200 rounded-full mb-8" />
                     
                     <div className="w-full h-24 bg-white rounded-2xl shadow-sm mb-4" />
                     <div className="w-full h-24 bg-white rounded-2xl shadow-sm" />
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Plataforma CRM Mobile</h3>
            <p className="text-slate-500">App Nativa • Integración de Datos • Dashboard</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
