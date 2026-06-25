"use client";
import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PORTFOLIO_ITEMS = [
  {
    num: "01",
    title: "Sitio Web Corporativo",
    subtitle: "Diseño moderno y responsivo",
    tag: "Web",
    imgSrc: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
  },
  {
    num: "02",
    title: "Sistema ERP",
    subtitle: "Gestión integral de tu empresa",
    tag: "Software",
    imgSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
  },
  {
    num: "03",
    title: "Plataforma CRM",
    subtitle: "Tus clientes, siempre conectados",
    tag: "CRM",
    imgSrc: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop",
  },
  {
    num: "04",
    title: "Sistema de Folios",
    subtitle: "Digitalización y control total",
    tag: "Docs",
    imgSrc: "https://images.unsplash.com/photo-1555421689-d68471e189f2?q=80&w=800&auto=format&fit=crop",
  },
];

export default function PortfolioSection() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const sectionRef  = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll<HTMLElement>(".vc-reveal");
    if (!els) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { (e.target as HTMLElement).classList.add("visible"); obs.unobserve(e.target); }
      });
    }, { threshold: 0.05 });
    els.forEach((el, i) => { el.style.transitionDelay = `${i * 80}ms`; obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  const scroll = (dir: "left" | "right") => {
    carouselRef.current?.scrollBy({ left: dir === "left" ? -440 : 440, behavior: "smooth" });
  };

  return (
    <section
      id="trabajos"
      ref={sectionRef}
      className="vc-section overflow-hidden"
      style={{ background: "var(--color-bg-alt)" }}
    >
      <div className="vc-container">

        {/* Label row */}
        <div className="vc-reveal vc-label-row">
          <span className="vc-label">004</span>
          <span className="vc-label-line" />
          <span className="vc-label">Nuestros Trabajos</span>
        </div>

        {/* Heading + controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="vc-reveal vc-h2">
              Proyectos<br />
              <span style={{ color: "var(--color-muted)" }}>Reales</span>
            </h2>
            <p
              className="vc-reveal mt-4"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.9rem",
                color: "var(--color-muted)",
                maxWidth: "26rem",
              }}
            >
              Proyectos que generan resultados reales y medibles.
            </p>
          </div>

          <div className="vc-reveal flex gap-3">
            {(["left", "right"] as const).map((dir) => (
              <button
                key={dir}
                onClick={() => scroll(dir)}
                style={{
                  width: "2.75rem", height: "2.75rem",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  border: "1px solid var(--color-border)",
                  background: "transparent",
                  color: "var(--color-muted)",
                  cursor: "pointer",
                  transition: "all 0.18s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--color-primary)";
                  el.style.color = "var(--color-primary)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--color-border)";
                  el.style.color = "var(--color-muted)";
                }}
                aria-label={dir === "left" ? "Anterior" : "Siguiente"}
              >
                {dir === "left" ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
              </button>
            ))}
          </div>
        </div>

        <div style={{ height: "1px", background: "var(--color-border)", marginBottom: "2rem" }} />

        {/* Carousel */}
        <div
          ref={carouselRef}
          className="flex gap-4 overflow-x-auto pb-4"
          style={{ scrollSnapType: "x mandatory", msOverflowStyle: "none", scrollbarWidth: "none" }}
        >
          {PORTFOLIO_ITEMS.map((item) => (
            <div
              key={item.num}
              className="group flex-shrink-0"
              style={{
                width: "clamp(280px, 40vw, 380px)",
                scrollSnapAlign: "start",
                border: "1px solid var(--color-border)",
                transition: "border-color 0.2s ease",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(230,0,0,0.3)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)"; }}
            >
              {/* Image */}
              <div style={{ aspectRatio: "4/3", overflow: "hidden", position: "relative" }}>
                <img
                  src={item.imgSrc}
                  alt={item.title}
                  style={{
                    width: "100%", height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.6s ease",
                    filter: "brightness(0.8)",
                  }}
                  className="group-hover:scale-105 group-hover:brightness-100"
                />
                {/* Tag */}
                <div
                  style={{
                    position: "absolute", top: "1rem", left: "1rem",
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.5625rem", letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    padding: "0.3rem 0.75rem",
                    border: "1px solid rgba(255,255,255,0.2)",
                    color: "rgba(255,255,255,0.7)",
                    background: "rgba(0,0,0,0.5)",
                    backdropFilter: "blur(4px)",
                  }}
                >
                  {item.tag}
                </div>
              </div>

              {/* Info */}
              <div style={{ padding: "1.25rem", borderTop: "1px solid var(--color-border)" }}>
                <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.5625rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-dim)", marginBottom: "0.4rem" }}>
                  {item.num}
                </p>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1rem", fontWeight: 500, color: "var(--color-white)", marginBottom: "0.25rem" }}>
                  {item.title}
                </h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem", color: "var(--color-muted)" }}>
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
