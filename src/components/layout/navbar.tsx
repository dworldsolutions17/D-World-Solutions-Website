import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navItems } from "@/data/content";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-white/80 backdrop-blur-xl border-b border-border/50 shadow-sm"
            : "bg-transparent"
        )}
      >
        <nav className="container-main flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center gap-2.5 z-50">
            <img
              src="/logo_dws.png"
              alt="D-World Solutions"
              className="w-20"
            />
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-primary/80 hover:text-primary hover:bg-light-gray transition-colors"
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      className={cn(
                        "w-3.5 h-3.5 transition-transform duration-200",
                        activeDropdown === item.label && "rotate-180"
                      )}
                    />
                  )}
                </a>

                {item.children && (
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-1 bg-white rounded-xl border border-border shadow-xl p-2 min-w-[220px]"
                      >
                        {item.children.map((child: { label: string; href: string }) => (
                          <a
                            key={child.label}
                            href={child.href}
                            className="block px-4 py-2.5 rounded-lg text-sm text-muted-text hover:text-primary hover:bg-light-gray transition-colors"
                          >
                            {child.label}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" size="sm" href="#contact" as="a">
              <Phone className="w-4 h-4" />
              <span className="text-sm">Let&apos;s Talk</span>
            </Button>
            <Button variant="accent" size="sm" href="#contact" as="a">
              Book Discovery Call
            </Button>
          </div>

          <button
            className="lg:hidden z-50 p-2 rounded-lg hover:bg-light-gray transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-white flex flex-col pt-20 px-6 lg:hidden"
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between py-3.5 text-lg font-medium text-primary border-b border-border/50"
                  >
                    {item.label}
                    {item.children && <ChevronDown className="w-4 h-4 text-muted-text" />}
                  </a>
                  {item.children && (
                    <div className="py-2 pl-4 space-y-1">
                      {item.children.map((child: { label: string; href: string }) => (
                        <a
                          key={child.label}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block py-2 text-sm text-muted-text"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3">
              <Button variant="accent" href="#contact" className="w-full" as="a">
                Book Discovery Call
              </Button>
              <Button variant="secondary" href="#contact" className="w-full" as="a">
                Contact Us
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
