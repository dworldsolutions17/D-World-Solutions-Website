import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { RevealOnScroll } from "@/components/animations/reveal-on-scroll";
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger";
import { Button } from "@/components/ui/button";
import { team } from "@/data/content";
import { ArrowRight, Linkedin } from "lucide-react";

export function AboutCompany() {
  return (
    <Section id="about" bg="white" withGrid>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <RevealOnScroll direction="left">
          <div>
            <span className="inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-secondary uppercase mb-4">
              About Us
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary tracking-tight leading-[1.15] mb-6">
              We Are Architects of
              <br />
              <span className="text-gradient">Digital Transformation</span>
            </h2>
            <div className="space-y-4 text-muted-text leading-relaxed">
              <p>
                Founded with a vision to bridge the gap between ambitious businesses and
                world-class technology, D-World Solutions has evolved into a premier digital
                transformation partner for companies worldwide.
              </p>
              <p>
                Our team of 20+ engineers, designers, and strategists brings together expertise
                from top technology companies and startups, united by a passion for building
                products that make a measurable impact.
              </p>
              <p>
                Headquartered in Karachi, Pakistan, we serve clients across North America, Europe,
                the Middle East, and Asia Pacific with the same dedication to quality and
                innovation that has earned us a 98% client satisfaction rate.
              </p>
            </div>
            <div className="mt-8 flex gap-3">
              <Button variant="accent" href="#contact" as="a">
                Partner With Us
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="secondary" href="#case-studies">
                View Our Work
              </Button>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll direction="right">
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] max-w-md mx-auto lg:ml-auto">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=625&fit=crop"
                alt="D-World Solutions Team"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-border hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center">
                  <span className="text-success font-bold text-lg">98%</span>
                </div>
                <div>
                  <p className="font-heading font-bold text-primary text-sm">Client Satisfaction</p>
                  <p className="text-xs text-muted-text">Based on 120+ projects</p>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </Section>
  );
}

export function TeamSection() {
  return (
    <Section id="team" bg="light">
      <RevealOnScroll>
        <SectionTitle
          badge="Our Team"
          subtitle="Meet the talented people behind D-World Solutions who bring creativity, expertise, and passion to every project."
        >
          Meet the People
          <br />
          Behind the Magic
        </SectionTitle>
      </RevealOnScroll>

      <StaggerContainer className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {team.map((member, i) => (
          <StaggerItem key={i}>
            <div className="group text-center">
              <div className="relative w-24 h-24 md:w-28 md:h-28 mx-auto mb-4 rounded-2xl overflow-hidden bg-light-gray">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-2">
                  <Linkedin className="w-5 h-5 text-white" />
                </div>
              </div>
              <h4 className="font-heading font-semibold text-primary text-sm">
                {member.name}
              </h4>
              <p className="text-xs text-muted-text mt-0.5">{member.role}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
