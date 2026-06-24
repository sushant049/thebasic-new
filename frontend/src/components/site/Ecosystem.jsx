import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const STUDIO_IMG =
  "https://images.unsplash.com/photo-1682184805271-11671b7ecf4c?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600";
const OPERATE_IMG =
  "https://images.pexels.com/photos/7820689/pexels-photo-7820689.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600";

export const Ecosystem = () => {
  return (
    <section
      id="ecosystem"
      data-testid="ecosystem-section"
      className="relative bg-[#E6EEF7] py-24 md:py-32"
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-10 bg-[#F37C2C]" />
            <span className="eyebrow">The Basic Ecosystem</span>
            <span className="h-px w-10 bg-[#F37C2C]" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-[#0F2A47] leading-[1.05] tracking-tight">
            Strategy. Design. Operate.{" "}
            <em className="not-italic text-[#F37C2C]">Maximize returns.</em>
          </h2>
          <p className="mt-5 text-[#1F3A5F]/80 font-light text-base md:text-lg">
            Two specialised arms. One accountable team.
          </p>
        </motion.div>

        {/* Flow diagram */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-4 items-stretch mb-20 md:mb-24">
          {/* Studio card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-5 bg-[#F2F6FB] border border-[#D3E0EE] p-8 md:p-10"
            data-testid="ecosystem-studio-card"
          >
            <span className="text-[10px] tracking-[0.32em] uppercase text-[#F37C2C]">
              The Basic Studio
            </span>
            <h3 className="mt-3 font-serif text-3xl md:text-4xl font-light text-[#0F2A47] leading-tight">
              Strategy &amp; Development
            </h3>
            <ul className="mt-8 space-y-3 text-sm font-light text-[#1F3A5F]/90">
              {[
                "Asset Strategy",
                "Feasibility & ROI",
                "Concept & Design",
                "Branding & Positioning",
              ].map((it) => (
                <li key={it} className="flex items-center gap-3">
                  <span className="h-px w-5 bg-[#F37C2C]" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Center diagram */}
          <div className="md:col-span-2 flex items-center justify-center py-6 md:py-0">
            <div className="relative w-full flex items-center justify-center">
              <div className="hidden md:block absolute left-0 right-0 top-1/2 -translate-y-1/2 border-t border-dashed border-[#5A7BA0]/50" />
              <div className="relative z-10 w-32 h-32 md:w-40 md:h-40 rounded-full bg-[#F2F6FB] border border-[#D3E0EE] flex flex-col items-center justify-center text-center px-2">
                <span className="font-serif text-[#F37C2C] text-3xl md:text-4xl font-light leading-none">
                  B
                </span>
                <p className="mt-2 text-[10px] tracking-[0.18em] uppercase text-[#0F2A47] leading-tight">
                  Your Property
                  <br />
                  Our Expertise
                  <br />
                  Maximum Returns
                </p>
              </div>
            </div>
          </div>

          {/* The Basic card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="md:col-span-5 bg-[#F2F6FB] border border-[#D3E0EE] p-8 md:p-10"
            data-testid="ecosystem-basic-card"
          >
            <span className="text-[10px] tracking-[0.32em] uppercase text-[#F37C2C]">
              The Basic
            </span>
            <h3 className="mt-3 font-serif text-3xl md:text-4xl font-light text-[#0F2A47] leading-tight">
              Operations &amp; Management
            </h3>
            <ul className="mt-8 space-y-3 text-sm font-light text-[#1F3A5F]/90">
              {[
                "Day-to-Day Operations",
                "Facility Management",
                "Compliance & Legalities",
                "Revenue Optimization",
              ].map((it) => (
                <li key={it} className="flex items-center gap-3">
                  <span className="h-px w-5 bg-[#F37C2C]" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Detailed Studio block */}
        <motion.div
          id="studio"
          data-testid="studio-detail"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center mb-20 md:mb-24"
        >
          <div className="md:col-span-7 relative">
            <div className="relative aspect-[5/4] overflow-hidden">
              <img src={STUDIO_IMG} alt="The Basic Studio" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A47]/30 to-transparent" />
              <div className="absolute top-6 left-6 bg-[#F2F6FB]/95 px-4 py-2">
                <span className="font-serif text-sm tracking-wider text-[#0F2A47]">01</span>
              </div>
            </div>
          </div>
          <div className="md:col-span-5">
            <span className="eyebrow">The Basic Studio</span>
            <h3 className="mt-4 font-serif text-4xl md:text-5xl font-light leading-[1.05] text-[#0F2A47]">
              Transforming properties into profitable assets.
            </h3>
            <p className="mt-6 text-[#1F3A5F]/85 font-light leading-relaxed text-[15px]">
              We help landowners, investors, and property owners unlock the
              highest value of their real estate. From vacant land to apartment
              buildings — hospitality, serviced apartments, commercial complexes,
              co-living, or rental assets — we create practical strategies focused
              on maximizing long-term returns.
            </p>
            <div className="mt-8 pt-6 border-t border-[#D3E0EE]">
              <p className="font-serif italic text-xl text-[#0F2A47]">
                Assess. Strategize. Transform. Operate.
              </p>
              <p className="mt-2 text-[13px] text-[#1F3A5F]/75 font-light">
                Every property has hidden potential. We help uncover it.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Detailed Operate block */}
        <motion.div
          id="operate"
          data-testid="operate-detail"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center md:[&>div:first-child]:order-2"
        >
          <div className="md:col-span-7 relative">
            <div className="relative aspect-[5/4] overflow-hidden">
              <img src={OPERATE_IMG} alt="The Basic" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A47]/30 to-transparent" />
              <div className="absolute top-6 left-6 bg-[#F2F6FB]/95 px-4 py-2">
                <span className="font-serif text-sm tracking-wider text-[#0F2A47]">02</span>
              </div>
            </div>
          </div>
          <div className="md:col-span-5">
            <span className="eyebrow">The Basic</span>
            <h3 className="mt-4 font-serif text-4xl md:text-5xl font-light leading-[1.05] text-[#0F2A47]">
              Operating properties. Maximizing returns.
            </h3>
            <p className="mt-6 text-[#1F3A5F]/85 font-light leading-relaxed text-[15px]">
              We help property owners transform real estate into professionally
              managed, income-generating assets — through operations, compliance,
              facility management, revenue optimization, and tenant or guest
              experience management. Whether it&apos;s a serviced apartment, guest
              house, boutique hotel, villa, or commercial property — we ensure it
              performs at its full potential.
            </p>
            <button
              data-testid="ecosystem-cta-consultation"
              onClick={() => document.querySelector("#consultation")?.scrollIntoView({ behavior: "smooth" })}
              className="mt-8 group inline-flex items-center gap-3 text-[#0F2A47] hover:text-[#F37C2C] text-[11px] uppercase tracking-[0.28em] transition-colors"
            >
              Book a Consultation
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
