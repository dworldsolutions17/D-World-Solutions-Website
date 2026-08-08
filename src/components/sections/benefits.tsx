import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { RevealOnScroll } from "@/components/animations/reveal-on-scroll";
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger";
import { CheckCircle, Shield, Zap, Users, TrendingUp, Headphones, Layers } from "lucide-react";
import { benefits } from "@/data/content";

const iconMap = [Zap, TrendingUp, Users, Shield, Layers, Headphones];

export function Benefits() {
  return (
    <Section id="benefits" bg="light">
      <RevealOnScroll>
        <SectionTitle
          badge="Why Partner With Us"
          subtitle="We bring the perfect combination of technical excellence, strategic thinking, and business acumen to every project."
        >
          Built to Deliver
          <br />
          Exceptional Results
        </SectionTitle>
      </RevealOnScroll>

      <StaggerContainer className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit, i) => {
          const Icon = iconMap[i] || CheckCircle;
          return (
            <StaggerItem key={i}>
              <div className="group rounded-2xl bg-white p-7 border border-border hover:border-secondary/20 hover:shadow-lg hover:shadow-secondary/5 transition-all duration-300 h-full">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-secondary/10 to-accent/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-5 h-5 text-secondary" />
                </div>
                <h3 className="font-heading font-semibold text-primary text-lg mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-text text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </Section>
  );
}
