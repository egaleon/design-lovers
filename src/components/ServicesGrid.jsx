import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const services = [
  {
    id: 1,
    title: 'Social Celebrations',
    description: 'Birthdays, anniversaries, and milestone events styled with elegance.',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1000&auto=format&fit=crop',
    details: [
      'Custom theme design and color palette',
      'Premium table styling and linens',
      'Elegant balloon installations',
      'Floral centerpieces and decor',
      'Complete setup and pack-down service',
    ],
    fullDescription: 'Transform your social gatherings into extraordinary celebrations. From intimate dinner parties to grand birthday celebrations, we create cohesive designs that reflect your personal style and leave lasting impressions on your guests.',
  },
  {
    id: 2,
    title: 'Little Ones',
    description: 'Magical celebrations for baby showers, christenings, and children\'s parties.',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=1000&auto=format&fit=crop',
    details: [
      'Themed decor for baby showers',
      'Christening ceremony styling',
      'Children\'s party decorations',
      'Sweet table and dessert displays',
      'Custom signage and backdrops',
    ],
    fullDescription: 'Welcome new beginnings with beautifully styled celebrations. We create enchanting atmospheres for baby showers, christenings, and children\'s parties that capture the joy and wonder of these precious moments.',
  },
  {
    id: 3,
    title: 'Romantic Surprises',
    description: 'Intimate proposals, anniversary surprises, and romantic settings.',
    image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1000&auto=format&fit=crop',
    details: [
      'Proposal setup and coordination',
      'Anniversary celebration styling',
      'Romantic dinner arrangements',
      'Floral installations and candles',
      'Private venue decoration',
    ],
    fullDescription: 'Create unforgettable romantic moments with our bespoke surprise styling. Whether you are planning a marriage proposal or celebrating years of love, we design intimate settings that speak from the heart.',
  },
  {
    id: 4,
    title: 'Corporate & Retail',
    description: 'Professional events, product launches, and retail displays.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000&auto=format&fit=crop',
    details: [
      'Corporate event styling',
      'Product launch decorations',
      'Retail window displays',
      'Brand activation setups',
      'Conference and gala decor',
    ],
    fullDescription: 'Elevate your brand presence with sophisticated corporate styling. From product launches to gala dinners, we create professional environments that align with your brand identity and impress your stakeholders.',
  },
];

export default function ServicesGrid() {
  const [selectedService, setSelectedService] = useState(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setSelectedService(null);
    };
    
    if (selectedService) {
      window.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedService]);

  return (
    <section className="bg-dl-ivory py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="text-center mb-16 md:mb-20">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-dl-coffee mb-6 tracking-wide lg:tracking-wider">
            Our Signature Services
          </h2>
          <p className="font-sans text-dl-coffee/70 max-w-xl mx-auto leading-relaxed">
            From intimate gatherings to grand celebrations, we craft bespoke experiences 
            that reflect your unique style and vision.
          </p>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {services.map((service, index) => (
            <ScrollReveal 
              key={service.id} 
              delay={index * 0.1}
            >
              <article
                onClick={() => setSelectedService(service)}
                className="group cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative aspect-[3/4] overflow-hidden mb-6">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Subtle Overlay on Hover */}
                  <div className="absolute inset-0 bg-dl-coffee/0 group-hover:bg-dl-coffee/10 transition-all duration-500" />
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="font-serif text-xl md:text-2xl text-dl-coffee mb-3 tracking-wide group-hover:text-dl-gold transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="font-sans text-sm text-dl-coffee/60 mb-5 leading-relaxed">
                    {service.description}
                  </p>
                  <span className="inline-block font-sans text-xs uppercase tracking-[0.2em] text-dl-gold border-b border-dl-gold pb-1 hover:text-dl-coffee hover:border-dl-coffee transition-all duration-300">
                    Explore Service
                  </span>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8"
            onClick={() => setSelectedService(null)}
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
              className="relative bg-dl-ivory w-full max-w-5xl max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 z-10 p-2 text-dl-coffee/50 hover:text-dl-coffee transition-colors duration-300"
                aria-label="Close modal"
              >
                <X size={24} strokeWidth={1} />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image */}
                <div className="aspect-square lg:aspect-auto lg:h-full">
                  <img
                    src={selectedService.image}
                    alt={selectedService.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                  <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-dl-coffee mb-6 tracking-wide">
                    {selectedService.title}
                  </h2>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {selectedService.details.map((detail, index) => (
                      <li 
                        key={index}
                        className="font-sans text-sm text-dl-coffee/80 flex items-start gap-3"
                      >
                        <span className="w-1.5 h-1.5 bg-dl-gold rounded-full mt-2 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>

                  {/* Description */}
                  <p className="font-sans text-dl-coffee/70 leading-relaxed mb-10">
                    {selectedService.fullDescription}
                  </p>

                  {/* CTA Button */}
                  <a
                    href="/contact"
                    onClick={() => setSelectedService(null)}
                    className="inline-block self-start bg-dl-gold text-white font-sans text-xs uppercase tracking-[0.2em] px-10 py-4 hover:bg-dl-coffee transition-colors duration-300"
                  >
                    Book This Service
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
