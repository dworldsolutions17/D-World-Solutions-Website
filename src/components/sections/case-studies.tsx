import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Badge } from "@/components/ui/badge";
import { RevealOnScroll } from "@/components/animations/reveal-on-scroll";
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger";
import { caseStudies } from "@/data/content";
import { ArrowUpRight } from "lucide-react";

export function CaseStudies() {
  return (
    <Section id="case-studies" bg="white" withNoise>
      <RevealOnScroll>
        <SectionTitle
          badge="Case Studies"
          subtitle="Explore how we've helped businesses across industries achieve remarkable digital transformation and measurable growth."
        >
          Proven Success
          <br />
          Stories That Speak
        </SectionTitle>
      </RevealOnScroll>

      <StaggerContainer className="mt-14 space-y-10">
        {caseStudies.map((study) => (
          <StaggerItem key={study.id}>
            <div className="group rounded-3xl border border-border bg-white overflow-hidden hover:shadow-xl hover:shadow-secondary/5 transition-all duration-500">
              <div className="grid md:grid-cols-2">
                <div className="relative h-64 md:h-full min-h-[300px] overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-white/90 text-primary">{study.category}</Badge>
                  </div>
                </div>

                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors">
                    {study.title}
                  </h3>

                  <div className="space-y-4 mb-6">
                    <div>
                      <p className="text-xs font-semibold text-muted-text uppercase tracking-wider mb-1">
                        Challenge
                      </p>
                      <p className="text-sm text-primary/80 leading-relaxed">
                        {study.challenge}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-muted-text uppercase tracking-wider mb-1">
                        Solution
                      </p>
                      <p className="text-sm text-primary/80 leading-relaxed">
                        {study.solution}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 p-4 rounded-2xl bg-light-gray mb-6">
                    {study.metrics.map((metric: { label: string; value: string }, i: number) => (
                      <div key={i} className="text-center">
                        <div className="font-heading text-xl font-bold text-secondary">
                          {metric.value}
                        </div>
                        <div className="text-xs text-muted-text mt-0.5">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-secondary-light transition-colors group/link"
                  >
                    Read Full Case Study
                    <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
