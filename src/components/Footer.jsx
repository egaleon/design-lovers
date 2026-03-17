import { Link, useLocation } from 'react-router-dom';
import { Instagram, Facebook, MapPin, Mail } from 'lucide-react';

const servicesLinks = [
  { name: 'Social Events', href: '/#services' },
  { name: 'Baby Showers', href: '/#services' },
  { name: 'Romantic Proposals', href: '/#services' },
  { name: 'Corporate Styling', href: '/#services' },
];

const companyLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Gift Collection', href: '/gifts' },
  { name: 'Testimonials', href: '/#testimonials' },
  { name: 'Contact', href: '/contact' },
];

const socialLinks = [
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
];

export default function Footer() {
  const location = useLocation();

  const handleNavClick = (e, href) => {
    if (href.includes('#')) {
      const isHomePage = location.pathname === '/';
      
      if (!isHomePage && href.startsWith('/#')) {
        return;
      }
      
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
    <footer className="bg-dl-coffee text-dl-ivory">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1: Brand */}
          <div className="text-center md:text-left">
            <Link 
              to="/" 
              className="font-serif text-dl-gold text-2xl md:text-3xl font-semibold tracking-wide inline-block mb-4"
            >
              DESIGN LOVERS
            </Link>
            <p className="font-sans text-sm text-dl-ivory/70 mb-6 leading-relaxed">
              Creating elegant, unforgettable celebrations across Sydney.
            </p>
            {/* Social Icons */}
            <div className="flex justify-center md:justify-start gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 border border-dl-ivory/20 text-dl-ivory/70 hover:text-dl-gold hover:border-dl-gold transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon size={18} strokeWidth={1.5} />
                </a>
              ))}
              {/* Pinterest - Custom SVG since lucide doesn't have it */}
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 border border-dl-ivory/20 text-dl-ivory/70 hover:text-dl-gold hover:border-dl-gold transition-all duration-300"
                aria-label="Pinterest"
              >
                <svg 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M8 12a4 4 0 1 0 8 0 4 4 0 1 0-8 0" />
                  <path d="M12 2v2" />
                  <path d="M12 20v2" />
                  <path d="m4.93 4.93 1.41 1.41" />
                  <path d="m17.66 17.66 1.41 1.41" />
                  <path d="M2 12h2" />
                  <path d="M20 12h2" />
                  <path d="m6.34 17.66-1.41 1.41" />
                  <path d="m19.07 4.93-1.41 1.41" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="text-center md:text-left">
            <h3 className="font-serif text-lg text-dl-gold mb-6 tracking-wide">
              Services
            </h3>
            <ul className="space-y-3">
              {servicesLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="font-sans text-sm text-dl-ivory/70 hover:text-dl-gold transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="text-center md:text-left">
            <h3 className="font-serif text-lg text-dl-gold mb-6 tracking-wide">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="font-sans text-sm text-dl-ivory/70 hover:text-dl-gold transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="text-center md:text-left">
            <h3 className="font-serif text-lg text-dl-gold mb-6 tracking-wide">
              Get in Touch
            </h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center md:justify-start gap-3 text-dl-ivory/70">
                <Mail size={16} strokeWidth={1.5} className="text-dl-gold" />
                <a 
                  href="mailto:hello@designlovers.com.au"
                  className="font-sans text-sm hover:text-dl-gold transition-colors duration-300"
                >
                  hello@designlovers.com.au
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3 text-dl-ivory/70">
                <MapPin size={16} strokeWidth={1.5} className="text-dl-gold" />
                <span className="font-sans text-sm">
                  Sydney, AU
                </span>
              </div>
            </div>
            <Link
              to="/contact"
              className="inline-block font-sans text-[10px] uppercase tracking-[0.2em] text-dl-coffee bg-dl-ivory px-6 py-3 hover:bg-dl-gold hover:text-white transition-all duration-300"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-dl-ivory/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-sans text-xs text-dl-ivory/50 text-center md:text-left">
              &copy; {new Date().getFullYear()} Design Lovers Events & Styling. All rights reserved.
            </p>
            <Link
              to="#"
              className="font-sans text-xs text-dl-ivory/50 hover:text-dl-gold transition-colors duration-300"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
