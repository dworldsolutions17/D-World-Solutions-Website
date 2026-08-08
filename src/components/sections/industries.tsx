import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Card } from "@/components/ui/card";
import { RevealOnScroll } from "@/components/animations/reveal-on-scroll";
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger";
import { industries } from "@/data/content";
import { Building2 } from "lucide-react";

export function Industries() {
  return (
    <Section id="industries" bg="light" withGrid>
      <RevealOnScroll>
        <SectionTitle
          badge="Industries"
          subtitle="Our expertise spans across diverse sectors, enabling us to deliver tailored solutions for any business domain."
        >
          Industries We
          <br />
          Empower Digitally
        </SectionTitle>
      </RevealOnScroll>

      <StaggerContainer className="mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {industries.map((industry, i) => (
          <StaggerItem key={i}>
            <Card
              hover={true}
              padding="sm"
              className="text-center py-6 hover:border-secondary/30 hover:bg-gradient-to-b hover:from-secondary/5 hover:to-transparent cursor-default"
            >
              <Building2 className="w-7 h-7 text-secondary/60 mx-auto mb-3" />
              <p className="font-heading font-semibold text-sm text-primary">{industry}</p>
            </Card>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
