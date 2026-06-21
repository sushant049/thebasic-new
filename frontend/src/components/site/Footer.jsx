import { Instagram, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer
      data-testid="site-footer"
      className="bg-[#1F1A16] text-[#F9F7F4] py-20 md:py-24"
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-3xl font-light tracking-tight">
                The Basic
              </span>
              <span className="text-[10px] uppercase tracking-[0.32em] text-[#C19A6B]">
                Ecosystem
              </span>
            </div>
            <p className="mt-6 text-[#F9F7F4]/70 font-light leading-relaxed max-w-sm text-sm md:text-base">
              Transforming properties into profitable hospitality assets —
              through design, operations, and disciplined yield management.
            </p>
            <div className="mt-8 flex items-center gap-5">
              <a
                href="mailto:hello@thebasicecosystem.com"
                data-testid="footer-email"
                className="w-10 h-10 border border-[#F9F7F4]/20 hover:border-[#C19A6B] flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail size={16} strokeWidth={1.2} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-instagram"
                className="w-10 h-10 border border-[#F9F7F4]/20 hover:border-[#C19A6B] flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} strokeWidth={1.2} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-linkedin"
                className="w-10 h-10 border border-[#F9F7F4]/20 hover:border-[#C19A6B] flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} strokeWidth={1.2} />
              </a>
            </div>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <div className="text-[10px] tracking-[0.28em] uppercase text-[#C19A6B] mb-5">
              Ecosystem
            </div>
            <ul className="space-y-3 text-sm font-light">
              <li>
                <a href="#studio" className="text-[#F9F7F4]/75 hover:text-[#F9F7F4] transition-colors">
                  The Basic Studio · Design for Yield
                </a>
              </li>
              <li>
                <a href="#operate" className="text-[#F9F7F4]/75 hover:text-[#F9F7F4] transition-colors">
                  The Basic · Operate for Growth
                </a>
              </li>
              <li>
                <a href="#why" className="text-[#F9F7F4]/75 hover:text-[#F9F7F4] transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#results" className="text-[#F9F7F4]/75 hover:text-[#F9F7F4] transition-colors">
                  Results We Deliver
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="text-[10px] tracking-[0.28em] uppercase text-[#C19A6B] mb-5">
              Contact
            </div>
            <ul className="space-y-3 text-sm font-light text-[#F9F7F4]/75">
              <li>hello@thebasicecosystem.com</li>
              <li>Bengaluru · Mumbai · Goa</li>
              <li>
                <a href="#consultation" className="underline-offset-4 hover:text-[#C19A6B] hover:underline transition-colors">
                  Book a Consultation
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#F9F7F4]/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs font-light text-[#F9F7F4]/50 tracking-wide">
            © {new Date().getFullYear()} The Basic Ecosystem. All rights reserved.
          </p>
          <p className="text-[10px] tracking-[0.28em] uppercase text-[#F9F7F4]/40">
            Design for Yield · Operate for Growth
          </p>
        </div>
      </div>
    </footer>
  );
};
