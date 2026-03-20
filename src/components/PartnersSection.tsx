import { motion } from "framer-motion";

const partners = [
  "Licenoa", "WALLET", "CoinEx", "LEDGER", "PAXFUL",
  "Opera Mini", "BingX", "KUCOIN", "Onramper",
];

const PartnersSection = () => {
  return (
    <section className="py-16 md:py-20 overflow-hidden border-b border-border">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="container text-center mb-10"
      >
        <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
          Trusted by leading platforms
        </p>
      </motion.div>

      {/* Scrolling logos */}
      <div className="relative">
        <div className="flex animate-scroll-left">
          {[...partners, ...partners].map((name, i) => (
            <motion.div
              key={`${name}-${i}`}
              className="flex-shrink-0 mx-8 md:mx-12 flex items-center justify-center min-w-[120px]"
              whileHover={{ scale: 1.08, opacity: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <span className="text-lg md:text-xl font-semibold text-foreground/20 hover:text-foreground/50 tracking-wider uppercase select-none whitespace-nowrap transition-colors duration-300">
                {name}
              </span>
            </motion.div>
          ))}
        </div>
        {/* Edge fades */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      </div>
    </section>
  );
};

export default PartnersSection;
