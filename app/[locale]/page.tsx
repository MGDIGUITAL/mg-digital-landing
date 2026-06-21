import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import ERPModulesSection from '@/components/ERPModulesSection'
import PortfolioSection from '@/components/PortfolioSection'
import Footer from '@/components/Footer'
import AIAssistant from '@/components/AIAssistant'

export default function Home({ params: { locale } }: { params: { locale: string } }) {
  return (
    <main className="min-h-screen bg-[var(--color-background)] flex flex-col items-center">
      <Navbar />
      
      {/* ── HERO & 3D VIDEO ── */}
      <HeroSection />

      {/* ── NUESTROS SERVICIOS ── */}
      <ServicesSection />

      {/* ── SISTEMA ERP ── */}
      <ERPModulesSection />

      {/* ── NUESTROS TRABAJOS ── */}
      <PortfolioSection />

      {/* ── FOOTER ── */}
      <div className="w-full mt-20">
        <Footer />
      </div>

      <AIAssistant />
    </main>
  )
}
