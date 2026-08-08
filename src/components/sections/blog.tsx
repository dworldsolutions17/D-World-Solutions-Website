import { Link } from "react-router-dom";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RevealOnScroll } from "@/components/animations/reveal-on-scroll";
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger";
import { blogPosts } from "@/data/content";
import { ArrowUpRight, Clock, Calendar } from "lucide-react";

export function Blog() {
  return (
    <Section id="insights" bg="white">
      <RevealOnScroll>
        <SectionTitle
          badge="Insights"
          subtitle="Stay ahead with expert perspectives on technology, digital transformation, and business growth strategies."
        >
          Featured Insights
          <br />
          & Perspectives
        </SectionTitle>
      </RevealOnScroll>

      <StaggerContainer className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <StaggerItem key={post.id}>
            <Link
              to="#"
              className="group block rounded-2xl border border-border bg-white overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <Badge size="sm" className="bg-white/90 text-primary">
                    {post.category}
                  </Badge>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-4 text-xs text-muted-text mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-primary text-base mb-2 group-hover:text-secondary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-text line-clamp-2 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                    <span className="text-xs text-muted-text">{post.author.name}</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted-text group-hover:text-secondary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </div>
            </Link>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <RevealOnScroll delay={0.3}>
        <div className="mt-12 text-center">
          <Button variant="secondary" href="#">
            View All Articles
            <ArrowUpRight className="w-4 h-4" />
          </Button>
        </div>
      </RevealOnScroll>
    </Section>
  );
}
