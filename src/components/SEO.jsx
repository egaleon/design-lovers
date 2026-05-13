import { Helmet } from 'react-helmet-async';

const defaultMeta = {
  title: 'Design Lovers | Event Design & Decoration in Sydney',
  description:
    'Design Lovers Events & Styling is a premier Sydney-based event styling business creating elegant, personalized, and unforgettable celebrations. Weddings, baby showers, corporate events & more.',
  keywords:
    'event styling sydney, event design, event decoration, wedding stylist sydney, baby shower decoration, corporate event styling, luxury events sydney, party planner sydney, bespoke events, event decorator',
  url: 'https://designlovers.com.au',
  image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop',
  type: 'website',
  locale: 'en_AU',
  twitterCard: 'summary_large_image',
};

export default function SEO({
  title = defaultMeta.title,
  description = defaultMeta.description,
  keywords = defaultMeta.keywords,
  url = defaultMeta.url,
  image = defaultMeta.image,
  type = defaultMeta.type,
  locale = defaultMeta.locale,
  twitterCard = defaultMeta.twitterCard,
  canonical,
  noindex = false,
  jsonLd = null,
}) {
  const fullTitle = title.includes('Design Lovers')
    ? title
    : `${title} | Design Lovers`;

  const canonicalUrl = canonical || url;

  return (
    <Helmet>
      {/* Basic Meta */}
      <html lang={locale.split('_')[0]} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content={locale} />
      <meta property="og:site_name" content="Design Lovers Events & Styling" />

      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
}
