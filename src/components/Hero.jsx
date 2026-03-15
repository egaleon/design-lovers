import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

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

  const goToContact = () => {
    navigate('/contact');
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
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6 tracking-wide lg:tracking-wider"
          >
            Creating Beautiful
            <br />
            <span className="text-dl-champagne">& Memorable</span> Events
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-sans text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 font-light tracking-wide"
          >
            Elegant Styling for Meaningful Celebrations in Sydney
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <button
              onClick={goToContact}
              className="inline-block bg-dl-gold text-white font-sans text-xs sm:text-sm uppercase tracking-[0.2em] px-10 py-4 border border-dl-gold hover:bg-dl-coffee hover:border-dl-coffee transition-all duration-300 ease-out"
            >
              Plan Your Event
            </button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          onClick={scrollToContent}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/80 hover:text-dl-gold transition-colors"
          aria-label="Scroll to content"
        >
          <ChevronDown size={32} className="animate-bounce" />
        </motion.button>
      </div>
    </section>
  );
}
