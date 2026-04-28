"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import Link from "next/link";

export default function ContactoPage() {
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
    <div className="min-h-screen bg-[#050510] text-white selection:bg-[#00f0ff]/30 flex flex-col">
      {/* Navbar Minimal */}
      <nav className="absolute top-0 left-0 w-full p-6 md:p-10 z-50 flex items-center">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 md:w-10 md:h-10 relative bg-white rounded flex items-center justify-center overflow-hidden">
            <span className="text-[#050510] font-black text-xl leading-none">M</span>
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          </div>
          <span className="text-xl md:text-2xl font-black tracking-tighter text-white">
            MG.<span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#00f0ff]">DIGITAL</span>
          </span>
        </Link>
      </nav>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 relative">
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]"></div>

        {/* Columna Izquierda: Formulario */}
        <div className="relative flex flex-col justify-center px-6 py-24 lg:p-16 xl:p-24 z-10 min-h-screen">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-xl mx-auto"
          >
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="mb-10 relative">
                <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/50">Hablemos de tu </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#00f0ff]">proyecto.</span>
                </h1>
                <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed">
                  Déjanos tus datos y un ingeniero de <span className="text-white font-medium">MG.DIGITAL</span> te contactará para optimizar tu operación.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="nombre" className="text-sm font-medium text-gray-300 ml-1">Nombre Completo</label>
                    <input
                      id="nombre"
                      name="nombre"
                      type="text"
                      required
                      value={formData.nombre}
                      onChange={handleChange}
                      className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#00f0ff] focus:ring-1 focus:ring-[#00f0ff] transition-all"
                      placeholder="Ej. Juan Pérez"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="fono" className="text-sm font-medium text-gray-300 ml-1">Teléfono</label>
                    <input
                      id="fono"
                      name="fono"
                      type="tel"
                      required
                      value={formData.fono}
                      onChange={handleChange}
                      className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#00f0ff] focus:ring-1 focus:ring-[#00f0ff] transition-all"
                      placeholder="+56 9 1234 5678"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="correo" className="text-sm font-medium text-gray-300 ml-1">Correo Electrónico</label>
                  <input
                    id="correo"
                    name="correo"
                    type="email"
                    required
                    value={formData.correo}
                    onChange={handleChange}
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#00f0ff] focus:ring-1 focus:ring-[#00f0ff] transition-all"
                    placeholder="tu@empresa.com"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center ml-1">
                    <label htmlFor="mensaje" className="text-sm font-medium text-gray-300">Mensaje</label>
                    <span className="text-xs text-gray-500 font-mono">{formData.mensaje.length}/1000</span>
                  </div>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    required
                    maxLength={1000}
                    rows={4}
                    value={formData.mensaje}
                    onChange={handleChange}
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#00f0ff] focus:ring-1 focus:ring-[#00f0ff] transition-all resize-y min-h-[120px]"
                    placeholder="Cuéntanos sobre los desafíos de tu negocio..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className="w-full relative overflow-hidden bg-white text-black font-semibold rounded-xl px-4 py-4 flex items-center justify-center gap-2 group hover:bg-gray-100 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00f0ff]/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  
                  {status === "idle" && (
                    <>
                      <span>Enviar Mensaje</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                  {status === "loading" && (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Enviando...</span>
                    </>
                  )}
                  {status === "success" && (
                    <>
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                      <span>Mensaje Enviado</span>
                    </>
                  )}
                  {status === "error" && (
                    <>
                      <AlertCircle className="w-5 h-5 text-red-600" />
                      <span>Error al enviar</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Columna Derecha: Branding y Video */}
        <div className="relative hidden lg:flex flex-col items-center justify-center p-12 overflow-hidden min-h-screen border-l border-white/5">
          {/* Fondo Video */}
          <div className="absolute inset-0 w-full h-full">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute w-full h-full object-cover opacity-30 mix-blend-screen"
            >
              <source src="/cubo 3d.mp4" type="video/mp4" />
            </video>
            {/* Gradiente para suavizar bordes */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-[#050510]/50 to-[#050510]"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#050510] via-transparent to-[#050510]"></div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10 flex flex-col items-center text-center space-y-12"
          >
            {/* Logo Gigante */}
            <div className="flex flex-col items-center gap-6">
              <div className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-2xl flex items-center justify-center shadow-[0_0_100px_rgba(255,255,255,0.1)]">
                <span className="text-[#050510] font-black text-7xl md:text-8xl leading-none tracking-tighter">M</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white">
                MG.<span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#00f0ff]">DIGITAL</span>
              </h2>
            </div>

            {/* Info Contacto */}
            <div className="flex flex-col gap-6 items-center bg-black/40 backdrop-blur-md border border-white/10 p-8 rounded-3xl w-full max-w-sm">
              <div className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <Mail className="w-5 h-5 text-[#00f0ff]" />
                </div>
                <a href="mailto:mpeg.logistica@gmail.com" className="font-medium text-lg">mpeg.logistica@gmail.com</a>
              </div>
              <div className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <Phone className="w-5 h-5 text-[#00f0ff]" />
                </div>
                <span className="font-medium text-lg">Soporte 24/7</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <MapPin className="w-5 h-5 text-[#00f0ff]" />
                </div>
                <span className="font-medium text-lg">Operaciones Globales</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
