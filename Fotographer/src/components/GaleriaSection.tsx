
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Calendar, Camera } from 'lucide-react';

const GaleriaSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('galeria');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const stickers = [
    {
      id: 1,
      title: "Retrato en Puente de la Trinidad",
      location: "Puente de la Trinidad, Valencia",
      date: "Marzo 2024",
      description: "Primer avistamiento documentado del trabajo del Fotógrafo. Una pareja joven capturada en un momento íntimo.",
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "El Ciclista Anónimo",
      location: "Jardines del Turia",
      date: "Abril 2024",
      description: "Un ciclista matutino convertido en arte urbano. La técnica del Fotógrafo evoluciona hacia retratos más dinámicos.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Reflejo en Cristal",
      location: "Ciudad de las Artes y las Ciencias",
      date: "Mayo 2024",
      description: "Una mujer contemplando su reflejo, capturada en un momento de introspección. El arte imita la vida imitando al arte.",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Conversación Nocturna",
      location: "Barrio del Carmen",
      date: "Junio 2024",
      description: "Dos amigos en una conversación nocturna, inmortalizados en las paredes del casco histórico de Valencia.",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="galeria" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="font-bebas text-6xl md:text-7xl text-primary mb-4">
              GALERÍA DE STICKERS
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="font-montserrat text-lg text-foreground/70 max-w-2xl mx-auto">
              Obras documentadas del misterioso Fotógrafo encontradas por las calles de Valencia. 
              Cada imagen cuenta una historia, cada sticker es una vida capturada.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {stickers.map((sticker, index) => (
              <Card 
                key={sticker.id}
                className={`bg-card/30 backdrop-blur-sm border-border/50 hover-scale overflow-hidden group cursor-pointer ${
                  index % 2 === 1 ? 'mt-8' : ''
                }`}
                onMouseEnter={() => setHoveredItem(sticker.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <CardContent className="p-0">
                  <div className="relative">
                    <img 
                      src={sticker.image} 
                      alt={sticker.title}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                    
                    {/* Hover overlay */}
                    <div className={`absolute inset-0 bg-secondary/20 transition-opacity duration-300 ${
                      hoveredItem === sticker.id ? 'opacity-100' : 'opacity-0'
                    }`}>
                      <div className="absolute inset-0 film-grain"></div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-playfair text-xl font-bold text-primary mb-3">
                      {sticker.title}
                    </h3>
                    
                    <div className="flex items-center space-x-4 mb-4 text-sm text-foreground/60">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {sticker.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {sticker.date}
                      </div>
                    </div>
                    
                    <p className="font-montserrat text-foreground/80 leading-relaxed">
                      {sticker.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Philosophy Quote */}
          <div className="text-center mt-16">
            <Card className="bg-card/20 backdrop-blur-sm border-border/30 max-w-4xl mx-auto">
              <CardContent className="p-8 relative">
                <Camera className="h-12 w-12 text-secondary/30 mx-auto mb-6" />
                <p className="font-playfair text-2xl md:text-3xl text-primary/90 italic mb-4">
                  "Cada sticker es una declaración de existencia, una prueba de que alguien estuvo aquí, 
                  de que fue visto, de que importó lo suficiente como para ser recordado."
                </p>
                <p className="font-montserrat text-sm text-foreground/60">
                  - Filosofía del Fotógrafo
                </p>
                <div className="absolute inset-0 scanner-effect opacity-10"></div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GaleriaSection;
