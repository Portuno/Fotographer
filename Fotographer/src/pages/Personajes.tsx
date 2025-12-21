
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PersonajesSection from '@/components/PersonajesSection';

const Personajes = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-16">
        <PersonajesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Personajes;
