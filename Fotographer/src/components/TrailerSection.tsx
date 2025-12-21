
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Calendar, Clock } from 'lucide-react';

const TrailerSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('trailer');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="trailer" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="font-futura text-6xl md:text-7xl text-primary mb-4">
              TRÁILER
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="font-montserrat text-lg text-foreground/70 max-w-2xl mx-auto">
              Una conversación íntima entre Marian y Lupe sobre cómo documentar lo imposible, 
              con la voz omnipresente del Fotógrafo.
            </p>
          </div>

          {/* Video Player */}
          <div className="max-w-4xl mx-auto mb-12">
            <Card className="bg-card/40 backdrop-blur-sm border-border/50 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative aspect-video bg-muted/30 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-background/80 to-background/40"></div>
                  
                  <div className="relative z-10 text-center">
                    <div className="bg-secondary/20 p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                      <Play className="h-12 w-12 text-secondary ml-1" />
                    </div>
                    
                    <h3 className="font-gotham text-2xl text-primary mb-4">
                      Próximamente
                    </h3>
                    
                    <p className="font-montserrat text-foreground/70 mb-6">
                      El tráiler estará disponible pronto
                    </p>
                    
                    <Button 
                      size="lg"
                      className="bg-secondary hover:bg-secondary/90 text-white font-montserrat font-semibold"
                    >
                      <Play className="mr-2 h-5 w-5" />
                      Reproducir Tráiler
                    </Button>
                  </div>

                  {/* Film grain effect */}
                  <div className="absolute inset-0 film-grain opacity-30"></div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Trailer Info */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-card/30 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Calendar className="h-6 w-6 text-secondary mr-3" />
                  <h4 className="font-gotham text-xl text-primary">Concepto del Tráiler</h4>
                </div>
                <p className="font-montserrat text-foreground/80 leading-relaxed">
                  Una conversación íntima entre Lupe y Marian sobre la imposibilidad de documentar 
                  a alguien que no quiere ser encontrado. Mientras hablan, la voz del Fotógrafo 
                  se entrelaza con sus palabras, revelando su presencia constante.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/30 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Clock className="h-6 w-6 text-secondary mr-3" />
                  <h4 className="font-gotham text-xl text-primary">Estilo Visual</h4>
                </div>
                <p className="font-montserrat text-foreground/80 leading-relaxed">
                  Estética noir urbana con contrastes marcados. La cámara captura tanto la 
                  conversación natural como los momentos de tensión, utilizando la luz y la 
                  sombra para crear una atmósfera misteriosa.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrailerSection;
