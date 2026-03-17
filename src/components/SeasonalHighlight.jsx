import { Heart, Flower2, Sparkles, Gift, PartyPopper, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';

const seasonalEvents = [
  {
    id: 1,
    name: "Valentine's Day",
    icon: Heart,
    date: 'February 14',
    description: 'Romantic gifts for your special someone',
  },
  {
    id: 2,
    name: "Mother's Day",
    icon: Flower2,
    date: 'May 12',
    description: 'Show your appreciation with luxury flowers',
  },
  {
    id: 3,
    name: 'Christmas',
    icon: Sparkles,
    date: 'December 25',
    description: 'Festive arrangements for the holiday season',
  },
  {
    id: 4,
    name: 'Baby Showers',
    icon: Gift,
    date: 'Year-round',
    description: 'Welcome new arrivals with curated gifts',
  },
  {
    id: 5,
    name: 'Anniversaries',
    icon: PartyPopper,
    date: 'Anytime',
    description: 'Celebrate your love story in style',
  },
  {
    id: 6,
    name: 'Spring Events',
    icon: Leaf,
    date: 'September - November',
    description: 'Fresh blooms for spring celebrations',
  },
];

export default function SeasonalHighlight() {
  return (
    <section className="bg-dl-champagne/30 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-dl-coffee mb-4 tracking-wide lg:tracking-wider">
            Celebrate the Season
          </h2>
          <p className="font-sans text-sm text-dl-coffee/60 max-w-xl mx-auto">
            Plan ahead for life&apos;s special moments. We&apos;re now taking orders for upcoming celebrations.
          </p>
        </ScrollReveal>

        {/* Horizontal Scroll Container */}
        <ScrollReveal delay={0.1}>
          <div className="overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
            <div className="flex gap-6 md:gap-8 min-w-max">
              {seasonalEvents.map((event, index) => (
                <div
                  key={event.id}
                  className="group flex-shrink-0 w-64 md:w-72 bg-white/60 backdrop-blur-sm p-6 md:p-8 text-center border border-dl-gold/10 hover:border-dl-gold/30 hover:bg-white/80 transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-12 h-12 mb-4 border border-dl-gold/20 rounded-full group-hover:bg-dl-gold/10 group-hover:border-dl-gold/40 transition-all duration-300">
                    <event.icon size={22} className="text-dl-gold" strokeWidth={1.5} />
                  </div>

                  {/* Holiday Name - Serif */}
                  <h3 className="font-serif text-xl md:text-2xl text-dl-coffee mb-1 tracking-wide group-hover:text-dl-gold transition-colors duration-300">
                    {event.name}
                  </h3>

                  {/* Date */}
                  <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-dl-gold mb-3">
                    {event.date}
                  </p>

                  {/* Description */}
                  <p className="font-sans text-xs text-dl-coffee/60 mb-4 leading-relaxed">
                    {event.description}
                  </p>

                  {/* CTA Text */}
                  <p className="font-sans text-[10px] uppercase tracking-[0.15em] text-dl-coffee/40 group-hover:text-dl-gold transition-colors duration-300">
                    Now taking orders
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom CTA */}
        <ScrollReveal delay={0.2} className="text-center mt-10">
          <p className="font-sans text-sm text-dl-coffee/60 mb-4">
            Have a special date in mind?
          </p>
          <Link
            to="/contact"
            className="inline-block font-sans text-xs uppercase tracking-[0.2em] text-dl-gold border-b border-dl-gold pb-1 hover:text-dl-coffee hover:border-dl-coffee transition-all duration-300"
          >
            Book Your Date Early
          </Link>
        </ScrollReveal>
      </div>

      {/* Custom CSS for hiding scrollbar */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
