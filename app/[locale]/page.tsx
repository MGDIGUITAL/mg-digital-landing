import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import ERPModulesSection from '@/components/ERPModulesSection'
import PortfolioSection from '@/components/PortfolioSection'
import Footer from '@/components/Footer'
import Chatbot from '@/components/Chatbot'

export default function Home({ params: { locale } }: { params: { locale: string } }) {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center">
      <Navbar />
      
      {/* ── HERO & 3D VIDEO ── */}
      <HeroSection />

      {/* ── NUESTROS SERVICIOS ── */}
      <div className="w-full bg-white">
        <ServicesSection />
      </div>

      {/* ── SISTEMA ERP ── */}
      <div className="w-full bg-slate-50">
        <ERPModulesSection />
      </div>

      {/* ── NUESTROS TRABAJOS ── */}
      <div className="w-full bg-white">
        <PortfolioSection />
      </div>

      {/* ── FOOTER ── */}
      <div className="w-full mt-20">
        <Footer />
      </div>

      <Chatbot />
    </main>
  )
}
