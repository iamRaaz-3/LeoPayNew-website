import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import globeHero from "@/assets/globe-hero.webp";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* Background globe */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={globeHero}
          loading="lazy"
          decoding="async"
          alt=""

          //when map is not hiddenb
          // className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[15%] w-[130%] max-w-[1600px] opacity-[0.1] select-none"
          // aria-hidden="true"


   //when map is hidden 
          className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[130%] max-w-[1600px] opacity-[0.1] select-none"
          aria-hidden="true"
        />
      </div>

      <div className="container relative z-10 text-center max-w-4xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.05]"
        >
          Stablecoin API for
          <br />
          Global Payments
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 md:mt-8 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          A modern infrastructure for global finance, orchestrating stablecoins,
          local payment rails, virtual accounts, and integrated compliance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 md:mt-10"
        >
          <a href="https://calendly.com/leopayofficial" target="_blank" rel="noopener noreferrer">
            <Button variant="hero" size="lg" className="min-w-[180px] h-12 text-base">
              Get a Demo
            </Button>
          </a>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
