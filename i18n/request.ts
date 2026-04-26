import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing'

// Configuración del servidor next-intl: carga los mensajes JSON según el locale activo
export default getRequestConfig(async ({ requestLocale }) => {
  // Obtiene el locale de la request; usa el default si no es válido
  let locale = await requestLocale

  if (!locale || !routing.locales.includes(locale as 'es' | 'en' | 'ru' | 'pt' | 'fr' | 'it' | 'zh')) {
    locale = routing.defaultLocale
  }

  return {
    locale,
    // Importa dinámicamente el archivo de mensajes según el locale
    messages: (await import(`../messages/${locale}.json`)).default,
  }
})
