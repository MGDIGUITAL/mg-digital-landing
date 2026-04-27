import { getTranslations } from 'next-intl/server'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import Footer from '@/components/Footer'

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

      {/* ─── NOSOTROS ─── */}
      <section id="nosotros" className="py-24 lg:py-32" style={{ background: 'var(--surface)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-3 mb-12">
            <span className="text-xs font-mono tracking-[0.3em] uppercase" style={{ color: 'var(--lime)' }}>
              02 / NOSOTROS
            </span>
            <div className="flex-1 h-px" style={{ background: 'var(--border)' }} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div>
              <h2 className="font-black uppercase leading-none tracking-tight mb-8" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: '#fff' }}>
                Quiénes<br />
                <span style={{ color: 'var(--lime)' }}>Somos</span>
              </h2>
              <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>
                Somos una empresa chilena especializada en logística internacional y comercio exterior.
              </p>
            </div>
            <div className="space-y-8">
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                Nuestro equipo cuenta con más de 12 años de experiencia liderado por Matías Espinoza Guerrero.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer currentLocale={locale} />
    </main>
  )
}
