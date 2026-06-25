"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Inicio",    href: "#" },
  { label: "Servicios", href: "#servicios" },
  { label: "ERP",       href: "#erp" },
  { label: "Trabajos",  href: "#trabajos" },
  { label: "Contacto",  href: "contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [open,     setOpen]       = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 w-full z-50 transition-all duration-400"
      style={
        scrolled
          ? {
              background: "rgba(8,8,8,0.94)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              borderBottom: "1px solid var(--color-border)",
            }
          : { background: "transparent" }
      }
    >
      <div className="vc-container flex items-center justify-between" style={{ height: "4.5rem" }}>

        {/* Logo */}
        <a href="#" aria-label="VisionCode — Inicio">
          <img
            src="https://res.cloudinary.com/ddqx435i5/image/upload/q_auto/f_auto/v1781868891/logo_mdrau4.png"
            alt="VisionCode Logo"
            style={{ height: "52px", width: "auto", objectFit: "contain" }}
          />
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.625rem",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--color-dim)",
                  textDecoration: "none",
                  transition: "color 0.18s ease",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-muted)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-dim)")}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="https://wa.me/56929645522"
          className="vc-btn vc-btn-primary hidden lg:inline-flex"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: "0.625rem", padding: "0.6rem 1.35rem" }}
        >
          Cotizar proyecto ↗
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-1"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          style={{ color: "var(--color-muted)" }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-screen" : "max-h-0"}`}
      >
        <div
          className="vc-container py-8 flex flex-col gap-6"
          style={{ borderTop: "1px solid var(--color-border)", background: "rgba(8,8,8,0.97)" }}
        >
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.6875rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--color-muted)",
                textDecoration: "none",
                paddingBottom: "1.25rem",
                borderBottom: "1px solid var(--color-border)",
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/56929645522"
            className="vc-btn vc-btn-primary w-full text-center justify-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cotizar proyecto ↗
          </a>
        </div>
      </div>
    </nav>
  );
}
