export interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  image: string;
  challenge: string;
  solution: string;
  outcome: string;
  metrics: { label: string; value: string }[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

export interface TeamMember {
  name: string;
  role: string;
  avatar: string;
  linkedin?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: { name: string; avatar: string };
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}
