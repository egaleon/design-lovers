import { Check } from 'lucide-react';

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
  },
];

export default function Packages() {
  return (
    <section className="bg-dl-coffee py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-dl-gold mb-6">
            Curated Packages
          </h2>
          <p className="font-sans text-dl-ivory/80 max-w-xl mx-auto leading-relaxed">
            Choose the perfect package for your celebration. Each option is thoughtfully 
            designed to create an unforgettable experience.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
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
                className={`font-serif text-2xl md:text-3xl mb-2 ${
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
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
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
                className={`
                  w-full font-sans text-xs uppercase tracking-[0.2em] py-4 px-6
                  transition-all duration-300
                  ${pkg.featured
                    ? 'bg-dl-gold text-white hover:bg-dl-coffee'
                    : 'border border-dl-gold text-dl-gold hover:bg-dl-gold hover:text-white'
                  }
                `}
              >
                {pkg.featured ? 'Get Started' : 'Learn More'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
