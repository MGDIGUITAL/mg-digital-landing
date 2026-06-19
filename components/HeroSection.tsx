"use client";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Cpu, HeadphonesIcon } from "lucide-react";
import { useEffect, useRef } from "react";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Solo aplicar en dispositivos con mouse (no touch)
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!videoRef.current) return;
      const xPercent = e.clientX / window.innerWidth - 0.5; // -0.5 a 0.5
      const moveX = xPercent * 40; // intensidad
      videoRef.current.style.transform = `translateX(${-moveX}px)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative w-full flex flex-col items-center justify-center min-h-[90vh] py-24 px-6 overflow-hidden">
      {/* Video Background con Parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-black">
        <video 
          ref={videoRef}
          src="https://res.cloudinary.com/ddqx435i5/video/upload/q_auto/f_auto/v1781863949/Voy_a_generar_el_video_con_el_sr04qq.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute top-0 bottom-0 w-[110%] h-full max-w-none object-cover -left-[5%] transition-transform duration-[0.1s] ease-out" 
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
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

          <p className="text-lg md:text-xl text-white mb-10 max-w-2xl leading-relaxed">
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
              className="inline-flex items-center justify-center gap-2 bg-black text-white border-2 border-[var(--color-primary)] px-8 py-4 rounded-xl font-bold hover:bg-[var(--color-primary)] hover:text-white transition-all shadow-[0_0_15px_rgba(230,0,0,0.2)]"
            >
              Solicitar asesoría
            </motion.a>
          </div>

          {/* Iconos de Características */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-[var(--color-primary)] border border-[var(--color-primary)] shadow-[0_0_15px_rgba(230,0,0,0.4)]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-sm font-bold text-white">Seguridad</span>
                <span className="text-xs text-white">y Confidencialidad</span>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-[var(--color-primary)] border border-[var(--color-primary)] shadow-[0_0_15px_rgba(230,0,0,0.4)]">
                <Cpu className="w-6 h-6" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-sm font-bold text-white">Tecnología</span>
                <span className="text-xs text-white">de Vanguardia</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-[var(--color-primary)] border border-[var(--color-primary)] shadow-[0_0_15px_rgba(230,0,0,0.4)]">
                <HeadphonesIcon className="w-6 h-6" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-sm font-bold text-white">Soporte</span>
                <span className="text-xs text-white">y Acompañamiento</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
