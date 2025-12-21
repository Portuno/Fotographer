
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactoSection from '@/components/ContactoSection';

const Contacto = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-16">
        <ContactoSection />
      </main>
      <Footer />
    </div>
  );
};

export default Contacto;
