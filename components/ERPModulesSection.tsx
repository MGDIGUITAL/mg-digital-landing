"use client";
import { useEffect, useRef } from "react";
import { LayoutDashboard, ShoppingCart, ShoppingBag, Package, Users, Truck, Calculator, FileBarChart } from "lucide-react";

const MODULES = [
  { icon: LayoutDashboard, num: "01", title: "Dashboard",    desc: "Resumen general de tu empresa en tiempo real." },
  { icon: ShoppingCart,    num: "02", title: "Ventas",       desc: "Cotizaciones, órdenes, facturación y boletas electrónicas." },
  { icon: ShoppingBag,     num: "03", title: "Compras",      desc: "Gestión de compras, órdenes a proveedores y recepciones." },
  { icon: Package,         num: "04", title: "Inventario",   desc: "Control de stock, productos, bodegas y movimientos." },
  { icon: Users,           num: "05", title: "Clientes",     desc: "Gestión de clientes, contactos y segmentación avanzada." },
  { icon: Truck,           num: "06", title: "Proveedores",  desc: "Gestión de proveedores, evaluaciones y pagos." },
  { icon: Calculator,      num: "07", title: "Contabilidad", desc: "Plan de cuentas, ingresos, egresos y conciliaciones." },
  { icon: FileBarChart,    num: "08", title: "Reportes",     desc: "Reportes personalizados y análisis para tomar mejores decisiones." },
];

export default function ERPModulesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll<HTMLElement>(".vc-reveal");
    if (!els) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { (e.target as HTMLElement).classList.add("visible"); obs.unobserve(e.target); }
      });
    }, { threshold: 0.05 });
    els.forEach((el, i) => { el.style.transitionDelay = `${i * 50}ms`; obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="erp"
      ref={sectionRef}
      className="vc-section"
      style={{ background: "var(--color-bg)" }}
    >
      <div className="vc-container">

        {/* Label row */}
        <div className="vc-reveal vc-label-row">
          <span className="vc-label">003</span>
          <span className="vc-label-line" />
          <span className="vc-label">Sistema ERP</span>
        </div>

        {/* Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <h2 className="vc-reveal vc-h2">
            Módulos<br />
            <span style={{ color: "var(--color-muted)" }}>Principales</span>
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
            El cerebro de tu empresa, con todas las herramientas necesarias para operar con eficiencia.
          </p>
        </div>

        <div style={{ height: "1px", background: "var(--color-border)", marginBottom: "3rem" }} />

        {/* Modules — 4-column shared-border grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          style={{ border: "1px solid var(--color-border)" }}
        >
          {MODULES.map(({ icon: Icon, num, title, desc }, i) => (
            <div
              key={num}
              className="vc-reveal group p-7 transition-all duration-300"
              style={{
                borderRight: (i % 4 !== 3) ? "1px solid var(--color-border)" : "none",
                borderBottom: i < 4 ? "1px solid var(--color-border)" : "none",
                background: "var(--color-bg)",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--color-surface)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--color-bg)"; }}
            >
              {/* Number */}
              <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.5625rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-dim)", marginBottom: "1.25rem" }}>
                {num}
              </p>

              {/* Icon */}
              <div
                style={{
                  width: "2.25rem", height: "2.25rem",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  border: "1px solid var(--color-border)",
                  color: "var(--color-dim)",
                  marginBottom: "1rem",
                  transition: "all 0.2s ease",
                }}
                className="group-hover:border-red-600/30 group-hover:text-[var(--color-primary)]"
              >
                <Icon size={15} strokeWidth={1.5} />
              </div>

              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "0.9375rem",
                  fontWeight: 500,
                  color: "var(--color-white)",
                  marginBottom: "0.4rem",
                }}
              >
                {title}
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", lineHeight: 1.6, color: "var(--color-muted)" }}>
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="vc-reveal flex justify-center mt-12">
          <a
            href="https://wa.me/56929645522"
            className="vc-btn vc-btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Solicitar demo del ERP ↗
          </a>
        </div>

      </div>
    </section>
  );
}
