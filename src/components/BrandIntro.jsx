import ScrollReveal from './ScrollReveal';

export default function BrandIntro() {
  return (
    <section className="bg-dl-ivory py-20 md:py-28 lg:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <h2 className="font-serif text-2xl md:text-3xl text-dl-coffee leading-relaxed italic tracking-wide">
            Bespoke Event Styling & Luxury Decorations across Sydney
          </h2>
          
          <p className="font-sans text-sm md:text-base text-dl-coffee/70 mt-8 leading-loose tracking-wide">
            At Design Lovers, we curate elegant, personalized, and memorable experiences for{' '}
            <strong className="text-dl-coffee">weddings, proposals, and engagement setups</strong>. 
            Our expertise extends to{' '}
            <strong className="text-dl-coffee">gender reveals, anniversaries, and bespoke birthday styling</strong>. 
            From <strong className="text-dl-coffee">baby showers and baptism decorations</strong> to{' '}
            <strong className="text-dl-coffee">romantic surprise setups and seasonal holiday events</strong>, 
            we transform every space. 
            
            <br /><br />
            
            We also specialize in{' '}
            <strong className="text-dl-coffee">school graduations, religious and family celebrations, luxury picnics, storefront styling, and corporate events</strong>{' '}
            throughout the Sydney region. Every special occasion is an opportunity to create a visually stunning and lasting impression.
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
