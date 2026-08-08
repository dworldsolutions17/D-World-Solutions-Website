import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { RevealOnScroll } from "@/components/animations/reveal-on-scroll";
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger";
import { faqs } from "@/data/content";
import { Plus, Minus } from "lucide-react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section id="faq" bg="white" withGrid>
      <RevealOnScroll>
        <SectionTitle
          badge="FAQ"
          subtitle="Quick answers to common questions about our services, process, and how we work with clients."
        >
          Frequently Asked
          <br />
          Questions
        </SectionTitle>
      </RevealOnScroll>

      <StaggerContainer className="mt-14 max-w-3xl mx-auto space-y-3">
        {faqs.map((faq, i) => (
          <StaggerItem key={i}>
            <div className="rounded-2xl border border-border bg-white overflow-hidden hover:border-secondary/20 transition-colors duration-300">
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left"
                aria-expanded={openIndex === i}
              >
                <span className="font-heading font-semibold text-primary text-sm md:text-base pr-4">
                  {faq.question}
                </span>
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    openIndex === i
                      ? "bg-primary text-white"
                      : "bg-light-gray text-muted-text"
                  }`}
                >
                  {openIndex === i ? (
                    <Minus className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 md:px-6 pb-5 md:pb-6 text-sm text-muted-text leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
