"use client";

import { ScrollReveal } from "./scroll-reveal";
import { motion } from "framer-motion";
import {
  Palette,
  Film,
  Video,
  PenTool,
} from "lucide-react";
import Image from "next/image";

const specialties = [
  { icon: Palette, label: "Social Media Design", color: "from-[#FF6B2B] to-[#FFB800]" },
  { icon: PenTool, label: "Branding e Identidade Visual", color: "from-[#FFB800] to-[#FF2D55]" },
  { icon: Film, label: "Motion Graphics", color: "from-[#FF2D55] to-[#FF6B2B]" },
  { icon: Video, label: "Edição de Vídeo", color: "from-[#FF6B2B] to-[#FF2D55]" },
  { icon: PenTool, label: "Design Publicitário", color: "from-[#FFB800] to-[#FF6B2B]" },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Visual */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto lg:mx-0">
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-[#FF6B2B]/20 via-[#FFB800]/10 to-[#FF2D55]/20 p-1">
                  <div className="w-full h-full rounded-3xl bg-card flex items-center justify-center relative overflow-hidden">
                    {/* Abstract design behind */}
                    <div className="absolute inset-0 opacity-20">
                      <motion.div
                        className="absolute top-10 right-10 w-32 h-32 rounded-full bg-gradient-to-br from-[#FF6B2B] to-[#FFB800]"
                        animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
                        transition={{ duration: 6, repeat: Infinity }}
                      />
                      <motion.div
                        className="absolute bottom-10 left-10 w-24 h-24 rounded-full bg-gradient-to-br from-[#FF2D55] to-[#FF6B2B]"
                        animate={{ scale: [1, 1.2, 1], rotate: [0, -5, 0] }}
                        transition={{ duration: 8, repeat: Infinity }}
                      />
                    </div>
                    {/* Logo/Avatar */}
                    <div className="relative z-10 text-center">
                      <div className="w-32 h-32 mx-auto rounded-2xl overflow-hidden shadow-2xl shadow-[#FF6B2B]/20">
                        <Image
                          src="/uploads/wam-design_logo.jpeg"
                          alt="Wilson Macamo"
                          width={128}
                          height={128}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <p className="text-muted-foreground text-sm font-medium mt-4">
                        Creative Designer
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl bg-gradient-to-br from-[#FF6B2B]/20 to-transparent border border-[#FF6B2B]/10"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FF2D55]/20 to-transparent border border-[#FF2D55]/10"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Right - Text */}
          <ScrollReveal direction="right">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF6B2B]/10 border border-[#FF6B2B]/20 mb-6">
                <div className="w-2 h-2 rounded-full bg-[#FF6B2B] animate-pulse" />
                <span className="text-[#FF6B2B] text-sm font-medium">Sobre Mim</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Criatividade e{" "}
                <span className="gradient-text">estratégia</span>{" "}
                em cada projeto
              </h2>

              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-8">
                Sou Wilson Macamo, designer gráfico focado em criar soluções visuais
                modernas e estratégicas. O meu trabalho combina criatividade e
                marketing para ajudar marcas a aumentar engajamento e fortalecer
                sua identidade digital.
              </p>

              {/* Specialty Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {specialties.map((spec, i) => (
                  <motion.div
                    key={spec.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="group glass rounded-xl p-3 sm:p-4 flex flex-col items-center gap-2 cursor-default"
                  >
                    <div
                      className={`w-10 h-10 rounded-lg bg-gradient-to-br ${spec.color} flex items-center justify-center`}
                    >
                      <spec.icon size={18} className="text-white" />
                    </div>
                    <span className="text-muted-foreground text-xs sm:text-sm text-center font-medium group-hover:text-foreground transition-colors">
                      {spec.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
