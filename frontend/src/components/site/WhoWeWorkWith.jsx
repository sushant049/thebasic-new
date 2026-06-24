import { motion } from "framer-motion";

const audiences = [
  {
    label: "Landowners",
    desc: "Unlock the highest-return use of your land.",
    img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?crop=entropy&cs=srgb&fm=jpg&q=80&w=900",
  },
  {
    label: "Investors",
    desc: "Acquire and operate yield-optimized assets.",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=srgb&fm=jpg&q=80&w=900",
  },
  {
    label: "Developers",
    desc: "Build with revenue and operations in mind.",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?crop=entropy&cs=srgb&fm=jpg&q=80&w=900",
  },
  {
    label: "Property Owners",
    desc: "Turn your home, villa or building into income.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=srgb&fm=jpg&q=80&w=900",
  },
  {
    label: "Corporates",
    desc: "Serviced housing & long-stay solutions.",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?crop=entropy&cs=srgb&fm=jpg&q=80&w=900",
  },
];

export const WhoWeWorkWith = () => {
  return (
    <section
      id="audience"
      data-testid="audience-section"
      className="relative bg-[#F2F6FB] py-24 md:py-32"
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-14 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-5"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-[#C0561D]" />
              <span className="eyebrow">Who We Work With</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-[#0F2A47] leading-[1.05] tracking-tight">
              Owners who want their properties to{" "}
              <em className="not-italic text-[#C0561D]">perform.</em>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="md:col-span-6 md:col-start-7 self-end text-[#1F3A5F]/85 font-light text-base md:text-[17px] leading-relaxed"
          >
            We partner with landowners, investors, developers, and property owners
            to maximize returns from hospitality, rental, and commercial real
            estate. Whether you own a plot, villa, apartment building, guest
            house, hotel, or commercial property — we provide the operational
            expertise to unlock long-term value.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
          {audiences.map((a, i) => (
            <motion.div
              key={a.label}
              data-testid={`audience-card-${i}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className="group flex flex-col"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-[#E6EEF7]">
                <img
                  src={a.img}
                  alt={a.label}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A47]/55 via-[#0F2A47]/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-serif text-xl md:text-2xl text-[#F2F6FB] font-medium leading-tight">
                    {a.label}
                  </h3>
                </div>
              </div>
              <p className="mt-3 text-[12px] md:text-[13px] text-[#1F3A5F]/75 font-light leading-snug">
                {a.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
