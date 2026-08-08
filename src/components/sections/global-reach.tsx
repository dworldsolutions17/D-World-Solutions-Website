import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { RevealOnScroll } from "@/components/animations/reveal-on-scroll";
import { Globe, MapPin } from "lucide-react";

const regions = [
  { name: "North America", countries: "USA, Canada", projects: 40 },
  { name: "Europe", countries: "UK, Germany, Netherlands", projects: 25 },
  { name: "Middle East", countries: "UAE, Saudi Arabia, Qatar", projects: 30 },
  { name: "Asia Pacific", countries: "Pakistan, India, Singapore", projects: 20 },
  { name: "Africa", countries: "Nigeria, Kenya, South Africa", projects: 5 },
];

export function GlobalReach() {
  return (
    <Section id="global-reach" bg="light" withGrid>
      <RevealOnScroll>
        <SectionTitle
          badge="Global Reach"
          subtitle="From our headquarters in Karachi, we deliver world-class digital solutions to clients across five continents."
        >
          Serving Clients
          <br />
          Around the World
        </SectionTitle>
      </RevealOnScroll>

      <RevealOnScroll delay={0.2}>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {regions.map((region, i) => (
            <div
              key={i}
              className="rounded-2xl border border-border bg-white p-5 text-center hover:border-secondary/20 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-secondary/10 to-accent/10 flex items-center justify-center mx-auto mb-3">
                <Globe className="w-5 h-5 text-secondary" />
              </div>
              <h4 className="font-heading font-semibold text-primary text-sm mb-1">
                {region.name}
              </h4>
              <p className="text-xs text-muted-text mb-2">{region.countries}</p>
              <div className="flex items-center justify-center gap-1 text-xs font-semibold text-secondary">
                <MapPin className="w-3 h-3" />
                {region.projects}+ Projects
              </div>
            </div>
          ))}
        </div>
      </RevealOnScroll>
    </Section>
  );
}
