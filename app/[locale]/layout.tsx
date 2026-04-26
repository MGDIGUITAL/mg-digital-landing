import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getLocale } from 'next-intl/server'
import { Inter } from 'next/font/google'
import '../globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

// Meta tags base para SEO — next-intl agrega hreflang automáticamente
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

/**
 * Root layout del segmento [locale].
 * Provee el cliente de i18n a todo el árbol de componentes.
 */
export default async function LocaleLayout({ children }: LocaleLayoutProps) {
  const locale = await getLocale()
  const messages = await getMessages()

  return (
    <html lang={locale} className={inter.variable}>
      <body className="antialiased bg-slate-950 text-white">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
