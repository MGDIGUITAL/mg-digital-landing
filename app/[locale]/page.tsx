import { getTranslations } from 'next-intl/server'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import Footer from '@/components/Footer'
import { Monitor, Cpu, Settings, MessageSquare, ChevronRight, Zap } from 'lucide-react'

function SectionLabel({ number, name }: { number: string; name: string }) {
  return (
    <div className="flex items-center gap-4 mb-16">
      <span
        className="text-[10px] font-mono tracking-[0.4em] uppercase"
        style={{ color: 'var(--lime)' }}
      >
        {number} // {name}
      </span>
      <div className="flex-1 h-px bg-white/5" />
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
      <div className="py-12 lg:py-20" /> {/* Spacer */}
      <ServicesSection />

      {/* ─── SOLUCIONES (ERP/CRM) ─── */}
      <section id="soluciones" className="py-32 lg:py-48" style={{ background: 'var(--surface)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionLabel number="02" name="SOLUCIONES" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="font-black uppercase leading-[0.9] tracking-tighter mb-10" style={{ fontSize: 'clamp(2.5rem, 5.5vw, 5rem)', color: '#fff' }}>
                Sistemas de<br />
                <span style={{ color: 'var(--lime)' }}>Gestión Total</span>
              </h2>
              <p className="text-sm lg:text-base leading-relaxed mb-10 max-w-lg opacity-60">
                Nuestros ERPs y CRMs son el cerebro de tu operación, diseñados para integrarse con procesos industriales y flujos de trabajo de alta complejidad.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: Settings, text: 'Módulos de Producción Industrial' },
                  { icon: Monitor, text: 'Dashboards de Control en Tiempo Real' },
                  { icon: Cpu, text: 'Inteligencia Predictiva de Inventarios' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-5 py-4 border-b border-white/5">
                    <item.icon className="w-4 h-4" style={{ color: 'var(--lime)' }} />
                    <span className="text-[11px] font-black uppercase tracking-widest">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative aspect-square lg:aspect-video rounded-sm overflow-hidden border border-white/10 group shadow-2xl">
              <div className="absolute inset-0 bg-lime-500/5 mix-blend-overlay z-10" />
              <img 
                src="/erp_interface_dashboard_1777267655348.png" 
                alt="Dashboard ERP" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 opacity-70 group-hover:opacity-100 scale-100 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── OPTIMIZACIÓN INDUSTRIAL ─── */}
      <section className="py-32 lg:py-48" style={{ background: 'var(--black)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1 relative aspect-square rounded-sm overflow-hidden border border-white/10 group shadow-2xl">
              <img 
                src="/industrial_optimization_vision_1777267674917.png" 
                alt="Optimización Industrial" 
                className="w-full h-full object-cover grayscale-[0.6] group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
            </div>

            <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-3 mb-8 px-4 py-1.5 rounded-full border border-lime-500/20 bg-lime-500/5">
                   <Zap className="w-3.5 h-3.5 animate-pulse" style={{ color: 'var(--lime)' }} />
                   <span className="text-[10px] font-mono uppercase tracking-[0.3em]" style={{ color: 'var(--lime)' }}>Eficiencia Operativa</span>
                </div>
                <h2 className="font-black uppercase leading-[0.9] tracking-tighter mb-10" style={{ fontSize: 'clamp(2.5rem, 5.5vw, 5rem)', color: '#fff' }}>
                  Optimización<br />
                  <span style={{ color: 'var(--lime)' }}>Sin Límites</span>
                </h2>
                <p className="text-sm lg:text-base leading-relaxed mb-10 opacity-60">
                  Implementamos algoritmos avanzados y flujos de trabajo optimizados para reducir el desperdicio operativo en un 40% promedio durante los primeros 6 meses.
                </p>
                <div className="h-px w-20 bg-lime-500/50" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── NOSOTROS ─── */}
      <section id="nosotros" className="py-32 lg:py-48" style={{ background: 'var(--surface)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionLabel number="03" name="NOSOTROS" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
            <div>
              <h2 className="font-black uppercase leading-[0.9] tracking-tighter mb-10" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#fff' }}>
                {t('title')}
              </h2>
              <p className="text-sm lg:text-base leading-relaxed mb-12 opacity-60">
                {t('content')}
              </p>
              
              <div className="grid grid-cols-2 gap-16">
                <div>
                  <div className="text-4xl font-black mb-3" style={{ color: 'var(--lime)' }}>12+</div>
                  <div className="text-[9px] font-mono tracking-[0.4em] uppercase opacity-40 text-white">Años de Expertiz</div>
                </div>
                <div>
                  <div className="text-4xl font-black mb-3" style={{ color: 'var(--lime)' }}>100%</div>
                  <div className="text-[9px] font-mono tracking-[0.4em] uppercase opacity-40 text-white">Disponibilidad</div>
                </div>
              </div>
            </div>

            <div className="space-y-0">
              {[
                { n: '01', title: 'AUDITORÍA', d: 'Analizamos cada rincón de tu proceso actual para detectar cuellos de botella.' },
                { n: '02', title: 'DISEÑO UX', d: 'Creamos interfaces intuitivas que minimizan la curva de aprendizaje.' },
                { n: '03', title: 'DESPLIEGUE', d: 'Implementación escalonada sin interrupción de la cadena de valor.' },
              ].map((step) => (
                <div key={step.n} className="group py-12 flex gap-8 border-t border-white/5 hover:bg-white/[0.02] transition-colors px-6">
                  <span className="font-mono text-[10px] mt-1.5 opacity-40 group-hover:opacity-100 transition-opacity" style={{ color: 'var(--lime)' }}>{step.n}</span>
                  <div className="flex-1">
                    <h3 className="text-[13px] font-black uppercase tracking-[0.2em] mb-3">{step.title}</h3>
                    <p className="text-[11px] opacity-40 leading-relaxed group-hover:opacity-70 transition-opacity">{step.d}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 ml-auto self-center opacity-0 group-hover:opacity-100 transition-all -translate-x-6 group-hover:translate-x-0" style={{ color: 'var(--lime)' }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONTACTO ─── */}
      <section id="contacto" className="py-40 lg:py-60" style={{ background: 'var(--black)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <SectionLabel number="04" name="PROYECTOS" />
          
          <div className="max-w-3xl mx-auto">
            <h2 className="font-black uppercase leading-[0.85] tracking-tighter mb-12" style={{ fontSize: 'clamp(3rem, 7vw, 6.5rem)', color: '#fff' }}>
              Optimicemos tu<br />
              <span className="italic" style={{ color: 'var(--lime)', WebkitTextStroke: '1px var(--lime)' }}>Operación</span>
            </h2>
            <p className="text-sm lg:text-lg leading-relaxed mb-16 opacity-50">
              ¿Buscas un sistema ERP a medida o necesitas automatizar procesos industriales? Estamos listos para el reto técnico más exigente.
            </p>
            
            <a 
              href="mailto:mpeg.logistica@gmail.com"
              className="inline-flex items-center gap-6 px-14 py-6 font-black uppercase tracking-[0.3em] text-[11px] transition-all duration-500 hover:scale-105 hover:shadow-[0_0_50px_rgba(197,255,0,0.3)]"
              style={{ background: 'var(--lime)', color: '#000' }}
            >
              <MessageSquare className="w-5 h-5" />
              Agendar Consultoría
            </a>
          </div>
        </div>
      </section>

      <Footer currentLocale={locale} />
    </main>
  )
}
