import Navbar from "@/components/navbar";
import HeroSection from "@/components/herosection";
import FeaturesSection from "@/components/featuressection";
import SetupSection from "@/components/setupsection";
import LegalSection from "@/components/legalsection";
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
