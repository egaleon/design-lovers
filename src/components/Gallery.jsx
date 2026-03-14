import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const categories = ['All', 'Weddings', 'Birthdays', 'Picnics'];

const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
    category: 'Weddings',
    alt: 'Elegant wedding table with white roses and luxury styling',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1200&auto=format&fit=crop',
    category: 'Weddings',
    alt: 'Luxury wedding ceremony with white floral arrangements',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=1200&auto=format&fit=crop',
    category: 'Weddings',
    alt: 'Romantic wedding reception with elegant table settings',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop',
    category: 'Weddings',
    alt: 'White roses wedding decoration centerpiece',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=1200&auto=format&fit=crop',
    category: 'Birthdays',
    alt: 'Elegant birthday celebration with luxury styling',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=1200&auto=format&fit=crop',
    category: 'Birthdays',
    alt: 'Birthday party with sophisticated event styling',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=1200&auto=format&fit=crop',
    category: 'Birthdays',
    alt: 'Baby shower with elegant white decoration',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1200&auto=format&fit=crop',
    category: 'Picnics',
    alt: 'Luxury picnic setup with white styling',
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1200&auto=format&fit=crop',
    category: 'Picnics',
    alt: 'Elegant outdoor picnic arrangement',
  },
  {
    id: 10,
    src: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop',
    category: 'Picnics',
    alt: 'High-end garden party styling',
  },
  {
    id: 11,
    src: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1200&auto=format&fit=crop',
    category: 'Picnics',
    alt: 'Sophisticated outdoor celebration setup',
  },
  {
    id: 12,
    src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1200&auto=format&fit=crop',
    category: 'Weddings',
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
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-dl-coffee mb-6">
            Our Gallery
          </h2>
          <p className="font-sans text-dl-coffee/70 max-w-xl mx-auto leading-relaxed">
            A glimpse into the beautiful moments we have helped create
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 md:mb-16">
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
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          {filteredImages.map((image) => (
            <div
              key={image.id}
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
                <div className="absolute inset-0 bg-dl-coffee/0 group-hover:bg-dl-coffee/20 transition-all duration-500" />
                {/* Category Label on Hover */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block bg-white/90 text-dl-coffee font-sans text-xs uppercase tracking-widest px-3 py-1">
                    {image.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
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
          <div
            className="relative z-10 max-w-5xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[85vh] object-contain shadow-2xl"
            />
            {/* Image Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
              <p className="text-white font-sans text-sm tracking-wide">
                {selectedImage.category} — {selectedImage.alt}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
