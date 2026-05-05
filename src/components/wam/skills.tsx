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
        <span className="text-white font-semibold text-sm sm:text-base group-hover:text-[#FF6B2B] transition-colors">
          {name}
        </span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: delay + 0.5 }}
          className="text-white/50 text-sm font-medium"
        >
          {level}%
        </motion.span>
      </div>
      <div className="h-2.5 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, delay, ease: [0.25, 0.4, 0.25, 1] }}
          className={`h-full rounded-full bg-gradient-to-r ${color} relative`}
        >
          {/* Shine effect */}
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Ferramentas & <span className="gradient-text">Habilidades</span>
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto text-base sm:text-lg">
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

          {/* Visual side */}
          <ScrollReveal direction="right">
            <div className="relative">
              {/* Adobe Creative Cloud style visual */}
              <div className="glass rounded-3xl p-8 sm:p-10">
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { letter: "Ps", gradient: "from-[#31A8FF] to-[#001E36]", name: "Photoshop" },
                    { letter: "Ai", gradient: "from-[#FF9A00] to-[#330000]", name: "Illustrator" },
                    { letter: "Pr", gradient: "from-[#9999FF] to-[#00005B]", name: "Premiere" },
                    { letter: "Ae", gradient: "from-[#9999FF] to-[#CF96FD]", name: "After Effects" },
                    { letter: "Id", gradient: "from-[#FF3366] to-[#49021F]", name: "InDesign" },
                    { letter: "Xd", gradient: "from-[#FF61F6] to-[#470137]", name: "XD" },
                  ].map((app, i) => (
                    <motion.div
                      key={app.letter}
                      whileHover={{ scale: 1.1, rotate: 3 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex flex-col items-center gap-2"
                    >
                      <div
                        className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${app.gradient} flex items-center justify-center shadow-lg cursor-pointer`}
                      >
                        <span className="text-white text-lg sm:text-xl font-bold">
                          {app.letter}
                        </span>
                      </div>
                      <span className="text-white/40 text-[10px] sm:text-xs font-medium">
                        {app.name}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Experience badge */}
                <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                  <div>
                    <p className="text-white/40 text-xs font-medium uppercase tracking-wider">
                      Experiência
                    </p>
                    <p className="text-white text-2xl font-bold mt-1">
                      5+ <span className="text-sm font-normal text-white/40">anos</span>
                    </p>
                  </div>
                  <div>
                    <p className="text-white/40 text-xs font-medium uppercase tracking-wider">
                      Projetos
                    </p>
                    <p className="text-white text-2xl font-bold mt-1">
                      200+ <span className="text-sm font-normal text-white/40">completos</span>
                    </p>
                  </div>
                  <div>
                    <p className="text-white/40 text-xs font-medium uppercase tracking-wider">
                      Clientes
                    </p>
                    <p className="text-white text-2xl font-bold mt-1">
                      50+ <span className="text-sm font-normal text-white/40">satisfeitos</span>
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
