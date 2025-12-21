
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GaleriaSection from '@/components/GaleriaSection';

const Galeria = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-16">
        <GaleriaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Galeria;
