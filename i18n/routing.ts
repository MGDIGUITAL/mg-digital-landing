import { defineRouting } from 'next-intl/routing'

// Definición central de rutas i18n: locales soportados y locale por defecto
export const routing = defineRouting({
  locales: ['es', 'en', 'ru', 'pt', 'fr', 'it', 'zh'],
  defaultLocale: 'es',
})
