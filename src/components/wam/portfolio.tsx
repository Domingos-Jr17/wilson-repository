"use client";

import { useState } from "react";
import { ScrollReveal } from "./scroll-reveal";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Eye } from "lucide-react";

const categories = ["Todos", "Branding", "Social Media", "Flyers"];

const portfolioItems = [
  {
    id: 1,
    title: "WAM Design Solution",
    category: "Branding",
    image: "/uploads/wam-design_logo.jpeg",
    description: "Identidade visual principal da WAM DESIGN Solution — logo, cores e elementos gráficos",
    tags: ["Logo", "Identidade Visual", "Branding"],
  },
  {
    id: 2,
    title: "Costrua — Logo & Branding",
    category: "Branding",
    image: "/uploads/costrua-logo.jpeg",
    description: "Identidade visual completa para projeto de construção civil",
    tags: ["Logo", "Branding", "Construção"],
  },
  {
    id: 3,
    title: "WAM Construction Solutions",
    category: "Branding",
    image: "/uploads/wam-constr-sol_logo.jpeg",
    description: "Branding e logotipo para WAM Construction Solutions",
    tags: ["Logo", "Branding", "Construção"],
  },
  {
    id: 4,
    title: "WAM English School",
    category: "Branding",
    image: "/uploads/wam-english-school_logo.jpeg",
    description: "Identidade visual para escola de inglês — logo e materiais",
    tags: ["Logo", "Educação", "Branding"],
  },
  {
    id: 5,
    title: "Agro JC — Logo Design",
    category: "Branding",
    image: "/uploads/agro-jc_logo.jpeg",
    description: "Logotipo e identidade visual para empresa agrícola Agro JC",
    tags: ["Logo", "Agricultura", "Branding"],
  },
  {
    id: 6,
    title: "Agro JC — Merchandise",
    category: "Social Media",
    image: "/uploads/agro-jc_cup.jpeg",
    description: "Mockup de copo personalizado com a marca Agro JC",
    tags: ["Mockup", "Merchandise", "Branding"],
  },
  {
    id: 7,
    title: "Agro JC — Branded Apparel",
    category: "Social Media",
    image: "/uploads/agro-jc_shirt.jpeg",
    description: "Mockup de camiseta personalizada Agro JC para equipa",
    tags: ["Mockup", "Apparel", "Branding"],
  },
  {
    id: 8,
    title: "Flyers Promocionais",
    category: "Flyers",
    image: "/uploads/fliyers.jpeg",
    description: "Design de flyers para campanhas promocionais e marketing digital",
    tags: ["Flyer", "Marketing", "Promoção"],
  },
];

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Trabalhos em <span className="gradient-text">destaque</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            Uma seleção dos meus melhores projetos de design, branding e identidade visual
          </p>
        </ScrollReveal>

        {/* Filter Tabs */}
        <ScrollReveal className="mb-10">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-gradient-to-r from-[#FF6B2B] to-[#FF2D55] text-white shadow-lg shadow-[#FF6B2B]/20"
                    : "glass text-muted-foreground hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Portfolio Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="group relative overflow-hidden rounded-2xl glass cursor-pointer">
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    {/* Overlay on hover */}
                    <motion.div
                      initial={false}
                      animate={{
                        opacity: hoveredId === item.id ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent flex flex-col justify-end p-4 sm:p-5"
                    >
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {item.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded-md bg-[#FF6B2B]/20 text-[#FF6B2B] text-[10px] font-semibold"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h4 className="text-white text-sm sm:text-base font-bold">
                        {item.title}
                      </h4>
                      <p className="text-white/50 text-xs sm:text-sm mt-1 line-clamp-2">
                        {item.description}
                      </p>

                      {/* Action buttons */}
                      <div className="flex gap-2 mt-3">
                        <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FF6B2B] text-white text-xs font-semibold hover:bg-[#FF6B2B]/90 transition-colors">
                          <Eye size={12} />
                          Ver Detalhes
                        </button>
                        <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 text-white text-xs font-semibold hover:bg-white/20 transition-colors">
                          <ExternalLink size={12} />
                          Projeto
                        </button>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Tools section */}
        <ScrollReveal className="mt-16">
          <div className="glass rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 text-center">
              Ferramentas Utilizadas
            </h3>
            <p className="text-muted-foreground text-sm text-center mb-6">
              Domino as principais ferramentas da Adobe Creative Suite
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Photoshop", "Illustrator", "Premiere Pro", "After Effects", "InDesign"].map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 rounded-xl bg-accent border border-border text-foreground text-sm font-medium hover:border-[#FF6B2B]/30 hover:text-[#FF6B2B] transition-all"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
