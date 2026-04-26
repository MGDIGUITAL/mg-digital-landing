'use client'

import { useState } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { insertarCotizacion } from '@/app/actions/cotizaciones'
import type { TipoServicio, IdiomaOrigen } from '@/lib/supabase'
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

type ServiceKey =
  | 'importacion_exportacion'
  | 'asesoria_aduanera'
  | 'logistica_internacional'
  | 'consultoria_digital'
  | 'gestion_documentos'
  | 'soporte_24_7'

const SERVICE_OPTIONS: { value: ServiceKey; labelKey: string }[] = [
  { value: 'importacion_exportacion', labelKey: 'import_export' },
  { value: 'asesoria_aduanera',       labelKey: 'customs' },
  { value: 'logistica_internacional', labelKey: 'logistics' },
  { value: 'consultoria_digital',     labelKey: 'digital' },
  { value: 'gestion_documentos',      labelKey: 'documents' },
  { value: 'soporte_24_7',            labelKey: 'support' },
]

export default function QuoteForm() {
  const t  = useTranslations('form')
  const ts = useTranslations('services.items')
  const locale = useLocale()

  const [serverError, setServerError] = useState('')
  const [isSuccess, setIsSuccess]     = useState(false)

  // Schema Zod con mensajes de validación internacionalizados
  const schema = z.object({
    nombre:       z.string().min(2,  t('validation.name_min')).nonempty(t('validation.name_required')),
    email:        z.string().email(t('validation.email_invalid')).nonempty(t('validation.email_required')),
    telefono:     z.string().min(7,  t('validation.phone_min')).nonempty(t('validation.phone_required')),
    tipo_servicio: z.enum(
      ['importacion_exportacion','asesoria_aduanera','logistica_internacional','consultoria_digital','gestion_documentos','soporte_24_7'],
      { errorMap: () => ({ message: t('validation.service_required') }) }
    ),
    descripcion:  z.string().min(20, t('validation.description_min')).nonempty(t('validation.description_required')),
  })

  type FormValues = z.infer<typeof schema>

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) })

  async function onSubmit(data: FormValues) {
    setServerError('')
    const result = await insertarCotizacion({
      ...data,
      tipo_servicio:  data.tipo_servicio as TipoServicio,
      idioma_origen:  locale as IdiomaOrigen,
    })

    if (result.success) {
      setIsSuccess(true)
      reset()
    } else {
      setServerError(result.error)
    }
  }

  // Vista de éxito
  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center p-10 text-center">
        <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-6 animate-bounce">
          <CheckCircle className="w-10 h-10 text-emerald-400" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">{t('success_title')}</h3>
        <p className="text-slate-400 mb-8 max-w-sm leading-relaxed">{t('success_message')}</p>
        <button
          onClick={() => setIsSuccess(false)}
          className="px-6 py-3 bg-slate-800 text-white rounded-xl hover:bg-slate-700 transition-colors border border-slate-700"
        >
          {t('new_request')}
        </button>
      </div>
    )
  }

  const inputClass = (hasError: boolean) =>
    `w-full px-4 py-3.5 rounded-xl bg-slate-800/60 border ${
      hasError ? 'border-rose-500/50 focus:border-rose-500' : 'border-slate-700/50 focus:border-blue-500'
    } text-white placeholder-slate-500 focus:outline-none focus:ring-2 ${
      hasError ? 'focus:ring-rose-500/20' : 'focus:ring-blue-500/20'
    } transition-all duration-200`

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {/* Nombre */}
      <div>
        <label htmlFor="nombre" className="block text-sm font-medium text-slate-300 mb-1.5">
          {t('name')} <span className="text-rose-400">*</span>
        </label>
        <input
          id="nombre"
          type="text"
          placeholder="Matías García"
          {...register('nombre')}
          className={inputClass(!!errors.nombre)}
        />
        {errors.nombre && (
          <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" />{errors.nombre.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1.5">
          {t('email')} <span className="text-rose-400">*</span>
        </label>
        <input
          id="email"
          type="email"
          placeholder="contacto@empresa.com"
          {...register('email')}
          className={inputClass(!!errors.email)}
        />
        {errors.email && (
          <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" />{errors.email.message}
          </p>
        )}
      </div>

      {/* Teléfono */}
      <div>
        <label htmlFor="telefono" className="block text-sm font-medium text-slate-300 mb-1.5">
          {t('phone')} <span className="text-rose-400">*</span>
        </label>
        <input
          id="telefono"
          type="tel"
          placeholder="+56 9 2964 5522"
          {...register('telefono')}
          className={inputClass(!!errors.telefono)}
        />
        {errors.telefono && (
          <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" />{errors.telefono.message}
          </p>
        )}
      </div>

      {/* Tipo de servicio */}
      <div>
        <label htmlFor="tipo_servicio" className="block text-sm font-medium text-slate-300 mb-1.5">
          {t('service_type')} <span className="text-rose-400">*</span>
        </label>
        <select
          id="tipo_servicio"
          {...register('tipo_servicio')}
          className={`${inputClass(!!errors.tipo_servicio)} appearance-none cursor-pointer`}
        >
          <option value="">{t('select_service')}</option>
          {SERVICE_OPTIONS.map(({ value, labelKey }) => (
            <option key={value} value={value}>
              {ts(`${labelKey}.name`)}
            </option>
          ))}
        </select>
        {errors.tipo_servicio && (
          <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" />{errors.tipo_servicio.message}
          </p>
        )}
      </div>

      {/* Descripción */}
      <div>
        <label htmlFor="descripcion" className="block text-sm font-medium text-slate-300 mb-1.5">
          {t('description')} <span className="text-rose-400">*</span>
        </label>
        <textarea
          id="descripcion"
          rows={5}
          placeholder={t('description_placeholder')}
          {...register('descripcion')}
          className={`${inputClass(!!errors.descripcion)} resize-none`}
        />
        {errors.descripcion && (
          <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" />{errors.descripcion.message}
          </p>
        )}
      </div>

      {/* Error del servidor */}
      {serverError && (
        <div className="flex items-start gap-3 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-sm">
          <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
          <span>{serverError || t('error_message')}</span>
        </div>
      )}

      {/* Botón submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-500 hover:to-cyan-500 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 shadow-xl hover:shadow-blue-500/30"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            {t('submitting')}
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            {t('submit')}
          </>
        )}
      </button>
    </form>
  )
}
