import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export const FinalCTA = () => {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      data-testid="final-cta-section"
      className="relative bg-[#0F2A47] py-28 md:py-40 overflow-hidden"
    >
      {/* Soft accent glow */}
      <div className="absolute -top-40 -right-20 w-[480px] h-[480px] rounded-full bg-[#FF4F00]/15 blur-3xl" />
      <div className="absolute -bottom-32 -left-20 w-[420px] h-[420px] rounded-full bg-[#1F3A5F]/40 blur-3xl" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-[10px] tracking-[0.32em] uppercase text-[#FF4F00]"
        >
          The Basic Ecosystem
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 font-serif font-light text-[#F2F6FB] text-5xl sm:text-6xl md:text-7xl lg:text-[88px] leading-[0.98] tracking-tight max-w-5xl mx-auto"
        >
          Let&apos;s transform it into a
          <br />
          <em className="not-italic text-[#FC6A03]">
            profitable hospitality asset.
          </em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 text-[#F2F6FB]/70 font-light max-w-xl mx-auto text-base md:text-lg leading-relaxed"
        >
          One conversation is all it takes. We&apos;ll evaluate your property,
          benchmark its yield potential, and outline a path forward.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            data-testid="final-cta-consultation"
            onClick={() => scrollTo("#consultation")}
            className="group inline-flex items-center justify-between gap-8 bg-[#F2F6FB] text-[#0F2A47] hover:bg-[#FF4F00] hover:text-[#F2F6FB] transition-all duration-500 px-8 py-4 text-[11px] uppercase tracking-[0.28em]"
          >
            Book a Consultation
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
          <button
            data-testid="final-cta-ecosystem"
            onClick={() => scrollTo("#how")}
            className="group inline-flex items-center gap-3 text-[#F2F6FB] hover:text-[#FF4F00] px-2 py-4 text-[11px] uppercase tracking-[0.28em] transition-colors"
          >
            Explore the Ecosystem
            <span className="h-px w-8 bg-current transition-all group-hover:w-12" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
