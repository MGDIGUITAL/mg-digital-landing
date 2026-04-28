"use client";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function Contacto() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center">
      <Navbar />
      
      <section className="py-24 w-full flex-grow">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-600 text-xs font-bold tracking-[0.2em] uppercase mb-4 shadow-sm">
              Soporte y Negocios
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4 uppercase">
              Hablemos de tu <span className="text-cyan-500">Proyecto</span>
            </h1>
            <p className="text-slate-500 font-medium max-w-2xl mx-auto text-lg">
              Estamos listos para transformar tu operación. Contáctanos por cualquiera de estos canales o déjanos un mensaje.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-16">
            {/* Email Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-8 rounded-[2rem] flex flex-col items-center text-center border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:border-cyan-100 transition-all group"
            >
              <div className="w-16 h-16 rounded-2xl bg-cyan-50 flex items-center justify-center text-cyan-500 mb-6 group-hover:scale-110 transition-transform">
                <Mail className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-slate-900 text-xl mb-2">Email Comercial</h3>
              <p className="text-slate-500 mb-6 flex-grow">Escríbenos para cualquier consulta técnica, requerimientos de ERP o información sobre portafolio.</p>
              <a href="mailto:hola@mgdigital.cl" className="text-cyan-500 font-bold hover:text-cyan-600 underline underline-offset-4">hola@mgdigital.cl</a>
            </motion.div>

            {/* Phone Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-[2rem] flex flex-col items-center text-center border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:border-cyan-100 transition-all group"
            >
              <div className="w-16 h-16 rounded-2xl bg-cyan-50 flex items-center justify-center text-cyan-500 mb-6 group-hover:scale-110 transition-transform">
                <Phone className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-slate-900 text-xl mb-2">Línea Directa</h3>
              <p className="text-slate-500 mb-6 flex-grow">Atención inmediata y personalizada para soporte de emergencias y cotizaciones exprés.</p>
              <a href="https://wa.me/56929645522" className="text-cyan-500 font-bold hover:text-cyan-600 underline underline-offset-4">+56 9 2964 5522</a>
            </motion.div>

            {/* Office Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-8 rounded-[2rem] flex flex-col items-center text-center border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:border-cyan-100 transition-all group"
            >
              <div className="w-16 h-16 rounded-2xl bg-cyan-50 flex items-center justify-center text-cyan-500 mb-6 group-hover:scale-110 transition-transform">
                <MapPin className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-slate-900 text-xl mb-2">Oficina Central</h3>
              <p className="text-slate-500 mb-6 flex-grow">Visítanos para una asesoría presencial con el equipo de ingenieros de software.</p>
              <span className="text-cyan-500 font-bold">Santiago, Chile</span>
            </motion.div>
          </div>

          {/* CTA Directo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full max-w-4xl bg-slate-900 rounded-[2.5rem] shadow-2xl p-10 md:p-14 text-center flex flex-col items-center relative overflow-hidden"
          >
            {/* Elementos decorativos */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/3" />
            
            <div className="relative z-10 flex flex-col items-center">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">¿Prefieres un contacto rápido?</h2>
              <p className="text-slate-300 mb-10 max-w-2xl mx-auto text-lg">
                Inicia una conversación directamente con nuestro equipo técnico vía WhatsApp y recibe una propuesta inicial hoy mismo.
              </p>
              <a 
                href="https://wa.me/56929645522" 
                className="inline-flex items-center justify-center gap-3 bg-cyan-500 text-white px-10 py-5 rounded-2xl font-bold hover:bg-cyan-400 shadow-lg shadow-cyan-500/30 transition-all hover:-translate-y-1 hover:shadow-cyan-500/50 text-lg"
              >
                Abrir WhatsApp ahora
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

        </div>
      </section>

      <div className="w-full mt-auto">
        <Footer />
      </div>
    </main>
  );
}
