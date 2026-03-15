import { Sparkles, Gem, Crown } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

const brandValues = [
  {
    icon: Sparkles,
    title: 'Attention to Detail',
    description: 'Every element meticulously curated',
  },
  {
    icon: Gem,
    title: 'Bespoke Design',
    description: 'Tailored to your unique vision',
  },
  {
    icon: Crown,
    title: 'Premium Quality',
    description: 'Only the finest materials',
  },
];

export default function About() {
  return (
    <>
      {/* Header Section */}
      <div className="bg-dl-champagne py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-dl-coffee tracking-wide lg:tracking-wider">
              About Design Lovers
            </h1>
            <p className="font-serif text-xl md:text-2xl text-dl-gold mt-4 tracking-wide">
              Events & Styling
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Two Column Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <ScrollReveal className="order-2 lg:order-1">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop"
                  alt="Event Stylist in Sydney creating luxury event decoration"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-dl-gold/10 -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 border border-dl-gold/30 -z-10" />
            </div>
          </ScrollReveal>

          {/* Text Column */}
          <ScrollReveal delay={0.2} className="order-1 lg:order-2">
            <div className="space-y-6">
              <p className="font-sans text-dl-coffee/80 leading-relaxed">
                <strong className="text-dl-coffee">Design Lovers Events & Styling</strong> is a premier 
                Sydney-based event styling business dedicated to creating elegant, personalized, and 
                unforgettable celebrations. As experts in{' '}
                <span className="text-dl-gold">event design</span>, we specialize in transforming 
                spaces with thoughtful concepts, premium decorative elements, and meticulous attention 
                to detail.
              </p>
              
              <p className="font-sans text-dl-coffee/80 leading-relaxed">
                Our passion is to bring our clients&apos; visions to life through{' '}
                <span className="text-dl-gold">bespoke event decoration</span> tailored to weddings, 
                baby showers, milestone birthdays, corporate events, and special celebrations across 
                Sydney. We believe every event should feel unique, meaningful, and visually memorable.
              </p>
              
              <p className="font-sans text-dl-coffee/80 leading-relaxed">
                Whether you are planning an intimate gathering or a large-scale event,{' '}
                <strong className="text-dl-coffee">Design Lovers</strong> is here to create an 
                atmosphere that reflects your personal style and leaves a lasting impression on your 
                guests. As your trusted <span className="text-dl-gold">Event Stylist in Sydney</span>, 
                we are committed to excellence in every detail.
              </p>

              <div className="pt-6">
                <Link
                  to="/contact"
                  className="inline-block border-2 border-dl-gold text-dl-gold font-sans text-xs uppercase tracking-[0.2em] px-8 py-4 hover:bg-dl-gold hover:text-white transition-all duration-300"
                >
                  Work With Us
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Brand Values Section */}
      <div className="bg-dl-coffee py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {brandValues.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 0.15}>
                <div className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-6 border border-dl-gold/30 rounded-full group-hover:bg-dl-gold/10 transition-colors duration-300">
                    <value.icon size={28} className="text-dl-gold" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-xl text-dl-ivory mb-2 tracking-wide">
                    {value.title}
                  </h3>
                  <p className="font-sans text-sm text-dl-ivory/60">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
