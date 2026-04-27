"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot } from "lucide-react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-4 w-[350px] max-w-[calc(100vw-48px)] bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl border border-slate-200 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Asistente MG</h4>
                  <p className="text-[10px] text-blue-100 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                    En línea
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/70 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-4 h-[300px] overflow-y-auto bg-slate-50/50 flex flex-col gap-4">
              <div className="flex gap-2">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <Bot className="w-3.5 h-3.5 text-blue-600" />
                </div>
                <div className="bg-white border border-slate-100 p-3 rounded-2xl rounded-tl-sm text-sm text-slate-700 shadow-sm">
                  ¡Hola! Soy el asistente de MG.DIGITAL. ¿En qué puedo ayudarte a potenciar tu negocio hoy?
                </div>
              </div>
              
              {/* Quick suggestions */}
              <div className="flex flex-col gap-2 mt-2 ml-8">
                <button className="text-left text-xs bg-white border border-blue-100 text-blue-600 px-3 py-2 rounded-xl hover:bg-blue-50 transition-colors w-fit shadow-sm">
                  Quiero cotizar una página web
                </button>
                <button className="text-left text-xs bg-white border border-blue-100 text-blue-600 px-3 py-2 rounded-xl hover:bg-blue-50 transition-colors w-fit shadow-sm">
                  Necesito información sobre ERP
                </button>
              </div>
            </div>

            {/* Footer / Input */}
            <div className="p-3 bg-white border-t border-slate-100 flex gap-2">
              <input 
                type="text" 
                placeholder="Escribe tu mensaje..." 
                className="flex-1 bg-slate-100 text-sm rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
              />
              <button className="w-10 h-10 rounded-xl bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center transition-colors flex-shrink-0">
                <Send className="w-4 h-4 ml-1" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-blue-600 text-white shadow-[0_8px_30px_rgba(37,99,235,0.4)] flex items-center justify-center relative z-50 group"
      >
        <div className="absolute inset-0 rounded-full bg-blue-500 animate-pulse opacity-50"></div>
        {isOpen ? <X className="w-6 h-6 relative z-10" /> : <MessageSquare className="w-6 h-6 relative z-10" />}
      </motion.button>
    </div>
  );
}
