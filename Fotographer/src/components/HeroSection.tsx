
import { Button } from '@/components/ui/button';
import { Play, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden p-0 m-0">
      <div className="relative z-10 flex flex-col items-start justify-center h-screen w-full px-6 md:px-16 lg:px-32">
        <div className="flex flex-col items-start w-full max-w-2xl">
          {/* Título como texto usando Andada SC */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight text-primary text-shadow-noir tracking-wide mb-4 text-left">
            El Fotógrapher
          </h1>
          <p className="text-lg md:text-2xl text-foreground/90 font-medium mb-12 text-left">
            Un cortometraje por <span className="text-secondary">Camila Verdún Lomba</span> y <span className="text-secondary">Lautaro J. Sarni</span>
          </p>
          <div className="flex flex-col gap-6 w-full items-start">
            <Link to="/trailer" className="w-full">
              <Button 
                size="lg" 
                className="minimal-button sophisticated-glow group w-full py-6 text-lg md:text-xl"
              >
                <Play className="mr-2 h-6 w-6 group-hover:scale-110 transition-transform" />
                Ver Tráiler
              </Button>
            </Link>
            <Link to="/sinopsis" className="w-full">
              <Button 
                variant="outline" 
                size="lg"
                className="minimal-button bg-transparent border-secondary text-secondary hover:bg-secondary hover:text-background sophisticated-glow group w-full py-6 text-lg md:text-xl"
              >
                <Eye className="mr-2 h-6 w-6 group-hover:scale-110 transition-transform" />
                Descubre Más
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
