import { motion } from "framer-motion";
import { TrendingUp, BarChart3, Sparkles, HeartHandshake, LineChart } from "lucide-react";

const RESULTS_BG =
  "https://images.unsplash.com/photo-1613977257363-707ba9348227?crop=entropy&cs=srgb&fm=jpg&q=85&w=2400";

const results = [
  { icon: TrendingUp, kpi: "Higher", label: "Occupancy" },
  { icon: BarChart3, kpi: "Better", label: "Yield" },
  { icon: HeartHandshake, kpi: "Professional", label: "Operations" },
  { icon: Sparkles, kpi: "Enhanced", label: "Guest Experience" },
  { icon: LineChart, kpi: "Asset", label: "Appreciation" },
];

export const Results = () => {
  return (
    <section
      id="results"
      data-testid="results-section"
      className="relative py-28 md:py-40 overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src={RESULTS_BG}
          alt="Boutique villa pool"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#0F2A47]/85" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-[#F37C2C]" />
              <span className="text-[10px] tracking-[0.32em] uppercase text-[#F37C2C]">
                Results We Deliver
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-[#F2F6FB] leading-[1.05] tracking-tight">
              Outcomes that compound — across every quarter of ownership.
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
          {results.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={r.label}
                data-testid={`result-card-${i}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.08 }}
                className="group backdrop-blur-xl bg-[#F2F6FB]/8 border border-[#F2F6FB]/15 p-7 md:p-8 hover:bg-[#F2F6FB]/14 hover:border-[#F37C2C]/40 transition-all duration-500"
              >
                <Icon strokeWidth={1.2} className="w-7 h-7 text-[#F37C2C] mb-10" />
                <div className="font-serif text-3xl md:text-[34px] text-[#F2F6FB] font-light leading-tight">
                  {r.kpi}
                </div>
                <div className="mt-2 text-[11px] tracking-[0.26em] uppercase text-[#F2F6FB]/70">
                  {r.label}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-20 pt-10 border-t border-[#F2F6FB]/15 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
          <p className="font-serif italic text-2xl md:text-3xl text-[#F2F6FB]/90 leading-snug max-w-xl">
            &ldquo;We don&apos;t promise listings. We promise <span className="text-[#F37C2C]">a P&amp;L statement</span> you&apos;d be proud to underwrite.&rdquo;
          </p>
          <p className="text-[#F2F6FB]/60 font-light text-sm md:text-base md:text-right">
            Performance metrics tracked monthly. Owner reviews quarterly. Yield
            strategy revisited every cycle.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
