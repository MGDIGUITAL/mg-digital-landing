import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import ERPModulesSection from '@/components/ERPModulesSection'
import PortfolioSection from '@/components/PortfolioSection'
import Footer from '@/components/Footer'
import AIAssistant from '@/components/AIAssistant'

export default function Home({ params: { locale } }: { params: { locale: string } }) {
  return (
    <main className="min-h-screen flex flex-col" style={{ background: "var(--color-bg)" }}>

      {/* ── HERO (includes integrated navbar) ── */}
      <HeroSection />

      {/* ── NUESTROS SERVICIOS ── */}
      <ServicesSection />

      {/* ── SISTEMA ERP ── */}
      <ERPModulesSection />

      {/* ── NUESTROS TRABAJOS ── */}
      <PortfolioSection />

      {/* ── FOOTER ── */}
      <Footer />

      <AIAssistant />
    </main>
  )
}
