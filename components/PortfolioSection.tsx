"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PORTFOLIO_ITEMS = [
  {
    title: "Sitio Web Corporativo",
    subtitle: "Diseño moderno y responsivo",
    imgSrc: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Sistema ERP",
    subtitle: "Gestión integral de tu empresa",
    imgSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Plataforma CRM",
    subtitle: "Tus clientes, siempre conectados",
    imgSrc: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Sistema de Folios",
    subtitle: "Digitalización y control total",
    imgSrc: "https://images.unsplash.com/photo-1555421689-d68471e189f2?q=80&w=800&auto=format&fit=crop",
  }
];

export default function PortfolioSection() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 w-full overflow-hidden" id="trabajos">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        
        {/* Título y Controles */}
        <div className="w-full flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-3 uppercase">
              Nuestros <span className="text-cyan-500">Trabajos</span>
            </h2>
            <p className="text-slate-500 font-medium max-w-xl">
              Proyectos que generan resultados reales y medibles.
            </p>
          </motion.div>

          <div className="flex gap-4">
            <button 
              onClick={scrollLeft}
              className="w-12 h-12 rounded-full bg-white shadow-md border border-slate-100 flex items-center justify-center text-cyan-500 hover:bg-cyan-50 hover:scale-105 transition-all"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={scrollRight}
              className="w-12 h-12 rounded-full bg-white shadow-md border border-slate-100 flex items-center justify-center text-cyan-500 hover:bg-cyan-50 hover:scale-105 transition-all"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Carrusel */}
        <div 
          ref={carouselRef}
          className="w-full flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] px-2"
        >
          {PORTFOLIO_ITEMS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col snap-start shrink-0 w-[85vw] md:w-[45vw] lg:w-[calc(33.333%-1rem)] xl:w-[calc(25%-1.125rem)]"
            >
              <div className="w-full aspect-[4/3] bg-slate-50 rounded-3xl mb-5 overflow-hidden relative group cursor-pointer shadow-sm border border-slate-100">
                <img 
                  src={item.imgSrc} 
                  alt={item.title} 
                  className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-cyan-900/0 group-hover:bg-cyan-900/10 transition-colors duration-500" />
              </div>
              <div className="text-left px-2">
                <h3 className="font-bold text-slate-900 text-lg mb-1">{item.title}</h3>
                <p className="text-sm text-slate-500">{item.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
