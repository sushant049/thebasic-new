import { motion } from "framer-motion";
import { Search, Map, PenTool, Rocket, Settings2, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Assess",
    desc: "Identify the highest and best use of your property.",
  },
  {
    icon: Map,
    title: "Strategize",
    desc: "Create a commercially viable development roadmap.",
  },
  {
    icon: PenTool,
    title: "Design",
    desc: "Shape spaces around user demand and revenue potential.",
  },
  {
    icon: Rocket,
    title: "Launch",
    desc: "Position and prepare the asset for market success.",
  },
  {
    icon: Settings2,
    title: "Operate",
    desc: "Manage day-to-day performance with professional systems.",
  },
  {
    icon: TrendingUp,
    title: "Grow",
    desc: "Increase occupancy, revenue, and long-term asset value.",
  },
];

export const WhyChooseUs = () => {
  return (
    <section
      id="why"
      data-testid="why-section"
      className="relative bg-[#0F2A47] py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute -top-32 -right-24 w-[500px] h-[500px] rounded-full bg-[#FF4F00]/12 blur-3xl" />
      <div className="relative w-full max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-10 bg-[#FF4F00]" />
            <span className="text-[10px] tracking-[0.32em] uppercase text-[#FF4F00]">
              Why The Basic Ecosystem
            </span>
            <span className="h-px w-10 bg-[#FF4F00]" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[56px] font-light text-[#F2F6FB] leading-[1.05] tracking-tight">
            A six-step approach — from{" "}
            <em className="not-italic text-[#FC6A03]">first thought</em> to
            sustained growth.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#F2F6FB]/8">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                data-testid={`why-item-${i}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
                className="group bg-[#0F2A47] hover:bg-[#13355A] transition-colors duration-500 p-8 md:p-10"
              >
                <div className="flex items-center justify-between mb-10">
                  <Icon strokeWidth={1.2} className="w-7 h-7 text-[#FF4F00]" />
                  <span className="font-serif text-2xl font-light text-[#F2F6FB]/30 tabular-nums">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="font-serif text-2xl md:text-3xl text-[#F2F6FB] font-medium leading-tight">
                  {s.title}
                </h3>
                <p className="mt-3 text-[#F2F6FB]/70 font-light text-[14px] leading-relaxed">
                  {s.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-16 md:mt-20 pt-10 border-t border-[#F2F6FB]/15 grid grid-cols-2 md:grid-cols-4 gap-8"
          data-testid="trust-strip"
        >
          {[
            ["Market Intelligence", "Driven Decisions"],
            ["Revenue-First", "Approach"],
            ["End-to-End", "Accountability"],
            ["Local Expertise", "Pan-India Perspective"],
          ].map(([a, b]) => (
            <div key={a} className="flex flex-col gap-1">
              <span className="text-[10px] tracking-[0.28em] uppercase text-[#FF4F00]">
                {a}
              </span>
              <span className="text-[14px] font-light text-[#F2F6FB]/80">
                {b}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
