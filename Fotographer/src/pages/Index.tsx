
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import LandingBackground from '@/components/LandingBackground';

const Index = () => {
  return (
    <div className="min-h-screen text-foreground relative">
      <LandingBackground />
      <Header />
      <HeroSection />
      <Footer />
    </div>
  );
};

export default Index;
