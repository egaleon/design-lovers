import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import BrandIntro from '../components/BrandIntro';
import ServicesGrid from '../components/ServicesGrid';
import Packages from '../components/Packages';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import ScrollReveal from '../components/ScrollReveal';

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "name": "Design Lovers Events & Styling",
      "url": "https://designlovers.com.au",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://designlovers.com.au/?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "LocalBusiness",
      "name": "Design Lovers Events & Styling",
      "description": "Premier Sydney-based event styling business creating elegant, personalized, and unforgettable celebrations.",
      "url": "https://designlovers.com.au",
      "telephone": "+61-412-345-678",
      "email": "hello@designlovers.com.au",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Sydney",
        "addressRegion": "NSW",
        "addressCountry": "AU"
      },
      "areaServed": {
        "@type": "City",
        "name": "Sydney"
      },
      "serviceType": [
        "Event Styling",
        "Event Decoration",
        "Wedding Styling",
        "Corporate Event Design",
        "Baby Shower Decoration",
        "Luxury Gift Arrangements"
      ],
      "priceRange": "$$$",
      "openingHours": "Mo-Sa 09:00-18:00"
    }
  ]
};

export default function Home() {
  return (
    <>
      <SEO
        title="Design Lovers | Event Design & Decoration in Sydney"
        description="Premier Sydney-based event styling business creating elegant, personalized, and unforgettable celebrations. Weddings, baby showers, corporate events & more."
        url="https://designlovers.com.au/"
        jsonLd={homeJsonLd}
      />
      
      {/* Hero Section - Full screen intro */}
      <section id="home">
        <Hero />
      </section>

      {/* Brand Introduction - SEO optimized text */}
      <BrandIntro />

      {/* Services Section - Masonry grid of services */}
      <section id="services">
        <ServicesGrid />
      </section>

      {/* Packages Section - Pricing cards */}
      <section id="packages">
        <Packages />
      </section>

      {/* Gallery Section - Masonry photo gallery with lightbox */}
      <section id="gallery">
        <Gallery />
      </section>

      {/* Testimonials Section - Client reviews */}
      <Testimonials />

      {/* CTA Section - Contact prompt */}
      <section className="bg-dl-ivory py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-dl-coffee mb-6 tracking-wide lg:tracking-wider">
              Ready to Create Your Perfect Event?
            </h2>
            <p className="font-sans text-dl-coffee/70 max-w-xl mx-auto mb-10">
              Let&apos;s bring your vision to life. Get in touch to start planning your unforgettable celebration.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-dl-gold text-white font-sans text-xs uppercase tracking-[0.2em] px-10 py-4 border border-dl-gold hover:bg-transparent hover:text-dl-gold transition-all duration-300"
            >
              Get In Touch
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
