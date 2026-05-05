"use client";

import { motion } from "framer-motion";

export function FloatingShapes() {
  const shapes = [
    { size: 300, x: "10%", y: "20%", delay: 0, duration: 20, class: "floating-shape-orange" },
    { size: 200, x: "80%", y: "10%", delay: 2, duration: 25, class: "floating-shape-yellow" },
    { size: 250, x: "70%", y: "60%", delay: 4, duration: 22, class: "floating-shape-red" },
    { size: 180, x: "20%", y: "70%", delay: 1, duration: 18, class: "floating-shape-orange" },
    { size: 150, x: "50%", y: "40%", delay: 3, duration: 24, class: "floating-shape-yellow" },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-3xl ${shape.class}`}
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
            background: "radial-gradient(circle, rgba(255,107,43,0.04) 0%, transparent 70%)",
          }}
          animate={{
            y: [0, -30, 15, -20, 0],
            x: [0, 15, -10, 20, 0],
            scale: [1, 1.05, 0.95, 1.02, 1],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            delay: shape.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
