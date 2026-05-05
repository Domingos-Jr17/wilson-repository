"use client";

import { ScrollReveal } from "./scroll-reveal";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTA() {
  const handleClick = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B2B]/10 via-[#0A0A0A] to-[#FF2D55]/10" />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,107,43,0.08) 0%, rgba(255,45,85,0.05) 40%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        {/* Decorative shapes */}
        <motion.div
          className="absolute top-10 right-[20%] w-3 h-3 rounded-full bg-[#FF6B2B]/30"
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 left-[15%] w-2 h-2 rounded-full bg-[#FFB800]/30"
          animate={{ y: [0, 15, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/3 left-[10%] w-4 h-4 rounded-full bg-[#FF2D55]/20"
          animate={{ y: [0, -10, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF6B2B]/10 border border-[#FF6B2B]/20 mb-8">
            <Sparkles size={14} className="text-[#FF6B2B]" />
            <span className="text-[#FF6B2B] text-sm font-medium">Vamos criar algo incrível</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Vamos trabalhar{" "}
            <span className="gradient-text">juntos?</span>
          </h2>

          <p className="text-white/40 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Tem um projeto em mente? Vamos transformar a sua visão em realidade
            visual. Estou pronto para criar algo extraordinário para a sua marca.
          </p>

          <motion.button
            onClick={handleClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-[#FF6B2B] to-[#FF2D55] text-white font-bold text-base sm:text-lg hover:shadow-2xl hover:shadow-[#FF6B2B]/25 transition-all duration-300"
          >
            Solicitar Projeto
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </motion.button>
        </ScrollReveal>
      </div>
    </section>
  );
}
