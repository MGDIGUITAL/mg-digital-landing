'use server'

import { supabase, type Cotizacion, type TipoServicio, type IdiomaOrigen } from '@/lib/supabase'
import { z } from 'zod'

// Esquema de validación server-side con Zod
const cotizacionSchema = z.object({
  nombre: z.string().min(2, 'Nombre muy corto'),
  email: z.string().email('Email inválido'),
  telefono: z.string().min(7, 'Teléfono muy corto'),
  tipo_servicio: z.enum([
    'importacion_exportacion',
    'asesoria_aduanera',
    'logistica_internacional',
    'consultoria_digital',
    'gestion_documentos',
    'soporte_24_7',
  ]),
  descripcion: z.string().min(20, 'Descripción debe tener mínimo 20 caracteres'),
  idioma_origen: z.enum(['es', 'en', 'ru', 'pt', 'fr', 'it', 'zh']),
})

export type InsertarCotizacionInput = {
  nombre: string
  email: string
  telefono: string
  tipo_servicio: TipoServicio
  descripcion: string
  idioma_origen: IdiomaOrigen
}

export type ActionResult =
  | { success: true; id: string }
  | { success: false; error: string }

/**
 * Server Action: Inserta una nueva cotización en Supabase.
 * Realiza validación server-side antes del INSERT para seguridad adicional.
 */
export async function insertarCotizacion(input: InsertarCotizacionInput): Promise<ActionResult> {
  try {
    // Validación server-side (segunda línea de defensa tras la validación client-side)
    const parsed = cotizacionSchema.safeParse(input)
    if (!parsed.success) {
      const firstError = parsed.error.errors[0]?.message ?? 'Datos inválidos'
      return { success: false, error: firstError }
    }

    const cotizacion: Cotizacion = {
      ...parsed.data,
    }

    // INSERT en Supabase — la política RLS permite inserts anon
    const { data, error } = await supabase
      .from('cotizaciones')
      .insert(cotizacion)
      .select('id')
      .single()

    if (error) {
      console.error('[insertarCotizacion] Supabase error:', error.message)
      return { success: false, error: 'Error al guardar la cotización. Intenta nuevamente.' }
    }

    return { success: true, id: data.id }
  } catch (err) {
    console.error('[insertarCotizacion] Unexpected error:', err)
    return { success: false, error: 'Error inesperado. Intenta nuevamente.' }
  }
}
