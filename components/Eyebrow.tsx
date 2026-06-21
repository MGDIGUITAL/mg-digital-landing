"use client";
import { motion } from "framer-motion";

export default function Eyebrow({
  children,
  className = "",
}: {
  children: string;
  className?: string;
}) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`inline-flex items-center gap-2 font-mono text-xs md:text-sm tracking-[0.15em] uppercase text-[var(--color-primary)] mb-4 ${className}`}
    >
      <span className="text-white/30">{"//"}</span>
      {children}
    </motion.span>
  );
}
