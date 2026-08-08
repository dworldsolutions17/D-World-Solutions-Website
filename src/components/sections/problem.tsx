import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Card } from "@/components/ui/card";
import { RevealOnScroll } from "@/components/animations/reveal-on-scroll";
import { AlertTriangle, TrendingDown, Clock, Shield } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    title: "Outdated Technology",
    description:
      "Legacy systems slow down operations, create security vulnerabilities, and prevent you from competing with tech-savvy competitors who ship faster.",
  },
  {
    icon: TrendingDown,
    title: "Missed Revenue Opportunities",
    description:
      "Poor digital presence, slow websites, and lack of mobile optimization cause you to lose customers before they even engage with your brand.",
  },
  {
    icon: Clock,
    title: "Slow Time-to-Market",
    description:
      "Long development cycles, inefficient processes, and technical debt prevent you from launching products and features when the market demands them.",
  },
  {
    icon: Shield,
    title: "Security & Compliance Risks",
    description:
      "Data breaches, non-compliance with regulations like GDPR or HIPAA, and inadequate security measures expose your business to financial and reputational damage.",
  },
];

export function ProblemSection() {
  return (
    <Section id="problem" bg="white" withGrid>
      <RevealOnScroll>
        <SectionTitle
          badge="The Challenge"
          subtitle="In today's fast-paced digital landscape, businesses face critical technology challenges that limit growth and competitive advantage."
        >
          Is Your Technology Holding
          <br />
          Your Business Back?
        </SectionTitle>
      </RevealOnScroll>

      <div className="mt-14 grid md:grid-cols-2 gap-6">
        {problems.map((problem, i) => (
          <RevealOnScroll key={i} delay={i * 0.1}>
            <Card hover={false} padding="lg" className="group border-red-100 hover:border-red-200">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0 group-hover:bg-red-100 transition-colors">
                  <problem.icon className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-primary text-lg mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-muted-text text-sm leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            </Card>
          </RevealOnScroll>
        ))}
      </div>
    </Section>
  );
}
