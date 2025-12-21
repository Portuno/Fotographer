
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Camera, MapPin } from 'lucide-react';

const SinopsisSection = () => {
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

    const section = document.getElementById('sinopsis');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="sinopsis" className="py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Title */}
          <div className="text-center mb-20">
            <h2 className="font-futura text-5xl md:text-6xl text-primary mb-6 font-bold tracking-wide">
              SINOPSIS
            </h2>
            <div className="w-16 h-0.5 bg-secondary mx-auto"></div>
          </div>

          {/* Main Synopsis */}
          <div className="max-w-4xl mx-auto mb-16">
            <Card className="noir-card">
              <CardContent className="p-12">
                <p className="font-montserrat text-lg md:text-xl leading-relaxed text-foreground/90 mb-8">
                  En las calles de <span className="text-secondary font-medium">Valencia</span>, dos amigos recorren la ciudad 
                  buscando las misteriosas obras de <span className="text-primary font-medium">"El Fotógrafo"</span>, un artista 
                  urbano que captura personas anónimas y las convierte en arte callejero.
                </p>
                
                <p className="font-montserrat text-lg md:text-xl leading-relaxed text-foreground/90 mb-8">
                  <span className="text-secondary font-medium">Lupe</span> y <span className="text-secondary font-medium">Marian</span> documentan 
                  su búsqueda, sin saber que él ya los ha encontrado. Una historia sobre ser visto, 
                  existir y la delgada línea entre el observador y lo observado.
                </p>

                <div className="text-center">
                  <p className="font-gotham text-2xl text-secondary/90 italic font-medium">
                    "Nada dura, nada se acaba y nada es perfecto"
                  </p>
                  <span className="text-sm text-muted-foreground font-montserrat">- Filosofía Wabi-Sabi</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Key Elements */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="noir-card sophisticated-glow">
              <CardContent className="p-8 text-center">
                <Users className="h-10 w-10 text-secondary mx-auto mb-6" />
                <h3 className="font-futura text-lg font-bold text-primary mb-4 uppercase tracking-wide">Los Buscadores</h3>
                <p className="font-montserrat text-foreground/80 leading-relaxed">
                  Lupe y Marian, dos amigos unidos por la curiosidad y la pasión por descubrir 
                  los secretos urbanos de Valencia.
                </p>
              </CardContent>
            </Card>

            <Card className="noir-card sophisticated-glow">
              <CardContent className="p-8 text-center">
                <Camera className="h-10 w-10 text-secondary mx-auto mb-6" />
                <h3 className="font-futura text-lg font-bold text-primary mb-4 uppercase tracking-wide">El Fotógrafo</h3>
                <p className="font-montserrat text-foreground/80 leading-relaxed">
                  Un artista enigmático que transforma personas anónimas en arte urbano, 
                  operando desde las sombras de la ciudad.
                </p>
              </CardContent>
            </Card>

            <Card className="noir-card sophisticated-glow">
              <CardContent className="p-8 text-center">
                <MapPin className="h-10 w-10 text-secondary mx-auto mb-6" />
                <h3 className="font-futura text-lg font-bold text-primary mb-4 uppercase tracking-wide">Valencia</h3>
                <p className="font-montserrat text-foreground/80 leading-relaxed">
                  La ciudad se convierte en un personaje más, con sus puentes, calles y 
                  rincones que guardan los secretos del misterioso artista.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SinopsisSection;
