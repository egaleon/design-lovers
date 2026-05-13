import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import GiftCollection from '../components/GiftCollection';

const giftsJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Luxury Gifts Collection - Design Lovers Sydney",
  "description": "Bespoke gift arrangements crafted in Sydney for every special occasion. Personalized luxury gifts for weddings, baby showers, and corporate events.",
  "url": "https://designlovers.com.au/gifts",
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Luxury Gift Arrangements"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Personalized Gift Boxes"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Corporate Gift Hampers"
      }
    ]
  }
};

export default function Gifts() {
  return (
    <main>
      <SEO
        title="Luxury Gifts"
        description="Bespoke gift arrangements crafted in Sydney for every special occasion. Personalized luxury gifts, gift boxes, and hampers by Design Lovers."
        url="https://designlovers.com.au/gifts"
        jsonLd={giftsJsonLd}
      />

      {/* Page Header */}
      <div className="bg-dl-champagne py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-dl-coffee tracking-wide lg:tracking-wider">
            Luxury Gifts
          </h1>
          <p className="font-sans text-dl-coffee/70 mt-4 max-w-2xl mx-auto">
            Bespoke gift arrangements crafted in Sydney for every special occasion
          </p>
        </div>
      </div>

      {/* Gift Collection Section */}
      <GiftCollection />

      {/* CTA Section */}
      <section className="bg-dl-coffee py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-dl-ivory mb-4 tracking-wide">
            Looking for Something Custom?
          </h2>
          <p className="font-sans text-dl-ivory/70 max-w-xl mx-auto mb-8">
            We create personalized gift arrangements tailored to your specific needs and preferences.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-dl-gold text-white font-sans text-xs uppercase tracking-[0.2em] px-10 py-4 border border-dl-gold hover:bg-transparent hover:text-dl-gold transition-all duration-300"
          >
            Request Custom Gift
          </Link>
        </div>
      </section>
    </main>
  );
}
