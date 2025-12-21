
import { Camera, Instagram, Youtube, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border/50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <Camera className="h-8 w-8 text-primary" />
              <div className="font-futura text-2xl text-primary tracking-wider">
                EL FOTÓGRAPHER
              </div>
            </div>
            <p className="font-montserrat text-sm text-foreground/70 leading-relaxed">
              Un cortometraje que explora la existencia a través del arte urbano, 
              el misterio y la filosofía de ser visto para existir.
            </p>
          </div>

          {/* Navigation */}
          <div className="text-center">
            <h4 className="font-gotham text-lg text-primary mb-4">Navegación</h4>
            <nav className="space-y-2">
              {['Inicio', 'Sinopsis', 'Personajes', 'Equipo', 'Contacto'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-sm font-montserrat text-foreground/70 hover:text-primary transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Social & Contact */}
          <div className="text-center md:text-right">
            <h4 className="font-gotham text-lg text-primary mb-4">Síguenos</h4>
            <div className="flex justify-center md:justify-end space-x-4 mb-4">
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm font-montserrat text-foreground/70">
              contact@elfotographer.com
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/30 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-sm font-montserrat text-foreground/60">
              © {currentYear} El Fotógrapher. Todos los derechos reservados.
            </p>
            
            <div className="flex items-center space-x-2 text-sm font-montserrat text-foreground/60">
              <span>Hecho con</span>
              <Heart className="h-4 w-4 text-secondary" />
              <span>en Valencia</span>
            </div>
          </div>
          
          <div className="mt-4">
            <p className="font-gotham text-sm text-primary/70 italic">
              "Si no eres visto, no existes"
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
