"use client";
import { Instagram, MessageCircle } from "lucide-react";

const NAV_LINKS = [
  { label: "Nosotros",  href: "#" },
  { label: "Servicios", href: "#servicios" },
  { label: "Contacto",  href: "contacto" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--color-bg)",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      <div className="vc-container py-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">

          {/* Brand */}
          <div>
            <a href="#" aria-label="VisionCode">
              <img
                src="https://res.cloudinary.com/ddqx435i5/image/upload/q_auto/f_auto/v1781868891/logo_mdrau4.png"
                alt="VisionCode"
                style={{ height: "44px", width: "auto", objectFit: "contain", marginBottom: "1.25rem" }}
              />
            </a>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem", lineHeight: 1.7, color: "var(--color-muted)", maxWidth: "18rem", marginBottom: "1.25rem" }}>
              Desarrollamos soluciones digitales que impulsan el crecimiento de tu empresa.
            </p>
            <div className="flex gap-2">
              {[
                { href: "https://www.instagram.com/vision_code_vc/", icon: <Instagram size={14} />, label: "Instagram" },
                { href: "https://wa.me/56929645522", icon: <MessageCircle size={14} />, label: "WhatsApp" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    width: "2.25rem", height: "2.25rem",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    border: "1px solid var(--color-border)",
                    color: "var(--color-dim)",
                    transition: "all 0.18s ease",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "var(--color-primary)";
                    el.style.color = "var(--color-primary)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "var(--color-border)";
                    el.style.color = "var(--color-dim)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.5625rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-dim)", marginBottom: "1.25rem" }}>
              Navegación
            </p>
            <div className="flex flex-col gap-3">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.8125rem",
                    color: "var(--color-muted)",
                    textDecoration: "none",
                    transition: "color 0.18s ease",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-off-white)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-muted)")}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.5625rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-dim)", marginBottom: "1.25rem" }}>
              Contacto
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="https://wa.me/56929645522"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem", color: "var(--color-muted)", textDecoration: "none", transition: "color 0.18s ease" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-off-white)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-muted)")}
              >
                +56 9 2964 5522
              </a>
              <a
                href="mailto:MPEG.LOGISTICA@GMAIL.COM"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem", color: "var(--color-muted)", textDecoration: "none", transition: "color 0.18s ease" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-off-white)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-muted)")}
              >
                MPEG.LOGISTICA@GMAIL.COM
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid var(--color-border)" }}>
        <div
          className="vc-container py-5 flex flex-col md:flex-row justify-between items-center gap-3"
        >
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.5625rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-dim)" }}>
            © {new Date().getFullYear()} VISION CODE. Todos los derechos reservados.
          </p>
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.5625rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-dim)" }}>
            Matias Patricio Espinoza
          </p>
        </div>
      </div>
    </footer>
  );
}
