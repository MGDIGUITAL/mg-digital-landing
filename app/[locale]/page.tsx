import { getTranslations } from 'next-intl/server'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import Footer from '@/components/Footer'
import { MessageSquare } from 'lucide-react'

/* ------------------------------------------------------------------ */
/* Utility: section wrapper with consistent styling                    */
/* ------------------------------------------------------------------ */

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

/* ------------------------------------------------------------------ */

export default async function HomePage({ 
  params 
}: { 
  params: Promise<{ locale: string }> 
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'form' })

  return (
    <main style={{ background: 'var(--black)', color: '#fff' }}>
      <Navbar />

      {/* ─── HERO ─── */}
      <HeroSection />

      {/* ─── SERVICIOS ─── */}
      <ServicesSection />

      {/* ─── NOSOTROS ─── */}
      <section id="nosotros" className="py-24 lg:py-32" style={{ background: 'var(--surface)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionLabel number="02" name="NOSOTROS" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div>
              <h2
                className="font-black uppercase leading-none tracking-tight mb-8"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: '#fff' }}
              >
                Quiénes<br />
                <span style={{ color: 'var(--lime)' }}>Somos</span>
              </h2>
              <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>
                Somos una empresa chilena especializada en logística internacional y comercio exterior, fundada con la misión de conectar empresas latinoamericanas con el mundo.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                Nuestro CEO, Matías Espinoza Guerrero, lidera un equipo de expertos con más de 12 años de experiencia en operaciones de importación, exportación y asesoría aduanera.
              </p>
            </div>

            <div className="space-y-0">
              {[
                { n: '01', title: 'MISIÓN', text: 'Facilitar el comercio internacional con soluciones logísticas integrales y tecnología de punta.' },
                { n: '02', title: 'VISIÓN', text: 'Ser el puente logístico más confiable entre América Latina y los principales mercados globales.' },
                { n: '03', title: 'VALORES', text: 'Transparencia, excelencia operacional, innovación constante y compromiso absoluto.' },
              ].map((item) => (
                <div
                  key={item.n}
                  className="flex gap-6 py-8"
                  style={{ borderTop: '1px solid var(--border)' }}
                >
                  <span className="text-xs font-mono w-8 flex-shrink-0 mt-1" style={{ color: 'var(--lime)' }}>
                    {item.n}
                  </span>
                  <div>
                    <h3 className="text-sm font-black uppercase tracking-wider mb-2 text-white">{item.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-2 lg:grid-cols-4 mt-20"
            style={{ borderTop: '1px solid var(--border)' }}
          >
            {[
              { v: '500+', l: 'CLIENTES' },
              { v: '45+',  l: 'PAÍSES' },
              { v: '7',    l: 'IDIOMAS' },
              { v: '24/7', l: 'SOPORTE' },
            ].map((s, i, arr) => (
              <div
                key={s.l}
                className="py-10 px-6 text-center"
                style={{ borderRight: i < arr.length - 1 ? '1px solid var(--border)' : 'none' }}
              >
                <div className="text-4xl font-black" style={{ color: 'var(--lime)' }}>{s.v}</div>
                <div className="text-xs font-mono tracking-widest mt-2" style={{ color: 'var(--text-muted)' }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COBERTURA ─── */}
      <section id="cobertura" className="py-24 lg:py-32" style={{ background: 'var(--black)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionLabel number="03" name="COBERTURA" />

          <div className="flex flex-col lg:flex-row lg:items-end gap-8 mb-16">
            <h2
              className="font-black uppercase leading-none tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: '#fff' }}
            >
              Presencia en<br />
              <span style={{ color: 'var(--lime)' }}>45+ Países</span>
            </h2>
            <p className="max-w-sm text-sm leading-relaxed lg:ml-auto" style={{ color: 'var(--text-muted)' }}>
              Red estratégica de socios en los principales puertos y aeropuertos del mundo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {[
              { n: '01', region: 'AMÉRICAS', countries: 'Chile · Argentina · Brasil · Colombia · México · Perú' },
              { n: '02', region: 'NORTEAMÉRICA', countries: 'EE.UU. · Canadá · México' },
              { n: '03', region: 'EUROPA', countries: 'Alemania · Francia · España · Italia · Países Bajos' },
              { n: '04', region: 'ASIA-PACÍFICO', countries: 'China · Japón · Corea · Singapur · Australia' },
              { n: '05', region: 'MEDIO ORIENTE', countries: 'Emiratos · Arabia Saudita · Qatar · Israel' },
              { n: '06', region: 'ÁFRICA', countries: 'Sudáfrica · Marruecos · Nigeria · Kenia' },
            ].map((item) => (
              <div
                key={item.n}
                className="group p-8 transition-all duration-200 cursor-default"
                style={{ border: '1px solid var(--border)', margin: '-1px 0 0 -1px' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--surface)' }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent' }}
              >
                <span className="text-xs font-mono mb-4 block" style={{ color: 'var(--lime)' }}>{item.n}</span>
                <h3 className="font-black text-sm uppercase tracking-wider text-white mb-3 group-hover:text-white">{item.region}</h3>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>{item.countries}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COTIZACIONES ─── */}
      <section id="cotizaciones" className="py-24 lg:py-32" style={{ background: 'var(--surface)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionLabel number="04" name="COTIZAR" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2
                className="font-black uppercase leading-none tracking-tight mb-6"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: '#fff' }}
              >
                {t('title')}
              </h2>
              <p className="text-sm leading-relaxed mb-10" style={{ color: 'var(--text-muted)' }}>
                {t('subtitle')}
              </p>
            </div>

            <div
              className="p-8"
              style={{ border: '1px solid var(--border)', background: 'var(--black)' }}
            >
              <div className="flex items-center gap-3 mb-8">
                <MessageSquare className="w-4 h-4" style={{ color: 'var(--lime)' }} />
                <span className="text-xs font-mono uppercase tracking-widest" style={{ color: 'var(--lime)' }}>
                  FORMULARIO EN MANTENIMIENTO
                </span>
              </div>
              <p className="text-xs text-slate-500">Estamos re-activando la base de datos de cotizaciones. Por favor vuelve en 5 minutos.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer currentLocale={locale} />
    </main>
  )
}
