import { motion } from "framer-motion";

const reasons = [
  {
    title: "End-to-end ownership",
    desc: "From design concept to monthly revenue — one team, one accountability line.",
  },
  {
    title: "Hospitality-focused design",
    desc: "Every wall, layout, and finish is engineered for guest experience and ADR uplift.",
  },
  {
    title: "Asset optimization expertise",
    desc: "We unlock the highest and best use of your property — by yield, not by guess.",
  },
  {
    title: "Revenue-driven operations",
    desc: "Dynamic pricing, channel mix, and operational KPIs benchmarked weekly.",
  },
  {
    title: "Transparent management",
    desc: "Owner dashboards, monthly P&L reviews, and full operational visibility.",
  },
  {
    title: "Long-term value creation",
    desc: "Beyond cashflow — we grow the underlying capital value of your asset.",
  },
];

export const WhyChooseUs = () => {
  return (
    <section
      id="why"
      data-testid="why-section"
      className="relative bg-[#F2F6FB] py-24 md:py-36"
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-7"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-[#F37C2C]" />
              <span className="eyebrow">Why The Basic Ecosystem</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-[#0F2A47] leading-[1.05] tracking-tight text-balance">
              A partner that treats your property like a{" "}
              <em className="not-italic text-[#F37C2C]">portfolio company.</em>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-2">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              data-testid={`why-item-${i}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: (i % 2) * 0.1 }}
              className="group relative py-10 border-t border-[#D3E0EE] flex gap-8 md:gap-12"
            >
              <span className="font-serif text-3xl md:text-4xl font-light text-[#F37C2C] tabular-nums leading-none pt-1 min-w-[3.5rem]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1">
                <h3 className="font-serif text-2xl md:text-[28px] font-medium text-[#0F2A47] leading-tight">
                  {r.title}
                </h3>
                <p className="mt-3 text-[#1F3A5F]/85 font-light text-[15px] md:text-base leading-relaxed max-w-md">
                  {r.desc}
                </p>
              </div>
              <div className="absolute bottom-0 left-0 h-px w-0 bg-[#F37C2C] group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
