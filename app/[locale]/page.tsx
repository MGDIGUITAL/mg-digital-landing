import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import ERPModulesSection from '@/components/ERPModulesSection'
import PortfolioSection from '@/components/PortfolioSection'
import Footer from '@/components/Footer'

export default function Home({ params: { locale } }: { params: { locale: string } }) {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* ── HERO ── */}
      <HeroSection />

      {/* ── SERVICES (6 Columns) ── */}
      <ServicesSection />

      {/* ── ERP MODULES (8 Modules) ── */}
      <ERPModulesSection />

      {/* ── PORTFOLIO (4 Cards) ── */}
      <PortfolioSection />

      {/* ── FOOTER (Dark) ── */}
      <div className="mt-40">
        <Footer />
      </div>
    </main>
  )
}
