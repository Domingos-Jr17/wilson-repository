"use client";

import { useState } from "react";
import { ScrollReveal } from "./scroll-reveal";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const categories = ["Todos", "Branding", "Social Media", "Flyers", "Design"];

const portfolioItems = [
  {
    id: 1,
    title: "WAM Design Logo",
    category: "Branding",
    image: "/uploads/wam-design_logo.jpeg",
    description: "Identidade visual principal da WAM DESIGN Solution",
  },
  {
    id: 2,
    title: "WAM Logo",
    category: "Branding",
    image: "/uploads/wam-logo.jpeg",
    description: "Logotipo institucional da marca WAM",
  },
  {
    id: 3,
    title: "Costrua Logo",
    category: "Branding",
    image: "/uploads/costrua-logo.jpeg",
    description: "Identidade visual para projeto de construção",
  },
  {
    id: 4,
    title: "WAM Constr. Solutions",
    category: "Branding",
    image: "/uploads/wam-constr-sol_logo.jpeg",
    description: "Branding para WAM Construction Solutions",
  },
  {
    id: 5,
    title: "WAM English School",
    category: "Branding",
    image: "/uploads/wam-english-school_logo.jpeg",
    description: "Identidade visual para escola de inglês",
  },
  {
    id: 6,
    title: "Agro JC Logo",
    category: "Branding",
    image: "/uploads/agro-jc_logo.jpeg",
    description: "Logotipo para empresa agrícola",
  },
  {
    id: 7,
    title: "Agro JC - Copo",
    category: "Social Media",
    image: "/uploads/agro-jc_cup.jpeg",
    description: "Mockup de produto personalizado Agro JC",
  },
  {
    id: 8,
    title: "Agro JC - Camiseta",
    category: "Social Media",
    image: "/uploads/agro-jc_shirt.jpeg",
    description: "Mockup de camiseta personalizada Agro JC",
  },
  {
    id: 9,
    title: "Flyers Promocionais",
    category: "Flyers",
    image: "/uploads/fliyers.jpeg",
    description: "Design de flyers para campanhas promocionais",
  },
];

const featuredProject = {
  title: "Campanha Social Media",
  description:
    "Objetivo: Criar posts e banners para redes sociais com foco em engajamento.",
  solution:
    "Desenvolvi uma série de posts visuais, combinando cores vibrantes e tipografia moderna para aumentar cliques e interação.",
  tools: ["Photoshop", "Illustrator", "Premiere Pro", "After Effects", "InDesign"],
};

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("Todos");

  const filteredItems =
    activeFilter === "Todos"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section id="portfolio" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF6B2B]/10 border border-[#FF6B2B]/20 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#FF6B2B] animate-pulse" />
            <span className="text-[#FF6B2B] text-sm font-medium">Portfólio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Trabalhos em <span className="gradient-text">destaque</span>
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto text-base sm:text-lg">
            Uma seleção dos meus melhores projetos de design e branding
          </p>
        </ScrollReveal>

        {/* Featured Project */}
        <ScrollReveal className="mb-16">
          <div className="relative glass rounded-3xl p-6 sm:p-8 lg:p-10 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#FF6B2B]/10 to-transparent rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
            <div className="relative">
              <div className="flex items-center gap-2 mb-4">
                <div className="px-3 py-1 rounded-full bg-[#FF6B2B]/20 text-[#FF6B2B] text-xs font-semibold">
                  ✨ Projeto Destaque
                </div>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                {featuredProject.title}
              </h3>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="text-white/50 text-sm sm:text-base leading-relaxed">
                    {featuredProject.description}
                  </p>
                </div>
                <div>
                  <p className="text-white/50 text-sm sm:text-base leading-relaxed">
                    {featuredProject.solution}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {featuredProject.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/60 text-xs sm:text-sm font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Filter Tabs */}
        <ScrollReveal className="mb-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-gradient-to-r from-[#FF6B2B] to-[#FF2D55] text-white shadow-lg shadow-[#FF6B2B]/20"
                    : "glass text-white/50 hover:text-white hover:bg-white/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Portfolio Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <div className="group relative overflow-hidden rounded-2xl glass cursor-pointer">
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Content on hover */}
                    <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <span className="text-[#FF6B2B] text-xs font-semibold mb-1">
                        {item.category}
                      </span>
                      <h4 className="text-white text-base sm:text-lg font-bold">
                        {item.title}
                      </h4>
                      <p className="text-white/50 text-sm mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
