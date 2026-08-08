import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  Smartphone,
  BrainCircuit,
  Cloud,
  Megaphone,
  Palette,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RevealOnScroll } from "@/components/animations/reveal-on-scroll";
import { services } from "@/data/content";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Smartphone,
  BrainCircuit,
  Cloud,
  Megaphone,
  Palette,
};

export function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Section id="services" bg="white" withGrid>
      <RevealOnScroll>
        <SectionTitle
          badge="What We Do"
          subtitle="End-to-end digital services designed to transform your business with cutting-edge technology and strategic expertise."
        >
          Comprehensive Digital
          <br />
          Services for Modern Enterprises
        </SectionTitle>
      </RevealOnScroll>

      <div className="mt-14 grid lg:grid-cols-[280px_1fr] gap-10">
        <div className="space-y-2">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Globe;
            return (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left text-sm font-medium transition-all duration-300 ${
                  activeIndex === i
                    ? "bg-primary text-white shadow-lg shadow-primary/15"
                    : "text-primary/70 hover:bg-light-gray hover:text-primary"
                }`}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                <span>{service.title}</span>
              </button>
            );
          })}
        </div>

        <div className="relative min-h-[360px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl border border-border bg-white p-8 md:p-10"
            >
              <div className="flex items-center gap-4 mb-6">
                {(() => {
                  const Icon = iconMap[services[activeIndex].icon] || Globe;
                  return (
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary/10 to-accent/10 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-secondary" />
                    </div>
                  );
                })()}
                <div>
                  <Badge>Popular</Badge>
                  <h3 className="font-heading text-2xl font-bold text-primary mt-1">
                    {services[activeIndex].title}
                  </h3>
                </div>
              </div>

              <p className="text-muted-text leading-relaxed mb-8">
                {services[activeIndex].description}
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {services[activeIndex].features.map((feature: string, j: number) => (
                  <div key={j} className="flex items-center gap-2 text-sm text-primary/80">
                    <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <Button variant="accent" href="#contact" as="a">
                Get Started with {services[activeIndex].title}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}
