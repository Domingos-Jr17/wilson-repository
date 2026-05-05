"use client";

import { Loader } from "@/components/wam/loader";
import { CustomCursor } from "@/components/wam/custom-cursor";
import { FloatingShapes } from "@/components/wam/floating-shapes";
import { Navbar } from "@/components/wam/navbar";
import { Hero } from "@/components/wam/hero";
import { About } from "@/components/wam/about";
import { Services } from "@/components/wam/services";
import { Portfolio } from "@/components/wam/portfolio";
import { Skills } from "@/components/wam/skills";
import { Testimonials } from "@/components/wam/testimonials";
import { CTA } from "@/components/wam/cta";
import { Contact } from "@/components/wam/contact";
import { Footer } from "@/components/wam/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[var(--wam-bg)]">
      {/* Premium extras */}
      <Loader />
      <CustomCursor />
      <FloatingShapes />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main className="flex-1 relative z-10">
        <Hero />

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-[var(--wam-section-divider)] to-transparent" />
        </div>

        <About />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-[var(--wam-section-divider)] to-transparent" />
        </div>

        <Services />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-[var(--wam-section-divider)] to-transparent" />
        </div>

        <Portfolio />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-[var(--wam-section-divider)] to-transparent" />
        </div>

        <Skills />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-[var(--wam-section-divider)] to-transparent" />
        </div>

        <Testimonials />

        <CTA />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-[var(--wam-section-divider)] to-transparent" />
        </div>

        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
