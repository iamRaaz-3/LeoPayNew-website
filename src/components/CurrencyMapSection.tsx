import { motion } from "framer-motion";
import worldMap from "@/assets/world-map.png";

const currencies = [
  // ACTIVE
  { code: "VND", name: "Vietnamese Dong", flag: "🇻🇳", status: "active" },
  { code: "PHP", name: "Philippine Peso", flag: "🇵🇭", status: "active" },
  { code: "MYR", name: "Malaysian Ringgit", flag: "🇲🇾", status: "active" },
  { code: "IDR", name: "Indonesian Rupiah", flag: "🇮🇩", status: "active" },
  { code: "USD", name: "US Dollar", flag: "🇺🇸", status: "active" },
  { code: "USDC", name: "USD Coin", flag: "💲", status: "active" },
  { code: "USDT", name: "Tether", flag: "💲", status: "active" },
  // BETA
  { code: "INR", name: "Indian Rupee", flag: "🇮🇳", status: "beta" },
  { code: "AED", name: "UAE Dirham", flag: "🇦🇪", status: "beta" },
  { code: "EUR", name: "Euro", flag: "🇪🇺", status: "beta" },
  { code: "GBP", name: "British Pound", flag: "🇬🇧", status: "beta" },
  { code: "HKD", name: "Hong Kong Dollar", flag: "🇭🇰", status: "beta" },
  { code: "CNY", name: "Chinese Yuan", flag: "🇨🇳", status: "beta" },
  // COMING SOON
  { code: "AUD", name: "Australian Dollar", flag: "🇦🇺", status: "coming" },
  { code: "BRL", name: "Brazilian Real", flag: "🇧🇷", status: "coming" },
  { code: "LKR", name: "Sri Lankan Rupee", flag: "🇱🇰", status: "coming" },
  { code: "NPR", name: "Nepalese Rupee", flag: "🇳🇵", status: "coming" },
  { code: "CAD", name: "Canadian Dollar", flag: "🇨🇦", status: "coming" },
];



const cardVariants = {
  hidden: { opacity: 0, y: 12, filter: "blur(4px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      delay: i * 0.04,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

const CurrencyMapSection = () => {
  const activeCurrencies = currencies.filter(c => c.status === "active");
  const betaCurrencies = currencies.filter(c => c.status === "beta");
  const comingCurrencies = currencies.filter(c => c.status === "coming");

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background map */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img
          src={worldMap}
          alt=""
          className="w-full h-full object-cover object-center opacity-40 select-none"
          aria-hidden="true"
        />
      </div>

      <div className="container relative z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            What currencies are you looking for?
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground">
            Our roadmap is always expanding.
          </p>
        </motion.div>

        {/* Active */}
        <div className="mb-10">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold text-accent uppercase tracking-widest mb-4"
          >
            Active
          </motion.h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {activeCurrencies.map((c, i) => (
              <motion.div
                key={c.code}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <CurrencyCard {...c} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Beta */}
        <div className="mb-10">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold text-foreground/60 uppercase tracking-widest mb-4"
          >
            Beta
          </motion.h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {betaCurrencies.map((c, i) => (
              <motion.div
                key={c.code}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <CurrencyCard {...c} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Coming soon */}
        <div>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold text-foreground/60 uppercase tracking-widest mb-4"
          >
            Coming Soon
          </motion.h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {comingCurrencies.map((c, i) => (
              <motion.div
                key={c.code}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <CurrencyCard {...c} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const CurrencyCard = ({ code, name, flag }: {
  code: string; name: string; flag: string; status: string; eta?: string;
}) => (
  <motion.div
    whileHover={{ y: -3, transition: { duration: 0.2 } }}
    className="flex items-center gap-3 p-3 rounded-xl bg-background/80 backdrop-blur-sm border border-border hover:border-accent/30 hover:shadow-md transition-all duration-200 group cursor-default"
  >
    <span className="text-2xl" role="img" aria-label={name}>{flag}</span>
    <div className="min-w-0 flex-1">
      <p className="text-sm font-semibold text-foreground">{code}</p>
      <p className="text-xs text-muted-foreground truncate">{name}</p>
    </div>
  </motion.div>
);

export default CurrencyMapSection;
