import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact Us' },
  ];

  const isActive = (path: string) => location.pathname === path;
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      !isHomePage || scrolled 
        ? 'bg-background/95 backdrop-blur-sm border-b border-border shadow-md' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className={`font-poppins font-bold text-2xl transition-colors duration-500 ${
            !isHomePage || scrolled ? 'text-primary' : 'text-white'
          }`}>
            UREKA
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`transition-colors duration-500 font-medium relative ${
                  isActive(item.path) 
                    ? 'text-primary' 
                    : !isHomePage || scrolled 
                      ? 'text-foreground hover:text-primary' 
                      : 'text-white hover:text-white/80'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-500 ${
              !isHomePage || scrolled 
                ? 'hover:bg-surface text-foreground' 
                : 'hover:bg-white/10 text-white'
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className={`md:hidden py-4 transition-colors duration-500 ${
            !isHomePage || scrolled 
              ? 'border-t border-border bg-background/95 backdrop-blur-sm' 
              : 'border-t border-white/20 bg-black/20 backdrop-blur-sm'
          }`}>
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`py-2 font-medium transition-colors duration-500 ${
                    isActive(item.path) 
                      ? 'text-primary' 
                      : !isHomePage || scrolled 
                        ? 'text-foreground hover:text-primary' 
                        : 'text-white hover:text-white/80'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;