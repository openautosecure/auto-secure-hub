import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import SetupSection from "@/components/SetupSection";
import LegalSection from "@/components/LegalSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <SetupSection />
      <LegalSection />
      <Footer />
    </div>
  );
};

export default Index;
