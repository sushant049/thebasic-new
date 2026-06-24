import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const HERO_IMG =
  "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?crop=entropy&cs=srgb&fm=jpg&q=85&w=2400";

const stats = [
  ["50+", "Projects Advised & Managed"],
  ["100+", "Serving Rooms"],
  ["85%", "Average Occupancy"],
];

export const Hero = () => {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative min-h-screen flex flex-col overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Luxury hospitality villa exterior"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F2A47]/75 via-[#0F2A47]/35 to-[#0F2A47]/90" />
      </div>

      {/* Content wrapper - takes full height, pushes content to bottom */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex-1 flex flex-col justify-end pt-32 sm:pt-36 pb-16 md:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex items-center gap-3 mb-6 md:mb-8"
        >
          <span className="h-px w-10 bg-[#C0561D]" />
          <span className="text-[10px] tracking-[0.32em] uppercase text-[#C0561D]">
            Studio &amp; Asset Management
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-8"
          >
            <h1
              data-testid="hero-headline"
              className="font-serif font-light text-[#F2F6FB] text-[40px] xs:text-5xl sm:text-6xl md:text-7xl lg:text-[88px] leading-[1.02] md:leading-[0.98] tracking-tight"
            >
              We turn properties into{" "}
              <em className="not-italic font-normal text-[#E89465]">
                profitable assets.
              </em>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="md:col-span-4 md:pl-6 md:border-l md:border-[#F2F6FB]/20"
          >
            <p
              data-testid="hero-subheadline"
              className="text-[#F2F6FB]/85 font-light text-[15px] md:text-[17px] leading-relaxed"
            >
              From land and villas to apartment buildings and commercial
              properties — we identify the highest-return use of your asset
              and help bring it to life.
            </p>

            <div className="mt-8 flex flex-col gap-3 items-start">
              <button
                data-testid="hero-cta-consultation"
                onClick={() => scrollTo("#consultation")}
                className="group w-full sm:w-auto inline-flex items-center justify-between gap-8 bg-[#C0561D] text-[#F2F6FB] hover:bg-[#F2F6FB] hover:text-[#0F2A47] transition-all duration-500 px-7 py-4 text-[11px] uppercase tracking-[0.28em] whitespace-nowrap"
              >
                Book a Consultation
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
              <button
                data-testid="hero-cta-ecosystem"
                onClick={() => scrollTo("#services")}
                className="group inline-flex items-center gap-3 text-[#F2F6FB] hover:text-[#E89465] px-2 py-2 text-[11px] uppercase tracking-[0.28em] transition-colors whitespace-nowrap"
              >
                Explore Our Services
                <span className="h-px w-8 bg-current transition-all group-hover:w-12" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-14 md:mt-20 pt-8 md:pt-10 border-t border-[#F2F6FB]/15 grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-x-8 sm:gap-y-0"
          data-testid="hero-stats"
        >
          {stats.map(([k, v]) => (
            <div
              key={k}
              className="flex items-baseline gap-5 sm:flex-col sm:items-start sm:gap-3"
            >
              <span className="font-serif text-5xl sm:text-6xl md:text-7xl text-[#E89465] font-light tracking-tight leading-[0.9] shrink-0">
                {k}
              </span>
              <span className="text-[11px] sm:text-[10px] tracking-[0.22em] sm:tracking-[0.26em] uppercase text-[#F2F6FB]/80 leading-snug">
                {v}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="hidden md:flex absolute bottom-6 right-6 md:right-12 z-10 flex-col items-center gap-2 text-[#F2F6FB]/70"
      >
        <span className="text-[9px] tracking-[0.32em] uppercase rotate-90 origin-right translate-x-3">
          Scroll
        </span>
        <ArrowDown size={14} className="animate-bounce" />
      </motion.div>
    </section>
  );
};
