import Layout from './components/Layout';
import Hero from './components/Hero';

function App() {
  return (
    <Layout>
      {/* Hero Section */}
      <Hero />

      {/* Services Preview */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-dl-coffee mb-4">
              Our Services
            </h2>
            <p className="font-sans text-dl-coffee/70 max-w-xl mx-auto">
              From intimate gatherings to grand celebrations, we bring your vision to life
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Wedding Design',
                description: 'Creating romantic and personalized settings for your special day, from ceremony to reception.'
              },
              {
                title: 'Corporate Events',
                description: 'Professional and sophisticated setups that reflect your brand and impress your guests.'
              },
              {
                title: 'Private Parties',
                description: 'Intimate and stylish decorations for birthdays, anniversaries, and milestone celebrations.'
              }
            ].map((service) => (
              <div
                key={service.title}
                className="bg-dl-ivory p-8 border border-dl-champagne/30 hover:shadow-lg transition-all duration-300 group"
              >
                <h3 className="font-serif text-2xl text-dl-gold mb-3 group-hover:text-dl-coffee transition-colors">
                  {service.title}
                </h3>
                <p className="font-sans text-sm text-dl-coffee/70 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Preview */}
      <section id="packages" className="py-20 bg-dl-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-dl-coffee mb-4">
            Our Packages
          </h2>
          <p className="font-sans text-dl-coffee/70 max-w-xl mx-auto mb-10">
            Tailored solutions for every occasion and budget
          </p>
          <a
            href="#packages"
            className="inline-block border-2 border-dl-gold text-dl-gold font-sans text-xs uppercase tracking-widest px-8 py-3 hover:bg-dl-gold hover:text-white transition-all duration-300"
          >
            View All Packages
          </a>
        </div>
      </section>
    </Layout>
  );
}

export default App;
