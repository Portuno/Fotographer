
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { User, Camera, Search, Eye } from 'lucide-react';

const PersonajesSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('personajes');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const characters = [
    {
      name: "LUPE",
      role: "La Investigadora",
      icon: Search,
      description: "Curiosa y determinada, Lupe lidera la búsqueda de El Fotógrafo. Su personalidad analítica y su pasión por los misterios urbanos la convierten en la fuerza motriz de la investigación.",
      traits: ["Analítica", "Curiosa", "Determinada", "Observadora"]
    },
    {
      name: "MARIAN",
      role: "El Documentalista",
      icon: User,
      description: "Compañero leal de Lupe, Marian documenta todo el proceso. Su perspectiva única y su humor sutil equilibran la intensidad de la búsqueda.",
      traits: ["Leal", "Observador", "Humorístico", "Reflexivo"]
    },
    {
      name: "EL FOTÓGRAFO",
      role: "El Artista Sombra",
      icon: Camera,
      description: "Enigmático artista urbano que opera desde las sombras. Su filosofía 'Si no eres visto, no existes' define su arte y su manera de ver el mundo.",
      traits: ["Misterioso", "Artístico", "Filosófico", "Elusivo"]
    },
    {
      name: "VALENCIA",
      role: "La Ciudad Testigo",
      icon: Eye,
      description: "La ciudad misma se convierte en personaje, con sus puentes, calles y rincones que guardan los secretos y sirven de lienzo para el arte urbano.",
      traits: ["Histórica", "Vibrante", "Misteriosa", "Inspiradora"]
    }
  ];

  return (
    <section id="personajes" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="font-futura text-6xl md:text-7xl text-primary mb-4">
              PERSONAJES
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="font-montserrat text-lg text-foreground/70 max-w-2xl mx-auto">
              Los protagonistas de esta historia noir urbana, cada uno con su propia perspectiva 
              sobre la búsqueda y el arte callejero.
            </p>
          </div>

          {/* Characters Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {characters.map((character, index) => (
              <Card 
                key={character.name} 
                className={`bg-card/30 backdrop-blur-sm border-border/50 hover-scale ${
                  index % 2 === 1 ? 'dutch-angle' : ''
                }`}
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-secondary/20 p-3 rounded-full mr-4">
                      <character.icon className="h-8 w-8 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-futura text-3xl text-primary">{character.name}</h3>
                      <p className="font-montserrat text-secondary font-medium">{character.role}</p>
                    </div>
                  </div>

                  <p className="font-montserrat text-foreground/80 leading-relaxed mb-6">
                    {character.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {character.traits.map((trait) => (
                      <span 
                        key={trait}
                        className="px-3 py-1 bg-muted/50 text-foreground/70 text-sm font-montserrat rounded-full"
                      >
                        {trait}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quote Section */}
          <div className="text-center mt-16">
            <Card className="bg-card/20 backdrop-blur-sm border-border/30 max-w-4xl mx-auto">
              <CardContent className="p-8">
                <p className="font-gotham text-2xl md:text-3xl text-primary/90 italic mb-4">
                  "Cada personaje representa una faceta diferente de la búsqueda humana: 
                  la curiosidad, la documentación, la creación y el testimonio silencioso."
                </p>
                <p className="font-montserrat text-sm text-foreground/60">
                  - Camila Verdún Lomba, Directora
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonajesSection;
