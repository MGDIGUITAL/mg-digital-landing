"use client";
import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[var(--color-background)] py-16 px-6 border-t border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        
        <div className="flex flex-col items-center md:items-start shrink-0">
          <img 
            src="https://res.cloudinary.com/ddqx435i5/image/upload/q_auto/f_auto/v1781868891/logo_mdrau4.png" 
            alt="VisionCode Logo" 
            className="h-20 w-auto object-contain"
          />
        </div>

        <div className="flex items-center gap-8">
          <div className="flex gap-8">
            <a href="#" className="text-sm font-bold tracking-wide text-white hover:text-[var(--color-primary)] transition-colors">Nosotros</a>
            <a href="#servicios" className="text-sm font-bold tracking-wide text-white hover:text-[var(--color-primary)] transition-colors">Servicios</a>
            <a href="contacto" className="text-sm font-bold tracking-wide text-white hover:text-[var(--color-primary)] transition-colors">Contacto</a>
          </div>
          <div className="h-6 w-[1px] bg-[var(--color-primary)] hidden md:block"></div>
          <a 
            href="https://www.instagram.com/vision_code_vc/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-[var(--color-primary)] transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-[var(--color-border)] flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white font-medium">
        <p>© {new Date().getFullYear()} VISION CODE. Todos los derechos reservados.</p>
        <p>MPEG.LOGISTICA@GMAIL.COM — Matias Patricio Espinoza</p>
      </div>
    </footer>
  );
}
