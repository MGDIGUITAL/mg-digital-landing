"use client"

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-60px)] flex items-center overflow-hidden bg-white pt-10 pb-20">
      {/* Background subtle effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-blue-50/50 blur-[100px]" />
        <div className="absolute bottom-[0%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-100/40 blur-[120px]" />
      </div>

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-10 items-center">
          
          {/* Left Column: Text & CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold tracking-wide uppercase mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Agencia de Alto Nivel
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight mb-6">
              Años de experiencia diseñando el <br className="hidden sm:block" />
              <span className="text-blue-600 relative">
                futuro digital
                {/* Decorative underline */}
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-blue-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent"/>
                </svg>
              </span>
            </h1>

            <p className="text-lg text-slate-600 mb-10 max-w-xl leading-relaxed">
              Transformamos la visión de tu empresa en plataformas tecnológicas de nivel empresarial. Soluciones de software, ERP, y diseño web que realmente impulsan tu negocio.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <motion.a 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="#servicios" 
                className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 transition-all"
              >
                Explorar Soluciones
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/56929645522" 
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-slate-800 border-2 border-slate-200 px-8 py-4 rounded-xl font-bold text-sm hover:border-blue-600 hover:text-blue-600 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                Agendar Consultoría
              </motion.a>
            </div>
            
            {/* Trust Badges */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex items-center gap-8 mt-12 pt-8 border-t border-slate-100"
            >
               <div className="flex flex-col">
                 <span className="text-2xl font-black text-slate-900">99%</span>
                 <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Satisfacción</span>
               </div>
               <div className="flex flex-col">
                 <span className="text-2xl font-black text-slate-900">+500</span>
                 <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Proyectos</span>
               </div>
               <div className="flex flex-col">
                 <span className="text-2xl font-black text-slate-900">24/7</span>
                 <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Soporte VIP</span>
               </div>
            </motion.div>
          </motion.div>

          {/* Right Column: 3D Cube Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="relative flex items-center justify-center h-[400px] lg:h-[600px] w-full"
          >
            {/* Ambient glow behind the 3D element */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
            
            {/* The 3D Element Container (Mockup for now) */}
            <motion.div 
              animate={{ 
                y: [0, -20, 0],
                rotateY: [0, 10, -10, 0],
                rotateX: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="relative w-64 h-64 lg:w-96 lg:h-96 z-10"
            >
              {/* This is a visual representation of the technological cube. 
                  In production, you'd replace this with a Spline viewer or Three.js canvas */}
              <div className="w-full h-full rounded-3xl bg-gradient-to-br from-blue-600/90 to-blue-900/90 shadow-[0_0_50px_rgba(37,99,235,0.4)] backdrop-blur-xl border border-white/20 flex items-center justify-center overflow-hidden relative">
                 {/* Inner geometric lines to simulate "tech" */}
                 <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:20px_20px]" />
                 
                 <div className="absolute w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse" />
                 <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-2xl border border-white/40 shadow-inner flex items-center justify-center z-10 transform rotate-12">
                   <div className="w-12 h-12 bg-blue-400/50 rounded-xl animate-ping" />
                 </div>
              </div>
              
              {/* Floating tech nodes */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }} 
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -right-4 top-10 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <div className="text-xs font-bold text-slate-800">Carga Ultra Rápida</div>
              </motion.div>

              <motion.div 
                animate={{ y: [10, -10, 10] }} 
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute -left-8 bottom-20 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center text-green-600">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
                <div className="text-xs font-bold text-slate-800">Seguridad Máxima</div>
              </motion.div>

            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
