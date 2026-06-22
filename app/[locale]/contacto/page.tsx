"use client";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AIAssistant from '@/components/AIAssistant';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Loader2, CheckCircle2, AlertCircle, 
  User, Phone, Mail, Briefcase, Edit, Send, 
  Lock, Clock, MapPin, MessageSquare 
} from 'lucide-react';
import { useState } from 'react';

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    fono: "",
    correo: "",
    empresa: "",
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
        setFormData({ nombre: "", fono: "", correo: "", empresa: "", mensaje: "" });
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
    <main className="min-h-screen bg-[#050505] flex flex-col items-center overflow-x-hidden">
      <Navbar />
      
      <section className="relative w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 pt-24 pb-16 lg:pt-32 lg:pb-24 flex-grow flex items-center">
        
        {/* Subtle Background Red Glow */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-[20%] left-[-10%] w-[40%] h-[40%] bg-red-600/10 rounded-full blur-[120px]"></div>
          <div className="absolute top-[50%] right-[-10%] w-[30%] h-[50%] bg-red-900/10 rounded-full blur-[100px]"></div>
          {/* Decorative Grid - Dark Theme */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-start justify-between w-full relative z-10 gap-16 lg:gap-8 xl:gap-16">
          
          {/* Left Column: Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-[45%] flex flex-col justify-center pr-0"
          >
            <div className="flex items-center gap-3 mb-4 mt-8 lg:mt-0">
              <div className="h-[2px] w-6 bg-red-600"></div>
              <span className="text-red-600 text-[11px] font-bold tracking-[0.2em] uppercase">
                CONTACTO
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-[4rem] font-extrabold text-white tracking-tighter leading-[1.05] mb-4 uppercase font-sans">
              HABLEMOS DE TU <br />
              <span className="text-red-600">PROYECTO</span>
            </h1>
            
            <p className="text-slate-300 text-sm md:text-base mb-10 leading-relaxed max-w-md font-normal">
              Cuéntanos tu idea y te ayudaremos a transformarla en una solución digital a medida.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-slate-300">Nombre</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                      <User className="w-4 h-4 text-slate-400" />
                    </div>
                    <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required className="w-full bg-[#0a0a0a]/80 border border-white/5 rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 transition-all text-white placeholder-slate-600 text-sm" placeholder="Ej. Juan Pérez" />
                  </div>
                </div>
                
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-slate-300">Teléfono</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                      <Phone className="w-4 h-4 text-slate-400" />
                    </div>
                    <input type="tel" name="fono" value={formData.fono} onChange={handleChange} required className="w-full bg-[#0a0a0a]/80 border border-white/5 rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 transition-all text-white placeholder-slate-600 text-sm" placeholder="Ej. +56 9 1234 5678" />
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-slate-300">Correo electrónico</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                    <Mail className="w-4 h-4 text-slate-400" />
                  </div>
                  <input type="email" name="correo" value={formData.correo} onChange={handleChange} required className="w-full bg-[#0a0a0a]/80 border border-white/5 rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 transition-all text-white placeholder-slate-600 text-sm" placeholder="Ej. contacto@tuempresa.com" />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-slate-300">Empresa</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                    <Briefcase className="w-4 h-4 text-slate-400" />
                  </div>
                  <input type="text" name="empresa" value={formData.empresa} onChange={handleChange} className="w-full bg-[#0a0a0a]/80 border border-white/5 rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 transition-all text-white placeholder-slate-600 text-sm" placeholder="Ej. Tu Empresa SpA" />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-slate-300">Mensaje</label>
                <div className="relative">
                  <div className="absolute top-3.5 left-0 pl-3.5 pointer-events-none">
                    <Edit className="w-4 h-4 text-slate-400" />
                  </div>
                  <textarea name="mensaje" value={formData.mensaje} onChange={handleChange} required maxLength={1000} rows={3} className="w-full bg-[#0a0a0a]/80 border border-white/5 rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 transition-all text-white placeholder-slate-600 resize-none text-sm" placeholder="Cuéntanos sobre tu proyecto, objetivos y cómo podemos ayudarte..."></textarea>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-6">
                <button 
                  type="submit" 
                  disabled={status === "loading" || status === "success"}
                  className="w-full md:w-auto bg-gradient-to-r from-red-600 to-red-800 text-white font-semibold text-sm rounded-xl px-10 py-3.5 hover:from-red-500 hover:to-red-700 transition-all shadow-[0_0_20px_rgba(220,38,38,0.25)] hover:shadow-[0_0_30px_rgba(220,38,38,0.4)] flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed border border-red-500/30"
                >
                  {status === "idle" && (
                    <>
                      <Send className="w-4 h-4" />
                      Enviar mensaje
                    </>
                  )}
                  {status === "loading" && (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Enviando...
                    </>
                  )}
                  {status === "success" && (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      Enviado
                    </>
                  )}
                  {status === "error" && (
                    <>
                      <AlertCircle className="w-4 h-4" />
                      Error
                    </>
                  )}
                </button>

                <div className="flex items-center gap-2 text-slate-500">
                  <Lock className="w-4 h-4" />
                  <span className="text-[13px] font-medium">Tu información está segura</span>
                </div>
              </div>
            </form>
          </motion.div>

          {/* Right Column: Image and Info Cards */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", delay: 0.2 }}
            className="w-full lg:w-[55%] flex flex-col gap-4 mt-12 lg:mt-0"
          >
            {/* Imagen Principal */}
            <div className="relative w-full rounded-[2rem] overflow-hidden border border-red-500/20 shadow-[0_0_40px_rgba(220,38,38,0.1)] bg-[#050505] group">
              <div className="absolute inset-0 bg-gradient-to-tr from-red-900/10 to-transparent mix-blend-overlay z-10 pointer-events-none transition-opacity duration-500 group-hover:opacity-30"></div>
              <img src="/NUEVO%20FONDO.png" alt="Vision Code Contacto" className="w-full h-auto object-cover opacity-95 transition-transform duration-700 group-hover:scale-[1.02]" />
            </div>

            {/* Tarjetas de Información */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Card 1: Correo */}
              <div className="bg-[#0f0f0f] border border-white/5 hover:border-red-500/30 transition-all duration-300 rounded-[1.5rem] p-5 flex items-center gap-4 group shadow-lg">
                <div className="bg-[#151515] p-3 rounded-2xl border border-white/5 group-hover:border-red-500/30 transition-colors">
                  <Mail className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-[15px]">Correo</h3>
                  <p className="text-slate-300 text-[13px] font-medium hover:text-white transition-colors cursor-pointer mt-0.5">hola@visioncode.cl</p>
                  <p className="text-slate-500 text-[11px] mt-0.5 leading-tight">Respondemos a la brevedad</p>
                </div>
              </div>
              
              {/* Card 2: WhatsApp */}
              <div className="bg-[#0f0f0f] border border-white/5 hover:border-red-500/30 transition-all duration-300 rounded-[1.5rem] p-5 flex items-center gap-4 group shadow-lg">
                <div className="bg-[#151515] p-3 rounded-2xl border border-white/5 group-hover:border-red-500/30 transition-colors">
                  <MessageSquare className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-[15px]">WhatsApp</h3>
                  <p className="text-slate-300 text-[13px] font-medium hover:text-white transition-colors cursor-pointer mt-0.5">+56 9 1234 5678</p>
                  <p className="text-slate-500 text-[11px] mt-0.5 leading-tight">Escríbenos directamente</p>
                </div>
              </div>

              {/* Card 3: Horario */}
              <div className="bg-[#0f0f0f] border border-white/5 hover:border-red-500/30 transition-all duration-300 rounded-[1.5rem] p-5 flex items-center gap-4 group shadow-lg">
                <div className="bg-[#151515] p-3 rounded-2xl border border-white/5 group-hover:border-red-500/30 transition-colors">
                  <Clock className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-[15px]">Horario</h3>
                  <p className="text-slate-300 text-[13px] font-medium mt-0.5">Lunes a Viernes</p>
                  <p className="text-slate-500 text-[11px] mt-0.5 leading-tight">09:00 - 18:00 hrs</p>
                </div>
              </div>

              {/* Card 4: Ubicación */}
              <div className="bg-[#0f0f0f] border border-white/5 hover:border-red-500/30 transition-all duration-300 rounded-[1.5rem] p-5 flex items-center gap-4 group shadow-lg">
                <div className="bg-[#151515] p-3 rounded-2xl border border-white/5 group-hover:border-red-500/30 transition-colors">
                  <MapPin className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-[15px]">Ubicación</h3>
                  <p className="text-slate-300 text-[13px] font-medium mt-0.5">Santiago, Chile</p>
                  <p className="text-slate-500 text-[11px] mt-0.5 leading-tight">Atención remota y presencial</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      <div className="w-full mt-auto border-t border-white/5">
        <Footer />
      </div>

      <AIAssistant />
    </main>
  );
}

