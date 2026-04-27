import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MG DIGITAL',
}

// Layout mínimo requerido por Next.js App Router en la raíz.
// El layout real con i18n está en app/[locale]/layout.tsx.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children
}
