import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import SeasonalHighlight from './SeasonalHighlight';

const categories = ['All', 'Balloon Bouquets', 'Flower Arrangements', 'Chocolate Boxes', 'Baby Collection'];

const gifts = [
  {
    id: 1,
    name: 'Elegant White Balloon Bouquet',
    category: 'Balloon Bouquets',
    description: 'Sophisticated white and gold balloon arrangement perfect for any celebration.',
    price: '$89',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Luxury Rose Box',
    category: 'Flower Arrangements',
    description: 'Preserved roses in an elegant gift box, lasting beauty for months.',
    price: '$149',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Artisan Chocolate Collection',
    category: 'Chocolate Boxes',
    description: 'Handcrafted premium chocolates in a luxury presentation box.',
    price: '$65',
    image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Baby Welcome Gift Set',
    category: 'Baby Collection',
    description: 'Delicate baby essentials wrapped in premium packaging.',
    price: '$120',
    image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 5,
    name: 'Champagne Balloon Garland',
    category: 'Balloon Bouquets',
    description: 'Stunning champagne-colored balloon garland for elegant events.',
    price: '$175',
    image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 6,
    name: 'Peony Perfection Arrangement',
    category: 'Flower Arrangements',
    description: 'Luxurious peony bouquet in soft blush and cream tones.',
    price: '$195',
    image: 'https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 7,
    name: 'Golden Truffle Selection',
    category: 'Chocolate Boxes',
    description: 'Exquisite golden-truffle chocolates with edible gold leaf.',
    price: '$85',
    image: 'https://images.unsplash.com/photo-1481391319762-47dff72954d9?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 8,
    name: 'Newborn Luxury Hamper',
    category: 'Baby Collection',
    description: 'Curated collection of organic cotton essentials and keepsakes.',
    price: '$220',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 9,
    name: 'Birthday Balloon Tower',
    category: 'Balloon Bouquets',
    description: 'Dramatic balloon tower with personalized message option.',
    price: '$125',
    image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 10,
    name: 'Orchid Elegance Display',
    category: 'Flower Arrangements',
    description: 'Stunning phalaenopsis orchids in a ceramic vessel.',
    price: '$165',
    image: 'https://images.unsplash.com/photo-1455659817273-f96807779a8a?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 11,
    name: 'French Macaron Box',
    category: 'Chocolate Boxes',
    description: 'Assorted artisanal macarons in a signature gift box.',
    price: '$55',
    image: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 12,
    name: 'Christening Keepsake Set',
    category: 'Baby Collection',
    description: 'Heirloom-quality christening gifts with personalization.',
    price: '$185',
    image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop',
  },
];

export default function GiftCollection() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredGifts = activeFilter === 'All' 
    ? gifts 
    : gifts.filter(gift => gift.category === activeFilter);

  return (
    <section className="bg-dl-ivory py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-dl-coffee mb-6 tracking-wide lg:tracking-wider">
            Luxury Gifts for Special Moments
          </h2>
          <p className="font-sans text-dl-coffee/70 max-w-2xl mx-auto leading-relaxed">
            Discover our curated collection of bespoke gift arrangements, handcrafted in Sydney 
            to celebrate life&apos;s most precious occasions. From elegant balloon bouquets to 
            exquisite flower arrangements and artisanal treats.
          </p>
        </ScrollReveal>

        {/* Filter Bar */}
        <ScrollReveal delay={0.1} className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12 md:mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`
                font-sans text-[11px] uppercase tracking-[0.15em] px-4 md:px-5 py-2.5
                transition-all duration-300 border
                ${activeFilter === category
                  ? 'bg-dl-coffee text-white border-dl-coffee'
                  : 'bg-transparent text-dl-coffee border-dl-coffee/20 hover:border-dl-coffee hover:bg-dl-coffee/5'
                }
              `}
            >
              {category}
            </button>
          ))}
        </ScrollReveal>

        {/* Products Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8"
        >
          <AnimatePresence>
            {filteredGifts.map((gift, index) => (
              <motion.article
                key={gift.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden mb-4">
                  <img
                    src={gift.image}
                    alt={`${gift.name} - ${gift.category} gift arrangement in Sydney`}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-dl-coffee/0 group-hover:bg-dl-coffee/50 transition-all duration-500 flex items-center justify-center">
                    <button className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 bg-white text-dl-coffee font-sans text-[10px] uppercase tracking-[0.2em] px-6 py-3 hover:bg-dl-gold hover:text-white">
                      Inquire Now
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="text-center">
                  <span className="font-sans text-[10px] uppercase tracking-[0.15em] text-dl-coffee/50 mb-1 block">
                    {gift.category}
                  </span>
                  <h3 className="font-serif text-lg md:text-xl text-dl-coffee mb-1 group-hover:text-dl-gold transition-colors duration-300 tracking-wide">
                    {gift.name}
                  </h3>
                  <p className="font-sans text-xs text-dl-coffee/60 mb-2 line-clamp-2">
                    {gift.description}
                  </p>
                  {gift.price && (
                    <span className="font-serif text-dl-gold text-lg">
                      {gift.price}
                    </span>
                  )}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredGifts.length === 0 && (
          <div className="text-center py-20">
            <p className="font-sans text-dl-coffee/60">
              No gifts found in this category.
            </p>
          </div>
        )}
      </div>

      {/* Seasonal Highlight Section */}
      <SeasonalHighlight />
    </section>
  );
}
