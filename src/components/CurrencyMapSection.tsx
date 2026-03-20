import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Currency {
  code: string;
  name: string;
  flag: string;
  status: "active" | "beta" | "coming";
  eta?: string;
  // Position on the "network" — percentages
  x: number;
  y: number;
}

const currencies: Currency[] = [
  // Active — spread across the map
  { code: "USD", name: "US Dollar", flag: "🇺🇸", status: "active", x: 22, y: 38 },
  { code: "EUR", name: "Euro", flag: "🇪🇺", status: "active", x: 48, y: 22 },
  { code: "GBP", name: "British Pound", flag: "🇬🇧", status: "active", x: 42, y: 30 },
  { code: "BRL", name: "Brazilian Real", flag: "🇧🇷", status: "active", x: 30, y: 68 },
  { code: "MXN", name: "Mexican Peso", flag: "🇲🇽", status: "active", x: 18, y: 52 },
  { code: "AED", name: "UAE Dirham", flag: "🇦🇪", status: "active", x: 60, y: 45 },
  { code: "AUD", name: "Australian Dollar", flag: "🇦🇺", status: "active", x: 82, y: 72 },
  { code: "USDC", name: "USD Coin", flag: "💲", status: "active", x: 50, y: 50 },
  { code: "USDT", name: "USD Tether", flag: "💲", status: "active", x: 38, y: 48 },
  // Beta
  { code: "PHP", name: "Philippine Peso", flag: "🇵🇭", status: "beta", x: 80, y: 50 },
  { code: "COP", name: "Colombian Peso", flag: "🇨🇴", status: "beta", x: 24, y: 58 },
  { code: "ARS", name: "Argentine Peso", flag: "🇦🇷", status: "beta", x: 28, y: 78 },
  // Coming
  { code: "CAD", name: "Canadian Dollar", flag: "🇨🇦", status: "coming", x: 20, y: 28, eta: "Q2 2026" },
  { code: "INR", name: "Indian Rupee", flag: "🇮🇳", status: "coming", x: 68, y: 42, eta: "Q3 2026" },
  { code: "SGD", name: "Singapore Dollar", flag: "🇸🇬", status: "coming", x: 78, y: 55, eta: "Q2 2026" },
  { code: "HKD", name: "Hong Kong Dollar", flag: "🇭🇰", status: "coming", x: 80, y: 38, eta: "Q2 2026" },
  { code: "JPY", name: "Japanese Yen", flag: "🇯🇵", status: "coming", x: 85, y: 32, eta: "Q4 2026" },
  { code: "CHF", name: "Swiss Franc", flag: "🇨🇭", status: "coming", x: 50, y: 32, eta: "Q2 2026" },
];

// Connection lines between currencies (index pairs)
const connections: [number, number][] = [
  [0, 8], [8, 7], [7, 5], [5, 13], // USD → USDT → USDC → AED → INR
  [1, 2], [2, 0], [0, 4], [4, 3], // EUR → GBP → USD → MXN → BRL
  [7, 1], [7, 6], [5, 9], [9, 14], // USDC hub connections
  [3, 11], [4, 10], [13, 15], [15, 16], // More connections
  [1, 17], [12, 0], // CHF, CAD
];

// Animated pulse dot traveling along a connection
const PulseDot = ({ x1, y1, x2, y2, delay }: { x1: number; y1: number; x2: number; y2: number; delay: number }) => {
  const progress = useMotionValue(0);
  const cx = useTransform(progress, [0, 1], [x1, x2]);
  const cy = useTransform(progress, [0, 1], [y1, y2]);

  useEffect(() => {
    const controls = animate(progress, 1, {
      duration: 2.5 + Math.random() * 1.5,
      delay: delay,
      repeat: Infinity,
      repeatDelay: 3 + Math.random() * 4,
      ease: "easeInOut",
    });
    return controls.stop;
  }, [progress, delay]);

  return (
    <motion.circle
      cx={cx}
      cy={cy}
      r="2"
      fill="hsl(var(--accent))"
      opacity={0.8}
    />
  );
};

const NetworkLine = ({ x1, y1, x2, y2, delay, active }: {
  x1: number; y1: number; x2: number; y2: number; delay: number; active: boolean;
}) => {
  return (
    <motion.line
      x1={`${x1}%`}
      y1={`${y1}%`}
      x2={`${x2}%`}
      y2={`${y2}%`}
      stroke={active ? "hsl(var(--accent))" : "hsl(var(--border))"}
      strokeWidth={active ? "0.5" : "0.3"}
      strokeOpacity={active ? 0.3 : 0.12}
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, delay: delay * 0.08, ease: [0.16, 1, 0.3, 1] }}
    />
  );
};

