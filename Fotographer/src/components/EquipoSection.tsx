
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { User, Mail, Heart, Users } from 'lucide-react';

const EquipoSection = () => {
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

    const section = document.getElementById('equipo');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const teamMembers = [
    {
      name: "Lautaro J. Sarni",
      role: "Productor",
      image: "https://i.ibb.co/4gd2KRH2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
    },
    {
      name: "Camila Verdún Lomba",
      role: "Directora",
      image: "https://i.ibb.co/Pvzp6zqq",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
    },
    {
      name: "Facundo J. Hernandez",
      role: "Director de Fotografía",
      image: "https://i.ibb.co/FqjQ2RDc",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
    }
  ];

  const collaboratorRoles = [
    "Director de Fotografía",
    "Operador de Cámara",
    "Técnico de Sonido",
    "Técnico de Iluminación",
    "Extras y Actores",
    "Músicos y Compositores",
    "Ayudantes de Producción"
  ];

  return (
    <section id="equipo" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="font-bebas text-6xl md:text-7xl text-primary mb-4">
              EQUIPO
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="font-montserrat text-lg text-foreground/70 max-w-2xl mx-auto">
              El talento humano detrás de "El Fotógrapher". Un proyecto no-budget impulsado por 
              la pasión y la colaboración.
            </p>
          </div>

          {/* Core Team */}
          <div className="mb-16">
            <h3 className="font-playfair text-3xl text-primary text-center mb-12">Equipo Principal</h3>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {teamMembers.map((member, index) => (
                <Card 
                  key={member.name}
                  className={`bg-card/30 backdrop-blur-sm border-border/50 hover-scale ${
                    index % 2 === 1 ? 'dutch-angle' : ''
                  }`}
                >
                  <CardContent className="p-8">
                    <div className="flex flex-col items-center mb-6">
                      {member.image && (
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-secondary/30"
                        />
                      )}
                      <div className="text-center">
                        <h4 className="font-playfair text-xl font-bold text-primary">
                          {member.name}
                        </h4>
                        <p className="font-montserrat text-secondary font-medium">
                          {member.role}
                        </p>
                      </div>
                    </div>

                    <p className="font-montserrat text-foreground/80 leading-relaxed text-sm">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Collaboration Call */}
          <div className="max-w-4xl mx-auto">
            <Card className="bg-card/20 backdrop-blur-sm border-border/30">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <h3 className="font-playfair text-2xl text-primary mb-4">
                    ¿Quieres Ser Parte del Proyecto?
                  </h3>
                  <p className="font-montserrat text-foreground/80 leading-relaxed">
                    "El Fotógrapher" es un proyecto colaborativo que busca talento apasionado. 
                    Si sientes que puedes contribuir a esta historia, ¡nos encantaría conocerte!
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="font-playfair text-lg text-primary mb-4">Buscamos:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {collaboratorRoles.map((role) => (
                        <div key={role} className="flex items-center">
                          <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                          <span className="font-montserrat text-sm text-foreground/80">{role}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-playfair text-lg text-primary mb-4">Ofrecemos:</h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                        <span className="font-montserrat text-sm text-foreground/80">Experiencia en producción cinematográfica</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                        <span className="font-montserrat text-sm text-foreground/80">Créditos en el proyecto</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                        <span className="font-montserrat text-sm text-foreground/80">Colaboración en un proyecto artístico único</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                        <span className="font-montserrat text-sm text-foreground/80">Networking en el mundo audiovisual</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <Button 
                    size="lg"
                    className="bg-secondary hover:bg-secondary/90 text-white font-montserrat font-semibold mr-4"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Únete al Proyecto
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-primary text-primary hover:bg-primary hover:text-background font-montserrat font-semibold"
                  >
                    Más Información
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EquipoSection;
