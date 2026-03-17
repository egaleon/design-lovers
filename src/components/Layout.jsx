import { Instagram, Menu, X, Phone } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/#services' },
  { name: 'Gifts', href: '/gifts' },
  { name: 'Packages', href: '/#packages' },
  { name: 'Gallery', href: '/#gallery' },
  { name: 'Contact', href: '/contact' },
];

const quickLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/#services' },
  { name: 'Gifts', href: '/gifts' },
  { name: 'Packages', href: '/#packages' },
  { name: 'Gallery', href: '/#gallery' },
  { name: 'Contact', href: '/contact' },
];

const socialLinks = [
  { name: 'Instagram', href: 'https://instagram.com', icon: Instagram },
  { name: 'WhatsApp', href: 'https://wa.me/', icon: Phone },
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
      <footer className="bg-dl-coffee text-dl-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {/* Logo Column */}
            <div className="text-center md:text-left">
              <Link 
                to="/" 
                className="font-serif text-dl-gold text-2xl font-semibold tracking-wide"
              >
                DESIGN LOVERS
              </Link>
              <p className="mt-4 font-sans text-sm text-dl-champagne leading-relaxed">
                Creating beautiful spaces and unforgettable experiences for your special moments.
              </p>
            </div>

            {/* Quick Links Column */}
            <div className="text-center md:text-left">
              <h3 className="font-serif text-lg text-dl-gold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="font-sans text-sm text-dl-champagne hover:text-dl-gold transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links Column */}
            <div className="text-center md:text-left">
              <h3 className="font-serif text-lg text-dl-gold mb-4">Follow Us</h3>
              <div className="flex justify-center md:justify-start space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-dl-champagne hover:text-dl-gold hover:bg-dl-ivory/10 rounded-full transition-all duration-300"
                    aria-label={social.name}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
              <p className="mt-4 font-sans text-sm text-dl-champagne">
                Stay connected for inspiration and updates.
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-dl-ivory/10 text-center">
            <p className="font-sans text-xs text-dl-champagne">
              &copy; {new Date().getFullYear()} Design Lovers. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
