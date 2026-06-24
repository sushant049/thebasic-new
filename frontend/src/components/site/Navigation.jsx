import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "Studio", href: "#studio" },
  { label: "Operate", href: "#operate" },
  { label: "Why Us", href: "#why" },
];

export const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      data-testid="site-nav"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "backdrop-blur-xl bg-[#F2F6FB]/95 border-b border-[#D3E0EE]/70 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <button
          data-testid="nav-logo"
          onClick={() => scrollTo("#top")}
          className="flex items-baseline gap-2 group"
        >
          <span
            className={`font-serif text-2xl md:text-[26px] font-light tracking-[0.06em] uppercase ${
              scrolled || open ? "text-[#0F2A47]" : "text-[#F2F6FB]"
            } transition-colors`}
          >
            The Basic
          </span>
          <span
            className={`hidden sm:inline text-[9px] uppercase tracking-[0.28em] ${
              scrolled || open ? "text-[#5A7BA0]" : "text-[#C0561D]"
            } transition-colors`}
          >
            Studio &amp; Asset Mgmt
          </span>
        </button>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <button
              key={l.href}
              data-testid={`nav-link-${l.label.toLowerCase().replace(/\s/g, "-")}`}
              onClick={() => scrollTo(l.href)}
              className={`text-[12px] uppercase tracking-[0.22em] font-light hover:text-[#C0561D] transition-colors ${
                scrolled ? "text-[#1F3A5F]" : "text-[#F2F6FB]/90"
              }`}
            >
              {l.label}
            </button>
          ))}
          <button
            data-testid="nav-cta-consultation"
            onClick={() => scrollTo("#consultation")}
            className={`text-[11px] uppercase tracking-[0.24em] px-6 py-3 border transition-all duration-300 ${
              scrolled
                ? "border-[#1F3A5F] text-[#1F3A5F] hover:bg-[#1F3A5F] hover:text-[#F2F6FB]"
                : "border-[#F2F6FB] text-[#F2F6FB] hover:bg-[#F2F6FB] hover:text-[#0F2A47]"
            }`}
          >
            Book Consultation
          </button>
        </nav>

        <button
          data-testid="mobile-menu-toggle"
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden p-2 ${scrolled || open ? "text-[#0F2A47]" : "text-[#F2F6FB]"}`}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden bg-[#F2F6FB] border-t border-[#D3E0EE]"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {links.map((l) => (
                <button
                  key={l.href}
                  data-testid={`mobile-nav-link-${l.label.toLowerCase().replace(/\s/g, "-")}`}
                  onClick={() => scrollTo(l.href)}
                  className="text-left text-[13px] uppercase tracking-[0.2em] text-[#1F3A5F]"
                >
                  {l.label}
                </button>
              ))}
              <button
                data-testid="mobile-cta-consultation"
                onClick={() => scrollTo("#consultation")}
                className="mt-2 text-[11px] uppercase tracking-[0.24em] px-6 py-3 border border-[#1F3A5F] text-[#1F3A5F] self-start"
              >
                Book Consultation
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
