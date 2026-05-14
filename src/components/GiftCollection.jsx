import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import SeasonalHighlight from './SeasonalHighlight';

const categories = ['All', 'Fashion Bouquets', 'Balloon Bouquets', 'Bobo Cute Balloon', 'Flower Arrangements', 'Chocolate & Wine Gifts', 'Baby Collection', 'Portraits & Custom Gifts'];

const gifts = [
  {
    id: 1,
    name: 'Elegant Fashion Bouquet',
    category: 'Fashion Bouquets',
    description: 'A stunning curated bouquet blending premium blooms with haute couture styling for a truly fashionable statement.',
    image: '/images/gifts/fashion-bouquets/fashion-bouquet-01.webp',
  },
  {
    id: 2,
    name: 'Runway Rose Arrangement',
    category: 'Fashion Bouquets',
    description: 'Sophisticated rose ensemble designed with a fashion-forward touch, perfect for luxury gifting.',
    image: '/images/gifts/fashion-bouquets/fashion-bouquet-02.webp',
  },
  {
    id: 3,
    name: 'Designer Bloom Collection',
    category: 'Fashion Bouquets',
    description: 'An artistic fusion of seasonal flowers and contemporary design, crafted for the modern trendsetter.',
    image: '/images/gifts/fashion-bouquets/fashion-bouquet-03.webp',
  },
  {
    id: 4,
    name: 'Classic Celebration Balloons',
    category: 'Balloon Bouquets',
    description: 'Vibrant helium balloon bouquet arranged to bring joy and colour to any special occasion.',
    image: '/images/gifts/balloon-bouquets/balloon-bouquet-01.webp',
  },
  {
    id: 5,
    name: 'Luxury Balloon Ensemble',
    category: 'Balloon Bouquets',
    description: 'Elegant balloon arrangement featuring premium finishes and sophisticated colour palettes.',
    image: '/images/gifts/balloon-bouquets/balloon-bouquet-02.webp',
  },
  {
    id: 6,
    name: 'Pastel Dream Balloons',
    category: 'Balloon Bouquets',
    description: 'Soft pastel balloon bouquet perfect for baby showers, birthdays, and whimsical celebrations.',
    image: '/images/gifts/balloon-bouquets/balloon-bouquet-03.webp',
  },
  {
    id: 7,
    name: 'Golden Anniversary Balloons',
    category: 'Balloon Bouquets',
    description: 'Refined metallic balloon bouquet designed for milestone celebrations and elegant parties.',
    image: '/images/gifts/balloon-bouquets/balloon-bouquet-04.webp',
  },
  {
    id: 8,
    name: '30th Birthday Balloon Set',
    category: 'Balloon Bouquets',
    description: 'A festive balloon collection celebrating three decades of life, love, and unforgettable memories.',
    image: '/images/gifts/balloon-bouquets/balloon-bouquet-30-years.webp',
  },
  {
    id: 9,
    name: 'Clear Bobo Balloon Surprise',
    category: 'Bobo Cute Balloon',
    description: 'Charming transparent bobo balloon filled with delicate accents for a magical floating display.',
    image: '/images/gifts/bobo-cute-balloon/bobo-balloon-04.webp',
  },
  {
    id: 10,
    name: 'Baby Boy Bobo Balloon',
    category: 'Bobo Cute Balloon',
    description: 'Adorable bobo balloon creation celebrating the arrival of a precious baby boy.',
    image: '/images/gifts/bobo-cute-balloon/bobo-balloon-baby-boy.webp',
  },
  {
    id: 11,
    name: 'Gender Reveal Bobo Balloon',
    category: 'Bobo Cute Balloon',
    description: 'Elegant he or she bobo balloon arrangement, perfect for unveiling your little one\'s secret.',
    image: '/images/gifts/bobo-cute-balloon/bobo-balloon-he-she-01.webp',
  },
  {
    id: 12,
    name: 'He or She Balloon Display',
    category: 'Bobo Cute Balloon',
    description: 'Stylish gender reveal balloon set designed to create the ultimate surprise moment.',
    image: '/images/gifts/bobo-cute-balloon/bobo-balloon-he-she-02.webp',
  },
  {
    id: 13,
    name: 'Reveal Party Bobo Balloon',
    category: 'Bobo Cute Balloon',
    description: 'Delicate bobo balloon centrepiece crafted to add suspense and beauty to your gender reveal.',
    image: '/images/gifts/bobo-cute-balloon/bobo-balloon-he-she-03.webp',
  },
  {
    id: 14,
    name: 'Luxury Floral Centrepiece',
    category: 'Flower Arrangements',
    description: 'Exquisite hand-arranged blooms creating a breathtaking focal point for any refined event.',
    image: '/images/gifts/flower-arrangements/flower-arrangement-01.webp',
  },
  {
    id: 15,
    name: 'Flowers, Balloons & Wine Set',
    category: 'Flower Arrangements',
    description: 'The ultimate celebration trio: fresh flowers, festive balloons, and a bottle of fine wine.',
    image: '/images/gifts/flower-arrangements/flower-arrangement-with-ballons-and-wine-01.webp',
  },
  {
    id: 16,
    name: 'Elegant Party Gift Bundle',
    category: 'Flower Arrangements',
    description: 'A curated gift combining lush florals, celebratory balloons, and premium wine.',
    image: '/images/gifts/flower-arrangements/flower-arrangement-with-ballons-and-wine-02.webp',
  },
  {
    id: 17,
    name: 'Celebration Essentials Arrangement',
    category: 'Flower Arrangements',
    description: 'Beautifully paired flowers and balloons with wine for an unforgettable gifting experience.',
    image: '/images/gifts/flower-arrangements/flower-arrangement-with-ballons-and-wine-03.webp',
  },
  {
    id: 18,
    name: 'Grand Celebration Package',
    category: 'Flower Arrangements',
    description: 'A luxurious ensemble of vibrant flowers, stylish balloons, and wine for milestone moments.',
    image: '/images/gifts/flower-arrangements/flower-arrangement-with-ballons-and-wine-04.webp',
  },
  {
    id: 19,
    name: 'Chocolate & Wine Gift Box',
    category: 'Chocolate & Wine Gifts',
    description: 'Decadent artisan chocolates paired with a select wine, presented in an elegant gift box.',
    image: '/images/gifts/chocolate-and-wine-gifts/chocolate-wine-01.webp',
  },
  {
    id: 20,
    name: 'Wine Glasses & Chocolate Set',
    category: 'Chocolate & Wine Gifts',
    description: 'Sophisticated wine glasses accompanied by gourmet chocolates for a romantic evening.',
    image: '/images/gifts/chocolate-and-wine-gifts/chocolate-wine-glasses-01.webp',
  },
  {
    id: 21,
    name: 'Personalised Glasses & Truffles',
    category: 'Chocolate & Wine Gifts',
    description: 'Engraved wine glasses with premium truffles, a thoughtful gift for someone special.',
    image: '/images/gifts/chocolate-and-wine-gifts/chocolate-wine-glasses-02.webp',
  },
  {
    id: 22,
    name: 'Godiva Luxury Collection',
    category: 'Chocolate & Wine Gifts',
    description: 'Premium Godiva chocolates paired with fine wine in an opulent presentation set.',
    image: '/images/gifts/chocolate-and-wine-gifts/luxury-collection-godiva-chocolate-wine-01.webp',
  },
  {
    id: 23,
    name: 'Custom Wine & Chocolate Gift',
    category: 'Chocolate & Wine Gifts',
    description: 'Personalised wine glasses and handcrafted chocolates tailored for a unique gifting moment.',
    image: '/images/gifts/chocolate-and-wine-gifts/personalised-chocolate-wine-glasses-01.webp',
  },
  {
    id: 24,
    name: 'Newborn Essentials Gift Set',
    category: 'Baby Collection',
    description: 'Delicate baby clothes and soft essentials arranged in a beautiful welcome-to-the-world gift.',
    image: '/images/gifts/baby-collection/baby-gift-clothes-01.webp',
  },
  {
    id: 25,
    name: 'Luxury Baby Hamper',
    category: 'Baby Collection',
    description: 'A curated hamper of organic cotton keepsakes and gentle baby care treasures.',
    image: '/images/gifts/baby-collection/baby-gift-collection-01.webp',
  },
  {
    id: 26,
    name: 'Baby Welcome Collection',
    category: 'Baby Collection',
    description: 'Charming baby gift collection featuring plush toys, clothing, and nursery essentials.',
    image: '/images/gifts/baby-collection/baby-gift-collection-02.webp',
  },
  {
    id: 27,
    name: 'Bespoke Luxury Portrait Gift',
    category: 'Portraits & Custom Gifts',
    description: 'A one-of-a-kind custom gift featuring elegant portraiture and personalised luxury details.',
    image: '/images/gifts/portraits-and-custom-gifts/luxury-custom-gift.webp',
  },
];

export default function GiftCollection() {
  const [activeFilter, setActiveFilter] = useState('All');
  const navigate = useNavigate();

  const filteredGifts = activeFilter === 'All' 
    ? gifts 
    : gifts.filter(gift => gift.category === activeFilter);

  const handleInquire = (gift) => {
    navigate('/contact', {
      state: {
        message: `I am interested in learning more about the ${gift.name} (${gift.category}). Please provide more information.`
      }
    });
  };

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
                  ? 'bg-dl-gold text-white border-dl-gold'
                  : 'bg-transparent text-dl-coffee border-dl-coffee/20 hover:border-dl-gold hover:bg-dl-gold/10'
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
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500 flex items-center justify-center">
                    <button
                      onClick={() => handleInquire(gift)}
                      className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 bg-dl-gold text-white font-sans text-[10px] uppercase tracking-[0.2em] px-6 py-3 hover:bg-white hover:text-dl-ivory"
                    >
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
