import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Studio", href: "#studio" },
  { label: "Operate", href: "#operate" },
  { label: "Why Us", href: "#why" },
  { label: "Results", href: "#results" },
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
        scrolled
          ? "backdrop-blur-xl bg-[#F9F7F4]/85 border-b border-[#E5DFD5]/70 py-3"
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
            className={`font-serif text-2xl md:text-[26px] font-light tracking-tight ${
              scrolled ? "text-[#2C2420]" : "text-[#F9F7F4]"
            } transition-colors`}
          >
            The Basic
          </span>
          <span
            className={`text-[10px] uppercase tracking-[0.3em] ${
              scrolled ? "text-[#8C7A6B]" : "text-[#C19A6B]"
            } transition-colors`}
          >
            Ecosystem
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <button
              key={l.href}
              data-testid={`nav-link-${l.label.toLowerCase().replace(/\s/g, "-")}`}
              onClick={() => scrollTo(l.href)}
              className={`text-[12px] uppercase tracking-[0.22em] font-light hover:text-[#C19A6B] transition-colors ${
                scrolled ? "text-[#4A3B32]" : "text-[#F9F7F4]/90"
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
                ? "border-[#4A3B32] text-[#4A3B32] hover:bg-[#4A3B32] hover:text-[#F9F7F4]"
                : "border-[#F9F7F4] text-[#F9F7F4] hover:bg-[#F9F7F4] hover:text-[#2C2420]"
            }`}
          >
            Book Consultation
          </button>
        </nav>

        <button
          data-testid="mobile-menu-toggle"
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden p-2 ${scrolled ? "text-[#2C2420]" : "text-[#F9F7F4]"}`}
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
            className="md:hidden bg-[#F9F7F4] border-t border-[#E5DFD5]"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {links.map((l) => (
                <button
                  key={l.href}
                  data-testid={`mobile-nav-link-${l.label.toLowerCase()}`}
                  onClick={() => scrollTo(l.href)}
                  className="text-left text-[13px] uppercase tracking-[0.2em] text-[#4A3B32]"
                >
                  {l.label}
                </button>
              ))}
              <button
                data-testid="mobile-cta-consultation"
                onClick={() => scrollTo("#consultation")}
                className="mt-2 text-[11px] uppercase tracking-[0.24em] px-6 py-3 border border-[#4A3B32] text-[#4A3B32] self-start"
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
