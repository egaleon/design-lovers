import Layout from './components/Layout';
import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid';
import Packages from './components/Packages';
import Gallery from './components/Gallery';

function App() {
  return (
    <Layout>
      {/* Hero Section */}
      <Hero />

      {/* Services Grid */}
      <div id="services">
        <ServicesGrid />
      </div>

      {/* Packages */}
      <div id="packages">
        <Packages />
      </div>

      {/* Gallery */}
      <div id="gallery">
        <Gallery />
      </div>

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
