import { motion } from "framer-motion";

import pixLogo        from "../assets/partners/Pix_(Brazil)_logo.svg.png";
import gcashLogo      from "../assets/partners/GCash-Logo.png";
import metroBankLogo  from "../assets/partners/Metro_Bank_logo.svg.png";
import unionBankLogo  from "../assets/partners/Union_Bank_of_India_Logo.svg.png";
import impsLogo       from "../assets/partners/IMPS_logo.svg.png";
import pdaxLogo       from "../assets/partners/PDAX-Logo-dark.png.webp";
import sepaLogo       from "../assets/partners/sepa-payments.svg";
import nibssLogo      from "../assets/partners/NIBSS.png";
import bnmLogo        from "../assets/partners/Logo Bank Negara Malaysia.png";
import digit9Logo     from "../assets/partners/d9-logo.png";
import asporaLogo     from "../assets/partners/Aspora.png";
import briLogo        from "../assets/partners/Bank Rakyat Indonesia.svg";
import coinsPhLogo    from "../assets/partners/Coins.ph-logo.jpg";
import vietQrLogo     from "../assets/partners/VietQR_Logo (1).svg";

import "./Partner.css";

const partners = [
  { name: "PIX",                  logo: pixLogo },
  { name: "GCash",                logo: gcashLogo },
  { name: "MetroBank",            logo: metroBankLogo },
  { name: "Union Bank",           logo: unionBankLogo },
  { name: "IMPS",                 logo: impsLogo },
  { name: "PDAX",                 logo: pdaxLogo },
  { name: "SEPA",                 logo: sepaLogo },
  { name: "NIBSS",                logo: nibssLogo },
  { name: "Bank Negara Malaysia", logo: bnmLogo },
  { name: "Digit9",               logo: digit9Logo },
  { name: "Aspora",               logo: asporaLogo },
  { name: "Bank Rakyat Indonesia",logo: briLogo },
  { name: "Coins.ph",             logo: coinsPhLogo },
  { name: "VietQR",               logo: vietQrLogo },
];

const PartnersSection = () => {
  return (
    <section className="py-16 md:py-20 border-b border-border">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
        className="container text-center mb-10"
      >
        <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
        Partners & Payment Methods
        </p>
      </motion.div>

      {/* Scrolling Logos */}
      <div className="relative overflow-hidden">
        <div className="animate-scroll">
          {[...partners, ...partners].map(({ name, logo }, i) => (
            <div
              key={`${name}-${i}`}
              className="flex-shrink-0 mx-8 md:mx-12 flex items-center justify-center"
              title={name}
            >
              <img
                src={logo}
                alt={name}
              />
            </div>
          ))}
        </div>

        {/* Left fade */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />

        {/* Right fade */}
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
};

export default PartnersSection;
