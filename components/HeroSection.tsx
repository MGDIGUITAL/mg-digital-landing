"use client";
import { useEffect, useRef } from "react";
import { ArrowRight, ShieldCheck, Cpu, HeadphonesIcon } from "lucide-react";

const BADGES = [
  { icon: ShieldCheck, title: "Seguridad", sub: "y Confidencialidad" },
  { icon: Cpu,         title: "Tecnología", sub: "de Vanguardia" },
  { icon: HeadphonesIcon, title: "Soporte", sub: "y Acompañamiento" },
];

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);

  // Subtle parallax on mouse move
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    let targetX = 0, currentX = 0, raf: number;
    const onMove = (e: MouseEvent) => { targetX = (e.clientX / window.innerWidth - 0.5) * 20; };
    const tick = () => {
      currentX += (targetX - currentX) * 0.06;
      if (videoRef.current) {
        videoRef.current.style.transform = `translateX(calc(-50% + ${-currentX}px))`;
      }
      raf = requestAnimationFrame(tick);
    };
    tick();
    window.addEventListener("mousemove", onMove);
    return () => { window.removeEventListener("mousemove", onMove); cancelAnimationFrame(raf); };
  }, []);

  // Scroll reveal
  useEffect(() => {
    const els = revealRef.current?.querySelectorAll<HTMLElement>(".vc-reveal");
    if (!els) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { (e.target as HTMLElement).classList.add("visible"); obs.unobserve(e.target); }
      });
    }, { threshold: 0.05 });
    els.forEach((el, i) => { el.style.transitionDelay = `${i * 100}ms`; obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <section className="relative w-full flex flex-col justify-end min-h-screen overflow-hidden">

      {/* ── Video Background ── */}
      <div className="absolute inset-0 z-0 bg-black overflow-hidden">
        <video
          ref={videoRef}
          src="https://res.cloudinary.com/ddqx435i5/video/upload/q_auto/f_auto/v1781867673/Sin_ti%CC%81tulo_g2equl.mov"
          autoPlay loop muted playsInline
          className="absolute left-1/2 w-[110%] object-cover"
          style={{ transform: "translateX(-50%)", height: "130%", top: "-15%", objectPosition: "center 15%" }}
        />
        {/* Multi-layer overlay */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #080808 0%, rgba(8,8,8,0.65) 40%, rgba(8,8,8,0.25) 100%)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(8,8,8,0.7) 0%, transparent 60%)" }} />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* ── Content — bottom anchored ── */}
      <div ref={revealRef} className="vc-container relative z-10 pb-20 pt-40">

        {/* Index label */}
        <div className="vc-reveal flex items-center gap-3 mb-10">
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.625rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--color-dim)" }}>
            001 — Software Agency
          </span>
          <span style={{ display: "block", height: "1px", width: "60px", background: "var(--color-border)" }} />
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.625rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--color-dim)" }}>
            Chile
          </span>
        </div>

        {/* H1 */}
        <h1
          className="vc-reveal"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 500,
            fontSize: "clamp(2.8rem, 8vw, 7rem)",
            lineHeight: 1,
            letterSpacing: "-0.03em",
            color: "var(--color-white)",
            marginBottom: "1.5rem",
          }}
        >
          Soluciones digitales<br />
          que{" "}
          <span style={{ color: "var(--color-primary)" }}>impulsan</span>
          <br />tu negocio
        </h1>

        <p
          className="vc-reveal"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "1rem",
            lineHeight: 1.7,
            color: "var(--color-muted)",
            maxWidth: "32rem",
            marginBottom: "2.5rem",
          }}
        >
          Desarrollamos sistemas web, ERP, CRM y plataformas personalizadas para ayudar a tu empresa a crecer y ser más eficiente.
        </p>

        {/* CTAs */}
        <div className="vc-reveal flex flex-col sm:flex-row gap-3 mb-16">
          <a href="#servicios" className="vc-btn vc-btn-primary">
            Conoce nuestros servicios <ArrowRight size={14} />
          </a>
          <a href="https://wa.me/56929645522" className="vc-btn vc-btn-ghost" target="_blank" rel="noopener noreferrer">
            Solicitar asesoría
          </a>
        </div>

        {/* Stats strip */}
        <div
          className="vc-reveal flex flex-wrap gap-x-10 gap-y-3 pt-8"
          style={{ borderTop: "1px solid var(--color-border)" }}
        >
          {BADGES.map(({ icon: Icon, title, sub }) => (
            <div key={title} className="flex items-center gap-3">
              <div
                style={{
                  width: "2rem", height: "2rem",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  border: "1px solid var(--color-border)",
                  color: "var(--color-primary)",
                }}
              >
                <Icon size={14} />
              </div>
              <div>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.8rem", fontWeight: 500, color: "var(--color-white)", lineHeight: 1.2 }}>{title}</p>
                <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.5625rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-dim)" }}>{sub}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
