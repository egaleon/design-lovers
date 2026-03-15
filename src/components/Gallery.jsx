import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const categories = ['All', 'Weddings', 'Birthdays', 'Picnics'];

const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
    category: 'Weddings',
    title: 'Classic Wedding',
    alt: 'Elegant wedding table with white roses and luxury styling',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1200&auto=format&fit=crop',
    category: 'Weddings',
    title: 'Garden Ceremony',
    alt: 'Luxury wedding ceremony with white floral arrangements',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=1200&auto=format&fit=crop',
    category: 'Weddings',
    title: 'Elegant Reception',
    alt: 'Romantic wedding reception with elegant table settings',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop',
    category: 'Weddings',
    title: 'Floral Centerpiece',
    alt: 'White roses wedding decoration centerpiece',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=1200&auto=format&fit=crop',
    category: 'Birthdays',
    title: 'Milestone Birthday',
    alt: 'Elegant birthday celebration with luxury styling',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=1200&auto=format&fit=crop',
    category: 'Birthdays',
    title: 'Chic Celebration',
    alt: 'Birthday party with sophisticated event styling',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=1200&auto=format&fit=crop',
    category: 'Birthdays',
    title: 'Baby Shower',
    alt: 'Baby shower with elegant white decoration',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1200&auto=format&fit=crop',
    category: 'Picnics',
    title: 'Luxury Picnic',
    alt: 'Luxury picnic setup with white styling',
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1200&auto=format&fit=crop',
    category: 'Picnics',
    title: 'Outdoor Picnic',
    alt: 'Elegant outdoor picnic arrangement',
  },
  {
    id: 10,
    src: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop',
    category: 'Picnics',
    title: 'Garden Party',
    alt: 'High-end garden party styling',
  },
  {
    id: 11,
    src: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1200&auto=format&fit=crop',
    category: 'Picnics',
    title: 'Sunset Gathering',
    alt: 'Sophisticated outdoor celebration setup',
  },
  {
    id: 12,
    src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1200&auto=format&fit=crop',
    category: 'Weddings',
    title: 'Romantic Ceremony',
    alt: 'Luxury event styling with white roses',
  },
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = activeFilter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  return (
    <section className="bg-dl-ivory py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-dl-coffee mb-6 tracking-wide lg:tracking-wider">
            Our Gallery
          </h2>
          <p className="font-sans text-dl-coffee/70 max-w-xl mx-auto leading-relaxed">
            A glimpse into the beautiful moments we have helped create
          </p>
        </ScrollReveal>

        {/* Filter Buttons */}
        <ScrollReveal delay={0.1} className="flex flex-wrap justify-center gap-3 mb-12 md:mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`
                font-sans text-xs uppercase tracking-[0.15em] px-6 py-3
                transition-all duration-300 border
                ${activeFilter === category
                  ? 'bg-dl-coffee text-white border-dl-coffee'
                  : 'bg-transparent text-dl-coffee border-dl-coffee/30 hover:border-dl-coffee hover:bg-dl-coffee/5'
                }
              `}
            >
              {category}
            </button>
          ))}
        </ScrollReveal>

        {/* Masonry Grid */}
        <motion.div 
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8"
        >
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="break-inside-avoid group cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-dl-coffee/0 group-hover:bg-dl-coffee/40 transition-all duration-500" />
                  {/* Title Label on Hover */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="font-serif text-xl md:text-2xl text-white tracking-wide mb-2">
                      {image.title}
                    </span>
                    <span className="font-sans text-xs uppercase tracking-[0.2em] text-white/80">
                      {image.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedImage(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-dl-coffee/95 backdrop-blur-sm" />
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 z-10 text-white/80 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X size={32} strokeWidth={1.5} />
            </button>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative z-10 max-w-5xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[85vh] object-contain shadow-2xl"
              />
              {/* Image Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                <h3 className="font-serif text-2xl text-white tracking-wide mb-1">
                  {selectedImage.title}
                </h3>
                <p className="font-sans text-sm text-white/80 tracking-wide">
                  {selectedImage.category} — {selectedImage.alt}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
