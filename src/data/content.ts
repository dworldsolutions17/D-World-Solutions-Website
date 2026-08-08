import type { NavItem, Service, CaseStudy, Testimonial, FAQItem, BlogPost, TeamMember } from "@/types";

export const siteConfig = {
  name: "D-World Solutions",
  description: "Premium Technology & Digital Transformation Agency",
  url: "https://www.dworldsolutions.com",
  email: "info@dworldsolutions.com",
  phone: "+92 334 1570567",
  address: "R-851, Block 16, F.B. Area, Karachi, Pakistan",
  social: {
    linkedin: "https://www.linkedin.com/company/d-world-solutions/",
    // twitter: "#",
    facebook: "https://www.facebook.com/share/1W8mzRkRqk/",
    instagram: "https://www.instagram.com/dworldsolutions?igsh=dzBzemJuczBpNnBj",
  },
};

export const navItems: NavItem[] = [
  {
    label: "Services",
    href: "#services",
    children: [
      { label: "Web Development", href: "#services" },
      { label: "Mobile Apps", href: "#services" },
      { label: "AI Solutions", href: "#services" },
      { label: "Cloud Infrastructure", href: "#services" },
      { label: "Digital Marketing", href: "#services" },
      { label: "UI/UX Design", href: "#services" },
    ],
  },
  // { label: "Case Studies", href: "#case-studies" },
  { label: "About", href: "#about" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
];

export const services: Service[] = [
  {
    icon: "Globe",
    title: "Web Development",
    description:
      "High-performance web applications built with cutting-edge technologies like Next.js, React, Node.js, and NestJS for scalability and security.",
    features: [
      "Custom Web Applications",
      "E-Commerce Solutions",
      "Progressive Web Apps",
      "Headless CMS Integration",
      "API Development",
      "Performance Optimization",
    ],
  },
  {
    icon: "Smartphone",
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications using Flutter and React Native for iOS and Android.",
    features: [
      "iOS & Android Apps",
      "Cross-Platform Solutions",
      "App Store Optimization",
      "Push Notifications",
      "Offline-First Architecture",
      "Real-Time Features",
    ],
  },
  {
    icon: "BrainCircuit",
    title: "AI & Machine Learning",
    description:
      "Intelligent solutions powered by artificial intelligence, machine learning, and data analytics.",
    features: [
      "Predictive Analytics",
      "Natural Language Processing",
      "Chatbots & AI Assistants",
      "Recommendation Engines",
      "Data Pipeline Automation",
    ],
  },
  {
    icon: "Cloud",
    title: "Cloud Infrastructure",
    description:
      "Scalable, secure cloud architecture deployed on AWS, Azure, and Google Cloud Platform.",
    features: [
      "Cloud Migration",
      "Serverless Architecture",
      "DevOps & CI/CD",
      "Kubernetes & Docker",
      "Cloud Security",
      "Cost Optimization",
    ],
  },
  {
    icon: "Megaphone",
    title: "Digital Marketing",
    description:
      "Data-driven marketing strategies that drive traffic, generate leads, and grow your revenue.",
    features: [
      "SEO & Content Marketing",
      "Google & Meta Ads",
      "Social Media Management",
      "Email Campaigns",
      "Conversion Optimization",
      "Analytics & Reporting",
    ],
  },
  {
    icon: "Palette",
    title: "UI/UX Design",
    description:
      "Human-centered design that creates intuitive, accessible, and visually stunning digital experiences.",
    features: [
      "User Research",
      "Wireframing & Prototyping",
      "Design Systems",
      "Interaction Design",
      "Usability Testing",
      "Brand Identity",
    ],
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: "healthcare-platform",
    title: "Next-Gen Healthcare Management Platform",
    category: "Healthcare",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop",
    challenge:
      "A leading healthcare provider needed a unified platform to manage patient records, appointments, and telemedicine across 50+ clinics.",
    solution:
      "We built a HIPAA-compliant web and mobile platform with real-time scheduling, secure video consultations, and AI-powered diagnostic support.",
    outcome:
      "Reduced administrative workload by 60%, increased patient engagement by 3x, and processed 100K+ telemedicine consultations in the first year.",
    metrics: [
      { label: "Patient Engagement", value: "3x Increase" },
      { label: "Admin Workload", value: "60% Reduction" },
      { label: "Consultations", value: "100K+" },
    ],
  },
  {
    id: "fintech-dashboard",
    title: "Real-Time FinTech Analytics Dashboard",
    category: "FinTech",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    challenge:
      "A fintech startup needed a real-time analytics dashboard to visualize complex financial data, trading signals, and portfolio performance.",
    solution:
      "We delivered a high-frequency data visualization dashboard using Next.js, WebSockets, and D3.js, processing over 10M data points daily.",
    outcome:
      "Users gained real-time market insights, reducing decision time by 80% and increasing platform adoption by 150% within 6 months.",
    metrics: [
      { label: "Data Points/Day", value: "10M+" },
      { label: "Decision Time", value: "80% Faster" },
      { label: "Adoption Rate", value: "150% Growth" },
    ],
  },
  {
    id: "ecommerce-scale",
    title: "E-Commerce Platform Scaling",
    category: "E-Commerce",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
    challenge:
      "A fast-growing e-commerce brand faced infrastructure bottlenecks during seasonal sales, with site crashes costing millions in lost revenue.",
    solution:
      "We migrated to a microservices architecture on AWS with auto-scaling, implemented a CDN strategy, and built a headless commerce frontend.",
    outcome:
      "Successfully handled 500K concurrent users during Black Friday with 99.99% uptime and 40% faster page loads.",
    metrics: [
      { label: "Concurrent Users", value: "500K+" },
      { label: "Uptime", value: "99.99%" },
      { label: "Page Speed", value: "40% Faster" },
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Ahmed Khan",
    role: "CEO",
    company: "TechNova Solutions",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    content:
      "D-World Solutions transformed our outdated platform into a modern, high-performing application. Their team's technical expertise and project management were outstanding.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Sarah Mahmood",
    role: "CTO",
    company: "HealthFirst Group",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    content:
      "Working with D-World Solutions was a game-changer. They delivered a HIPAA-compliant healthcare platform that exceeded our expectations in every way.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Michael Chen",
    role: "Founder",
    company: "TradeFlow Capital",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    content:
      "The real-time analytics dashboard they built handles millions of data points effortlessly. Their understanding of fintech requirements is exceptional.",
    rating: 5,
  },
  {
    id: "t4",
    name: "Fatima Hassan",
    role: "Managing Director",
    company: "Global Retail Group",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    content:
      "D-World Solutions helped us scale our e-commerce operation to handle Black Friday traffic seamlessly. Our revenue increased 200% year-over-year.",
    rating: 5,
  },
  {
    id: "t5",
    name: "James Wilson",
    role: "VP Engineering",
    company: "DataStream Inc.",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face",
    content:
      "Their cloud infrastructure expertise saved us 45% on our AWS bill while improving performance. True professionals who understand enterprise needs.",
    rating: 5,
  },
  {
    id: "t6",
    name: "Aisha Rehman",
    role: "Head of Digital",
    company: "BrandVault Agency",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    content:
      "The mobile app they developed has a 4.8-star rating on both App Store and Play Store. Our user base grew from 10K to 200K in 8 months.",
    rating: 5,
  },
];

export const faqs: FAQItem[] = [
  {
    question: "What technologies does D-World Solutions specialize in?",
    answer:
      "We specialize in modern, high-performance technologies including Next.js, React, Node.js, Flutter, React Native, AWS, Azure, Google Cloud, WordPress, and Shopify. Our stack is chosen based on your specific business needs to ensure scalability, security, and performance.",
  },
  {
    question: "How long does it take to build a web or mobile application?",
    answer:
      "Project timelines vary based on complexity. A typical MVP takes 6-10 weeks, while full-scale enterprise platforms can take 3-6 months. We provide detailed timelines during the discovery phase after understanding your requirements.",
  },
  {
    question: "Do you offer post-launch support and maintenance?",
    answer:
      "Yes, we offer comprehensive post-launch support and maintenance packages. This includes 24/7 monitoring, regular updates, security patches, performance optimization, and feature enhancements. Our goal is to be your long-term technology partner.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We serve a diverse range of industries including Healthcare, FinTech, E-Commerce, Education, Real Estate, Logistics, SaaS, and Enterprise. Our adaptable approach allows us to deliver industry-specific solutions that meet regulatory and operational requirements.",
  },
  {
    question: "How do you ensure data security and compliance?",
    answer:
      "Security is built into every layer of our development process. We follow OWASP guidelines, implement end-to-end encryption, conduct regular security audits, and comply with standards including GDPR, HIPAA, PCI-DSS, and ISO 27001 depending on your industry requirements.",
  },
  {
    question: "What is your pricing model?",
    answer:
      "We offer flexible engagement models including fixed-price projects, dedicated team hiring, and time-and-materials. Pricing depends on project scope, complexity, and timeline. We provide transparent proposals with no hidden costs after a detailed discovery session.",
  },
  {
    question: "Can you work with our existing development team?",
    answer:
      "Absolutely. We regularly collaborate with in-house teams to augment capabilities, accelerate development, or provide specialized expertise. Our team integrates seamlessly with your workflows, tools, and communication channels.",
  },
  {
    question: "How do we get started with D-World Solutions?",
    answer:
      "Getting started is simple. Book a free discovery call through our website. We'll discuss your project goals, challenges, and requirements. Within 48 hours, you'll receive a detailed proposal with timeline, cost estimates, and a recommended technology approach.",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "future-of-web-dev",
    title: "The Future of Web Development: Why Next.js and Server Components Are Game-Changing",
    excerpt:
      "Explore how Next.js 15 App Router, React Server Components, and edge computing are reshaping the web development landscape for enterprise applications.",
    category: "Web Development",
    date: "2026-06-15",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
    author: { name: "Ali Raza", avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=40&h=40&fit=crop&crop=face" },
  },
  {
    id: "ai-business",
    title: "How AI is Transforming Small and Medium Enterprises in 2026",
    excerpt:
      "Discover practical AI applications that are helping SMBs automate operations, improve customer experience, and drive growth in competitive markets.",
    category: "Artificial Intelligence",
    date: "2026-05-28",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    author: { name: "Zara Malik", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=40&h=40&fit=crop&crop=face" },
  },
  {
    id: "cloud-optimization",
    title: "Cloud Cost Optimization: Strategies That Cut Infrastructure Costs by 50%",
    excerpt:
      "Learn the proven strategies our team uses to optimize cloud infrastructure costs while maintaining performance, security, and scalability.",
    category: "Cloud Computing",
    date: "2026-05-10",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
    author: { name: "Hassan Rizvi", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=40&h=40&fit=crop&crop=face" },
  },
];

export const team: TeamMember[] = [
  { name: "Shahzaib Hassan", role: "Founder & CEO", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face" },
  { name: "Amna Qureshi", role: "CTO", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face" },
  { name: "Danish Iqbal", role: "Head of Design", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face" },
  { name: "Hira Tariq", role: "Lead Developer", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face" },
  { name: "Omar Farooq", role: "Cloud Architect", avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face" },
  { name: "Nida Shaikh", role: "Marketing Lead", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face" },
];

export const processSteps = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description:
      "We dive deep into your business goals, user needs, and market landscape to define a winning strategy and technical roadmap.",
  },
  {
    step: "02",
    title: "Design & Prototyping",
    description:
      "Our designers create intuitive, accessible interfaces with interactive prototypes, validated through user testing and stakeholder feedback.",
  },
  {
    step: "03",
    title: "Development & Testing",
    description:
      "We build using agile methodology with continuous integration, automated testing, and code reviews to ensure quality at every step.",
  },
  {
    step: "04",
    title: "Deployment & Launch",
    description:
      "Seamless deployment with zero-downtime migration, comprehensive monitoring, and phased rollouts to minimize risk.",
  },
  {
    step: "05",
    title: "Growth & Optimization",
    description:
      "We continuously monitor, analyze, and optimize your product with data-driven improvements and new features to maximize ROI.",
  },
];

export const metrics = [
  { end: 5, suffix: "+", label: "Projects Delivered" },
  { end: 2, suffix: "+", label: "Businesses Scaled" },
  { end: 3, suffix: "+", label: "Industries Served" },
  { end: 98, suffix: "%", label: "Client Satisfaction" },
];

export const industries = [
  "Healthcare",
  "FinTech",
  "E-Commerce",
  "Education",
  "Real Estate",
  "Logistics",
  "SaaS & Technology",
  "Entertainment",
  "Manufacturing",
  "Government",
];

export const techStack = {
  frontend: ["React", "Next.js", "Vue.js", "Tailwind CSS", "Sass"],
  backend: ["Node.js", "Nestjs", "DotNet", "Express.js", "Python"],
  mobile: ["Flutter", "React Native"],
  cms: ["WordPress", "Shopify", "Strapi"],
  cloud: ["AWS", "Azure", "Google Cloud", "DigitalOcean"],
  marketing: ["Google Ads", "Meta Ads", "HubSpot", "SEMrush"],
};

export const benefits = [
  {
    title: "Proven Track Record",
    description: "5+ projects delivered across 3+ industries with 98% client satisfaction rate.",
  },
  {
    title: "Dedicated Teams",
    description: "Hand-picked developers, designers, and strategists dedicated exclusively to your project.",
  },
  {
    title: "Agile Development",
    description: "Transparent, iterative development with regular updates, demos, and feedback cycles.",
  },
  {
    title: "Enterprise Security",
    description: "Bank-level security with encryption, regular audits, and compliance with industry standards.",
  },
  {
    title: "Scalable Architecture",
    description: "Future-proof solutions built to scale from startup to enterprise without rebuilding.",
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock monitoring and support to ensure your systems run smoothly at all times.",
  },
];

export const clientLogos = [
  { name: "The Health Orbit", logo: "/logos/client1.svg" },
  { name: "Advanced Lab", logo: "/logos/client2.svg" },
  { name: "KMC", logo: "/logos/client3.svg" },
   { name: "The Kidz Planet", logo: "/logos/client4.svg" },
  { name: "ORR Clothing Brand", logo: "/logos/client5.svg" },
  { name: "Mughal Media", logo: "/logos/client6.svg" },
];

export const awards = [
  { title: "Best Technology Agency 2025", org: "Pakistan Tech Awards" },
  { title: "Top 10 Mobile App Developer", org: "Clutch Global" },
  { title: "Excellence in AI Innovation", org: "Digital Leaders Summit" },
  { title: "Cloud Partner of the Year", org: "AWS Partner Awards" },
];
