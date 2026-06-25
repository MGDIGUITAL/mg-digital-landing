"use client";
import { useEffect, useRef } from "react";
import { Monitor, Box, Users, FileText, Cloud, Smartphone } from "lucide-react";

const SERVICES = [
  { icon: Monitor,     num: "01", title: "Páginas Web",    desc: "Diseñamos sitios web modernos, responsivos y enfocados en convertir visitas en clientes." },
  { icon: Box,         num: "02", title: "Sistemas ERP",   desc: "Desarrollamos sistemas ERP personalizados para optimizar y automatizar los procesos de tu negocio." },
  { icon: Users,       num: "03", title: "CRM",            desc: "Creamos soluciones CRM a medida para gestionar tus clientes y aumentar tus ventas." },
  { icon: FileText,    num: "04", title: "Más Folios",     desc: "Digitaliza y organiza tus documentos con sistemas de folios electrónicos seguros y eficientes." },
  { icon: Cloud,       num: "05", title: "Todo Digital",   desc: "Soluciones 100% digitales para llevar tu negocio al siguiente nivel operativo." },
  { icon: Smartphone,  num: "06", title: "Aplicaciones",   desc: "Desarrollamos aplicaciones móviles nativas y a medida para plataformas iOS y Android." },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll<HTMLElement>(".vc-reveal");
    if (!els) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { (e.target as HTMLElement).classList.add("visible"); obs.unobserve(e.target); }
      });
    }, { threshold: 0.08 });
    els.forEach((el, i) => { el.style.transitionDelay = `${i * 60}ms`; obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="servicios"
      ref={sectionRef}
      className="vc-section"
      style={{ background: "var(--color-bg-alt)" }}
    >
      <div className="vc-container">

        {/* Label row */}
        <div className="vc-reveal vc-label-row">
          <span className="vc-label">002</span>
          <span className="vc-label-line" />
          <span className="vc-label">Nuestros Servicios</span>
        </div>

        {/* Heading + description */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <h2 className="vc-reveal vc-h2">
            Servicios<br />
            <span style={{ color: "var(--color-muted)" }}>Digitales</span>
          </h2>
          <p
            className="vc-reveal"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.9375rem",
              lineHeight: 1.7,
              color: "var(--color-muted)",
              maxWidth: "28rem",
            }}
          >
            Soluciones digitales completas para cada necesidad de tu negocio. Desde el diseño hasta el lanzamiento.
          </p>
        </div>

        {/* Divider */}
        <div style={{ height: "1px", background: "var(--color-border)", marginBottom: "3rem" }} />

        {/* Services grid — shared borders */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{ border: "1px solid var(--color-border)" }}
        >
          {SERVICES.map(({ icon: Icon, num, title, desc }, i) => (
            <div
              key={num}
              className="vc-reveal group p-8 transition-all duration-300"
              style={{
                borderRight: (i % 3 !== 2) ? "1px solid var(--color-border)" : "none",
                borderBottom: i < 3 ? "1px solid var(--color-border)" : "none",
                background: "var(--color-bg)",
                cursor: "default",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--color-surface)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--color-bg)"; }}
            >
              {/* Number + icon row */}
              <div className="flex items-start justify-between mb-6">
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.5625rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-dim)" }}>
                  {num}
                </span>
                <div
                  style={{
                    width: "2.25rem", height: "2.25rem",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    border: "1px solid var(--color-border)",
                    color: "var(--color-dim)",
                    transition: "all 0.2s ease",
                  }}
                  className="group-hover:border-red-600/40 group-hover:text-[var(--color-primary)]"
                >
                  <Icon size={16} strokeWidth={1.5} />
                </div>
              </div>

              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "1rem",
                  fontWeight: 500,
                  color: "var(--color-white)",
                  marginBottom: "0.5rem",
                }}
              >
                {title}
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem", lineHeight: 1.65, color: "var(--color-muted)" }}>
                {desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
