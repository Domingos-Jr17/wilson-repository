"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import Image from "next/image";

const navLinks = [
  { href: "#home", label: "Início" },
  { href: "#about", label: "Sobre" },
  { href: "#services", label: "Serviços" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#skills", label: "Skills" },
  { href: "#testimonials", label: "Depoimentos" },
  { href: "#contact", label: "Contato" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navLinks.map((link) => link.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Desktop: Centered premium navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 hidden md:block transition-all duration-500 ${
          isScrolled ? "pt-3" : "pt-5"
        }`}
      >
        <div className="flex justify-center">
          <div
            className={`flex items-center gap-1 rounded-2xl transition-all duration-500 ${
              isScrolled
                ? "glass-dark dark:glass-dark glass-light px-2 py-1.5 shadow-lg shadow-black/10"
                : "bg-transparent px-2 py-1.5"
            }`}
          >
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#home");
              }}
              className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl hover:bg-white/5 transition-colors"
            >
              <div className="w-8 h-8 rounded-lg overflow-hidden">
                <Image
                  src="/uploads/wam-design_logo.jpeg"
                  alt="WAM Design"
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-[var(--wam-text)] leading-tight">
                  WAM <span className="gradient-text">DESIGN</span>
                </span>
                <span className="text-[8px] text-[var(--wam-text-faint)] tracking-[0.2em] leading-tight">
                  SOLUTION
                </span>
              </div>
            </a>

            {/* Divider */}
            <div className="w-px h-6 bg-[var(--wam-border)]" />

            {/* Centered Nav Links */}
            <div className="flex items-center gap-0.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`relative px-3 py-1.5 text-[13px] font-medium rounded-lg transition-all duration-300 ${
                    activeSection === link.href.replace("#", "")
                      ? "text-[#FF6B2B] bg-[#FF6B2B]/10"
                      : "text-[var(--wam-text-muted)] hover:text-[var(--wam-text)] hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Divider */}
            <div className="w-px h-6 bg-[var(--wam-border)]" />

            {/* Theme Toggle + CTA */}
            <div className="flex items-center gap-2 pl-1">
              <ThemeToggle />
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#contact");
                }}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-gradient-to-r from-[#FF6B2B] to-[#FF2D55] text-white text-[13px] font-semibold hover:shadow-lg hover:shadow-[#FF6B2B]/25 transition-all duration-300 hover:scale-105"
              >
                Solicitar Projeto
              </a>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile: Simple navbar with hamburger */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 md:hidden transition-all duration-500 ${
          isScrolled ? "glass shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between h-14 px-4">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded-lg overflow-hidden">
              <Image
                src="/uploads/wam-design_logo.jpeg"
                alt="WAM Design"
                width={32}
                height={32}
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-[var(--wam-text)] leading-tight">
                WAM <span className="gradient-text">DESIGN</span>
              </span>
              <span className="text-[8px] text-[var(--wam-text-faint)] tracking-[0.2em] leading-tight">
                SOLUTION
              </span>
            </div>
          </a>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[var(--wam-text-secondary)] hover:text-[var(--wam-text)] transition-colors"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-[280px] bg-[var(--wam-bg)] border-l border-[var(--wam-border)] p-6 pt-20"
            >
              <div className="flex flex-col gap-1.5">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    className={`px-4 py-3 rounded-xl text-base font-medium transition-all ${
                      activeSection === link.href.replace("#", "")
                        ? "bg-gradient-to-r from-[#FF6B2B]/10 to-[#FF2D55]/10 text-[#FF6B2B] border border-[#FF6B2B]/20"
                        : "text-[var(--wam-text-secondary)] hover:text-[var(--wam-text)] hover:bg-[var(--wam-glass-bg)]"
                    }`}
                  >
                    {link.label}
                  </motion.a>
                ))}

                <div className="mt-4 pt-4 border-t border-[var(--wam-border)]">
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick("#contact");
                    }}
                    className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-gradient-to-r from-[#FF6B2B] to-[#FF2D55] text-white font-semibold"
                  >
                    Solicitar Projeto
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
