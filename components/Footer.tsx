"use client";
import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[var(--color-background)] py-16 px-6 border-t border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        
        <div className="flex flex-col items-center md:items-start shrink-0">
          <div className="text-2xl font-extrabold tracking-tight">
            <span className="text-white">VISION</span><span className="text-[var(--color-primary)]">CODE</span>
          </div>
          <div className="text-[10px] tracking-[0.2em] text-white font-bold uppercase mt-1">
            Soluciones a tu medida
          </div>
        </div>

        <div className="flex items-center gap-8">
          <div className="flex gap-8">
            <a href="#" className="text-sm font-bold tracking-wide text-white hover:text-[var(--color-primary)] transition-colors">Nosotros</a>
            <a href="#servicios" className="text-sm font-bold tracking-wide text-white hover:text-[var(--color-primary)] transition-colors">Servicios</a>
            <a href="contacto" className="text-sm font-bold tracking-wide text-white hover:text-[var(--color-primary)] transition-colors">Contacto</a>
          </div>
          <div className="h-6 w-[1px] bg-[var(--color-primary)] hidden md:block"></div>
          <a 
            href="https://www.instagram.com/mg.digital.cl?igsh=MWpxOWJwNzF5MHl6YQ%3D%3D&utm_source=qr" 
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
