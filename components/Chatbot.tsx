"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Cpu, Bot } from "lucide-react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end">
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-4 w-[380px] max-w-[calc(100vw-48px)] bg-[#0A0A16]/95 backdrop-blur-xl shadow-[0_0_40px_rgba(0,240,255,0.15)] rounded-3xl border border-white/10 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-900/50 to-[#0A0A16] border-b border-white/10 p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/30 flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-[#00f0ff]" />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-white tracking-widest uppercase">Ingeniería IA - Soporte</h4>
                  <p className="text-[10px] text-[#00f0ff] flex items-center gap-1 mt-0.5 tracking-widest uppercase font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] animate-pulse shadow-[0_0_5px_#00f0ff]"></span>
                    Sistema Activo
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-[#00f0ff] transition-colors bg-white/5 p-2 rounded-full"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Body */}
            <div className="p-5 h-[320px] overflow-y-auto bg-transparent flex flex-col gap-4">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/30 flex items-center justify-center flex-shrink-0 mt-1">
                  <Bot className="w-4 h-4 text-[#00f0ff]" />
                </div>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-2xl rounded-tl-sm text-sm text-slate-200 shadow-sm font-medium leading-relaxed">
                  Hola. Analizando sistemas... ¿Qué proceso industrial o de gestión necesitas optimizar hoy en tu empresa?
                </div>
              </div>
            </div>

            {/* Footer / Input */}
            <div className="p-4 bg-[#050510] border-t border-white/10 flex gap-2">
              <input 
                type="text" 
                placeholder="Iniciar diagnóstico..." 
                className="flex-1 bg-white/5 text-white placeholder-slate-500 text-sm rounded-xl px-4 py-3 outline-none border border-white/10 focus:border-[#00f0ff]/50 transition-all"
              />
              <button className="w-12 h-12 rounded-xl bg-[#00f0ff]/20 border border-[#00f0ff]/50 hover:bg-[#00f0ff]/40 hover:shadow-[0_0_15px_rgba(0,240,255,0.5)] text-[#00f0ff] flex items-center justify-center transition-all flex-shrink-0">
                <Send className="w-5 h-5 ml-1" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-16 h-16 rounded-full bg-[#050510] border-2 border-[#00f0ff] text-[#00f0ff] shadow-[0_0_30px_rgba(0,240,255,0.4)] flex items-center justify-center relative z-50 group overflow-hidden"
      >
        <div className="absolute inset-0 rounded-full bg-[#00f0ff] animate-pulse opacity-20"></div>
        {isOpen ? <X className="w-7 h-7 relative z-10" /> : <Cpu className="w-7 h-7 relative z-10" />}
      </motion.button>
    </div>
  );
}
