import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import PortfolioSection from '@/components/PortfolioSection'
import Footer from '@/components/Footer'
import Chatbot from '@/components/Chatbot'

export default function Home({ params: { locale } }: { params: { locale: string } }) {
  return (
    <main className="min-h-screen bg-[#050510] text-white flex flex-col items-center">
      <Navbar />
      
      {/* ── HERO & 3D VIDEO ── */}
      <HeroSection />

      {/* ── PILARES DE LA FIRMA ── */}
      <ServicesSection />

      {/* ── ENGINEERING VISUAL ── */}
      <PortfolioSection />

      {/* ── FOOTER ── */}
      <div className="w-full mt-20 border-t border-white/10 bg-[#050510]">
        <Footer />
      </div>

      <Chatbot />
    </main>
  )
}
