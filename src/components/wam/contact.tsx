"use client";

import { useState } from "react";
import { ScrollReveal } from "./scroll-reveal";
import { motion } from "framer-motion";
import {
  Mail,
  Linkedin,
  Instagram,
  Phone,
  Send,
  CheckCircle,
  Loader2,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "wilson.macamo@email.com",
    href: "mailto:wilson.macamo@email.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/wilsonmacamo",
    href: "https://linkedin.com/in/wilsonmacamo",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@Wilson Aurelio Massone",
    href: "https://instagram.com/",
  },
  {
    icon: Phone,
    label: "Telefone",
    value: "+258 84 4695 104",
    href: "tel:+258844695104",
  },
  {
    icon: Phone,
    label: "Telefone",
    value: "+258 87 452 6997",
    href: "tel:+258874526997",
  },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Erro ao enviar mensagem");
      }

      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch {
      setError("Erro ao enviar mensagem. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF6B2B]/10 border border-[#FF6B2B]/20 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#FF6B2B] animate-pulse" />
            <span className="text-[#FF6B2B] text-sm font-medium">Contato</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Vamos <span className="gradient-text">conversar</span>
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto text-base sm:text-lg">
            Pronto para dar o próximo passo? Entre em contato e vamos começar
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Form */}
          <ScrollReveal direction="left" className="lg:col-span-3">
            <div className="glass rounded-3xl p-6 sm:p-8">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                    <CheckCircle size={32} className="text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Mensagem Enviada!
                  </h3>
                  <p className="text-white/40">
                    Obrigado pelo contato. Responderei em breve!
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-white/60 text-sm font-medium mb-2"
                    >
                      Nome
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-[#FF6B2B]/50 focus:ring-1 focus:ring-[#FF6B2B]/50 transition-all"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-white/60 text-sm font-medium mb-2"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-[#FF6B2B]/50 focus:ring-1 focus:ring-[#FF6B2B]/50 transition-all"
                      placeholder="seuemail@exemplo.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-white/60 text-sm font-medium mb-2"
                    >
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-[#FF6B2B]/50 focus:ring-1 focus:ring-[#FF6B2B]/50 transition-all resize-none"
                      placeholder="Descreva o seu projeto..."
                    />
                  </div>

                  {error && (
                    <p className="text-red-400 text-sm">{error}</p>
                  )}

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#FF6B2B] to-[#FF2D55] text-white font-semibold text-base hover:shadow-lg hover:shadow-[#FF6B2B]/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Enviar Mensagem
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </ScrollReveal>

          {/* Contact Info */}
          <ScrollReveal direction="right" className="lg:col-span-2">
            <div className="space-y-4">
              {contactInfo.map((info, i) => (
                <motion.a
                  key={i}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 glass rounded-xl p-4 group hover:border-[#FF6B2B]/20 transition-all"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#FF6B2B]/10 to-[#FF2D55]/10 border border-[#FF6B2B]/10 flex items-center justify-center group-hover:from-[#FF6B2B]/20 group-hover:to-[#FF2D55]/20 transition-all">
                    <info.icon
                      size={18}
                      className="text-[#FF6B2B]"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-white/40 text-xs font-medium">
                      {info.label}
                    </p>
                    <p className="text-white text-sm font-medium truncate">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}

              {/* Social Links */}
              <div className="pt-4">
                <p className="text-white/30 text-xs font-medium uppercase tracking-wider mb-3">
                  Redes Sociais
                </p>
                <div className="flex gap-3">
                  {[
                    { icon: Instagram, href: "https://instagram.com/", label: "Instagram" },
                    { icon: Linkedin, href: "https://linkedin.com/in/wilsonmacamo", label: "LinkedIn" },
                    { icon: Mail, href: "mailto:wilson.macamo@email.com", label: "Email" },
                  ].map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-11 h-11 rounded-xl glass flex items-center justify-center hover:border-[#FF6B2B]/30 transition-all group"
                      aria-label={social.label}
                    >
                      <social.icon
                        size={18}
                        className="text-white/40 group-hover:text-[#FF6B2B] transition-colors"
                      />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
