"use client";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Cpu, HeadphonesIcon } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full flex flex-col items-center py-16 md:py-24 px-6 overflow-hidden">
      {/* Background gradients for soft depth */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-50/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Columna Izquierda: Texto */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col text-center lg:text-left items-center lg:items-start"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
            Soluciones digitales que <br className="hidden lg:block"/>
            <span className="text-cyan-500">impulsan</span> tu negocio
          </h1>

          <p className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
            Desarrollamos sistemas web, ERP, CRM y plataformas personalizadas para ayudar a tu empresa a crecer y ser más eficiente.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 w-full sm:w-auto">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#servicios" 
              className="inline-flex items-center justify-center gap-2 bg-cyan-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-cyan-600 shadow-lg shadow-cyan-500/30 transition-all"
            >
              Conoce nuestros servicios
              <ArrowRight className="w-4 h-4" />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/56929645522" 
              className="inline-flex items-center justify-center gap-2 bg-white text-slate-700 border-2 border-slate-200 px-8 py-4 rounded-xl font-bold hover:border-cyan-500 hover:text-cyan-500 transition-all"
            >
              Solicitar asesoría
            </motion.a>
          </div>

          {/* Iconos de Características */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-500">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-slate-900">Seguridad</span>
                <span className="text-xs text-slate-500">y Confidencialidad</span>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-500">
                <Cpu className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-slate-900">Tecnología</span>
                <span className="text-xs text-slate-500">de Vanguardia</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-500">
                <HeadphonesIcon className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-slate-900">Soporte</span>
                <span className="text-xs text-slate-500">y Acompañamiento</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Columna Derecha: Video Animado */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center lg:justify-end relative"
        >
          {/* El cubo animado reacciona ligeramente al hover general de su contenedor */}
          <motion.div whileHover={{ scale: 1.02, rotateY: -5, rotateX: 2 }} transition={{ type: "spring", stiffness: 100 }} className="relative w-full max-w-[500px]">
            <div className="absolute inset-0 bg-cyan-400/20 rounded-3xl blur-2xl transform translate-y-4"></div>
            <video 
              src="/cubo.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="relative w-full rounded-3xl shadow-2xl z-10 bg-slate-900" 
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
