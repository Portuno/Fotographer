
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
                  Tras tres años desde su desaparición, vuelve a aparecer El <em className="text-primary font-medium">Fotógrapher</em>, un artista 
                  urbano furtivo de la ciudad de <span className="text-secondary font-medium">Valencia</span>. Una periodista obsesiva y un psicólogo 
                  paranoico se deciden a investigarlo, evitando caer en la locura.
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
                <h3 className="font-futura text-lg font-bold text-primary mb-4 uppercase tracking-wide">Los Investigadores</h3>
                <p className="font-montserrat text-foreground/80 leading-relaxed">
                  Una periodista obsesiva y un psicólogo paranoico que se deciden a investigar 
                  al Fotógrapher, evitando caer en la locura.
                </p>
              </CardContent>
            </Card>

            <Card className="noir-card sophisticated-glow">
              <CardContent className="p-8 text-center">
                <Camera className="h-10 w-10 text-secondary mx-auto mb-6" />
                <h3 className="font-futura text-lg font-bold text-primary mb-4 uppercase tracking-wide">El Fotógrapher</h3>
                <p className="font-montserrat text-foreground/80 leading-relaxed">
                  Artista urbano furtivo de Valencia que reaparece tras tres años de desaparición.
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
