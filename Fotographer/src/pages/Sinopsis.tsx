
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SinopsisSection from '@/components/SinopsisSection';

const Sinopsis = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-16">
        <SinopsisSection />
      </main>
      <Footer />
    </div>
  );
};

export default Sinopsis;
