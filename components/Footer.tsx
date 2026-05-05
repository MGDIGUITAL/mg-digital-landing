"use client";
import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-900 py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        
        <div className="flex flex-col items-center md:items-start shrink-0">
          <div className="text-2xl font-extrabold text-white tracking-tight">
            MG.<span className="text-cyan-500">DIGITAL</span>
          </div>
          <div className="text-[10px] tracking-[0.2em] text-slate-400 font-bold uppercase mt-1">
            Soluciones a tu medida
          </div>
        </div>

        <div className="flex items-center gap-8">
          <div className="flex gap-8">
            <a href="#" className="text-sm font-bold tracking-wide text-slate-400 hover:text-cyan-500 transition-colors">Nosotros</a>
            <a href="#servicios" className="text-sm font-bold tracking-wide text-slate-400 hover:text-cyan-500 transition-colors">Servicios</a>
            <a href="contacto" className="text-sm font-bold tracking-wide text-slate-400 hover:text-cyan-500 transition-colors">Contacto</a>
          </div>
          <div className="h-6 w-[1px] bg-slate-800 hidden md:block"></div>
          <a 
            href="https://www.instagram.com/mg.digital.cl?igsh=MWpxOWJwNzF5MHl6YQ%3D%3D&utm_source=qr" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-cyan-500 transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500 font-medium">
        <p>© 2026 MG.DIGITAL. Todos los derechos reservados.</p>
        <p>MPEG.LOGISTICA@GMAIL.COM — Matias Patricio Espinoza</p>
      </div>
    </footer>
  );
}
