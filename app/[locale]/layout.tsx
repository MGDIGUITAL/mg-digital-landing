import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { Inter } from 'next/font/google'
import '../globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'MG DIGITAL — Logística Internacional | Asesoría Aduanera',
  description:
    'Soluciones integrales de logística internacional, asesoría aduanera y consultoría digital. Conectamos Chile con el mundo.',
  keywords: 'logística, importación, exportación, aduanas, chile, internacional',
  authors: [{ name: 'Matías Espinoza Guerrero', url: 'https://www.instagram.com/mpeg.logistica/' }],
  openGraph: {
    title: 'MG DIGITAL — Logística Internacional',
    description: 'Soluciones integrales de logística internacional para empresas globales.',
    type: 'website',
    locale: 'es_CL',
  },
}

interface LocaleLayoutProps {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export default async function LocaleLayout({ 
  children, 
  params 
}: LocaleLayoutProps) {
  // En Next.js 15, params es una Promise
  const { locale } = await params;
  
  // Obtenemos los mensajes para el proveedor de cliente
  const messages = await getMessages();

  return (
    <html lang={locale} className={inter.variable}>
      <body className={`${inter.className} antialiased bg-slate-950 text-white`}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
