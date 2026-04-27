import { getTranslations } from 'next-intl/server'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import Footer from '@/components/Footer'
import { Monitor, Cpu, Settings, MessageSquare, ChevronRight, Zap } from 'lucide-react'

function SectionLabel({ number, name }: { number: string; name: string }) {
  return (
    <div className="flex items-center gap-4 mb-16">
      <div className="w-12 h-[1px] bg-blue-500/50" />
      <span
        className="text-[10px] font-mono tracking-[0.4em] uppercase font-bold text-blue-400"
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
    <main className="bg-[#020617] text-white">
      <Navbar />

      {/* ─── HERO & FEATURES ─── */}
      <HeroSection />

      {/* ─── SERVICIOS (CYBER STYLE) ─── */}
      <div className="py-20 lg:py-32" /> 
      <ServicesSection />

      {/* ─── SOLUCIONES (ERP/CRM) ─── */}
      <section id="soluciones" className="py-32 lg:py-48 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
        
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <SectionLabel number="02" name="SOLUCIONES" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div>
              <h2 className="text-[3rem] lg:text-[5rem] font-black uppercase leading-[0.95] tracking-tighter mb-10">
                Sistemas de<br />
                <span className="text-glow" style={{ color: 'var(--blue-neon)' }}>Gestión Total</span>
              </h2>
              <p className="text-sm lg:text-lg leading-relaxed mb-12 max-w-lg text-white/40 font-medium">
                Nuestros ERPs y CRMs son el cerebro de tu operación, diseñados para integrarse con procesos industriales y flujos de trabajo de alta complejidad.
              </p>
              
              <div className="space-y-4">
                {[
                  { icon: Settings, text: 'Módulos de Producción Industrial' },
                  { icon: Monitor, text: 'Dashboards de Control en Tiempo Real' },
                  { icon: Cpu, text: 'Inteligencia Predictiva de Inventarios' },
                ].map((item, idx) => (
                  <div key={idx} className="glass-card flex items-center gap-6 p-6 group cursor-default rounded-xl">
                    <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center transition-all group-hover:bg-blue-600">
                        <item.icon className="w-5 h-5 text-blue-400 group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-[12px] font-black uppercase tracking-widest text-white/60 group-hover:text-white transition-colors">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative aspect-square lg:aspect-video rounded-2xl overflow-hidden border border-white/5 shadow-[0_0_100px_rgba(0,163,255,0.1)] group">
              <img 
                src="/erp_interface_dashboard_1777267655348.png" 
                alt="Dashboard ERP" 
                className="w-full h-full object-cover transition-all duration-1000 grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay group-hover:opacity-0 transition-opacity" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── NOSOTROS ─── */}
      <section id="nosotros" className="py-32 lg:py-48 relative">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <SectionLabel number="03" name="NOSOTROS" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
            <div>
              <h2 className="text-[3rem] lg:text-[4.5rem] font-black uppercase leading-[0.95] tracking-tighter mb-10">
                {t('title')}
              </h2>
              <p className="text-sm lg:text-lg leading-relaxed mb-12 text-white/40 font-medium">
                {t('content')}
              </p>
              
              <div className="grid grid-cols-2 gap-12">
                <div className="glass-card p-10 rounded-2xl">
                  <div className="text-5xl font-black mb-3 text-glow" style={{ color: 'var(--blue-neon)' }}>12+</div>
                  <div className="text-[9px] font-mono tracking-[0.4em] uppercase font-bold text-white/30">Años de Expertiz</div>
                </div>
                <div className="glass-card p-10 rounded-2xl">
                  <div className="text-5xl font-black mb-3 text-glow" style={{ color: 'var(--blue-neon)' }}>100%</div>
                  <div className="text-[9px] font-mono tracking-[0.4em] uppercase font-bold text-white/30">Disponibilidad</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { n: '01', title: 'AUDITORÍA', d: 'Analizamos cada rincón de tu proceso actual para detectar cuellos de botella.' },
                { n: '02', title: 'DISEÑO UX', d: 'Creamos interfaces intuitivas que minimizan la curva de aprendizaje.' },
                { n: '03', title: 'DESPLIEGUE', d: 'Implementación escalonada sin interrupción de la cadena de valor.' },
              ].map((step) => (
                <div key={step.n} className="group p-8 flex gap-8 glass-card rounded-2xl border-white/5">
                  <span className="font-mono text-sm mt-1.5 font-black text-blue-400">{step.n}</span>
                  <div className="flex-1">
                    <h3 className="text-[14px] font-black uppercase tracking-[0.2em] mb-3 text-white group-hover:text-blue-400 transition-colors">{step.title}</h3>
                    <p className="text-[12px] text-white/30 leading-relaxed font-medium group-hover:text-white/60 transition-colors">{step.d}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 ml-auto self-center text-white/10 group-hover:text-blue-400 transition-all -translate-x-4 group-hover:translate-x-0" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONTACTO (FINAL IMPACT) ─── */}
      <section id="contacto" className="py-40 lg:py-60 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,163,255,0.1)_0%,transparent_70%)]" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center relative z-10">
          <SectionLabel number="04" name="PROYECTOS" />
          
          <div className="max-w-4xl mx-auto">
            <h2 className="text-[3.5rem] lg:text-[8rem] font-black uppercase leading-[0.85] tracking-tighter mb-12">
              Optimicemos tu<br />
              <span className="italic text-glow" style={{ color: 'var(--blue-neon)' }}>Operación</span>
            </h2>
            <p className="text-sm lg:text-xl leading-relaxed mb-16 text-white/40 font-medium">
              ¿Buscas un sistema ERP a medida o necesitas automatizar procesos industriales? Estamos listos para el reto técnico más exigente.
            </p>
            
            <a 
              href="mailto:mpeg.logistica@gmail.com"
              className="inline-flex items-center gap-8 px-16 py-7 font-black uppercase tracking-[0.3em] text-[11px] bg-blue-600 text-white shadow-[0_0_50px_rgba(0,163,255,0.3)] transition-all duration-500 hover:scale-105 hover:bg-blue-500"
            >
              <MessageSquare className="w-6 h-6" />
              Agendar Consultoría Técnica
            </a>
          </div>
        </div>
      </section>

      <Footer currentLocale={locale} />
    </main>
  )
}
