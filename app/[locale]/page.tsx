import { getTranslations } from 'next-intl/server'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'

export default async function HomePage({ 
  params 
}: { 
  params: Promise<{ locale: string }> 
}) {
  const { locale } = await params
  
  return (
    <main style={{ background: 'var(--black)', color: '#fff' }}>
      <Navbar />
      <HeroSection />
      
      <div className="py-20 text-center">
        <p className="text-lime-500 font-mono text-xs">DIAGNOSTIC: Navbar & Hero loaded. If you see this, the error is in the next components.</p>
      </div>
    </main>
  )
}
