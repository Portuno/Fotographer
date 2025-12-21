
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Eye, Camera, Heart, Lightbulb } from 'lucide-react';

const ManifiestoSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [revealedText, setRevealedText] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setRevealedText(true), 800);
        }
      },
      { threshold: 0.4 }
    );

    const section = document.getElementById('manifiesto');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const principles = [
    {
      icon: Eye,
      title: "VISIBILIDAD",
      text: "En un mundo saturado de imágenes, ser visto significa existir. El arte urbano hace visible lo invisible."
    },
    {
      icon: Camera,
      title: "CAPTURA",
      text: "Cada fotografía es un momento detenido en el tiempo, una fracción de eternidad que trasciende lo efímero."
    },
    {
      icon: Heart,
      title: "HUMANIDAD",
      text: "Detrás de cada rostro anónimo hay una historia, una vida, una existencia que merece ser recordada."
    },
    {
      icon: Lightbulb,
      title: "IMPERFECCIÓN",
      text: "La filosofía Wabi-Sabi nos enseña que la belleza reside en lo imperfecto, lo incompleto, lo efímero."
    }
  ];

  return (
    <section id="manifiesto" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="font-futura text-6xl md:text-7xl text-primary mb-4">
              EL MANIFIESTO
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </div>

          {/* Main Manifesto */}
          <div className="max-w-4xl mx-auto mb-16">
            <Card className="bg-card/40 backdrop-blur-sm border-border/50 relative overflow-hidden">
              <CardContent className="p-12">
                <div className="text-center mb-8">
                  <h3 className="font-gotham text-3xl md:text-4xl text-primary mb-6">
                    "Si no eres visto, no existes"
                  </h3>
                  <p className="font-montserrat text-sm text-foreground/60 uppercase tracking-wider">
                    Filosofía del Fotógrafo
                  </p>
                </div>

                <div className={`relative ${revealedText ? 'reveal-text' : ''}`}>
                  <p className="font-montserrat text-lg md:text-xl leading-relaxed text-foreground/90 mb-6">
                    En las calles de Valencia, entre sombras y luces, existe un observador silencioso. 
                    Su misión trasciende el arte: hacer visible lo invisible, dar presencia a lo ausente, 
                    otorgar existencia a través de la imagen.
                  </p>
                  
                  <p className="font-montserrat text-lg md:text-xl leading-relaxed text-foreground/90 mb-6">
                    Cada sticker es un acto de resistencia contra el anonimato. Cada fotografía, 
                    una declaración de que esa persona, ese momento, ese instante fugaz merece 
                    ser recordado, merece existir más allá del olvido.
                  </p>

                  <div className="text-center">
                    <p className="font-gotham text-2xl text-secondary italic mb-2">
                      "Nada dura, nada se acaba y nada es perfecto"
                    </p>
                    <span className="text-sm text-foreground/60 font-montserrat">
                      - Wabi-Sabi: La belleza de lo imperfecto
                    </span>
                  </div>
                </div>

                {/* Scanner effect overlay */}
                <div className="absolute inset-0 scanner-effect opacity-20 pointer-events-none"></div>
              </CardContent>
            </Card>
          </div>

          {/* Principles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {principles.map((principle, index) => (
              <Card 
                key={principle.title}
                className={`bg-card/30 backdrop-blur-sm border-border/50 hover-scale transition-all duration-300 ${
                  index % 2 === 1 ? 'mt-8' : ''
                }`}
              >
                <CardContent className="p-6 text-center">
                  <div className="bg-secondary/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <principle.icon className="h-8 w-8 text-secondary" />
                  </div>
                  <h4 className="font-futura text-xl text-primary mb-3">{principle.title}</h4>
                  <p className="font-montserrat text-sm text-foreground/80 leading-relaxed">
                    {principle.text}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManifiestoSection;
