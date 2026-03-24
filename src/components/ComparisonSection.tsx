import { motion } from "framer-motion";

const ComparisonSection = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Your money deserves a faster route
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Skip the middlemen and delays. LeoPay moves money
            globally in minutes, instead of days.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Old way */}
          <motion.div
            initial={{ opacity: 0, x: -24, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 0.985, transition: { duration: 0.25 } }}
            className="rounded-2xl border border-border bg-card p-8 md:p-10 cursor-default"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
             Slow, Expensive, and Inefficient 
            </h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-10">
              Traditional payments rely on multiple banks, hidden fees, and intermediaries that delay transactions while adding unnecessary costs.
            </p>

            {/* Visual: chain of banks */}
            <div className="flex items-center justify-center gap-3 mb-12 py-8">
              {["1/2 day", "1 day", "1 day", "2 days"].map((time, i) => (
                <div key={i} className="flex items-center gap-3">
                  <motion.div
                    className="flex flex-col items-center"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-muted flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-muted-foreground">
                        <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v4M12 14v4M16 14v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-xs text-muted-foreground mt-1.5 whitespace-nowrap">{time}</span>
                  </motion.div>
                  {i < 3 && (
                    <svg width="20" height="8" className="text-border mt-[-16px]">
                      <line x1="0" y1="4" x2="20" y2="4" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
                    </svg>
                  )}
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
              <Stat label="Settlement Time" value="2-5 days" sub="Business days only" />
              <Stat label="Total cost" value="3-5%" sub="Fees + FX markup" />
              <Stat label="Availability" value="9AM-5PM" sub="Banking hours only" />
            </div>
          </motion.div>

          {/* New way */}
          <motion.div
            initial={{ opacity: 0, x: 24, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.015, transition: { duration: 0.25 } }}
            className="rounded-2xl surface-dark p-8 md:p-10 cursor-default"
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-3">
             Direct Rails, Faster Settlement.
            </h3>
            <p className="text-sm md:text-base opacity-70 leading-relaxed mb-10">
             A unified network with clear pricing, moving funds efficiently through optimized routes, with near-instant completion.

            </p>

            {/* Visual: direct route with animated dots */}
            <div className="flex items-center justify-center gap-6 mb-12 py-8">
              <motion.div
                className="flex flex-col items-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-accent">
                    <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v4M12 14v4M16 14v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-xs text-accent mt-1.5">&lt;30 seconds</span>
              </motion.div>
              <div className="flex items-center gap-1">
                {Array.from({ length: 8 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-accent/40"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.4 + i * 0.05 }}
                  />
                ))}
              </div>
              <motion.div
                className="flex flex-col items-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-accent/20 flex items-center justify-center border border-accent/30">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-accent">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-xs text-accent mt-1.5">LeoPay</span>
              </motion.div>
              <div className="flex items-center gap-1">
                {Array.from({ length: 8 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-accent/40"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.7 + i * 0.05 }}
                  />
                ))}
              </div>
              <motion.div
                className="flex flex-col items-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-accent">
                    <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v4M12 14v4M16 14v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-xs text-accent mt-1.5">&lt;30 seconds</span>
              </motion.div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-accent/20">
              <StatGreen label="Settlement Time" value="<60 sec" sub="Real-time network" />
              <StatGreen label="Total cost" value="0.01-0.3%" sub="All-in pricing" />
              <StatGreen label="Availability" value="24/7/365" sub="Always on" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Stat = ({ label, value, sub }: { label: string; value: string; sub: string }) => (
  <div>
    <p className="text-xs text-muted-foreground mb-1">{label}</p>
    <p className="text-lg md:text-xl font-bold text-foreground">{value}</p>
    <p className="text-xs text-muted-foreground mt-0.5">{sub}</p>
  </div>
);

const StatGreen = ({ label, value, sub }: { label: string; value: string; sub: string }) => (
  <div>
    <p className="text-xs opacity-60 mb-1">{label}</p>
    <p className="text-lg md:text-xl font-bold text-accent">{value}</p>
    <p className="text-xs opacity-60 mt-0.5">{sub}</p>
  </div>
);

export default ComparisonSection;
