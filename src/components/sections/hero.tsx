import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ParticleBackground } from "@/components/animations/particle-background";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-light-gray via-white to-white overflow-hidden">
      <ParticleBackground />
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-secondary/8 to-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-accent/8 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="container-main relative z-10 py-20 md:py-28">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-1.5 text-xs font-medium text-muted-text mb-8">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              Available for new projects — Let&apos;s build something great
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-primary leading-[1.08]"
          >
            We Build Digital
            <br />
            <span className="text-gradient">Products That Scale</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 md:mt-8 text-base md:text-lg text-muted-text leading-relaxed max-w-2xl mx-auto"
          >
            D-World Solutions is a premium technology agency specializing in custom web
            applications, mobile apps, AI solutions, and cloud infrastructure that help
            businesses accelerate growth and achieve digital excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="accent" size="xl" href="#contact" as="a">
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="secondary" size="xl" href="#services" as="a">
              <Play className="w-4 h-4" />
              Explore Services
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 md:mt-16 flex items-center justify-center gap-8 text-sm text-muted-text"
          >
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full border-2 border-white bg-light-gray flex items-center justify-center overflow-hidden"
                >
                  <div className="w-full h-full bg-gradient-to-br from-secondary/30 to-accent/30" />
                </div>
              ))}
            </div>
            <span>
              <strong className="text-primary">3+</strong> businesses scaled globally
            </span>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}
