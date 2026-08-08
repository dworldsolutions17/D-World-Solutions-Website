import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { RevealOnScroll } from "@/components/animations/reveal-on-scroll";
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger";
import { techStack } from "@/data/content";

export function TechnologyStack() {
  return (
    <Section id="tech-stack" bg="light">
      <RevealOnScroll>
        <SectionTitle
          badge="Our Stack"
          subtitle="We use battle-tested, modern technologies to build secure, scalable, and high-performance digital solutions for every project."
        >
          Powered by Modern
          <br />
          Technology Stack
        </SectionTitle>
      </RevealOnScroll>

      <StaggerContainer className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(techStack).map(([category, tools]) => (
          <StaggerItem key={category}>
            <div className="rounded-2xl border border-border bg-white p-6 hover:border-secondary/20 hover:shadow-lg transition-all duration-300">
              <h3 className="font-heading font-semibold text-primary text-sm uppercase tracking-wider mb-5">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="inline-flex items-center rounded-lg bg-light-gray px-3.5 py-2 text-xs font-medium text-primary/80 hover:bg-secondary/10 hover:text-secondary transition-colors cursor-default"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
