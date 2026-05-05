"use client";

import { ScrollReveal } from "./scroll-reveal";
import { motion } from "framer-motion";
import {
  Instagram,
  Image as ImageIcon,
  PenTool,
  Film,
  Video,
  Megaphone,
} from "lucide-react";

const services = [
  {
    icon: Instagram,
    title: "Criação de Posts para Redes Sociais",
    description: "Design estratégico para Instagram, Facebook e LinkedIn que gera engajamento e converte seguidores em clientes.",
    gradient: "from-[#FF6B2B] to-[#FFB800]",
  },
  {
    icon: ImageIcon,
    title: "Design de Banners Publicitários",
    description: "Banners e anúncios digitais de alto impacto visual que capturam a atenção e direcionam tráfego.",
    gradient: "from-[#FFB800] to-[#FF2D55]",
  },
  {
    icon: PenTool,
    title: "Branding e Identidade Visual",
    description: "Criação de identidade visual completa: logo, paleta de cores, tipografia e manual de marca.",
    gradient: "from-[#FF2D55] to-[#FF6B2B]",
  },
  {
    icon: Film,
    title: "Motion Design",
    description: "Animações e motion graphics que dão vida à sua marca em redes sociais e apresentações.",
    gradient: "from-[#FF6B2B] to-[#FF2D55]",
  },
  {
    icon: Video,
    title: "Edição de Vídeo",
    description: "Edição profissional de vídeos para redes sociais, YouTube e conteúdo publicitário com efeitos modernos.",
    gradient: "from-[#FFB800] to-[#FF6B2B]",
  },
  {
    icon: Megaphone,
    title: "Flyers e Campanhas Digitais",
    description: "Materiais visuais completos para campanhas digitais que comunicam a mensagem com impacto.",
    gradient: "from-[#FF2D55] to-[#FFB800]",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FF6B2B]/[0.02] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF6B2B]/10 border border-[#FF6B2B]/20 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#FF6B2B] animate-pulse" />
            <span className="text-[#FF6B2B] text-sm font-medium">Serviços</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            O que eu <span className="gradient-text">posso fazer</span> por si
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto text-base sm:text-lg">
            Soluções visuais completas para elevar a presença digital da sua marca
          </p>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative h-full"
              >
                {/* Glow effect on hover */}
                <div
                  className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`}
                />

                <div className="relative h-full glass rounded-2xl p-6 sm:p-8 overflow-hidden">
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent`}
                      style={{ animation: "shimmer 3s infinite" }}
                    />
                  </div>

                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5 shadow-lg`}
                  >
                    <service.icon size={24} className="text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-[#FF6B2B] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-white/40 text-sm sm:text-base leading-relaxed">
                    {service.description}
                  </p>

                  {/* Bottom accent line */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
