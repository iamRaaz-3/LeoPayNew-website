import Navbar1 from "@/components/Navbar1";
import Hero from "@/components/HeroSection";
import PartnersSection from "@/components/PartnersSection";
import ComparisonSection from "@/components/ComparisonSection";
import StatsSection from "@/components/StatsSection";
import CurrencyMapSection from "@/components/CurrencyMapSection";
import Footer1 from "@/components/Footer1";


const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* <Navbar /> */}
      <Navbar1 />
      <Hero />
      <PartnersSection />
      <ComparisonSection />
      <StatsSection />
      <CurrencyMapSection />
     <Footer1></Footer1>
    </div>
  );
};

export default Index;
