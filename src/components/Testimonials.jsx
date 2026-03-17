import { useRef } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const testimonials = [
  {
    id: 1,
    quote: "Working with Design Lovers was an absolute dream. As a top Sydney event stylist, they transformed our venue into something truly spectacular. The attention to detail in every floral arrangement and table setting exceeded our expectations. Our wedding day was nothing short of perfect.",
    name: "Sarah Mitchell",
    event: "Wedding",
    location: "Sydney",
  },
  {
    id: 2,
    quote: "The team's attention to detail is remarkable. From the initial consultation to the final setup, every element was carefully considered and beautifully executed. Our baby shower was elegant, sophisticated, and exactly what we envisioned. I couldn't recommend them more highly.",
    name: "Jessica Thompson",
    event: "Baby Shower",
    location: "North Sydney",
  },
  {
    id: 3,
    quote: "Design Lovers created a truly magical atmosphere for our corporate gala. The bespoke decorations and thoughtful styling impressed all our guests and made the evening unforgettable. Their professionalism and creativity made the entire process seamless.",
    name: "Michael Richardson",
    event: "Corporate Event",
    location: "CBD Sydney",
  },
];

export default function Testimonials() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-[#FBFBFB] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="text-center mb-16 md:mb-20">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-dl-coffee mb-6 tracking-wide lg:tracking-wider">
            Kind Words from Our Clients
          </h2>
          <p className="font-sans text-dl-coffee/60 max-w-xl mx-auto">
            Discover why clients across Sydney trust us with their most special celebrations
          </p>
        </ScrollReveal>

        {/* Mobile Navigation Arrows */}
        <div className="flex justify-end gap-2 mb-6 md:hidden">
          <button
            onClick={() => scroll('left')}
            className="p-2 border border-dl-coffee/20 text-dl-coffee hover:bg-dl-coffee hover:text-white transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-2 border border-dl-coffee/20 text-dl-coffee hover:bg-dl-coffee hover:text-white transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Testimonials Grid/Slider */}
        <div
          ref={scrollRef}
          className="flex md:grid md:grid-cols-3 gap-6 md:gap-8 overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((testimonial, index) => (
            <ScrollReveal
              key={testimonial.id}
              delay={index * 0.15}
              className="flex-shrink-0 w-[300px] md:w-auto snap-center"
            >
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-8 md:p-10 h-full border border-dl-coffee/5 hover:border-dl-gold/20 hover:shadow-lg transition-all duration-500"
              >
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote size={32} className="text-dl-gold" strokeWidth={1} />
                </div>

                {/* Quote Text */}
                <blockquote className="font-sans text-dl-coffee/80 italic leading-relaxed mb-8 text-[15px]">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author Info */}
                <div className="border-t border-dl-coffee/10 pt-6">
                  <p className="font-sans text-xs font-semibold uppercase tracking-wider text-dl-coffee">
                    {testimonial.name}
                  </p>
                  <p className="font-sans text-[11px] text-dl-coffee/50 mt-1">
                    {testimonial.event} — {testimonial.location}
                  </p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Mobile Scroll Indicator */}
        <div className="flex justify-center gap-2 mt-6 md:hidden">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-dl-coffee/20"
            />
          ))}
        </div>
      </div>

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
