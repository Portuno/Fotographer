
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EquipoSection from '@/components/EquipoSection';

const Equipo = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-16">
        <EquipoSection />
      </main>
      <Footer />
    </div>
  );
};

export default Equipo;
