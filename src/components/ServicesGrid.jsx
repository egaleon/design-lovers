const services = [
  {
    id: 1,
    title: 'Social Celebrations',
    description: 'Birthdays, anniversaries, and milestone events styled with elegance.',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Little Ones',
    description: 'Magical celebrations for baby showers, christenings, and children\'s parties.',
    image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Romantic Surprises',
    description: 'Intimate proposals, anniversary surprises, and romantic settings.',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Corporate & Retail',
    description: 'Professional events, product launches, and retail displays.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000&auto=format&fit=crop',
  },
];

export default function ServicesGrid() {
  return (
    <section className="bg-dl-ivory py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-dl-coffee mb-6">
            Our Signature Services
          </h2>
          <p className="font-sans text-dl-coffee/70 max-w-xl mx-auto leading-relaxed">
            From intimate gatherings to grand celebrations, we craft bespoke experiences 
            that reflect your unique style and vision.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {services.map((service) => (
            <article
              key={service.id}
              className="group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden mb-6">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Subtle Overlay on Hover */}
                <div className="absolute inset-0 bg-dl-coffee/0 group-hover:bg-dl-coffee/10 transition-all duration-500" />
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="font-serif text-xl md:text-2xl text-dl-coffee mb-3 group-hover:text-dl-gold transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="font-sans text-sm text-dl-coffee/60 mb-5 leading-relaxed">
                  {service.description}
                </p>
                <span className="inline-block font-sans text-xs uppercase tracking-[0.2em] text-dl-gold border-b border-dl-gold pb-1 hover:text-dl-coffee hover:border-dl-coffee transition-all duration-300">
                  Explore Service
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
