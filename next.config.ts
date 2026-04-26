import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

// Configuración del plugin next-intl con ruta al archivo de request
const withNextIntl = createNextIntlPlugin('./i18n/request.ts')

const nextConfig: NextConfig = {
  // Optimizaciones de imágenes para producción
  images: {
    formats: ['image/avif', 'image/webp'],
  },
}

export default withNextIntl(nextConfig)
