import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Matcher para todas las rutas excepto las internas de Next.js y archivos estáticos
  matcher: ['/', '/(es|en|ru|pt|fr|it|zh)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)']
};
