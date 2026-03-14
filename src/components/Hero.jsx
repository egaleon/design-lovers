import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToContent = () => {
    const nextSection = document.getElementById('services');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image - Luxury White Roses / Event Styling */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop"
          alt="Luxury event styling with white roses decoration"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-dl-coffee/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Title */}
          <h1
            className={`
              font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6
              transition-all duration-1000 ease-out
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
          >
            Creating Beautiful
            <br />
            <span className="text-dl-champagne">& Memorable</span> Events
          </h1>

          {/* Subtitle */}
          <p
            className={`
              font-sans text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10
              font-light tracking-wide
              transition-all duration-1000 ease-out delay-300
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
          >
            Elegant Styling for Meaningful Celebrations in Sydney
          </p>

          {/* CTA Button */}
          <div
            className={`
              transition-all duration-1000 ease-out delay-500
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
          >
            <a
              href="#contact"
              className="
                inline-block bg-dl-gold text-white font-sans text-xs sm:text-sm uppercase tracking-[0.2em] 
                px-10 py-4 border border-dl-gold
                hover:bg-dl-coffee hover:border-dl-coffee
                transition-all duration-300 ease-out
              "
            >
              Plan Your Event
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToContent}
          className={`
            absolute bottom-10 left-1/2 -translate-x-1/2
            text-white/80 hover:text-dl-gold
            transition-all duration-500 delay-700
            ${isVisible ? 'opacity-100' : 'opacity-0'}
          `}
          aria-label="Scroll to content"
        >
          <ChevronDown size={32} className="animate-bounce" />
        </button>
      </div>
    </section>
  );
}
