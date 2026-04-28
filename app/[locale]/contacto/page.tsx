"use client";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AIAssistant from '@/components/AIAssistant';
import { motion } from 'framer-motion';
import { ArrowRight, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { useState } from 'react';

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    fono: "",
    correo: "",
    mensaje: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === "mensaje" && value.length > 1000) return;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ nombre: "", fono: "", correo: "", mensaje: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <main className="min-h-screen bg-white flex flex-col items-center overflow-x-hidden">
      <Navbar />
      
      <section className="relative w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 pt-24 pb-16 lg:pt-32 lg:pb-24 flex-grow flex items-center">
        
        {/* Decorative Grid */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40"></div>

        <div className="flex flex-col lg:flex-row items-center justify-between w-full relative z-10 gap-12 lg:gap-0">
          
          {/* Left Column: Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 flex flex-col justify-center pr-0 lg:pr-12 xl:pr-20"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-600 text-xs font-bold tracking-[0.2em] uppercase mb-6 shadow-sm w-fit">
              Soporte y Negocios
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6 uppercase">
              Hablemos de tu <span className="text-cyan-500">Proyecto</span>
            </h1>
            
            <p className="text-slate-500 text-lg md:text-xl font-medium mb-10 leading-relaxed max-w-xl">
              Estamos listos para transformar tu operación. Completa el formulario y nos contactaremos contigo a la brevedad.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full max-w-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-700">Nombre</label>
                  <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all text-slate-700" placeholder="Ej. Juan Pérez" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-700">Teléfono</label>
                  <input type="tel" name="fono" value={formData.fono} onChange={handleChange} required className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all text-slate-700" placeholder="Ej. +56 9 1234 5678" />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-700">Correo Electrónico</label>
                <input type="email" name="correo" value={formData.correo} onChange={handleChange} required className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all text-slate-700" placeholder="tu@empresa.com" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-700">Mensaje</label>
                <textarea name="mensaje" value={formData.mensaje} onChange={handleChange} required maxLength={1000} rows={4} className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all text-slate-700 resize-none" placeholder="Explícanos qué necesitas (ej. una página web simple, un sistema ERP, etc.)"></textarea>
                <div className="flex justify-between items-center mt-1">
                  <p className="text-xs font-medium text-slate-400">Máximo 1000 caracteres</p>
                  <span className="text-xs text-slate-500 font-mono">{formData.mensaje.length}/1000</span>
                </div>
              </div>

              <button 
                type="submit" 
                disabled={status === "loading" || status === "success"}
                className="bg-cyan-500 text-white font-bold text-lg rounded-xl px-8 py-4 hover:bg-cyan-600 transition-colors shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 flex items-center justify-center gap-2 group w-full md:w-auto self-start mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "idle" && (
                  <>
                    Enviar Mensaje
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
                {status === "loading" && (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Enviando...
                  </>
                )}
                {status === "success" && (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    Mensaje Enviado
                  </>
                )}
                {status === "error" && (
                  <>
                    <AlertCircle className="w-5 h-5" />
                    Error al enviar
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Right Column: Video */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, type: "spring", delay: 0.2 }}
            className="w-full lg:w-1/2 flex justify-center items-center relative mt-12 lg:mt-0"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-cyan-100/40 to-blue-50/40 rounded-full blur-3xl -z-10"></div>
            
            <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px]">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-contain filter drop-shadow-2xl"
              >
                <source src="/cubo.mp4" type="video/mp4" />
              </video>
            </div>
          </motion.div>

        </div>
      </section>

      <div className="w-full mt-auto">
        <Footer />
      </div>

      <AIAssistant />
    </main>
  );
}
