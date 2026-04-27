import { getTranslations, getLocale } from 'next-intl/server'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import QuoteForm from '@/components/QuoteForm'
import Footer from '@/components/Footer'
import { MessageSquare, Globe2, Users, MapPin, Phone, Package } from 'lucide-react'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('hero')
  return {
    title: `MG DIGITAL — ${t('headline')}`,
    description: t('subheadline'),
    keywords: 'logística internacional, importación exportación, aduana, Chile, MG Digital',
  }
}

export default async function HomePage() {
  const t      = await getTranslations('form')
  const locale = await getLocale()

  return (
    <main className="min-h-screen bg-slate-950">
      {/* Navbar fijo con menú completo */}
      <Navbar />

      {/* ─── HERO ─── */}
      <section id="inicio">
        <HeroSection />
      </section>

      {/* ─── SERVICIOS ─── */}
      <section id="servicios">
        <ServicesSection />
      </section>

      {/* ─── NOSOTROS ─── */}
      <section id="nosotros" className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.06),_transparent_70%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
              <Users className="w-4 h-4" /> Quiénes Somos
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-4">
              Sobre <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">MG DIGITAL</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Somos una empresa chilena especializada en logística internacional y comercio exterior, fundada con la misión de conectar empresas latinoamericanas con el mundo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🎯',
                title: 'Nuestra Misión',
                text: 'Facilitar el comercio internacional de empresas chilenas y latinoamericanas, ofreciendo soluciones logísticas integrales con tecnología de punta.',
              },
              {
                icon: '🔭',
                title: 'Nuestra Visión',
                text: 'Ser el puente logístico más confiable entre América Latina y los principales mercados globales para el año 2030.',
              },
              {
                icon: '💎',
                title: 'Nuestros Valores',
                text: 'Transparencia, excelencia operacional, innovación constante y compromiso absoluto con la satisfacción de nuestros clientes.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800/50 hover:border-blue-500/30 transition-all duration-300 group hover:bg-slate-900/80"
              >
                <span className="text-5xl mb-5 block">{item.icon}</span>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Stats fila */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { value: '500+', label: 'Clientes Activos' },
              { value: '45+', label: 'Países Cubiertos' },
              { value: '7', label: 'Idiomas de Soporte' },
              { value: '24/7', label: 'Disponibilidad' },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-6 rounded-2xl bg-slate-900/40 border border-slate-800/30">
                <div className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COBERTURA ─── */}
      <section id="cobertura" className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-blue-950/10 to-slate-950" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium">
              <Globe2 className="w-4 h-4" /> Cobertura Global
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-4">
              Presencia en <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">45+ Países</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Contamos con una red de socios logísticos estratégicos en los principales puertos y aeropuertos del mundo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { region: '🌎 América del Norte', countries: 'Estados Unidos, Canadá, México' },
              { region: '🌎 América del Sur', countries: 'Chile, Argentina, Brasil, Colombia, Perú, Uruguay' },
              { region: '🌍 Europa', countries: 'Alemania, Francia, España, Italia, Reino Unido, Países Bajos' },
              { region: '🌏 Asia-Pacífico', countries: 'China, Japón, Corea del Sur, Singapur, Australia' },
              { region: '🌍 Medio Oriente', countries: 'Emiratos Árabes, Arabia Saudita, Qatar, Israel' },
              { region: '🌍 África', countries: 'Sudáfrica, Marruecos, Nigeria, Kenia' },
            ].map((item) => (
              <div
                key={item.region}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/50 hover:border-cyan-500/30 transition-all duration-300 group"
              >
                <div className="text-2xl mb-3">{item.region.split(' ')[0]}</div>
                <h3 className="text-white font-bold mb-2 group-hover:text-cyan-300 transition-colors">
                  {item.region.split(' ').slice(1).join(' ')}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.countries}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COTIZACIONES ─── */}
      <section id="cotizaciones" className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-blue-950/10 to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(59,130,246,0.08),_transparent_60%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
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

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-3xl blur-xl" />
              <div className="relative p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800/50 backdrop-blur-sm shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{t('title')}</h3>
                </div>
                <QuoteForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SEGUIMIENTO ─── */}
      <section id="seguimiento" className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/30 to-slate-950" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium">
            <Package className="w-4 h-4" /> Rastreo en Tiempo Real
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Seguimiento de <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Tu Envío</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed mb-12">
            Ingresa tu número de tracking para conocer el estado actual de tu carga en tiempo real.
          </p>

          {/* Buscador de tracking */}
          <div className="max-w-xl mx-auto">
            <div className="relative flex items-center gap-3 p-2 rounded-2xl bg-slate-900/80 border border-slate-700/50 focus-within:border-emerald-500/50 transition-all duration-300 shadow-2xl">
              <input
                type="text"
                placeholder="Ingresa tu número de tracking..."
                className="flex-1 bg-transparent px-4 py-3 text-white placeholder-slate-500 outline-none text-sm"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white text-sm font-bold rounded-xl hover:from-emerald-500 hover:to-cyan-500 transition-all duration-200 whitespace-nowrap">
                Rastrear
              </button>
            </div>
            <p className="text-slate-500 text-xs mt-4">
              * El número de tracking lo recibirás por email al confirmar tu cotización
            </p>
          </div>

          {/* Pasos del proceso */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-20">
            {[
              { step: '01', icon: '📋', title: 'Cotización', desc: 'Solicita tu cotización online' },
              { step: '02', icon: '✅', title: 'Confirmación', desc: 'Recibe confirmación en 24h' },
              { step: '03', icon: '🚢', title: 'En Tránsito', desc: 'Tu carga en movimiento' },
              { step: '04', icon: '📦', title: 'Entregado', desc: 'Carga en destino final' },
            ].map((item, i) => (
              <div key={item.step} className="relative">
                {i < 3 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-gradient-to-r from-slate-700 to-slate-800" />
                )}
                <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-900/40 border border-slate-800/30 hover:border-emerald-500/20 transition-all duration-300">
                  <div className="text-xs font-bold text-emerald-400/60 mb-2 tracking-widest">{item.step}</div>
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h4 className="text-white font-bold mb-1">{item.title}</h4>
                  <p className="text-slate-400 text-xs">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACTO ─── */}
      <section id="contacto" className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-blue-950/5 to-slate-950" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
              <Phone className="w-4 h-4" /> Contáctanos
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-4">
              Estamos para <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Ayudarte</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Nuestro equipo de expertos está disponible 24/7 para resolver tus consultas de comercio exterior.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '📞',
                title: 'Teléfono',
                value: '+56 9 2964 5522',
                sub: 'Lun–Vie 9:00–18:00',
                href: 'tel:+56929645522',
                color: 'blue',
              },
              {
                icon: '📧',
                title: 'Email',
                value: 'mpeg.logistica@gmail.com',
                sub: 'Respuesta en 24h hábiles',
                href: 'mailto:mpeg.logistica@gmail.com',
                color: 'cyan',
              },
              {
                icon: '📸',
                title: 'Instagram',
                value: '@mpeg.logistica',
                sub: 'Síguenos para novedades',
                href: 'https://www.instagram.com/mpeg.logistica/',
                color: 'pink',
              },
            ].map((item) => (
              <a
                key={item.title}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`group p-8 rounded-2xl bg-slate-900/60 border border-slate-800/50 hover:border-${item.color}-500/30 transition-all duration-300 hover:bg-slate-900/80 text-center block`}
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className={`text-lg font-bold text-white mb-1 group-hover:text-${item.color}-300 transition-colors`}>
                  {item.title}
                </h3>
                <p className="text-slate-300 text-sm font-medium mb-1">{item.value}</p>
                <p className="text-slate-500 text-xs">{item.sub}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer currentLocale={locale} />
    </main>
  )
}
