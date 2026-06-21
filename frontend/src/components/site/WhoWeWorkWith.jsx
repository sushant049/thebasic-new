import { motion } from "framer-motion";
import { Home, Castle, Building2, TrendingUp, Globe2 } from "lucide-react";

const audiences = [
  {
    icon: Home,
    title: "Property Owners",
    desc: "Unlock hospitality income from your existing residential asset.",
  },
  {
    icon: Castle,
    title: "Villa Owners",
    desc: "Turn boutique stays into a year-round, professionally managed business.",
  },
  {
    icon: Building2,
    title: "Building Owners",
    desc: "Reposition apartment buildings as serviced-living hospitality assets.",
  },
  {
    icon: TrendingUp,
    title: "Real Estate Investors",
    desc: "Acquire, develop, and operate yield-optimized hospitality portfolios.",
  },
  {
    icon: Globe2,
    title: "NRI Property Owners",
    desc: "Hands-off ownership with transparent reporting and full operations.",
  },
];

export const WhoWeWorkWith = () => {
  return (
    <section
      data-testid="audience-section"
      className="relative bg-[#F2EFE9] py-24 md:py-32"
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-5"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-[#C19A6B]" />
              <span className="eyebrow">Who We Work With</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-[#2C2420] leading-[1.05] tracking-tight">
              Owners, investors, and developers — thinking{" "}
              <em className="not-italic text-[#C19A6B]">beyond the deed.</em>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="md:col-span-6 md:col-start-7 self-end text-[#4A3B32]/85 font-light text-base md:text-[17px] leading-relaxed"
          >
            Our partnership model is built for principals who view property
            not as a static asset, but as a productive, income-generating
            business — managed with hospitality-grade rigor.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E5DFD5]">
          {audiences.map((a, i) => {
            const Icon = a.icon;
            return (
              <motion.div
                key={a.title}
                data-testid={`audience-card-${i}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className="group bg-[#F2EFE9] hover:bg-[#F9F7F4] p-8 md:p-10 transition-colors duration-500 cursor-default"
              >
                <div className="flex items-center justify-between mb-12">
                  <Icon strokeWidth={1.2} className="w-7 h-7 text-[#8C7A6B] group-hover:text-[#C19A6B] transition-colors" />
                  <span className="text-[10px] tracking-[0.28em] uppercase text-[#73655D]">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="font-serif text-2xl md:text-[26px] text-[#2C2420] font-medium">
                  {a.title}
                </h3>
                <p className="mt-3 text-sm text-[#4A3B32]/80 font-light leading-relaxed">
                  {a.desc}
                </p>
              </motion.div>
            );
          })}

          {/* Secondary audience tile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="bg-[#2C2420] text-[#F9F7F4] p-8 md:p-10 flex flex-col justify-between"
            data-testid="audience-card-secondary"
          >
            <span className="text-[10px] tracking-[0.28em] uppercase text-[#C19A6B]">
              Also Serving
            </span>
            <div>
              <h3 className="font-serif text-2xl md:text-[26px] font-light mt-12">
                Corporate Clients · Long-Stay Guests · Business Travellers
              </h3>
              <p className="mt-4 text-sm text-[#F9F7F4]/70 font-light leading-relaxed">
                Bespoke long-stay and corporate housing solutions across our
                operated assets.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
