"use client";

export default function Footer() {
  return (
    <footer className="w-full bg-[#050510] py-16 px-6 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        
        <div className="flex flex-col items-center md:items-start shrink-0">
          <div className="text-2xl font-extrabold text-white tracking-widest uppercase">
            MG.<span className="text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]">DIGUITAL</span>
          </div>
          <div className="text-[10px] tracking-[0.4em] text-[#00f0ff] font-bold uppercase mt-1">
            Ingeniería Digital & IoT
          </div>
        </div>

        <div className="flex gap-8">
          <a href="#" className="text-sm font-bold tracking-widest text-slate-400 hover:text-[#00f0ff] uppercase transition-colors">Nosotros</a>
          <a href="#" className="text-sm font-bold tracking-widest text-slate-400 hover:text-[#00f0ff] uppercase transition-colors">Servicios</a>
          <a href="#" className="text-sm font-bold tracking-widest text-slate-400 hover:text-[#00f0ff] uppercase transition-colors">Contacto</a>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-bold tracking-widest uppercase">
        <p>© 2026 MG.DIGUITAL. Todos los derechos reservados.</p>
        <p>hola@mgdigital.cl</p>
      </div>
    </footer>
  );
}
