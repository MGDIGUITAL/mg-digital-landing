import { getTranslations, getLocale } from 'next-intl/server'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import QuoteForm from '@/components/QuoteForm'
import Footer from '@/components/Footer'
import { MessageSquare } from 'lucide-react'

// Metadata dinámica con soporte i18n
export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('hero')
  return {
    title: `MG DIGITAL — ${t('headline')}`,
    description: t('subheadline'),
  }
}

/**
 * Página principal de la landing de MG DIGITAL.
 * Server Component — no usa 'use client'.
 */
export default async function HomePage() {
  const t      = await getTranslations('form')
  const locale = await getLocale()

  return (
    <main className="min-h-screen bg-slate-950">
      {/* Navbar fijo superior */}
      <Navbar />

      {/* Hero con globo 3D y estadísticas */}
      <HeroSection />

      {/* Grid de 6 servicios */}
      <ServicesSection />

      {/* Sección de cotización */}
      <section id="cotizaciones" className="py-24 lg:py-32 relative overflow-hidden">
        {/* Fondo degradado */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-blue-950/10 to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(59,130,246,0.08),_transparent_60%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Columna izquierda: Copy */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
                {t('badge')}
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
                {t('title')}
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                {t('subtitle')}
              </p>

              {/* Beneficios */}
              <div className="space-y-4">
                {[
                  { icon: '⚡', text: 'Respuesta en menos de 24 horas' },
                  { icon: '🌍', text: 'Cobertura en más de 45 países' },
                  { icon: '🔒', text: 'Información 100% confidencial' },
                  { icon: '💼', text: 'Asesoría personalizada sin costo' },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-slate-300 text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Columna derecha: Formulario */}
            <div className="relative">
              {/* Resplandor detrás del card */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-3xl blur-xl" />

              <div className="relative p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800/50 backdrop-blur-sm shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{t('title')}</h3>
                </div>

                {/* Formulario con React Hook Form + Zod */}
                <QuoteForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer con datos de contacto y selector de idioma */}
      <Footer currentLocale={locale} />
    </main>
  )
}
