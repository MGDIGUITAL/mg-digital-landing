import { getTranslations } from 'next-intl/server'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import Footer from '@/components/Footer'
import { Monitor, Cpu, Settings, MessageSquare, ChevronRight, Zap } from 'lucide-react'

function SectionLabel({ number, name }: { number: string; name: string }) {
  return (
    <div className="flex items-center gap-3 mb-12">
      <span
        className="text-xs font-mono tracking-[0.3em] uppercase"
        style={{ color: 'var(--lime)' }}
      >
        {number} / {name}
      </span>
      <div className="flex-1 h-px" style={{ background: 'var(--border)' }} />
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
    <main style={{ background: 'var(--black)', color: '#fff' }}>
      <Navbar />

      {/* ─── HERO ─── */}
      <HeroSection />

      {/* ─── SERVICIOS ─── */}
      <ServicesSection />

      {/* ─── SOLUCIONES (ERP/CRM) ─── */}
      <section id="soluciones" className="py-24 lg:py-32" style={{ background: 'var(--surface)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionLabel number="02" name="SOLUCIONES" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-black uppercase leading-none tracking-tight mb-8" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: '#fff' }}>
                Sistemas de<br />
                <span style={{ color: 'var(--lime)' }}>Gestión Total</span>
              </h2>
              <p className="text-sm leading-relaxed mb-8 max-w-lg" style={{ color: 'var(--text-muted)' }}>
                Nuestros ERPs y CRMs son el cerebro de tu operación, diseñados para integrarse con procesos industriales y flujos de trabajo de alta complejidad.
              </p>
              
              <div className="space-y-4">
                {[
                  { icon: Settings, text: 'Módulos de Producción Industrial' },
                  { icon: Monitor, text: 'Dashboards de Control en Tiempo Real' },
                  { icon: Cpu, text: 'Inteligencia Predictiva de Inventarios' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 py-3 border-b border-white/5">
                    <item.icon className="w-4 h-4" style={{ color: 'var(--lime)' }} />
                    <span className="text-sm font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative aspect-square lg:aspect-video rounded-sm overflow-hidden border border-white/10 group">
              <div className="absolute inset-0 bg-lime-500/5 mix-blend-overlay z-10" />
              <img 
                src="/erp_interface_dashboard_1777267655348.png" 
                alt="Dashboard ERP" 
                className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700 opacity-80 group-hover:opacity-100 scale-100 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── OPTIMIZACIÓN INDUSTRIAL ─── */}
      <section className="py-24 lg:py-32" style={{ background: 'var(--black)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative aspect-square rounded-sm overflow-hidden border border-white/10 group">
              <img 
                src="/industrial_optimization_vision_1777267674917.png" 
                alt="Optimización Industrial" 
                className="w-full h-full object-cover grayscale-[0.4] group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
            </div>

            <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full border border-lime-500/30 bg-lime-500/5">
                   <Zap className="w-3 h-3" style={{ color: 'var(--lime)' }} />
                   <span className="text-[10px] font-mono uppercase tracking-widest" style={{ color: 'var(--lime)' }}>Eficiencia Máxima</span>
                </div>
                <h2 className="font-black uppercase leading-none tracking-tight mb-8" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: '#fff' }}>
                  Optimización<br />
                  <span style={{ color: 'var(--lime)' }}>Sin Límites</span>
                </h2>
                <p className="text-sm leading-relaxed mb-8" style={{ color: 'var(--text-muted)' }}>
                  Implementamos algoritmos avanzados y flujos de trabajo optimizados para reducir el desperdicio operativo en un 40% promedio durante los primeros 6 meses.
                </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── NOSOTROS ─── */}
      <section id="nosotros" className="py-24 lg:py-32" style={{ background: 'var(--surface)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionLabel number="03" name="NOSOTROS" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="font-black uppercase leading-none tracking-tight mb-8" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#fff' }}>
                {t('title')}
              </h2>
              <p className="text-sm leading-relaxed mb-10" style={{ color: 'var(--text-muted)' }}>
                {t('content')}
              </p>
              
              <div className="grid grid-cols-2 gap-12">
                <div>
                  <div className="text-3xl font-black mb-2" style={{ color: 'var(--lime)' }}>12+</div>
                  <div className="text-[10px] font-mono tracking-widest uppercase opacity-40 text-white">Años de Expertiz</div>
                </div>
                <div>
                  <div className="text-3xl font-black mb-2" style={{ color: 'var(--lime)' }}>100%</div>
                  <div className="text-[10px] font-mono tracking-widest uppercase opacity-40 text-white">Disponibilidad</div>
                </div>
              </div>
            </div>

            <div className="space-y-0">
              {[
                { n: '01', title: 'AUDITORÍA', d: 'Analizamos cada rincón de tu proceso actual.' },
                { n: '02', title: 'DISEÑO UX', d: 'Creamos interfaces intuitivas para tu personal.' },
                { n: '03', title: 'DESPLIEGUE', d: 'Implementación sin interrupción operativa.' },
              ].map((step) => (
                <div key={step.n} className="group py-8 flex gap-6 border-t border-white/10 hover:bg-white/5 transition-colors px-4">
                  <span className="font-mono text-xs mt-1" style={{ color: 'var(--lime)' }}>{step.n}</span>
                  <div>
                    <h3 className="text-sm font-black uppercase tracking-wider mb-2">{step.title}</h3>
                    <p className="text-xs opacity-50 leading-relaxed">{step.d}</p>
                  </div>
                  <ChevronRight className="w-4 h-4 ml-auto self-center opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" style={{ color: 'var(--lime)' }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONTACTO ─── */}
      <section id="contacto" className="py-24 lg:py-32" style={{ background: 'var(--black)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <SectionLabel number="04" name="PROYECTOS" />
          
          <div className="max-w-3xl mx-auto">
            <h2 className="font-black uppercase leading-none tracking-tight mb-8" style={{ fontSize: 'clamp(2.5rem, 5vw, 5.5rem)', color: '#fff' }}>
              Optimicemos tu<br />
              <span style={{ color: 'var(--lime)' }}>Operación</span>
            </h2>
            <p className="text-sm leading-relaxed mb-12" style={{ color: 'var(--text-muted)' }}>
              ¿Buscas un sistema ERP a medida o necesitas automatizar procesos industriales? Estamos listos para el reto.
            </p>
            
            <a 
              href="mailto:mpeg.logistica@gmail.com"
              className="inline-flex items-center gap-4 px-12 py-5 font-black uppercase tracking-widest text-sm transition-all duration-300 hover:scale-105"
              style={{ background: 'var(--lime)', color: '#000' }}
            >
              <MessageSquare className="w-4 h-4" />
              Agendar Consultoría
            </a>
          </div>
        </div>
      </section>

      <Footer currentLocale={locale} />
    </main>
  )
}
