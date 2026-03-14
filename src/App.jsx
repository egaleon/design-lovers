import Layout from './components/Layout';
import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid';
import Packages from './components/Packages';
import Gallery from './components/Gallery';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <Layout>
      {/* Hero Section - Full screen intro */}
      <section id="home">
        <Hero />
      </section>

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

      {/* Contact Section - Two column contact form */}
      <section id="contact">
        <ContactForm />
      </section>
    </Layout>
  );
}

export default App;
