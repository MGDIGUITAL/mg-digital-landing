import { getTranslations } from 'next-intl/server'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import Footer from '@/components/Footer'
import { Monitor, Cpu, Settings, MessageSquare, ChevronRight } from 'lucide-react'

function SectionLabel({ number, name }: { number: string; name: string }) {
  return (
    <div className="section-label">
      <span>{number} // {name}</span>
    </div>
  )
}

export default async function HomePage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'about' })

  return (
    <main style={{ background: 'var(--bg-deep)', color: 'var(--white)' }}>
      <Navbar />
      <HeroSection />

      {/* ── SERVICIOS ── */}
      <ServicesSection />

      {/* ── SOLUCIONES ── */}
      <section
        id="soluciones"
        className="py-32 scroll-mt-24"
        style={{ background: 'var(--bg-deep)', borderTop: '1px solid rgba(0, 85, 204,0.06)' }}
      >
        <div className="container">
          <SectionLabel number="02" name="SOLUCIONES" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 xl:gap-32 items-center">

            {/* Text */}
            <div className="flex flex-col gap-8">
              <h2 className="font-black leading-tight tracking-tighter" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
                Sistemas de{' '}
                <span className="text-cyan">Gestión Total</span>
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--slate)', maxWidth: '36rem' }}>
                Nuestros ERPs y CRMs son el cerebro de tu operación, diseñados para integrarse con procesos industriales y flujos de trabajo de alta complejidad.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  { icon: Settings, text: 'Módulos de Producción Industrial' },
                  { icon: Monitor,  text: 'Dashboards de Control en Tiempo Real' },
                  { icon: Cpu,      text: 'Inteligencia Predictiva de Inventarios' },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="glass group flex items-center gap-5 p-5 cursor-default"
                  >
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all group-hover:scale-110"
                         style={{ background: 'rgba(0, 85, 204,0.08)' }}>
                      <item.icon className="w-4 h-4" style={{ color: 'var(--cyan)' }} />
                    </div>
                    <span className="text-sm font-semibold text-white group-hover:text-[var(--cyan)] transition-colors">
                      {item.text}
                    </span>
                    <ChevronRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0"
                                  style={{ color: 'var(--cyan)' }} />
                  </div>
                ))}
              </div>
              <div>
                <a href="https://wa.me/56929645522" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex">
                  Solicitar Demo <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden group border-animated"
                 style={{ background: 'var(--bg-surface)', minHeight: '400px' }}>
              <img
                src="/erp_interface_dashboard_1777267655348.png"
                alt="Dashboard ERP MG Digital"
                className="w-full h-full object-cover transition-all duration-700 grayscale-[40%] group-hover:grayscale-0 scale-100 group-hover:scale-105"
                style={{ minHeight: '400px' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-deep)] via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity" />
              {/* Overlay metric */}
              <div className="absolute bottom-6 left-6 glass px-5 py-3 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-mono" style={{ color: 'var(--cyan)' }}>SISTEMA ACTIVO · 99.9% uptime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── NOSOTROS ── */}
      <section
        id="nosotros"
        className="py-32 scroll-mt-24"
        style={{ background: 'var(--bg-surface)', borderTop: '1px solid rgba(0, 85, 204,0.06)' }}
      >
        <div className="container">
          <SectionLabel number="03" name="NOSOTROS" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 xl:gap-32">

            {/* Left: about + stats */}
            <div className="flex flex-col gap-8">
              <h2 className="font-black leading-tight tracking-tighter" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
                {t('title')}
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--slate)' }}>
                {t('content')}
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: '12+', label: 'Años de Experiencia' },
                  { value: '100%', label: 'Disponibilidad SLA' },
                  { value: '50+', label: 'Proyectos Exitosos' },
                  { value: '24/7', label: 'Soporte Técnico' },
                ].map(stat => (
                  <div key={stat.label} className="glass p-6 flex flex-col gap-2">
                    <span className="text-3xl font-black text-cyan">{stat.value}</span>
                    <span className="text-xs font-mono uppercase tracking-widest" style={{ color: 'var(--slate)' }}>
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: process steps */}
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-bold text-white mb-2">Nuestro Proceso</h3>
              {[
                { n: '01', title: 'Auditoría', d: 'Analizamos cada proceso para detectar cuellos de botella y oportunidades.' },
                { n: '02', title: 'Diseño UX', d: 'Creamos interfaces intuitivas que minimizan la curva de aprendizaje.' },
                { n: '03', title: 'Despliegue', d: 'Implementación escalonada sin interrumpir la cadena de valor.' },
                { n: '04', title: 'Soporte',   d: 'Monitoreo continuo 24/7 con SLAs garantizados por contrato.' },
              ].map((step, i) => (
                <div key={step.n}
                     className="glass group flex items-start gap-6 p-6 cursor-default">
                  <span className="font-mono text-sm font-bold flex-shrink-0 mt-0.5" style={{ color: 'var(--cyan)' }}>
                    {step.n}
                  </span>
                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-white mb-1.5 group-hover:text-[var(--cyan)] transition-colors">
                      {step.title}
                    </h4>
                    <p className="text-xs leading-relaxed" style={{ color: 'var(--slate)' }}>{step.d}</p>
                  </div>
                  <ChevronRight className="w-4 h-4 flex-shrink-0 self-center opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0"
                                style={{ color: 'var(--cyan)' }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROYECTOS / CONTACTO ── */}
      <section
        id="proyectos"
        className="py-40 scroll-mt-24 relative overflow-hidden"
        style={{ background: 'var(--bg-deep)', borderTop: '1px solid rgba(0, 85, 204,0.06)' }}
      >
        {/* Radial glow */}
        <div className="absolute inset-0 pointer-events-none"
             style={{ background: 'radial-gradient(ellipse at center, rgba(0, 85, 204,0.07) 0%, transparent 65%)' }} />

        <div className="container relative z-10 text-center">
          <SectionLabel number="04" name="PROYECTOS" />
          <div style={{ maxWidth: '52rem', margin: '0 auto' }}>
            <h2 className="font-black leading-tight tracking-tighter mb-8"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
              Optimicemos tu{' '}
              <span className="text-glow">Operación</span>
            </h2>
            <p className="text-xl leading-relaxed mb-12" style={{ color: 'var(--slate)' }}>
              ¿Buscas un sistema ERP a medida o necesitas digitalizar procesos industriales? Estamos listos para el reto técnico más exigente.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                id="contacto"
                href="https://wa.me/56929645522"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm"
              >
                <MessageSquare className="w-5 h-5" />
                Agendar Consultoría Técnica
              </a>
              <a href="#servicios" className="btn-ghost text-sm">
                Ver Servicios <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer currentLocale={locale} />
    </main>
  )
}
