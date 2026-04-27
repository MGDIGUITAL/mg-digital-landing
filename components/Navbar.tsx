'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { href: '#inicio',     label: 'Inicio' },
  { href: '#servicios',  label: 'Servicios' },
  { href: '#soluciones', label: 'Soluciones' },
  { href: '#nosotros',   label: 'Nosotros' },
  { href: '#proyectos',  label: 'Proyectos' },
  { href: '#contacto',   label: 'Contacto' },
]

const SECTION_IDS = NAV_LINKS.map(l => l.href.slice(1))

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false)
  const [menuOpen,    setMenuOpen]    = useState(false)
  const [activeId,    setActiveId]    = useState('inicio')
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 })
  const navRef  = useRef<HTMLDivElement>(null)
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({})

  /* ── Scroll detection ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* ── Active section via Intersection Observer ── */
  useEffect(() => {
    const observers: IntersectionObserver[] = []
    const ratios: Record<string, number> = {}

    SECTION_IDS.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        entries => {
          entries.forEach(e => { ratios[id] = e.intersectionRatio })
          const best = Object.entries(ratios).sort((a, b) => b[1] - a[1])[0]
          if (best && best[1] > 0) setActiveId(best[0])
        },
        { threshold: [0, 0.25, 0.5, 0.75, 1] }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [])

  /* ── Smooth indicator movement ── */
  useEffect(() => {
    const el = linkRefs.current[activeId]
    const nav = navRef.current
    if (!el || !nav) return
    const elRect  = el.getBoundingClientRect()
    const navRect = nav.getBoundingClientRect()
    setIndicatorStyle({ left: elRect.left - navRect.left, width: elRect.width })
  }, [activeId])

  const handleNav = (href: string) => {
    setMenuOpen(false)
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 60)
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(0,5,13,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,242,255,0.08)' : 'none',
      }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20">

          {/* ── Logo ── */}
          <a href="#inicio" onClick={(e) => { e.preventDefault(); handleNav('#inicio') }}
             className="flex items-center gap-3 group">
            {/* Animated SVG Logo */}
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="34" height="34" rx="4"
                    stroke="url(#logoGrad)" strokeWidth="1.5"
                    strokeDasharray="136" strokeDashoffset="136"
                    style={{ animation: 'drawStroke 1.2s ease forwards' }} />
              <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle"
                    fontFamily="Inter" fontWeight="900" fontSize="13"
                    fill="white" letterSpacing="0.5">MG</text>
              <defs>
                <linearGradient id="logoGrad" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#00f2ff" />
                  <stop offset="100%" stopColor="#0066cc" />
                </linearGradient>
              </defs>
            </svg>
            <div className="flex flex-col leading-none">
              <span className="text-lg font-black tracking-tight">
                <span className="text-white">MG</span>
                <span style={{ color: 'var(--cyan)' }}>.DIGUITAL</span>
              </span>
              <span className="text-[8px] font-mono tracking-[0.22em] opacity-40 uppercase mt-0.5">
                SOFTWARE · ERP · CRM · WEB
              </span>
            </div>
          </a>

          {/* ── Desktop nav ── */}
          <nav ref={navRef} className="hidden lg:flex items-center gap-1 relative">
            {/* Active indicator bar */}
            <span
              className="absolute bottom-0 h-0.5 transition-all duration-300 ease-out rounded-full"
              style={{ ...indicatorStyle, background: 'var(--cyan)' }}
            />
            {NAV_LINKS.map(link => (
              <a
                key={link.href}
                ref={el => { linkRefs.current[link.href.slice(1)] = el }}
                href={link.href}
                onClick={e => { e.preventDefault(); handleNav(link.href) }}
                className="px-4 py-2 text-sm font-medium transition-colors duration-200 relative"
                style={{
                  color: activeId === link.href.slice(1) ? 'var(--cyan)' : 'rgba(255,255,255,0.6)',
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* ── CTA + Mobile toggle ── */}
          <div className="flex items-center gap-4">
            <a
              href="#contacto"
              onClick={e => { e.preventDefault(); handleNav('#contacto') }}
              className="hidden md:inline-flex btn-primary text-xs py-2.5 px-5"
            >
              Consultar
            </a>
            <button
              onClick={() => setMenuOpen(v => !v)}
              className="lg:hidden text-white p-2"
              aria-label="Menú"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      <div
        className="lg:hidden overflow-hidden transition-all duration-400"
        style={{
          maxHeight: menuOpen ? '400px' : '0',
          background: 'rgba(0,5,13,0.97)',
          borderTop: menuOpen ? '1px solid rgba(0,242,255,0.08)' : 'none',
        }}
      >
        <nav className="container py-6 flex flex-col gap-1">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={e => { e.preventDefault(); handleNav(link.href) }}
              className="py-3 px-4 text-sm font-medium rounded-lg transition-colors"
              style={{
                color: activeId === link.href.slice(1) ? 'var(--cyan)' : 'rgba(255,255,255,0.6)',
                background: activeId === link.href.slice(1) ? 'rgba(0,242,255,0.05)' : 'transparent',
              }}
            >
              {link.label}
            </a>
          ))}
          <a href="#contacto" onClick={e => { e.preventDefault(); handleNav('#contacto') }}
             className="mt-4 btn-primary justify-center text-xs">
            Consultar Proyecto
          </a>
        </nav>
      </div>

      {/* Inline keyframe for stroke animation */}
      <style>{`
        @keyframes drawStroke {
          to { stroke-dashoffset: 0; }
        }
      `}</style>
    </header>
  )
}
