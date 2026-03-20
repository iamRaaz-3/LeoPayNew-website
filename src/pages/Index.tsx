import Navbar from "@/components/Navbar";
import Hero from "@/components/HeroSection";
import PartnersSection from "@/components/PartnersSection";
import ComparisonSection from "@/components/ComparisonSection";
import StatsSection from "@/components/StatsSection";
import CurrencyMapSection from "@/components/CurrencyMapSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <PartnersSection />
      <ComparisonSection />
      <StatsSection />
      <CurrencyMapSection />
      <Footer />
    </div>
  );
};

export default Index;
