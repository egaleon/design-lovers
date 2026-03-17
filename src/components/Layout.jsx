import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Footer from './Footer';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/#services' },
  { name: 'Gifts', href: '/gifts' },
  { name: 'Packages', href: '/#packages' },
  { name: 'Gallery', href: '/#gallery' },
  { name: 'Contact', href: '/contact' },
];

export default function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (e, href) => {
    // Close mobile menu
    setIsMenuOpen(false);
    
    // If it's a hash link on the home page
    if (href.includes('#')) {
      const isHomePage = location.pathname === '/';
      
      if (!isHomePage && href.startsWith('/#')) {
        // Let the router handle navigation to home with hash
        return;
      }
      
      // If on home page, scroll to section
      if (isHomePage) {
        e.preventDefault();
        const targetId = href.replace('/#', '');
        const element = document.getElementById(targetId);
        
        if (element) {
          const navHeight = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navHeight;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link 
              to="/" 
              className="font-serif text-dl-gold text-2xl md:text-3xl font-semibold tracking-wide"
            >
              DESIGN LOVERS
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-sans text-xs uppercase tracking-widest text-dl-coffee hover:text-dl-gold transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-dl-coffee hover:text-dl-gold transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-dl-champagne/30">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block font-sans text-xs uppercase tracking-widest text-dl-coffee hover:text-dl-gold transition-colors duration-300 py-2"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
