import { createClient } from '@supabase/supabase-js'

// Tipos para la tabla cotizaciones
export type TipoServicio =
  | 'importacion_exportacion'
  | 'asesoria_aduanera'
  | 'logistica_internacional'
  | 'consultoria_digital'
  | 'gestion_documentos'
  | 'soporte_24_7'

export type IdiomaOrigen = 'es' | 'en' | 'ru' | 'pt' | 'fr' | 'it' | 'zh'
export type EstadoCotizacion = 'pendiente' | 'en_proceso' | 'completado' | 'cancelado'

export interface Cotizacion {
  id?: string
  nombre: string
  email: string
  telefono: string
  tipo_servicio: TipoServicio
  descripcion: string
  idioma_origen: IdiomaOrigen
  estado?: EstadoCotizacion
  ip_origen?: string
  created_at?: string
  updated_at?: string
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Cliente Supabase — solo usa la anon key pública
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
