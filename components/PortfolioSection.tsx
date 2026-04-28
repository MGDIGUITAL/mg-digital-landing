"use client";
import { motion } from "framer-motion";

export default function PortfolioSection() {
  return (
    <section className="py-24 w-full" id="trabajos">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 uppercase">
            Nuestros <span className="text-cyan-500">Trabajos</span>
          </h2>
          <p className="text-slate-500 font-medium max-w-2xl mx-auto">
            Proyectos que generan resultados reales y medibles.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {/* Trabajo 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="flex flex-col items-center text-center group cursor-pointer"
          >
            <div className="w-full bg-slate-100 rounded-3xl h-56 mb-6 flex items-center justify-center p-6 group-hover:bg-cyan-50 transition-colors shadow-inner overflow-hidden relative">
               {/* Minimalist Laptop Mockup */}
               <div className="relative w-full h-full flex flex-col items-center justify-end">
                  <div className="w-[85%] h-[70%] bg-slate-800 rounded-t-xl border-4 border-slate-800 relative shadow-2xl">
                    <div className="absolute inset-0 bg-white"></div>
                  </div>
                  <div className="w-[100%] h-3 bg-slate-300 rounded-b-xl"></div>
               </div>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">Sitio Web Corporativo</h3>
            <p className="text-sm text-slate-500">Diseño moderno y responsivo</p>
          </motion.div>

          {/* Trabajo 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="flex flex-col items-center text-center group cursor-pointer"
          >
            <div className="w-full bg-slate-100 rounded-3xl h-56 mb-6 flex items-center justify-center p-6 group-hover:bg-cyan-50 transition-colors shadow-inner overflow-hidden relative">
               {/* Monitor Mockup */}
               <div className="relative w-full h-full flex flex-col items-center justify-end">
                  <div className="w-[90%] h-[75%] bg-slate-800 rounded-t-xl border-4 border-slate-800 relative shadow-2xl">
                    <div className="absolute inset-0 bg-slate-50 flex p-2 gap-2">
                       <div className="w-1/4 bg-slate-200 rounded-sm"></div>
                       <div className="w-3/4 bg-white rounded-sm"></div>
                    </div>
                  </div>
                  <div className="w-[20%] h-4 bg-slate-300"></div>
                  <div className="w-[40%] h-2 bg-slate-300 rounded-t-sm"></div>
               </div>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">Sistema ERP</h3>
            <p className="text-sm text-slate-500">Gestión integral de tu empresa</p>
          </motion.div>

          {/* Trabajo 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="flex flex-col items-center text-center group cursor-pointer"
          >
            <div className="w-full bg-slate-100 rounded-3xl h-56 mb-6 flex items-center justify-center p-6 group-hover:bg-cyan-50 transition-colors shadow-inner overflow-hidden relative">
               {/* Phone & Tablet Mockup */}
               <div className="relative w-full h-full flex items-center justify-center gap-4">
                  <div className="w-[45%] h-[80%] bg-slate-800 rounded-xl border-4 border-slate-800 relative shadow-2xl">
                     <div className="absolute inset-0 bg-white rounded-lg"></div>
                  </div>
                  <div className="w-[25%] h-[70%] bg-slate-800 rounded-2xl border-4 border-slate-800 relative shadow-2xl mt-4">
                     <div className="absolute inset-0 bg-white rounded-xl"></div>
                  </div>
               </div>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">Plataforma CRM</h3>
            <p className="text-sm text-slate-500">Tus clientes, siempre conectados</p>
          </motion.div>

          {/* Trabajo 4 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="flex flex-col items-center text-center group cursor-pointer"
          >
            <div className="w-full bg-slate-100 rounded-3xl h-56 mb-6 flex items-center justify-center p-6 group-hover:bg-cyan-50 transition-colors shadow-inner overflow-hidden relative">
               {/* Dashboard Mockup */}
               <div className="relative w-full h-full flex flex-col items-center justify-center">
                  <div className="w-[90%] h-[80%] bg-slate-800 rounded-xl border-4 border-slate-800 relative shadow-2xl flex flex-col p-2 bg-slate-900">
                    <div className="w-full h-2 bg-slate-700 rounded-sm mb-2"></div>
                    <div className="flex-1 w-full bg-slate-800 rounded-sm"></div>
                  </div>
               </div>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">Sistema de Folios</h3>
            <p className="text-sm text-slate-500">Digitalización y control total</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
