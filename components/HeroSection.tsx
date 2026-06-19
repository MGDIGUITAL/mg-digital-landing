"use client";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Cpu, HeadphonesIcon } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full flex flex-col items-center justify-center min-h-[90vh] py-24 px-6 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
          src="https://res.cloudinary.com/ddqx435i5/video/upload/q_auto/f_auto/v1781863949/Voy_a_generar_el_video_con_el_sr04qq.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px] z-10" />
      </div>

      <div className="max-w-5xl mx-auto w-full flex flex-col items-center relative z-20 text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
            Soluciones digitales que <br className="hidden lg:block"/>
            <span className="text-[var(--color-primary)] drop-shadow-[0_0_20px_rgba(230,0,0,0.6)]">impulsan</span> tu negocio
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
            Desarrollamos sistemas web, ERP, CRM y plataformas personalizadas para ayudar a tu empresa a crecer y ser más eficiente.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16 w-full sm:w-auto justify-center">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#servicios" 
              className="inline-flex items-center justify-center gap-2 bg-[var(--color-primary)] text-white px-8 py-4 rounded-xl font-bold hover:bg-[var(--color-primary-hover)] shadow-[0_0_20px_rgba(230,0,0,0.3)] hover:shadow-[0_0_30px_rgba(230,0,0,0.5)] transition-all"
            >
              Conoce nuestros servicios
              <ArrowRight className="w-4 h-4" />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/56929645522" 
              className="inline-flex items-center justify-center gap-2 bg-black/40 backdrop-blur-md text-white border-2 border-[var(--color-border)] px-8 py-4 rounded-xl font-bold hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] hover:bg-black/60 transition-all"
            >
              Solicitar asesoría
            </motion.a>
          </div>

          {/* Iconos de Características */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[var(--color-primary)]/20 flex items-center justify-center text-[var(--color-primary)] border border-[var(--color-primary)]/30 backdrop-blur-sm shadow-[0_0_15px_rgba(230,0,0,0.2)]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-sm font-bold text-white">Seguridad</span>
                <span className="text-xs text-gray-400">y Confidencialidad</span>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[var(--color-primary)]/20 flex items-center justify-center text-[var(--color-primary)] border border-[var(--color-primary)]/30 backdrop-blur-sm shadow-[0_0_15px_rgba(230,0,0,0.2)]">
                <Cpu className="w-6 h-6" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-sm font-bold text-white">Tecnología</span>
                <span className="text-xs text-gray-400">de Vanguardia</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[var(--color-primary)]/20 flex items-center justify-center text-[var(--color-primary)] border border-[var(--color-primary)]/30 backdrop-blur-sm shadow-[0_0_15px_rgba(230,0,0,0.2)]">
                <HeadphonesIcon className="w-6 h-6" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-sm font-bold text-white">Soporte</span>
                <span className="text-xs text-gray-400">y Acompañamiento</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
