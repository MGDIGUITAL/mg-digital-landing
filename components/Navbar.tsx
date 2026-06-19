"use client";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav className="w-full bg-black border-b border-[var(--color-border)] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="flex flex-col items-center md:items-start shrink-0">
          <img 
            src="https://res.cloudinary.com/ddqx435i5/image/upload/q_auto/f_auto/v1781868891/logo_mdrau4.png" 
            alt="VisionCode Logo" 
            className="h-24 w-auto object-contain"
          />
        </div>
        
        <ul className="hidden md:flex items-center gap-8 flex-1 justify-center">
          <li><a href="#" className="text-sm font-bold tracking-wide text-[var(--color-primary)] border-b-2 border-[var(--color-primary)] pb-1">Inicio</a></li>
          <li><a href="#servicios" className="text-sm font-bold tracking-wide text-white hover:text-[var(--color-primary)] transition-colors">Servicios</a></li>
          <li><a href="#erp" className="text-sm font-bold tracking-wide text-white hover:text-[var(--color-primary)] transition-colors">ERP</a></li>
          <li><a href="#trabajos" className="text-sm font-bold tracking-wide text-white hover:text-[var(--color-primary)] transition-colors">Trabajos</a></li>
          <li><a href="contacto" className="text-sm font-bold tracking-wide text-white hover:text-[var(--color-primary)] transition-colors">Contacto</a></li>
        </ul>
        
        <motion.a 
          whileHover={{ scale: 1.05 }}
          href="https://wa.me/56929645522" 
          className="hidden lg:flex items-center gap-2 bg-[var(--color-primary)] text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-[var(--color-primary-hover)] shadow-[0_0_15px_rgba(230,0,0,0.3)] hover:shadow-[0_0_25px_rgba(230,0,0,0.5)] transition-all"
        >
          Cotizar proyecto
        </motion.a>

      </div>
    </nav>
  )
}
