"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full flex flex-col items-center justify-center text-center py-20 px-6 min-h-[90vh]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-[150px]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00f0ff]/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10 w-full">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full flex flex-col items-center mb-12"
        >
          {/* THE 3D VIDEO AS REQUESTED EXACTLY */}
          <video 
            src="/cubo 3d.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full max-w-lg mx-auto drop-shadow-[0_0_60px_rgba(0,240,255,0.4)] rounded-3xl mb-12" 
          />
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-[#00f0ff] tracking-tight leading-tight mb-8 max-w-5xl mx-auto">
            No solo hacemos software. <br className="hidden md:block"/>Digitalizamos tu operación completa.
          </h1>

          <p className="text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed mb-12">
            Hola, te presento a MG.DIGUITAL. Somos una firma de ingeniería digital enfocada en la optimización de empresas.
          </p>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/56929645522"
            className="inline-flex items-center justify-center px-10 py-5 rounded-2xl bg-[#00f0ff]/10 border border-[#00f0ff]/50 text-[#00f0ff] font-extrabold text-lg md:text-xl tracking-wide shadow-[0_0_40px_rgba(0,240,255,0.2)] hover:bg-[#00f0ff]/20 hover:shadow-[0_0_60px_rgba(0,240,255,0.5)] transition-all"
          >
            ¿Tienes algún proceso que te gustaría optimizar? Hablemos.
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
