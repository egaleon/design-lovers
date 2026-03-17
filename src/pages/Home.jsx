import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import BrandIntro from '../components/BrandIntro';
import ServicesGrid from '../components/ServicesGrid';
import Packages from '../components/Packages';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import ScrollReveal from '../components/ScrollReveal';

export default function Home() {
  return (
    <>
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
      <section className="bg-dl-coffee py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-dl-ivory mb-6 tracking-wide lg:tracking-wider">
              Ready to Create Your Perfect Event?
            </h2>
            <p className="font-sans text-dl-ivory/70 max-w-xl mx-auto mb-10">
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
