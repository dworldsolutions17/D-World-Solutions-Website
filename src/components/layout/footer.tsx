import { Link } from "react-router-dom";
import {
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Facebook,
  Instagram,
  ArrowUpRight,
} from "lucide-react";
import { siteConfig } from "@/data/content";

const footerLinks = {
  Services: [
    "Web Development",
    "Mobile Apps",
    "AI Solutions",
    "Cloud Infrastructure",
    "Digital Marketing",
    "UI/UX Design",
  ],
  Company: ["About Us", "Case Studies", "Careers", "Blog", "Contact"],
  Support: ["Help Center", "Documentation", "API Reference", "Status"],
};

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container-main">
        <div className="py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <img
                src="/logo_dws.png"
                alt="D-World Solutions"
                className=" w-24 brightness-0 invert"
              />
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-6">
              Premium technology and digital transformation agency. We build cutting-edge
              solutions that help businesses scale, innovate, and lead in their industries.
            </p>
            <div className="space-y-3 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                <span>{siteConfig.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-white transition-colors">
                  {siteConfig.phone}
                </a>
              </div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-heading font-semibold text-white mb-4 text-sm uppercase tracking-wider">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      to="#"
                      className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-1 group"
                    >
                      {link}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} D-World Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
                {[
                  { icon: Linkedin, href: siteConfig.social.linkedin },
                  { icon: Instagram, href: siteConfig.social.instagram },
                  { icon: Facebook, href: siteConfig.social.facebook },
                ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-all"
                  aria-label="Social media"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <div className="flex gap-4 text-sm text-white/40">
              <Link to="#" className="hover:text-white transition-colors">Privacy</Link>
              <Link to="#" className="hover:text-white transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
