import { motion } from "framer-motion";
import { Search, FileBarChart, LayoutDashboard, Rocket, Settings2 } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Asset Strategy & Feasibility",
    desc: "We identify the highest & best use, market potential, and ROI before you invest.",
    items: [
      "Highest & Best Use Analysis",
      "Market Assessment",
      "Financial & ROI Modelling",
      "Investment Advisory",
    ],
  },
  {
    icon: FileBarChart,
    title: "Development Advisory",
    desc: "Hospitality, commercial, mixed-use or rental — we create the right roadmap.",
    items: [
      "Hospitality Projects",
      "Commercial Developments",
      "Mixed-Use Assets",
      "Rental & Serviced Apartments",
    ],
  },
  {
    icon: LayoutDashboard,
    title: "Design & Positioning",
    desc: "Spaces designed for experience, efficiency, and long-term returns.",
    items: [
      "Spatial Planning",
      "Interior Concepts",
      "Brand Development",
      "Guest & Tenant Experience",
    ],
  },
  {
    icon: Rocket,
    title: "Launch & Revenue Optimization",
    desc: "From go-to-market to operations setup — we ensure day-one readiness.",
    items: [
      "Go-To-Market Strategy",
      "Leasing & Occupancy Planning",
      "Hospitality Operations Setup",
      "Revenue Enhancement Programs",
    ],
  },
  {
    icon: Settings2,
    title: "Asset Management & Operations",
    desc: "We operate, manage and optimize your asset for sustained performance.",
    items: [
      "Day-to-Day Operations",
      "Facility Management",
      "Compliance & Legalities",
      "Revenue Optimization",
    ],
  },
];

export const WhatWeDo = () => {
  return (
    <section
      id="services"
      data-testid="services-section"
      className="relative bg-[#F2F6FB] py-24 md:py-32"
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-10 bg-[#C0561D]" />
            <span className="eyebrow">What We Do</span>
            <span className="h-px w-10 bg-[#C0561D]" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[56px] font-light text-[#0F2A47] leading-[1.05] tracking-tight">
            End-to-end advisory, development and operations partner for real estate assets.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-[#D3E0EE]">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                data-testid={`service-card-${i}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className="group bg-[#F2F6FB] hover:bg-white p-8 transition-colors duration-500 flex flex-col"
              >
                <div className="flex items-center justify-between mb-10">
                  <Icon strokeWidth={1.2} className="w-8 h-8 text-[#C0561D]" />
                  <span className="text-[10px] tracking-[0.28em] uppercase text-[#5A7080]">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="font-serif text-xl md:text-[22px] text-[#0F2A47] font-medium leading-tight">
                  {s.title}
                </h3>
                <p className="mt-3 text-[13px] text-[#1F3A5F]/80 font-light leading-relaxed">
                  {s.desc}
                </p>
                <ul className="mt-6 pt-5 border-t border-[#D3E0EE] space-y-2 text-[12px] text-[#1F3A5F]/85 font-light">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-start gap-2">
                      <span className="mt-[7px] h-[5px] w-[5px] rounded-full bg-[#C0561D] shrink-0" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
