import { redirect } from 'next/navigation'

// Redirige la ruta raíz "/" al locale por defecto "/es"
export default function RootPage() {
  redirect('/es')
}
