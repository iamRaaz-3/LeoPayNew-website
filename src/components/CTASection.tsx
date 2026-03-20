import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="container max-w-4xl"
      >
        <div className="surface-dark rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
          {/* Subtle pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
              backgroundSize: "32px 32px",
            }} />
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              FX liquidity available 24/7
            </h2>
            <p className="text-base md:text-lg opacity-70 max-w-xl mx-auto mb-8">
              Settle multiple times a day. Withdraw in under 60 mins.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="lg" className="min-w-[180px] h-12 text-base bg-accent hover:bg-accent/90">
                Book Your Free Demo
              </Button>
              <Button variant="hero-outline" size="lg" className="min-w-[180px] h-12 text-base border-accent/30 text-accent hover:bg-accent/10">
                Explore the Product
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTASection;
