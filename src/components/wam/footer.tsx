"use client";

import { motion } from "framer-motion";
import { Instagram, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";
import Image from "next/image";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { href: "#home", label: "Início" },
    { href: "#about", label: "Sobre" },
    { href: "#services", label: "Serviços" },
    { href: "#portfolio", label: "Portfólio" },
    { href: "#contact", label: "Contato" },
  ];

  return (
    <footer className="relative border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-12 sm:py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl overflow-hidden">
                <Image
                  src="/uploads/wam-design_logo.jpeg"
                  alt="WAM Design"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div>
                <span className="text-base font-bold text-foreground">
                  WAM <span className="gradient-text">DESIGN</span>
                </span>
                <p className="text-[10px] text-muted-foreground tracking-[0.2em]">SOLUTION</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Transformando ideias em experiências visuais de alto impacto.
              Design estratégico para marcas que querem crescer.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-foreground font-semibold text-sm mb-4">Navegação</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-muted-foreground text-sm hover:text-[#FF6B2B] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-foreground font-semibold text-sm mb-4">Serviços</h4>
            <ul className="space-y-2">
              {[
                "Social Media Design",
                "Branding",
                "Motion Design",
                "Edição de Vídeo",
                "Design Publicitário",
              ].map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-foreground font-semibold text-sm mb-4">Contato</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:wilson.macamo@email.com"
                  className="text-muted-foreground text-sm hover:text-[#FF6B2B] transition-colors"
                >
                  wilson.macamo@email.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+258844695104"
                  className="text-muted-foreground text-sm hover:text-[#FF6B2B] transition-colors"
                >
                  +258 84 4695 104
                </a>
              </li>
              <li>
                <a
                  href="tel:+258874526997"
                  className="text-muted-foreground text-sm hover:text-[#FF6B2B] transition-colors"
                >
                  +258 87 452 6997
                </a>
              </li>
            </ul>

            {/* Social */}
            <div className="flex gap-3 mt-4">
              {[
                { icon: Instagram, href: "https://instagram.com/", label: "Instagram" },
                { icon: Linkedin, href: "https://linkedin.com/in/wilsonmacamo", label: "LinkedIn" },
                { icon: Mail, href: "mailto:wilson.macamo@email.com", label: "Email" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-accent border border-border flex items-center justify-center hover:bg-[#FF6B2B]/10 hover:border-[#FF6B2B]/20 transition-colors group"
                  aria-label={social.label}
                >
                  <social.icon
                    size={15}
                    className="text-muted-foreground group-hover:text-[#FF6B2B] transition-colors"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs sm:text-sm text-center sm:text-left">
            © {new Date().getFullYear()} WAM DESIGN Solution. Todos os direitos reservados.
          </p>
          <p className="text-muted-foreground text-xs flex items-center gap-1">
            Feito com <Heart size={12} className="text-[#FF2D55] fill-[#FF2D55]" /> por Wilson Macamo
          </p>
        </div>
      </div>

      {/* Scroll to top */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 w-11 h-11 rounded-xl bg-gradient-to-br from-[#FF6B2B] to-[#FF2D55] flex items-center justify-center shadow-lg shadow-[#FF6B2B]/20 hover:shadow-xl hover:shadow-[#FF6B2B]/30 transition-all z-40"
        aria-label="Voltar ao topo"
      >
        <ArrowUp size={18} className="text-white" />
      </motion.button>
    </footer>
  );
}
