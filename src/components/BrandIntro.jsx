import ScrollReveal from './ScrollReveal';

export default function BrandIntro() {
  return (
    <section className="bg-dl-ivory py-20 md:py-28 lg:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <h2 className="font-serif text-2xl md:text-3xl text-dl-coffee leading-relaxed italic tracking-wide">
            Bespoke Event Styling & Luxury Decorations Across Sydney
          </h2>
          
          <p className="font-serif text-lg md:text-xl text-dl-gold mt-8 leading-relaxed tracking-wide">
            Welcome to Design Lovers Events & Styling
          </p>
          
          <p className="font-sans text-sm md:text-base text-dl-coffee/70 mt-6 leading-loose tracking-wide">
            We create beautifully curated event decorations and styling, designing elegant, personalized spaces filled with charm.
          </p>
          
          <p className="font-sans text-sm md:text-base text-dl-coffee/70 mt-4 leading-loose tracking-wide">
            Our purpose is to accompany you in every celebration with thoughtfully crafted designs that transform each moment into a unique and memorable experience.
          </p>

          {/* Golden Divider Line */}
          <div className="mt-12 md:mt-16 flex justify-center">
            <div className="w-24 h-px bg-dl-gold" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
