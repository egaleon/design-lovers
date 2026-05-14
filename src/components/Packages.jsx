import { useState, useEffect } from 'react';
import { Check, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';

const packages = [
  {
    id: 1,
    name: 'Essential',
    subtitle: 'Essential Styling Package',
    price: '$350 AUD',
    description: 'Ideal for intimate celebrations and small gatherings.',
    features: [
      'One plain backdrop',
      'One Plinth',
      'One Balloon garland (up to 3 colours)',
      '3 metallic stand',
      'One artificial flower arrangement (Backdrop)',
      'Up to 5 words or letter sign',
    ],
    featured: false,
    extendedDescription: 'The Essential Styling Package is perfect for intimate celebrations and small gatherings, offering elegant foundational decor that creates a beautiful atmosphere.',
    extendedFeatures: [
      'One plain backdrop',
      'One Plinth',
      'One Balloon garland (up to 3 colours)',
      '3 metallic stand',
      'One artificial flower arrangement (Backdrop)',
      'Up to 5 words or letter sign',
    ],
  },
  {
    id: 2,
    name: 'Signature',
    subtitle: 'Signature Styling Package',
    price: '$450 AUD',
    description: 'Perfect for those seeking a more complete and cohesive visual experience.',
    features: [
      'One plain backdrop',
      'One 3D arch',
      'One Plinth',
      '2 balloon garlands (each up to 3 colours)',
      '3 metallic stand',
      'Two artificial flower arrangements (Backdrops)',
      'Up to 20 single artificial flowers (for garlands)',
      'Cake stand or premium decorative table',
      'Up to 5 words or letter sign',
    ],
    featured: true,
  },
  {
    id: 3,
    name: 'Premium',
    subtitle: 'Premium Styling Package',
    price: '$700 AUD',
    description: 'A comprehensive styling experience for memorable celebrations.',
    features: [
      '2 plain backdrops',
      'One 3D arch',
      '2 Balloon garlands (each up to 3 colours)',
      '3 Plinths',
      'Up to 20 single artificial flowers (for garlands)',
      'Cake stand',
      'Premium table',
      '3 metallic stand',
      'Two artificial flower arrangements (Backdrops)',
      'Up to 5 words or letter sign',
      'Giant artificial flower',
      'Up to 8 food risers',
    ],
    featured: false,
    extendedDescription: 'The Premium Styling Package delivers a comprehensive styling experience with expanded decor elements for truly memorable celebrations.',
    extendedFeatures: [
      '2 plain backdrops',
      'One 3D arch',
      '2 Balloon garlands (each up to 3 colours)',
      '3 Plinths',
      'Up to 20 single artificial flowers (for garlands)',
      'Cake stand',
      'Premium table',
      '3 metallic stand',
      'Two artificial flower arrangements (Backdrops)',
      'Up to 5 words or letter sign',
      'Giant artificial flower',
      'Up to 8 food risers',
    ],
  },
  {
    id: 4,
    name: 'Luxury',
    subtitle: 'Luxury Styling Package',
    price: '$850 AUD',
    description: 'The ultimate styling experience for unforgettable events.',
    features: [
      '2 backdrops or Balloon Tree Decor',
      '1 Modern Halo 3D Backdrop',
      'Internal backdrop lighting',
      'Three Points',
      'Two balloon garlands (each up to 3 colours)',
      'Up to 30 single artificial flowers (for garlands)',
      'Cake stand',
      'Premium table',
      'Two floral arrangements',
      'Three metallic stand',
      'Two artificial flower arrangements (Backdrops)',
      'Up to 5 words or letter sign',
      'Giant artificial flower',
      'Up to 8 food risers',
      'Decorative kids chair',
      'Cut-outs',
    ],
    featured: false,
    extendedDescription: 'The Luxury Styling Package offers the ultimate event styling experience with premium elements and exclusive decor for truly unforgettable celebrations.',
    extendedFeatures: [
      '2 backdrops or Balloon Tree Decor',
      '1 Modern Halo 3D Backdrop',
      'Internal backdrop lighting',
      'Three Points',
      'Two balloon garlands (each up to 3 colours)',
      'Up to 30 single artificial flowers (for garlands)',
      'Cake stand',
      'Premium table',
      'Two floral arrangements',
      'Three metallic stand',
      'Two artificial flower arrangements (Backdrops)',
      'Up to 5 words or letter sign',
      'Giant artificial flower',
      'Up to 8 food risers',
      'Decorative kids chair',
      'Cut-outs',
    ],
  },
];

export default function Packages() {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const navigate = useNavigate();

  const handleButtonClick = (pkg) => {
    if (pkg.featured) {
      // Navigate to contact with state for Signature package
      navigate('/contact', { 
        state: { 
          subject: 'Interest in the Signature Package',
          message: 'I am interested in learning more about the Signature Package for my upcoming event.' 
        } 
      });
    } else {
      // Open modal for Essential, Premium or Luxury
      setSelectedPackage(pkg);
    }
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setSelectedPackage(null);
    };
    
    if (selectedPackage) {
      window.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedPackage]);

  return (
    <section className="bg-dl-ivory py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="text-center mb-16 md:mb-20">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-dl-gold mb-6 tracking-wide lg:tracking-wider">
            Curated Packages
          </h2>
          <p className="font-sans text-dl-coffee/80 max-w-xl mx-auto leading-relaxed">
            Choose the perfect package for your celebration. Each option is thoughtfully 
            designed to create an unforgettable experience.
          </p>
        </ScrollReveal>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {packages.map((pkg, index) => (
            <ScrollReveal 
              key={pkg.id} 
              delay={index * 0.15}
              className={`
                relative rounded-sm transition-all duration-300
                ${pkg.featured 
                  ? 'bg-dl-champagne py-12 px-6 md:py-16 md:px-8 shadow-[0_0_40px_rgba(212,175,55,0.15)] z-10' 
                  : 'bg-dl-champagne border border-white/10 py-10 px-6 hover:border-dl-gold/50'
                }
              `}
            >
              {/* Featured Badge */}
              {pkg.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-dl-gold text-white font-sans text-xs uppercase tracking-[0.2em] px-6 py-2">
                    Recommended
                  </span>
                </div>
              )}

              {/* Package Name */}
              <h3 
                className={`font-serif text-2xl md:text-3xl mb-1 tracking-wide ${
                  pkg.featured ? 'text-dl-coffee' : 'text-dl-coffee'
                }`}
              >
                {pkg.name}
              </h3>

              {/* Subtitle */}
              <p 
                className={`font-sans text-xs uppercase tracking-wider mb-4 ${
                  pkg.featured ? 'text-dl-coffee/50' : 'text-dl-coffee/50'
                }`}
              >
                {pkg.subtitle}
              </p>

              {/* Description */}
              <p 
                className={`font-sans text-sm mb-6 ${
                  pkg.featured ? 'text-dl-coffee/60' : 'text-dl-coffee/60'
                }`}
              >
                {pkg.description}
              </p>

              {/* Price */}
              <div className="mb-8">
                <span 
                  className={`font-serif text-3xl md:text-4xl ${
                    pkg.featured ? 'text-dl-gold' : 'text-dl-gold'
                  }`}
                >
                  {pkg.price}
                </span>
              </div>

              {/* Divider */}
              <div 
                className={`w-16 h-px mb-8 ${
                  pkg.featured ? 'bg-dl-gold' : 'bg-dl-gold/50'
                }`}
              />

              {/* Features List */}
              <ul className="space-y-3 mb-10">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check 
                      size={18} 
                      className={`mt-0.5 flex-shrink-0 ${
                        pkg.featured ? 'text-dl-gold' : 'text-dl-gold/70'
                      }`}
                      strokeWidth={1.5}
                    />
                    <span 
                      className={`font-sans text-sm leading-relaxed ${
                        pkg.featured ? 'text-dl-coffee/80' : 'text-dl-coffee/80'
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                onClick={() => handleButtonClick(pkg)}
                className={`
                  w-full font-sans text-xs uppercase tracking-[0.2em] py-4 px-6
                  transition-all duration-300 hover:scale-105
                  ${pkg.featured
                    ? 'bg-dl-gold text-white hover:bg-white hover:text-dl-ivory'
                    : 'border border-dl-gold text-dl-gold hover:bg-dl-gold hover:text-white'
                  }
                `}
              >
                {pkg.featured ? 'Get Started' : 'Learn More'}
              </button>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Modal for Essential, Premium and Luxury */}
      <AnimatePresence>
        {selectedPackage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8"
            onClick={() => setSelectedPackage(null)}
          >
            {/* Backdrop with blur */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-dl-ivory w-full max-w-2xl max-h-[85vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPackage(null)}
                className="absolute top-4 right-4 z-10 p-2 text-dl-coffee/50 hover:text-dl-coffee transition-colors duration-300"
                aria-label="Close modal"
              >
                <X size={24} strokeWidth={1} />
              </button>

              <div className="p-8 md:p-12">
                {/* Package Name */}
                <h2 className="font-serif text-3xl md:text-4xl text-dl-coffee mb-2 tracking-wide">
                  {selectedPackage.subtitle}
                </h2>

                {/* Price */}
                <p className="font-serif text-2xl text-dl-gold mb-6">
                  {selectedPackage.price}
                </p>

                {/* Extended Description */}
                <p className="font-sans text-dl-coffee/70 leading-relaxed mb-8">
                  {selectedPackage.extendedDescription}
                </p>

                {/* Divider */}
                <div className="w-16 h-px bg-dl-gold mb-8" />

                {/* Extended Features List */}
                <h3 className="font-sans text-xs uppercase tracking-[0.2em] text-dl-coffee/50 mb-4">
                  What&apos;s Included
                </h3>
                <ul className="space-y-3 mb-10">
                  {selectedPackage.extendedFeatures.map((feature, index) => (
                    <li 
                      key={index}
                      className="font-sans text-sm text-dl-coffee/80 flex items-start gap-3"
                    >
                      <Check size={16} className="mt-0.5 text-dl-gold flex-shrink-0" strokeWidth={1.5} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => {
                      setSelectedPackage(null);
                      navigate('/contact', { 
                        state: { 
                          subject: `Interest in the ${selectedPackage.name} Package`,
                          message: `I am interested in learning more about the ${selectedPackage.subtitle} for my upcoming event.` 
                        } 
                      });
                    }}
                    className="flex-1 bg-dl-gold text-white font-sans text-xs uppercase tracking-[0.2em] py-4 px-6 hover:bg-white hover:text-dl-ivory transition-all duration-300 hover:scale-105"
                  >
                    Inquire Now
                  </button>
                  <button
                    onClick={() => setSelectedPackage(null)}
                    className="flex-1 border border-dl-coffee/30 text-dl-coffee font-sans text-xs uppercase tracking-[0.2em] py-4 px-6 hover:border-dl-gold hover:text-dl-gold transition-all duration-300"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
