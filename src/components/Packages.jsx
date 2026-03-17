import { useState, useEffect } from 'react';
import { Check, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';

const packages = [
  {
    id: 1,
    name: 'Essential',
    price: '$1,200',
    description: 'Perfect for intimate gatherings',
    features: [
      'Initial consultation & mood board',
      'Table styling for up to 20 guests',
      'Basic floral arrangements',
      'Setup & pack-down service',
    ],
    featured: false,
    extendedDescription: 'The Essential package is designed for those seeking elegant styling without overwhelming complexity. Ideal for intimate dinner parties, small celebrations, and gatherings of close family and friends.',
    extendedFeatures: [
      'Comprehensive initial consultation to understand your vision',
      'Custom mood board and color palette development',
      'Professional table styling for up to 20 guests',
      'Elegant basic floral arrangements and centerpieces',
      'Complete setup before your event and pack-down after',
      'Coordination with venue for setup logistics',
      '2-week advance booking required',
    ],
  },
  {
    id: 2,
    name: 'Signature',
    price: '$2,800',
    description: 'Our most popular choice',
    features: [
      'Everything in Essential, plus:',
      'Custom design concept',
      'Premium linen & tableware',
      'Statement floral installations',
      'On-site styling coordination',
    ],
    featured: true,
  },
  {
    id: 3,
    name: 'Luxury',
    price: '$5,500+',
    description: 'For the ultimate experience',
    features: [
      'Everything in Signature, plus:',
      'Bespoke furniture hire',
      'Full venue transformation',
      'Dedicated event stylist',
      'Premium add-ons included',
    ],
    featured: false,
    extendedDescription: 'The Luxury package offers the pinnacle of event styling. Perfect for weddings, milestone celebrations, and corporate events where only the absolute best will suffice.',
    extendedFeatures: [
      'Everything included in the Signature package',
      'Bespoke furniture hire and luxury props',
      'Complete venue transformation and branding',
      'Dedicated senior event stylist for your event',
      'Premium add-ons: champagne walls, neon signs, luxury linens',
      'Multiple venue visits and comprehensive planning sessions',
      'Priority booking with 24/7 support',
      'Post-event photography styling session',
      'Complimentary anniversary floral arrangement',
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
      // Open modal for Essential or Luxury
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
    <section className="bg-dl-coffee py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="text-center mb-16 md:mb-20">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-dl-gold mb-6 tracking-wide lg:tracking-wider">
            Curated Packages
          </h2>
          <p className="font-sans text-dl-ivory/80 max-w-xl mx-auto leading-relaxed">
            Choose the perfect package for your celebration. Each option is thoughtfully 
            designed to create an unforgettable experience.
          </p>
        </ScrollReveal>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {packages.map((pkg, index) => (
            <ScrollReveal 
              key={pkg.id} 
              delay={index * 0.15}
              className={`
                relative rounded-sm transition-all duration-300
                ${pkg.featured 
                  ? 'bg-white py-12 px-8 md:py-16 md:px-10 md:scale-105 shadow-2xl z-10' 
                  : 'bg-dl-coffee border border-dl-ivory/20 py-10 px-8 hover:border-dl-gold/50'
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
                className={`font-serif text-2xl md:text-3xl mb-2 tracking-wide ${
                  pkg.featured ? 'text-dl-coffee' : 'text-dl-ivory'
                }`}
              >
                {pkg.name}
              </h3>

              {/* Description */}
              <p 
                className={`font-sans text-sm mb-6 ${
                  pkg.featured ? 'text-dl-coffee/60' : 'text-dl-ivory/60'
                }`}
              >
                {pkg.description}
              </p>

              {/* Price */}
              <div className="mb-8">
                <span 
                  className={`font-serif text-4xl md:text-5xl ${
                    pkg.featured ? 'text-dl-gold' : 'text-dl-gold'
                  }`}
                >
                  {pkg.price}
                </span>
                {pkg.name === 'Luxury' && (
                  <span className={`font-sans text-sm ml-1 ${pkg.featured ? 'text-dl-coffee/60' : 'text-dl-ivory/60'}`}>
                    starting
                  </span>
                )}
              </div>

              {/* Divider */}
              <div 
                className={`w-16 h-px mb-8 ${
                  pkg.featured ? 'bg-dl-gold' : 'bg-dl-gold/50'
                }`}
              />

              {/* Features List */}
              <ul className="space-y-4 mb-10">
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
                        pkg.featured ? 'text-dl-coffee/80' : 'text-dl-ivory/80'
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
                    ? 'bg-dl-gold text-white hover:bg-dl-coffee'
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

      {/* Modal for Essential and Luxury */}
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
            <div className="absolute inset-0 bg-dl-coffee/60 backdrop-blur-sm" />

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
                  {selectedPackage.name} Package
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
                          message: `I am interested in learning more about the ${selectedPackage.name} Package for my upcoming event.` 
                        } 
                      });
                    }}
                    className="flex-1 bg-dl-gold text-white font-sans text-xs uppercase tracking-[0.2em] py-4 px-6 hover:bg-dl-coffee transition-all duration-300 hover:scale-105"
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
