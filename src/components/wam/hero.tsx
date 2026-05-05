"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import Image from "next/image";

export function Hero() {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#0A0A0A]" />
        <motion.div
          className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(255,107,43,0.15) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(255,45,85,0.12) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-[40%] left-[30%] w-[400px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(255,184,0,0.08) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-br from-[#FF6B2B] via-[#FFB800] to-[#FF2D55] p-0.5">
              <div className="w-full h-full rounded-3xl bg-[#0A0A0A] flex items-center justify-center overflow-hidden">
                <Image
                  src="/uploads/wam-logo.jpeg"
                  alt="WAM Design Logo"
                  width={90}
                  height={90}
                  className="rounded-2xl object-cover"
                />
              </div>
            </div>
            <motion.div
              className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-[#FF6B2B] via-[#FFB800] to-[#FF2D55] opacity-20 blur-xl"
              animate={{ opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </div>
        </motion.div>

        {/* Brand Name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight">
            <span className="text-white">WAM </span>
            <span className="gradient-text">DESIGN</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/40 tracking-[0.3em] mt-2 font-light">
            SOLUTION
          </p>
        </motion.div>

        {/* By line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-base sm:text-lg text-white/50 mt-4 font-medium"
        >
          by <span className="text-[#FFB800]">Wilson Macamo</span>
        </motion.p>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-10 max-w-3xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white leading-tight">
            Transformando ideias em{" "}
            <span className="gradient-text">experiências visuais</span>{" "}
            de alto impacto
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-6 text-base sm:text-lg text-white/50 max-w-2xl mx-auto leading-relaxed"
        >
          Designer gráfico especializado em criar conteúdos visuais estratégicos
          para marcas que querem crescer nas redes sociais.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => handleScroll("#portfolio")}
            className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#FF6B2B] to-[#FF2D55] text-white font-semibold text-base hover:shadow-xl hover:shadow-[#FF6B2B]/20 transition-all duration-300 hover:scale-105"
          >
            <Sparkles size={18} />
            Ver Portfólio
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#FF6B2B] to-[#FF2D55] opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10" />
          </button>
          <button
            onClick={() => handleScroll("#contact")}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border border-white/10 text-white/80 font-semibold text-base hover:bg-white/5 hover:border-white/20 hover:text-white transition-all duration-300"
          >
            Entrar em Contato
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-white/30"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ArrowDown size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
