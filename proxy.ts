import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'

// Proxy de next-intl: detecta el idioma del navegador,
// redirige al locale correcto y maneja el cambio manual de idioma.
export default createMiddleware(routing)

export const config = {
  // Aplica el proxy a todas las rutas excepto las estáticas y de API
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
}
