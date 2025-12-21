
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Instagram, Youtube, MessageCircle, Send } from 'lucide-react';

const ContactoSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('contacto');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the form data to your backend
  };

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "#",
      handle: "@elfotographer_film",
      color: "hover:text-pink-400"
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "#",
      handle: "El Fotógrapher",
      color: "hover:text-red-400"
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:contact@elfotographer.com",
      handle: "contact@elfotographer.com",
      color: "hover:text-blue-400"
    }
  ];

  return (
    <section id="contacto" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="font-bebas text-6xl md:text-7xl text-primary mb-4">
              CONTACTO
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="font-montserrat text-lg text-foreground/70 max-w-2xl mx-auto">
              ¿Tienes una historia que contar? ¿Quieres ser parte del proyecto? 
              Nos encantaría saber de ti.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="bg-card/30 backdrop-blur-sm border-border/50">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <MessageCircle className="h-6 w-6 text-secondary mr-3" />
                  <h3 className="font-playfair text-2xl text-primary">Envíanos un Mensaje</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-montserrat text-foreground/70 mb-2">
                        Nombre
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Tu nombre"
                        className="bg-muted/50 border-border/50 focus:border-primary"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-montserrat text-foreground/70 mb-2">
                        Email
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="tu@email.com"
                        className="bg-muted/50 border-border/50 focus:border-primary"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-montserrat text-foreground/70 mb-2">
                      Asunto
                    </label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="¿En qué podemos ayudarte?"
                      className="bg-muted/50 border-border/50 focus:border-primary"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-montserrat text-foreground/70 mb-2">
                      Mensaje
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Cuéntanos tu historia..."
                      rows={6}
                      className="bg-muted/50 border-border/50 focus:border-primary resize-none"
                      required
                    />
                  </div>

                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-secondary hover:bg-secondary/90 text-white font-montserrat font-semibold"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Enviar Mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Social Links & Info */}
            <div className="space-y-8">
              {/* Social Media */}
              <Card className="bg-card/30 backdrop-blur-sm border-border/50">
                <CardContent className="p-8">
                  <h3 className="font-playfair text-2xl text-primary mb-6">Síguenos</h3>
                  <div className="space-y-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        className={`flex items-center p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all duration-200 ${social.color} group`}
                      >
                        <social.icon className="h-6 w-6 mr-4 text-secondary group-hover:scale-110 transition-transform" />
                        <div>
                          <p className="font-montserrat font-medium text-foreground">
                            {social.name}
                          </p>
                          <p className="text-sm text-foreground/60">
                            {social.handle}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Project Info */}
              <Card className="bg-card/30 backdrop-blur-sm border-border/50">
                <CardContent className="p-8">
                  <h3 className="font-playfair text-2xl text-primary mb-6">Información del Proyecto</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-montserrat font-medium text-foreground mb-1">Estado</p>
                      <p className="text-sm text-foreground/70">En desarrollo - Rodaje 2024</p>
                    </div>
                    <div>
                      <p className="font-montserrat font-medium text-foreground mb-1">Ubicación</p>
                      <p className="text-sm text-foreground/70">Valencia, España</p>
                    </div>
                    <div>
                      <p className="font-montserrat font-medium text-foreground mb-1">Género</p>
                      <p className="text-sm text-foreground/70">Thriller Noir / Drama Urbano</p>
                    </div>
                    <div>
                      <p className="font-montserrat font-medium text-foreground mb-1">Presupuesto</p>
                      <p className="text-sm text-foreground/70">No-budget / Colaborativo</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quote */}
              <Card className="bg-card/20 backdrop-blur-sm border-border/30">
                <CardContent className="p-8 text-center">
                  <p className="font-playfair text-xl text-primary/90 italic mb-4">
                    "Cada mensaje es una oportunidad de conexión, cada colaboración es una nueva historia por contar."
                  </p>
                  <p className="font-montserrat text-sm text-foreground/60">
                    - Equipo de El Fotógrapher
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactoSection;
