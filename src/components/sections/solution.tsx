import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { RevealOnScroll } from "@/components/animations/reveal-on-scroll";
import { Zap, TrendingUp, Layers, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const solutions = [
  {
    icon: Zap,
    title: "Lightning-Fast Digital Products",
    description:
      "Modern web and mobile applications built with Next.js, React, and Flutter that deliver sub-second load times, seamless UX, and enterprise-grade reliability.",
  },
  {
    icon: TrendingUp,
    title: "Revenue-Driven Development",
    description:
      "Every line of code we write is aligned with your business goals. We focus on features that drive user acquisition, retention, and revenue growth.",
  },
  {
    icon: Layers,
    title: "Scalable Architecture from Day One",
    description:
      "Cloud-native architectures on AWS, Azure, and GCP that grow with your business. Start lean, scale seamlessly without costly rewrites.",
  },
  {
    icon: Headphones,
    title: "Ongoing Partnership & Support",
    description:
      "We don't just build and leave. Our team provides continuous monitoring, optimization, and feature development to ensure your product keeps winning.",
  },
];

export function SolutionSection() {
  return (
    <Section id="solution" bg="light" withNoise>
      <RevealOnScroll>
        <SectionTitle
          badge="Our Approach"
          subtitle="We don't just write code. We architect digital solutions that eliminate technical bottlenecks and unlock exponential business growth."
        >
          Technology That Drives
          <br />
          Real Business Results
        </SectionTitle>
      </RevealOnScroll>

      <div className="mt-14 grid md:grid-cols-2 gap-6">
        {solutions.map((solution, i) => (
          <RevealOnScroll key={i} delay={i * 0.1}>
            <div className="group relative rounded-2xl bg-white p-8 border border-border hover:border-secondary/30 hover:shadow-lg hover:shadow-secondary/5 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/10 to-accent/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <solution.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-heading font-semibold text-primary text-lg mb-3">
                {solution.title}
              </h3>
              <p className="text-muted-text text-sm leading-relaxed">
                {solution.description}
              </p>
            </div>
          </RevealOnScroll>
        ))}
      </div>

      <RevealOnScroll delay={0.4}>
        <div className="mt-12 text-center">
          <Button variant="accent" size="lg" href="#contact" as="a">
            Discuss Your Project
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </RevealOnScroll>
    </Section>
  );
}
