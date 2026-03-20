import { motion } from "framer-motion";
import worldMap from "@/assets/world-map.png";

const currencies = [
  { code: "USD", name: "US Dollar", flag: "🇺🇸", status: "active" },
  { code: "EUR", name: "Euro", flag: "🇪🇺", status: "active" },
  { code: "GBP", name: "British Pound", flag: "🇬🇧", status: "active" },
  { code: "BRL", name: "Brazilian Real", flag: "🇧🇷", status: "active" },
  { code: "MXN", name: "Mexican Peso", flag: "🇲🇽", status: "active" },
  { code: "AED", name: "UAE Dirham", flag: "🇦🇪", status: "active" },
  { code: "AUD", name: "Australian Dollar", flag: "🇦🇺", status: "active" },
  { code: "USDC", name: "USD Coin", flag: "💲", status: "active" },
  { code: "USDT", name: "USD Tether", flag: "💲", status: "active" },
  { code: "PHP", name: "Philippine Peso", flag: "🇵🇭", status: "beta" },
  { code: "COP", name: "Colombian Peso", flag: "🇨🇴", status: "beta" },
  { code: "ARS", name: "Argentine Peso", flag: "🇦🇷", status: "beta" },
  { code: "CAD", name: "Canadian Dollar", flag: "🇨🇦", status: "coming", eta: "Q2 2026" },
  { code: "INR", name: "Indian Rupee", flag: "🇮🇳", status: "coming", eta: "Q3 2026" },
  { code: "SGD", name: "Singapore Dollar", flag: "🇸🇬", status: "coming", eta: "Q2 2026" },
  { code: "HKD", name: "Hong Kong Dollar", flag: "🇭🇰", status: "coming", eta: "Q2 2026" },
  { code: "JPY", name: "Japanese Yen", flag: "🇯🇵", status: "coming", eta: "Q4 2026" },
  { code: "CHF", name: "Swiss Franc", flag: "🇨🇭", status: "coming", eta: "Q2 2026" },
];

const statusBadge = (status: string, eta?: string) => {
  switch (status) {
    case "active":
      return <span className="text-xs font-medium text-accent">Active</span>;
    case "beta":
      return <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-accent/10 text-accent">Beta</span>;
    case "coming":
      return <span className="text-xs font-medium text-muted-foreground">{eta}</span>;
    default:
      return null;
  }
};

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
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          src={worldMap}
          alt=""
          className="w-full max-w-[1400px] opacity-40 select-none"
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

const CurrencyCard = ({ code, name, flag, status, eta }: {
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
    {statusBadge(status, eta)}
  </motion.div>
);

export default CurrencyMapSection;
