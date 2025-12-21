
import { useState, useEffect } from 'react';
import { Menu, X, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'INICIO', href: '/' },
    { name: 'SINOPSIS', href: '/sinopsis' },
    { name: 'PERSONAJES', href: '/personajes' },
    { name: 'MANIFIESTO', href: '/manifiesto' },
    { name: 'TRÁILER', href: '/trailer' },
    { name: 'GALERÍA', href: '/galeria' },
    { name: 'EQUIPO', href: '/equipo' },
    { name: 'CONTACTO', href: '/contacto' }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md border-b border-border/30' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <Camera className="h-6 w-6 text-primary" />
            <div className="font-futura text-xl text-primary tracking-wider font-bold">
              EL FOTÓGRAPHER
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-xs font-futura font-medium text-foreground/80 hover:text-primary transition-colors duration-300 relative elegant-underline uppercase tracking-wider"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-foreground hover:text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden border-t border-border/30 noir-card">
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-4 py-3 text-sm font-futura font-medium text-foreground/80 hover:text-primary hover:bg-muted/20 transition-colors duration-300 uppercase tracking-wider"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
