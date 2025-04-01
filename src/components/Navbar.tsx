
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface NavbarProps {
  transparent?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ transparent = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        {
          'bg-transparent': transparent && !scrolled,
          'bg-white shadow-md': !transparent || scrolled,
        }
      )}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <h1 className={cn("text-2xl font-bold transition-colors duration-300", {
            'text-white': transparent && !scrolled,
            'text-brand-700': !transparent || scrolled,
          })}>
            ARPINA SOLUTIONS
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn("font-medium hover:text-brand-600 transition-colors duration-300", {
                'text-white': transparent && !scrolled,
                'text-gray-700': !transparent || scrolled,
              })}
            >
              {link.name}
            </Link>
          ))}
          <Button className="bg-brand-600 hover:bg-brand-700 text-white" asChild>
            <Link to="/contact">Let's Talk</Link>
          </Button>
        </div>

        {/* Mobile Navigation Trigger */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className={cn("focus:outline-none", {
              'text-white': transparent && !scrolled,
              'text-gray-700': !transparent || scrolled,
            })}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white absolute w-full shadow-md animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="py-3 font-medium text-gray-700 hover:text-brand-600 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button 
              className="bg-brand-600 hover:bg-brand-700 text-white mt-4"
              asChild
              onClick={() => setIsOpen(false)}
            >
              <Link to="/contact">Let's Talk</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
