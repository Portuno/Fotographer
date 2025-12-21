
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ManifiestoSection from '@/components/ManifiestoSection';

const Manifiesto = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-16">
        <ManifiestoSection />
      </main>
      <Footer />
    </div>
  );
};

export default Manifiesto;
