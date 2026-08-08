import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { RevealOnScroll } from "@/components/animations/reveal-on-scroll";
import { ArrowRight, Calendar } from "lucide-react";

export function FinalCTA() {
  return (
    <Section id="cta" bg="dark" withNoise className="py-20 md:py-28">
      <div className="relative">
        <div className="absolute -top-20 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl pointer-events-none" />

        <RevealOnScroll>
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.15]">
              Ready to Build Something
              <br />
              <span className="text-gradient">Extraordinary Together?</span>
            </h2>
            <p className="mt-5 text-white/60 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
              Let&apos;s discuss your project and explore how D-World Solutions can help you
              achieve your digital transformation goals.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="secondary"
                size="xl"
                href="#contact"
                as="a"
                className="bg-white hover:bg-white/90 text-primary border-0"
              >
                <Calendar className="w-5 h-5" />
                Book a Free Discovery Call
              </Button>
              <Button
                variant="ghost"
                size="xl"
                href="#contact"
                as="a"
                className="text-white border border-white/20 hover:bg-white/10"
              >
                Contact Sales
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </Section>
  );
}
