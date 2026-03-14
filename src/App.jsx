import Layout from './components/Layout';

function App() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <section className="text-center py-20">
          <h1 className="font-serif text-5xl md:text-7xl text-dl-coffee mb-6">
            Design Your <span className="text-dl-gold">Dream</span> Event
          </h1>
          <p className="font-sans text-lg text-dl-coffee/80 max-w-2xl mx-auto mb-10">
            Transform your special moments into unforgettable experiences with our 
            premium event design and decoration services.
          </p>
          <a
            href="#contact"
            className="inline-block bg-dl-gold text-white font-sans text-xs uppercase tracking-widest px-8 py-4 hover:bg-dl-coffee transition-colors duration-300"
          >
            Get Started
          </a>
        </section>

        {/* Services Preview */}
        <section id="services" className="py-20">
          <h2 className="font-serif text-4xl text-dl-coffee text-center mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Wedding Design', 'Corporate Events', 'Private Parties'].map((service) => (
              <div
                key={service}
                className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="font-serif text-xl text-dl-gold mb-3">{service}</h3>
                <p className="font-sans text-sm text-dl-coffee/70">
                  Professional planning and elegant decoration tailored to your unique style.
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default App;
