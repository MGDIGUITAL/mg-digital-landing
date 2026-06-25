import { ShaderBackground } from "@/components/ui/hero-shader"

export default function HeroSection() {
  return (
    <ShaderBackground>
      {/* Nav */}
      <header className="relative z-20 flex items-center justify-between px-8 py-6">
        {/* Logo */}
        <a href="#">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://res.cloudinary.com/ddqx435i5/image/upload/q_auto/f_auto/v1781868891/logo_mdrau4.png"
            alt="VisionCode"
            className="h-8 w-auto"
          />
        </a>

        {/* Navigation links */}
        <nav className="hidden md:flex items-center space-x-1">
          <a href="#" className="text-white/70 hover:text-white text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200">
            Inicio
          </a>
          <a href="#servicios" className="text-white/70 hover:text-white text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200">
            Servicios
          </a>
          <a href="#erp" className="text-white/70 hover:text-white text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200">
            ERP
          </a>
          <a href="#trabajos" className="text-white/70 hover:text-white text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200">
            Trabajos
          </a>
          <a href="/contacto" className="text-white/70 hover:text-white text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200">
            Contacto
          </a>
        </nav>

        {/* CTA button with gooey arrow effect */}
        <div
          className="relative flex items-center group"
          style={{ filter: "url(#gooey-filter)" }}
        >
          <button className="absolute right-0 px-2.5 py-2 rounded-full bg-white text-black font-normal text-xs transition-all duration-300 hover:bg-white/90 cursor-pointer h-8 flex items-center justify-center -translate-x-10 group-hover:-translate-x-20 z-0">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </button>
          <a
            href="https://wa.me/56929645522"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-full bg-white text-black font-normal text-xs transition-all duration-300 hover:bg-white/90 cursor-pointer h-8 flex items-center z-10"
          >
            Cotizar proyecto
          </a>
        </div>
      </header>

      {/* Hero content */}
      <main className="absolute bottom-10 left-8 z-20 max-w-xl">
        <div className="text-left">
          {/* Eyebrow badge */}
          <div
            className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm mb-5 relative"
            style={{ filter: "url(#glass-effect)" }}
          >
            <div className="absolute top-0 left-1 right-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full" />
            <span className="text-white/80 text-xs font-light relative z-10">
              001 — Software Agency · Chile
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-6xl leading-tight tracking-tight text-white mb-5">
            Soluciones digitales
            <br />
            <span className="font-bold">que impulsan</span>
            <br />
            <span className="font-bold">tu negocio</span>
          </h1>

          {/* Description */}
          <p className="text-xs font-light text-white/60 mb-6 leading-relaxed max-w-sm">
            Desarrollamos sistemas web, ERP, CRM y plataformas personalizadas
            para ayudar a tu empresa a crecer y ser más eficiente.
          </p>

          {/* CTA buttons */}
          <div className="flex items-center gap-4 flex-wrap">
            <a
              href="#servicios"
              className="px-8 py-3 rounded-full bg-transparent border border-white/30 text-white font-normal text-xs transition-all duration-200 hover:bg-white/10 hover:border-white/50 cursor-pointer"
            >
              Conoce nuestros servicios
            </a>
            <a
              href="https://wa.me/56929645522"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full bg-white text-black font-normal text-xs transition-all duration-200 hover:bg-white/90 cursor-pointer"
            >
              Solicitar asesoría
            </a>
          </div>
        </div>
      </main>

      {/* Bottom trust badges */}
      <div className="absolute bottom-10 right-8 z-20 hidden lg:flex flex-col gap-3 text-right">
        {[
          ["Seguridad", "y Confidencialidad"],
          ["Tecnología", "de Vanguardia"],
          ["Soporte", "y Acompañamiento"],
        ].map(([line1, line2]) => (
          <div key={line1} className="text-xs text-white/40 leading-relaxed">
            <span className="text-white/70 font-medium">{line1}</span>
            <br />
            {line2}
          </div>
        ))}
      </div>
    </ShaderBackground>
  )
}
