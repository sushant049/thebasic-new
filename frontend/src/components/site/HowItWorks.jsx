import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const STUDIO_IMG =
  "https://images.unsplash.com/photo-1682184805271-11671b7ecf4c?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600";
const OPERATE_IMG =
  "https://images.pexels.com/photos/7820689/pexels-photo-7820689.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600";

const reveal = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

const Step = ({ idx, eyebrow, title, tagline, body, points, image, reverse, id }) => (
  <motion.div
    id={id}
    data-testid={`how-step-${idx}`}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-80px" }}
    variants={reveal}
    className={`grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center ${
      reverse ? "md:[&>div:first-child]:order-2" : ""
    }`}
  >
    <div className="md:col-span-7 relative">
      <div className="relative aspect-[4/5] md:aspect-[5/6] overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A47]/30 via-transparent to-transparent" />
        <div className="absolute top-6 left-6 bg-[#F2F6FB]/90 backdrop-blur-md px-4 py-2">
          <span className="font-serif text-sm tracking-wider text-[#1F3A5F]">
            0{idx}
          </span>
        </div>
      </div>
    </div>

    <div className="md:col-span-5">
      <span className="eyebrow">{eyebrow}</span>
      <h3 className="mt-4 font-serif text-4xl md:text-5xl font-light leading-[1.05] text-[#0F2A47]">
        {title}
      </h3>
      <p className="mt-3 font-serif italic text-xl text-[#FF4F00]">{tagline}</p>
      <p className="mt-6 text-[#1F3A5F] font-light leading-relaxed text-[15px] md:text-base">
        {body}
      </p>
      <ul className="mt-8 space-y-3">
        {points.map((p) => (
          <li key={p} className="flex items-start gap-3 text-[14px] text-[#1F3A5F]">
            <span className="mt-2 h-px w-6 bg-[#FF4F00] shrink-0" />
            <span className="font-light">{p}</span>
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

export const HowItWorks = () => {
  return (
    <section
      id="how"
      data-testid="how-section"
      className="relative bg-[#F2F6FB] py-24 md:py-36"
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-20 md:mb-28"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-[#FF4F00]" />
            <span className="eyebrow">The Ecosystem</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-[#0F2A47] leading-[1.05] tracking-tight text-balance">
            One ecosystem, two disciplines —
            <em className="not-italic text-[#5A7BA0]"> built for yield.</em>
          </h2>
          <p className="mt-6 text-[#1F3A5F]/80 font-light text-base md:text-lg max-w-2xl">
            From the first wall to the last guest review, every decision is
            engineered around occupancy, profitability, and long-term asset
            value.
          </p>
        </motion.div>

        <div className="space-y-24 md:space-y-32">
          <Step
            id="studio"
            idx={1}
            eyebrow="The Basic Studio"
            title="Design for Yield."
            tagline="Where architecture meets revenue."
            body="We transform homes, villas, apartment buildings, and raw land into rental-ready hospitality assets — engineered to maximize revenue per square foot from day one."
            points={[
              "Hospitality-focused interior & spatial design",
              "Yield-driven planning and unit-mix strategy",
              "Asset positioning, branding & launch-readiness",
            ]}
            image={STUDIO_IMG}
          />

          <Step
            id="operate"
            idx={2}
            eyebrow="The Basic"
            title="Operate for Growth."
            tagline="Hospitality, professionally run."
            body="Once your asset is live, our operations team takes over — managing guest acquisition, daily operations, and revenue performance with hotel-grade discipline."
            points={[
              "Guest acquisition, distribution & dynamic pricing",
              "Housekeeping, F&B, and maintenance excellence",
              "Transparent revenue management & owner reporting",
            ]}
            image={OPERATE_IMG}
            reverse
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-24 md:mt-32 pt-10 border-t border-[#D3E0EE] flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <p className="font-serif italic text-2xl md:text-3xl text-[#0F2A47] max-w-xl leading-snug">
            &ldquo;Design and operations, owned by one team — accountable to one number: <span className="text-[#FF4F00]">your yield.</span>&rdquo;
          </p>
          <button
            data-testid="how-cta-consultation"
            onClick={() => document.querySelector("#consultation")?.scrollIntoView({ behavior: "smooth" })}
            className="group inline-flex items-center gap-3 text-[#1F3A5F] hover:text-[#FF4F00] text-[11px] uppercase tracking-[0.28em] transition-colors"
          >
            Start the Conversation
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
