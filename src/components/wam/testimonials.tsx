"use client";

import { ScrollReveal } from "./scroll-reveal";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Ana Rodrigues",
    role: "CEO, Agência Digital",
    text: "Trabalho extremamente criativo e profissional. Superou nossas expectativas em todas as campanhas. O Wilson tem um talento único para transformar conceitos em visuais impactantes.",
    rating: 5,
  },
  {
    name: "Carlos Matsinhe",
    role: "Diretor de Marketing, TechMoç",
    text: "A identidade visual que o Wilson criou para nossa marca revolucionou a nossa presença digital. Profissionalismo e criatividade em cada detalhe. Recomendo fortemente!",
    rating: 5,
  },
  {
    name: "Sofia Nhaca",
    role: "Fundadora, Startup Maputo",
    text: "O design das nossas redes sociais nunca esteve tão profissional. O engajamento triplicou depois do trabalho do Wilson. É um parceiro criativo indispensável.",
    rating: 5,
  },
  {
    name: "João Tembe",
    role: "Gerente, Agro JC",
    text: "Desde o logo até os materiais de marketing, tudo ficou perfeito. O Wilson entende exatamente o que o cliente precisa e entrega com excelência e dentro do prazo.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FFB800]/[0.02] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF6B2B]/10 border border-[#FF6B2B]/20 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#FF6B2B] animate-pulse" />
            <span className="text-[#FF6B2B] text-sm font-medium">Depoimentos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            O que dizem os <span className="gradient-text">clientes</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            Feedback real de quem confia no meu trabalho
          </p>
        </ScrollReveal>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {testimonials.map((testimonial, i) => (
            <ScrollReveal key={testimonial.name} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className="group relative h-full"
              >
                <div className="h-full glass rounded-2xl p-6 sm:p-8 relative overflow-hidden">
                  {/* Quote icon */}
                  <Quote
                    size={40}
                    className="absolute top-4 right-4 text-[#FF6B2B]/10 group-hover:text-[#FF6B2B]/20 transition-colors"
                  />

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, j) => (
                      <Star
                        key={j}
                        size={14}
                        className="fill-[#FFB800] text-[#FFB800]"
                      />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF6B2B] to-[#FF2D55] flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <p className="text-foreground font-semibold text-sm">
                        {testimonial.name}
                      </p>
                      <p className="text-muted-foreground text-xs">{testimonial.role}</p>
                    </div>
                  </div>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FF6B2B] to-[#FF2D55] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
