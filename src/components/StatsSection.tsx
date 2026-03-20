import { motion } from "framer-motion";

const stats = [
  {
    value: "99%",
    label: "Faster settlement",
    description: "Most transactions settle in under 60 minutes or less.",
    alt: "Alternatives take 2-5 days",
  },
  {
    value: "24/7",
    label: "Availability",
    description: "Move money anytime: weekends, holidays, or the middle of the night.",
    alt: "Alternatives: only business hours",
  },
  {
    value: "90%",
    label: "Lower costs",
    description: "Transparent pricing with zero hidden costs.",
    alt: "Alternatives cost 3-5% in fees",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      delay: i * 0.12,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const StatsSection = () => {
  return (
    <section className="py-20 md:py-28 surface-elevated">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Built different. Performs even better.
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Skip the middlemen and delays. LeoPay moves money globally in minutes, instead of days.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -6, transition: { duration: 0.3, ease: "easeOut" } }}
              className="p-8 rounded-2xl bg-background border border-border hover:shadow-lg hover:shadow-primary/5 transition-shadow duration-300 cursor-default"
            >
              <motion.p
                className="text-4xl md:text-5xl font-bold text-accent tracking-tight"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              >
                {stat.value}
              </motion.p>
              <p className="text-lg font-semibold text-foreground mt-3 mb-2">{stat.label}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{stat.description}</p>
              <p className="text-xs text-muted-foreground/60 mt-4 uppercase tracking-wider">
                {stat.alt}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
