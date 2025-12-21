
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TrailerSection from '@/components/TrailerSection';

const Trailer = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-16">
        <TrailerSection />
      </main>
      <Footer />
    </div>
  );
};

export default Trailer;
