import { Instagram, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer
      data-testid="site-footer"
      className="bg-[#0A1E33] text-[#F2F6FB] py-20 md:py-24"
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-3xl font-light tracking-tight">
                The Basic
              </span>
              <span className="text-[10px] uppercase tracking-[0.32em] text-[#F37C2C]">
                Ecosystem
              </span>
            </div>
            <p className="mt-6 text-[#F2F6FB]/70 font-light leading-relaxed max-w-sm text-sm md:text-base">
              Transforming properties into profitable hospitality assets —
              through design, operations, and disciplined yield management.
            </p>
            <div className="mt-8 flex items-center gap-5">
              <a
                href="mailto:connect@thebasic.co.in"
                data-testid="footer-email"
                className="w-10 h-10 border border-[#F2F6FB]/20 hover:border-[#F37C2C] flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail size={16} strokeWidth={1.2} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-instagram"
                className="w-10 h-10 border border-[#F2F6FB]/20 hover:border-[#F37C2C] flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} strokeWidth={1.2} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-linkedin"
                className="w-10 h-10 border border-[#F2F6FB]/20 hover:border-[#F37C2C] flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} strokeWidth={1.2} />
              </a>
            </div>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <div className="text-[10px] tracking-[0.28em] uppercase text-[#F37C2C] mb-5">
              Ecosystem
            </div>
            <ul className="space-y-3 text-sm font-light">
              <li>
                <a href="#studio" className="text-[#F2F6FB]/75 hover:text-[#F2F6FB] transition-colors">
                  The Basic Studio · Design for Yield
                </a>
              </li>
              <li>
                <a href="#operate" className="text-[#F2F6FB]/75 hover:text-[#F2F6FB] transition-colors">
                  The Basic · Operate for Growth
                </a>
              </li>
              <li>
                <a href="#why" className="text-[#F2F6FB]/75 hover:text-[#F2F6FB] transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#results" className="text-[#F2F6FB]/75 hover:text-[#F2F6FB] transition-colors">
                  Results We Deliver
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="text-[10px] tracking-[0.28em] uppercase text-[#F37C2C] mb-5">
              Contact
            </div>
            <ul className="space-y-3 text-sm font-light text-[#F2F6FB]/75">
              <li>connect@thebasic.co.in</li>
              <li>+91 72050 00123</li>
              <li>Bengaluru · Mumbai · Goa</li>
              <li>
                <a href="#consultation" className="underline-offset-4 hover:text-[#F37C2C] hover:underline transition-colors">
                  Book a Consultation
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#F2F6FB]/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs font-light text-[#F2F6FB]/50 tracking-wide">
            © {new Date().getFullYear()} The Basic Ecosystem. All rights reserved.
          </p>
          <p className="text-[10px] tracking-[0.28em] uppercase text-[#F2F6FB]/40">
            Design for Yield · Operate for Growth
          </p>
        </div>
      </div>
    </footer>
  );
};
