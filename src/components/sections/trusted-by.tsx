import { Section } from "@/components/ui/section";
import { metrics, clientLogos } from "@/data/content";
import { AnimatedCounter } from "@/components/animations/animated-counter";
import { RevealOnScroll } from "@/components/animations/reveal-on-scroll";

export function TrustedBy() {
  return (
    <Section bg="light" className="py-12 md:py-16">
      <RevealOnScroll>
        <p className="text-center text-sm font-medium text-muted-text mb-8 uppercase tracking-widest">
          Trusted by innovative companies worldwide
        </p>
      </RevealOnScroll>

      <RevealOnScroll delay={0.1}>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6 items-center justify-items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {clientLogos.map((client, i) => (
            <div
              key={i}
              className="h-8 md:h-10 w-auto px-4 rounded bg-gradient-to-r from-secondary/10 to-accent/10 flex items-center justify-center"
            >
              <span className="text-xs font-semibold text-muted-text">{client.name}</span>
            </div>
          ))}
        </div>
      </RevealOnScroll>
    </Section>
  );
}

export function MetricsSection() {
  return (
    <Section bg="white" className="py-16 md:py-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {metrics.map((metric, i) => (
          <RevealOnScroll key={i} delay={i * 0.1}>
            <AnimatedCounter
              end={metric.end}
              suffix={metric.suffix}
              label={metric.label}
              duration={2200}
            />
          </RevealOnScroll>
        ))}
      </div>
    </Section>
  );
}
