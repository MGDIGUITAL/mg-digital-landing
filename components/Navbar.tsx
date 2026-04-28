"use client";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav className="w-full bg-[#050510]/80 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-24 flex flex-col items-center justify-center">
        <div className="flex flex-col md:flex-row items-center w-full justify-between gap-4">
          
          <div className="flex flex-col items-center md:items-start shrink-0">
            <div className="text-2xl font-extrabold text-white tracking-widest uppercase">
              MG.<span className="text-[#00f0ff] font-extrabold drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]">DIGUITAL</span>
            </div>
            <div className="text-[10px] tracking-[0.4em] text-[#00f0ff] font-bold uppercase mt-1">
              Ingeniería Digital & IoT
            </div>
          </div>
          
          <ul className="hidden md:flex items-center gap-10 flex-1 justify-center">
            <li><a href="#" className="text-xs font-bold tracking-widest text-[#00f0ff] uppercase border-b border-[#00f0ff] pb-1">Inicio</a></li>
            <li><a href="#pilares" className="text-xs font-bold tracking-widest text-slate-300 hover:text-[#00f0ff] uppercase transition-colors">Ingeniería</a></li>
            <li><a href="#servicios" className="text-xs font-bold tracking-widest text-slate-300 hover:text-[#00f0ff] uppercase transition-colors">Sistemas</a></li>
            <li><a href="#contacto" className="text-xs font-bold tracking-widest text-slate-300 hover:text-[#00f0ff] uppercase transition-colors">Contacto</a></li>
          </ul>
          
          <motion.a 
            whileHover={{ scale: 1.05 }}
            href="https://wa.me/56929645522" 
            className="hidden lg:flex items-center gap-2 bg-[#00f0ff]/10 border border-[#00f0ff]/40 text-[#00f0ff] px-8 py-3 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-[#00f0ff]/20 hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all"
          >
            Optimizar Operación
          </motion.a>

        </div>
      </div>
    </nav>
  )
}
