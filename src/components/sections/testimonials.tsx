import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { RevealOnScroll } from "@/components/animations/reveal-on-scroll";
import { testimonials, awards } from "@/data/content";
import { Star, Quote, Trophy } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger";

export function Testimonials() {
  return (
    <Section id="testimonials" bg="light" withGrid>
      <RevealOnScroll>
        <SectionTitle
          badge="Testimonials"
          subtitle="Don't take our word for it. Here's what business leaders and technology executives say about partnering with D-World Solutions."
        >
          Trusted by Industry
          <br />
          Leaders Worldwide
        </SectionTitle>
      </RevealOnScroll>

      <StaggerContainer className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <StaggerItem key={t.id}>
            <div className="h-full rounded-2xl bg-white border border-border p-7 flex flex-col hover:border-secondary/20 hover:shadow-lg transition-all duration-300">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-secondary/20 mb-3 flex-shrink-0" />
              <p className="text-primary/80 text-sm leading-relaxed mb-6 flex-1">
                {t.content}
              </p>
              <div className="flex items-center gap-3 pt-5 border-t border-border">
                <div className="relative w-10 h-10 rounded-full overflow-hidden bg-light-gray flex-shrink-0">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-heading font-semibold text-primary text-sm">{t.name}</p>
                  <p className="text-xs text-muted-text">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}

export function Awards() {
  return (
    <Section id="awards" bg="white" className="py-12 md:py-16 mt-0" withNoise>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {awards.map((award, i) => (
          <RevealOnScroll key={i} delay={i * 0.1}>
            <div className="text-center">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-7 h-7 text-amber-600" />
              </div>
              <p className="font-heading font-semibold text-primary text-sm mb-1">
                {award.title}
              </p>
              <p className="text-xs text-muted-text">{award.org}</p>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </Section>
  );
}
