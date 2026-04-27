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
        className="text-[10px] font-mono tracking-[0.4em] uppercase font-bold"
        style={{ color: 'var(--blue-primary)' }}
      >
        {number} // {name}
      </span>
      <div className="flex-1 h-px bg-slate-100" />
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
    <main style={{ background: 'var(--white)', color: 'var(--text-primary)' }}>
      <Navbar />

      {/* ─── HERO ─── */}
      <HeroSection />

      {/* ─── SERVICIOS ─── */}
      <div className="py-20 lg:py-32" /> 
      <ServicesSection />

      {/* ─── SOLUCIONES (ERP/CRM) ─── */}
      <section id="soluciones" className="py-32 lg:py-48" style={{ background: 'var(--surface-2)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionLabel number="02" name="SOLUCIONES" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div>
              <h2 className="font-black uppercase leading-[0.95] tracking-tighter mb-10" style={{ fontSize: 'clamp(2.5rem, 5.5vw, 5rem)', color: 'var(--blue-deep)' }}>
                Sistemas de<br />
                <span style={{ color: 'var(--blue-primary)' }}>Gestión Total</span>
              </h2>
              <p className="text-sm lg:text-lg leading-relaxed mb-12 max-w-lg text-slate-500 font-medium">
                Nuestros ERPs y CRMs son el cerebro de tu operación, diseñados para integrarse con procesos industriales y flujos de trabajo de alta complejidad.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: Settings, text: 'Módulos de Producción Industrial' },
                  { icon: Monitor, text: 'Dashboards de Control en Tiempo Real' },
                  { icon: Cpu, text: 'Inteligencia Predictiva de Inventarios' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-6 py-5 border-b border-slate-200 group cursor-default">
                    <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center transition-all group-hover:bg-blue-600">
                        <item.icon className="w-4 h-4 text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-[12px] font-bold uppercase tracking-widest text-slate-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative aspect-square lg:aspect-video rounded-xl overflow-hidden shadow-2xl shadow-blue-900/10 border border-white group">
              <img 
                src="/erp_interface_dashboard_1777267655348.png" 
                alt="Dashboard ERP" 
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay group-hover:opacity-0 transition-opacity" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── OPTIMIZACIÓN INDUSTRIAL ─── */}
      <section className="py-32 lg:py-48" style={{ background: 'var(--white)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div className="order-2 lg:order-1 relative aspect-square rounded-xl overflow-hidden shadow-2xl shadow-blue-900/10 border border-white group">
              <img 
                src="/industrial_optimization_vision_1777267674917.png" 
                alt="Optimización Industrial" 
                className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
              />
            </div>

            <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-3 mb-8 px-5 py-2 rounded-full bg-blue-50">
                   <Zap className="w-4 h-4 text-blue-600" />
                   <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600">Eficiencia Operativa</span>
                </div>
                <h2 className="font-black uppercase leading-[0.95] tracking-tighter mb-10" style={{ fontSize: 'clamp(2.5rem, 5.5vw, 5rem)', color: 'var(--blue-deep)' }}>
                  Optimización<br />
                  <span style={{ color: 'var(--blue-primary)' }}>Sin Límites</span>
                </h2>
                <p className="text-sm lg:text-lg leading-relaxed mb-10 text-slate-500 font-medium">
                  Implementamos algoritmos avanzados y flujos de trabajo optimizados para reducir el desperdicio operativo en un 40% promedio durante los primeros 6 meses.
                </p>
                <div className="h-1.5 w-24 bg-blue-600 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── NOSOTROS ─── */}
      <section id="nosotros" className="py-32 lg:py-48" style={{ background: 'var(--surface-2)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionLabel number="03" name="NOSOTROS" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
            <div>
              <h2 className="font-black uppercase leading-[0.95] tracking-tighter mb-10" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--blue-deep)' }}>
                {t('title')}
              </h2>
              <p className="text-sm lg:text-lg leading-relaxed mb-12 text-slate-500 font-medium">
                {t('content')}
              </p>
              
              <div className="grid grid-cols-2 gap-16">
                <div className="p-8 bg-white shadow-xl shadow-blue-900/5 rounded-xl">
                  <div className="text-4xl font-black mb-3 text-blue-600">12+</div>
                  <div className="text-[9px] font-mono tracking-[0.4em] uppercase font-bold text-slate-400">Años de Expertiz</div>
                </div>
                <div className="p-8 bg-white shadow-xl shadow-blue-900/5 rounded-xl">
                  <div className="text-4xl font-black mb-3 text-blue-600">100%</div>
                  <div className="text-[9px] font-mono tracking-[0.4em] uppercase font-bold text-slate-400">Disponibilidad</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { n: '01', title: 'AUDITORÍA', d: 'Analizamos cada rincón de tu proceso actual para detectar cuellos de botella.' },
                { n: '02', title: 'DISEÑO UX', d: 'Creamos interfaces intuitivas que minimizan la curva de aprendizaje.' },
                { n: '03', title: 'DESPLIEGUE', d: 'Implementación escalonada sin interrupción de la cadena de valor.' },
              ].map((step) => (
                <div key={step.n} className="group p-8 flex gap-8 bg-white border border-slate-100 hover:border-blue-200 transition-all hover:shadow-xl hover:shadow-blue-900/5 rounded-xl">
                  <span className="font-mono text-xs mt-1.5 font-bold text-blue-600">{step.n}</span>
                  <div className="flex-1">
                    <h3 className="text-[14px] font-black uppercase tracking-[0.2em] mb-3 text-slate-900">{step.title}</h3>
                    <p className="text-[12px] text-slate-500 leading-relaxed font-medium">{step.d}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 ml-auto self-center text-slate-200 group-hover:text-blue-600 transition-all -translate-x-4 group-hover:translate-x-0" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONTACTO ─── */}
      <section id="contacto" className="py-40 lg:py-60" style={{ background: 'var(--blue-deep)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <SectionLabel number="04" name="PROYECTOS" />
          
          <div className="max-w-3xl mx-auto">
            <h2 className="font-black uppercase leading-[0.85] tracking-tighter mb-12" style={{ fontSize: 'clamp(3rem, 7vw, 6.5rem)', color: '#fff' }}>
              Optimicemos tu<br />
              <span className="text-blue-400">Operación</span>
            </h2>
            <p className="text-sm lg:text-xl leading-relaxed mb-16 text-white/60 font-medium">
              ¿Buscas un sistema ERP a medida o necesitas automatizar procesos industriales? Estamos listos para el reto técnico más exigente.
            </p>
            
            <a 
              href="mailto:mpeg.logistica@gmail.com"
              className="inline-flex items-center gap-6 px-16 py-6 font-black uppercase tracking-[0.3em] text-[11px] bg-white text-blue-900 shadow-2xl transition-all duration-500 hover:scale-105 hover:bg-blue-50"
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