const CurrencyNode = ({ currency, index }: { currency: Currency; index: number }) => {
  const [hovered, setHovered] = useState(false);
  const isActive = currency.status === "active";
  const isBeta = currency.status === "beta";

  return (
    <motion.div
      className="absolute"
      style={{ left: `${currency.x}%`, top: `${currency.y}%`, transform: "translate(-50%, -50%)" }}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: 0.3 + index * 0.06,
        ease: [0.16, 1, 0.3, 1],
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Ripple ring for active currencies */}
      {isActive && (
        <motion.div
          className="absolute inset-0 rounded-full border border-accent/20"
          style={{ margin: "-8px" }}
          animate={{
            scale: [1, 1.8, 2.2],
            opacity: [0.4, 0.1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: index * 0.4,
            ease: "easeOut",
          }}
        />
      )}

      {/* Main node */}
      <motion.div
        className={`relative z-10 flex items-center justify-center rounded-full cursor-default
          ${isActive ? "w-11 h-11 md:w-14 md:h-14 bg-accent/15 border border-accent/30" : ""}
          ${isBeta ? "w-10 h-10 md:w-12 md:h-12 bg-accent/8 border border-accent/15" : ""}
          ${!isActive && !isBeta ? "w-9 h-9 md:w-11 md:h-11 bg-muted/50 border border-border" : ""}
        `}
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      >
        <span className="text-base md:text-lg" role="img" aria-label={currency.name}>
          {currency.flag}
        </span>
      </motion.div>

      {/* Tooltip on hover */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 pointer-events-none z-20"
        initial={false}
        animate={{
          opacity: hovered ? 1 : 0,
          y: hovered ? 0 : 4,
          scale: hovered ? 1 : 0.95,
        }}
        transition={{ duration: 0.15 }}
      >
        <div className="bg-card border border-border rounded-lg px-3 py-2 shadow-xl shadow-black/20 whitespace-nowrap">
          <p className="text-xs font-bold text-foreground">{currency.code}</p>
          <p className="text-[10px] text-muted-foreground">{currency.name}</p>
          {currency.status === "active" && (
            <span className="inline-flex items-center gap-1 mt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-[10px] text-accent font-medium">Active</span>
            </span>
          )}
          {currency.status === "beta" && (
            <span className="text-[10px] text-accent/70 font-medium mt-1 block">Beta</span>
          )}
          {currency.status === "coming" && (
            <span className="text-[10px] text-muted-foreground mt-1 block">{currency.eta}</span>
          )}
        </div>
      </motion.div>

      {/* Code label below node */}
      <motion.p
        className={`text-[10px] md:text-xs font-semibold text-center mt-1
          ${isActive ? "text-accent" : isBeta ? "text-accent/50" : "text-muted-foreground/60"}
        `}
        animate={{ opacity: hovered ? 1 : 0.7 }}
      >
        {currency.code}
      </motion.p>
    </motion.div>
  );
};

const CurrencyMapSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="container relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            What currencies are you looking for?
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground">
            Our network is always expanding.
          </p>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center justify-center gap-6 mb-8"
        >
          <span className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="w-2.5 h-2.5 rounded-full bg-accent" /> Active
          </span>
          <span className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="w-2.5 h-2.5 rounded-full bg-accent/40" /> Beta
          </span>
          <span className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" /> Coming Soon
          </span>
        </motion.div>

        {/* Network visualization */}
        <div
          ref={containerRef}
          className="relative w-full rounded-3xl border border-border bg-card/50 overflow-hidden"
          style={{ aspectRatio: "16 / 9" }}
        >
          {/* Ambient glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full bg-accent/5 blur-[100px]" />
          </div>

          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }} />

          {/* SVG connection lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
            {connections.map(([a, b], i) => {
              const ca = currencies[a];
              const cb = currencies[b];
              const bothActive = ca.status === "active" && cb.status === "active";
              return (
                <NetworkLine
                  key={`line-${i}`}
                  x1={ca.x}
                  y1={ca.y}
                  x2={cb.x}
                  y2={cb.y}
                  delay={i}
                  active={bothActive}
                />
              );
            })}
            {/* Pulse dots on some active connections */}
            {connections.slice(0, 8).map(([a, b], i) => {
              const ca = currencies[a];
              const cb = currencies[b];
              if (ca.status !== "active" || cb.status !== "active") return null;
              return (
                <PulseDot
                  key={`pulse-${i}`}
                  x1={ca.x * 0.01 * 100}
                  y1={ca.y * 0.01 * 100}
                  x2={cb.x * 0.01 * 100}
                  y2={cb.y * 0.01 * 100}
                  delay={i * 0.8}
                />
              );
            })}
          </svg>

          {/* Currency nodes */}
          {currencies.map((currency, i) => (
            <CurrencyNode key={currency.code} currency={currency} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrencyMapSection;
