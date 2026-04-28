"use client";
import { useState, useEffect } from "react";
import { useChat } from "@ai-sdk/react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Bot, Loader2 } from "lucide-react";

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  // Vercel AI SDK hook for chat streaming
  const { messages, input, handleInputChange, handleSubmit, isLoading, append } = useChat({
    api: '/api/chat'
  });

  useEffect(() => {
    // Proactive balloon appears after 3 seconds
    const timer = setTimeout(() => {
      if (!isOpen) setShowTooltip(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  const handleQuickReply = (text: string) => {
    append({ role: 'user', content: text });
  };

  return (
    <div className="fixed bottom-6 right-6 z-[999] flex flex-col items-end">
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-4 w-[350px] max-w-[calc(100vw-48px)] bg-white/90 backdrop-blur-md shadow-2xl rounded-3xl border border-slate-200 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-slate-900 text-white p-4 flex justify-between items-center rounded-t-3xl">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-bold text-sm tracking-wide">Ingeniería IA - MG.DIGITAL</h4>
                  <p className="text-[10px] text-cyan-400 flex items-center gap-1 font-bold uppercase tracking-wider mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_5px_#22c55e]"></span>
                    En línea
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-4 h-[350px] overflow-y-auto bg-slate-50 flex flex-col gap-4">
              
              {/* Default Welcome Message */}
              {messages.length === 0 && (
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0 mt-1 shadow-sm">
                    <Bot className="w-4 h-4 text-cyan-600" />
                  </div>
                  <div className="bg-white border border-slate-100 p-3 rounded-2xl rounded-tl-sm text-sm text-slate-700 shadow-sm leading-relaxed">
                    Hola. Analizando sistemas... ¿Qué proceso industrial o de gestión necesitas optimizar hoy en tu empresa?
                  </div>
                </div>
              )}

              {/* Chat Messages */}
              {messages.map(m => (
                <div key={m.id} className={`flex gap-2 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {m.role !== 'user' && (
                     <div className="w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0 mt-1 shadow-sm">
                       <Bot className="w-4 h-4 text-cyan-600" />
                     </div>
                  )}
                  <div className={`p-3 rounded-2xl text-sm shadow-sm leading-relaxed max-w-[85%] ${
                    m.role === 'user' 
                      ? 'bg-cyan-500 text-white rounded-tr-sm' 
                      : 'bg-white border border-slate-100 text-slate-700 rounded-tl-sm'
                  }`}>
                    {m.content}
                  </div>
                </div>
              ))}

              {/* Loading State: Animación de "escribiendo..." */}
              {isLoading && (
                <div className="flex gap-2">
                   <div className="w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0 mt-1 shadow-sm">
                     <Bot className="w-4 h-4 text-cyan-600" />
                   </div>
                   <div className="bg-white border border-slate-100 p-4 rounded-2xl rounded-tl-sm flex items-center gap-1.5 shadow-sm">
                     <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6 }} className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
                     <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
                     <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
                   </div>
                </div>
              )}
              
              {/* Quick Replies */}
              {messages.length === 0 && (
                <div className="flex flex-col gap-2 mt-2 ml-10">
                  <button onClick={() => handleQuickReply("Mejorar mi Logística")} className="text-left text-xs bg-white border border-slate-200 text-slate-600 px-3 py-2 rounded-xl hover:bg-cyan-50 hover:text-cyan-600 hover:border-cyan-200 transition-all shadow-sm w-fit">
                    Mejorar mi Logística
                  </button>
                  <button onClick={() => handleQuickReply("Cotizar Sistema ERP")} className="text-left text-xs bg-white border border-slate-200 text-slate-600 px-3 py-2 rounded-xl hover:bg-cyan-50 hover:text-cyan-600 hover:border-cyan-200 transition-all shadow-sm w-fit">
                    Cotizar Sistema ERP
                  </button>
                  <button onClick={() => handleQuickReply("Crear Ecosistema Web")} className="text-left text-xs bg-white border border-slate-200 text-slate-600 px-3 py-2 rounded-xl hover:bg-cyan-50 hover:text-cyan-600 hover:border-cyan-200 transition-all shadow-sm w-fit">
                    Crear Ecosistema Web
                  </button>
                </div>
              )}
            </div>

            {/* Footer / Input */}
            <form onSubmit={handleSubmit} className="p-3 bg-white border-t border-slate-100 flex gap-2">
              <input 
                value={input}
                onChange={handleInputChange}
                type="text" 
                placeholder="Escribe tu mensaje..." 
                className="flex-1 bg-slate-50 text-sm rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-cyan-500/50 border border-slate-100 focus:border-cyan-500 transition-all"
                disabled={isLoading}
              />
              <button 
                type="submit" 
                disabled={isLoading || !input.trim()}
                className="w-10 h-10 rounded-xl bg-cyan-500 hover:bg-cyan-600 disabled:bg-slate-300 disabled:cursor-not-allowed text-white flex items-center justify-center transition-colors flex-shrink-0 shadow-sm"
              >
                {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4 ml-1" />}
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative flex items-center">
        {/* Proactive Balloon */}
        <AnimatePresence>
          {!isOpen && showTooltip && (
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 10, scale: 0.9 }}
              className="absolute right-full mr-4 bg-slate-900 text-white text-xs font-bold px-4 py-3 rounded-2xl rounded-br-sm shadow-xl whitespace-nowrap"
            >
              ¿Optimizamos tu operación hoy?
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => {
            setIsOpen(!isOpen);
            setShowTooltip(false);
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 rounded-full bg-cyan-500 text-white shadow-[0_8px_30px_rgba(6,182,212,0.4)] flex items-center justify-center relative z-50 group"
        >
          <div className="absolute inset-0 rounded-full bg-cyan-400 animate-pulse opacity-50"></div>
          {isOpen ? <X className="w-6 h-6 relative z-10" /> : <Bot className="w-6 h-6 relative z-10" />}
        </motion.button>
      </div>
    </div>
  );
}
