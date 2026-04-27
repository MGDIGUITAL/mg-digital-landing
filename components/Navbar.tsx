export default function Navbar() {
  return (
    <nav className="sticky top-0 z-[200] bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between gap-8">
        <div className="flex flex-col shrink-0">
          <div className="text-[22px] font-extrabold text-slate-900 tracking-tight">MG.<span className="text-blue-600">DIGITAL</span></div>
          <div className="text-[9px] tracking-[0.2em] text-slate-500 font-bold uppercase mt-0.5">Soluciones a Tu Medida</div>
        </div>
        
        <ul className="hidden md:flex items-center gap-2 flex-1 justify-center">
          <li><a href="#" className="px-4 py-2 text-sm font-bold text-blue-600 border-b-2 border-blue-600">INICIO</a></li>
          <li><a href="#servicios" className="px-4 py-2 text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors flex items-center gap-1">SERVICIOS <span className="text-[10px] opacity-60">▾</span></a></li>
          <li><a href="#erp" className="px-4 py-2 text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors flex items-center gap-1">SISTEMAS <span className="text-[10px] opacity-60">▾</span></a></li>
          <li><a href="#erp" className="px-4 py-2 text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors flex items-center gap-1">ERP <span className="text-[10px] opacity-60">▾</span></a></li>
          <li><a href="#" className="px-4 py-2 text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors flex items-center gap-1">FOLIOS <span className="text-[10px] opacity-60">▾</span></a></li>
          <li><a href="#" className="px-4 py-2 text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors">NOSOTROS</a></li>
          <li><a href="#" className="px-4 py-2 text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors">CONTACTO</a></li>
        </ul>
        
        <a href="https://wa.me/56929645522" className="hidden sm:flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-colors shadow-sm hover:shadow-md hover:shadow-blue-600/20 whitespace-nowrap">
          Cotizar proyecto
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      </div>
    </nav>
  )
}
