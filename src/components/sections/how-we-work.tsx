import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { RevealOnScroll } from "@/components/animations/reveal-on-scroll";
import { processSteps } from "@/data/content";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HowWeWork() {
  return (
    <Section id="process" bg="white" withNoise>
      <RevealOnScroll>
        <SectionTitle
          badge="Our Process"
          subtitle="A proven, structured approach that ensures quality, transparency, and exceptional results at every stage."
        >
          How We Turn Ideas Into
          <br />
          Market-Leading Products
        </SectionTitle>
      </RevealOnScroll>

      <div className="mt-16 relative">
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-secondary via-accent to-transparent" />

        <div className="space-y-12 lg:space-y-0">
          {processSteps.map((step, i) => (
            <RevealOnScroll
              key={i}
              delay={i * 0.1}
              direction={i % 2 === 0 ? "left" : "right"}
            >
              <div
                className={`relative flex flex-col lg:flex-row items-start gap-6 lg:gap-12 ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } ${i !== 0 ? "mt-16 lg:mt-24" : ""}`}
              >
                <div
                  className={`flex-1 ${i % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}
                >
                  <div className="inline-flex items-center gap-3 mb-3">
                    <span className="font-heading text-5xl md:text-6xl font-bold text-gradient">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-primary mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-text text-sm leading-relaxed max-w-md">
                    {step.description}
                  </p>
                </div>

                <div className="hidden lg:flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-accent shadow-lg shadow-secondary/25 z-10">
                  <span className="text-white font-bold text-sm">0{i + 1}</span>
                </div>

                <div className="flex-1 hidden lg:block" />
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>

      <RevealOnScroll delay={0.5}>
        <div className="mt-16 text-center">
          <Button variant="accent" size="lg" href="#contact" as="a">
            Start Your Journey
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </RevealOnScroll>
    </Section>
  );
}
