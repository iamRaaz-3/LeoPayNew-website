// import { motion } from "framer-motion";

// import pixLogo        from "../assets/partners/Pix_(Brazil)_logo.svg.png";
// import gcashLogo      from "../assets/partners/GCash-Logo.png";
// import metroBankLogo  from "../assets/partners/Metro_Bank_logo.svg.png";
// import unionBankLogo  from "../assets/partners/Union_Bank_of_India_Logo.svg.png";
// import impsLogo       from "../assets/partners/IMPS_logo.svg.png";
// import pdaxLogo       from "../assets/partners/PDAX-Logo-dark.png.webp";
// import sepaLogo       from "../assets/partners/sepa-payments.svg";
// import nibssLogo      from "../assets/partners/NIBSS.png";
// import bnmLogo        from "../assets/partners/Logo Bank Negara Malaysia.png";
// import digit9Logo     from "../assets/partners/d9-logo.png";

// const partners = [
//   { name: "PIX",                  logo: pixLogo },
//   { name: "GCash",                logo: gcashLogo },
//   { name: "MetroBank",            logo: metroBankLogo },
//   { name: "Union Bank",           logo: unionBankLogo },
//   { name: "IMPS",                 logo: impsLogo },
//   { name: "PDAX",                 logo: pdaxLogo },
//   { name: "SEPA",                 logo: sepaLogo },
//   { name: "NIBSS",                logo: nibssLogo },
//   { name: "Bank Negara Malaysia", logo: bnmLogo },
//   { name: "Digit9",               logo: digit9Logo },
// ];

// const PartnersSection = () => {
//   return (
//     <section className="py-16 md:py-20 overflow-hidden border-b border-border">
//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true, amount: 0.5 }}
//         transition={{ duration: 4, ease: [4, 1, 2, 2] }}
//         className="container text-center mb-10"
//       >
//         <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
//           Trusted by leading platforms
//         </p>
//       </motion.div>

//       {/* Scrolling logos */}
//       <div className="relative">
//         <div className="flex animate-scroll-left">
//           {[...partners, ...partners].map(({ name, logo }, i) => (
//             <div
//               key={`${name}-${i}`}
//               className="flex-shrink-0 mx-8 md:mx-12 flex items-center justify-center"
//               title={name}
//             >
//               <img
//                 src={logo}
//                 alt={name}
//                 className="h-10 w-auto object-contain"
//               />
//             </div>
//           ))}
//         </div>
//         {/* Edge fades */}
//         <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent pointer-events-none" />
//         <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent pointer-events-none" />
//       </div>
//     </section>
//   );
// };

// export default PartnersSection;





