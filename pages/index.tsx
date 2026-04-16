import Navbar from "@/components/navbar";
import HeroSection from "@/components/heroSection";
import FeaturesSection from "@/components/featuresSection";
import SetupSection from "@/components/setupSection";
import LegalSection from "@/components/legalSection";
import Footer from "@/components/footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <SetupSection />
        <LegalSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
