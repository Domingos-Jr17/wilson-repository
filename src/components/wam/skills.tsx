"use client";

import { ScrollReveal } from "./scroll-reveal";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "Adobe Photoshop", level: 95, color: "from-[#31A8FF] to-[#001E36]" },
  { name: "Adobe Illustrator", level: 90, color: "from-[#FF9A00] to-[#330000]" },
  { name: "Adobe Premiere Pro", level: 85, color: "from-[#9999FF] to-[#00005B]" },
  { name: "Adobe After Effects", level: 80, color: "from-[#9999FF] to-[#CF96FD]" },
  { name: "Adobe InDesign", level: 85, color: "from-[#FF3366] to-[#49021F]" },
];

function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="group">
      <div className="flex items-center justify-between mb-3">
        <span className="text-foreground font-semibold text-sm sm:text-base group-hover:text-[#FF6B2B] transition-colors">
          {name}
        </span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: delay + 0.5 }}
          className="text-muted-foreground text-sm font-medium"
        >
          {level}%
        </motion.span>
      </div>
      <div className="h-2.5 rounded-full bg-secondary overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, delay, ease: [0.25, 0.4, 0.25, 1] }}
          className={`h-full rounded-full bg-gradient-to-r ${color} relative`}
        >
          <div className="absolute inset-0 overflow-hidden rounded-full">
            <motion.div
              className="absolute inset-y-0 w-20 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{ x: ["-80px", "200px"] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
                delay: delay + 1,
              }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* Real Adobe App Logos as SVG */
function PhotoshopLogo() {
  return (
    <svg viewBox="0 0 48 48" className="w-full h-full">
      <rect width="48" height="48" rx="10" fill="#001E36"/>
      <path d="M12 34V14h6.5c3.5 0 6 1.5 6 5 0 3-2 5-5.5 5H16v10h-4zm4-13.5h2c2 0 3-1 3-2.5s-1-2.5-3-2.5h-2v5z" fill="#31A8FF"/>
    </svg>
  );
}

function IllustratorLogo() {
  return (
    <svg viewBox="0 0 48 48" className="w-full h-full">
      <rect width="48" height="48" rx="10" fill="#330000"/>
      <path d="M17 34l1.5-5h7l1.5 5h4.5L25 14h-5l-6.5 20H17zm4-8.5l2-7h.5l2 7h-4.5zM30 14v3h3v-3h-3z" fill="#FF9A00"/>
      <rect x="30" y="19" width="3" height="15" fill="#FF9A00"/>
    </svg>
  );
}

function PremiereLogo() {
  return (
    <svg viewBox="0 0 48 48" className="w-full h-full">
      <rect width="48" height="48" rx="10" fill="#00005B"/>
      <path d="M12 34V14h6c4 0 7 2 7 6s-3 6-7 6h-2v8h-4zm4-11.5h2c2 0 3.5-1 3.5-2.5S20 17.5 18 17.5h-2v5z" fill="#9999FF"/>
    </svg>
  );
}

function AfterEffectsLogo() {
  return (
    <svg viewBox="0 0 48 48" className="w-full h-full">
      <rect width="48" height="48" rx="10" fill="#00005B"/>
      <path d="M16 34l1.5-5h7l1.5 5h4.5L24 14h-5l-6.5 20H16zm4-8.5l2-7h.5l2 7h-4.5zM33 20c-2.5 0-4 1.5-4 4s1.5 4 4 4c1.5 0 2.5-.5 3.5-1.5v3c-1 1-2.5 1.5-4 1.5-4 0-7-2.5-7-7s3-7 7-7c1.5 0 3 .5 4 1.5v3c-1-1-2-1.5-3.5-1.5z" fill="#CF96FD"/>
    </svg>
  );
}

function InDesignLogo() {
  return (
    <svg viewBox="0 0 48 48" className="w-full h-full">
      <rect width="48" height="48" rx="10" fill="#49021F"/>
      <path d="M16 34V14h4v20h-4zm6-10c0-4 2.5-7 6.5-7 1.5 0 3 .5 4 1.5v3.5c-1-1-2-1.5-3.5-1.5-2 0-3.5 1.5-3.5 3.5s1.5 3.5 3.5 3.5c1.5 0 2.5-.5 3.5-1.5v3.5c-1 1-2.5 1.5-4 1.5-4 0-6.5-3-6.5-7z" fill="#FF3366"/>
    </svg>
  );
}

function XDLogo() {
  return (
    <svg viewBox="0 0 48 48" className="w-full h-full">
      <rect width="48" height="48" rx="10" fill="#470137"/>
      <path d="M14 14l5 8-5 8h4l3-5 3 5h4l-5-8 5-8h-4l-3 5-3-5h-4zM32 14l3 4 3-4h3l-4.5 6 4.5 6h-3l-3-4-3 4h-3l4.5-6L29 14h3z" fill="#FF61F6"/>
    </svg>
  );
}

const adobeApps = [
  { name: "Photoshop", Logo: PhotoshopLogo },
  { name: "Illustrator", Logo: IllustratorLogo },
  { name: "Premiere", Logo: PremiereLogo },
  { name: "After Effects", Logo: AfterEffectsLogo },
  { name: "InDesign", Logo: InDesignLogo },
  { name: "XD", Logo: XDLogo },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FF2D55]/[0.02] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF6B2B]/10 border border-[#FF6B2B]/20 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#FF6B2B] animate-pulse" />
            <span className="text-[#FF6B2B] text-sm font-medium">Skills</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Ferramentas & <span className="gradient-text">Habilidades</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            Domínio completo das ferramentas Adobe Creative Suite
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Skills Bars */}
          <ScrollReveal direction="left">
            <div className="space-y-6 sm:space-y-8">
              {skills.map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={skill.color}
                  delay={i * 0.15}
                />
              ))}
            </div>
          </ScrollReveal>

          {/* Adobe App Logos Grid */}
          <ScrollReveal direction="right">
            <div className="relative">
              <div className="glass rounded-3xl p-8 sm:p-10">
                <div className="grid grid-cols-3 gap-5">
                  {adobeApps.map((app, i) => (
                    <motion.div
                      key={app.name}
                      whileHover={{ scale: 1.12, rotate: 2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex flex-col items-center gap-2.5 cursor-pointer"
                    >
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                        <app.Logo />
                      </div>
                      <span className="text-muted-foreground text-[10px] sm:text-xs font-medium text-center">
                        {app.name}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Experience badge */}
                <div className="mt-8 pt-6 border-t border-border flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-xs font-medium uppercase tracking-wider">
                      Experiência
                    </p>
                    <p className="text-foreground text-2xl font-bold mt-1">
                      5+ <span className="text-sm font-normal text-muted-foreground">anos</span>
                    </p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs font-medium uppercase tracking-wider">
                      Projetos
                    </p>
                    <p className="text-foreground text-2xl font-bold mt-1">
                      200+ <span className="text-sm font-normal text-muted-foreground">completos</span>
                    </p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs font-medium uppercase tracking-wider">
                      Clientes
                    </p>
                    <p className="text-foreground text-2xl font-bold mt-1">
                      50+ <span className="text-sm font-normal text-muted-foreground">satisfeitos</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
