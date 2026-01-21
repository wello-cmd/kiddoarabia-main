import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  structuredData?: Record<string, any>;
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
  };
  product?: {
    price?: string;
    currency?: string;
    availability?: 'in stock' | 'out of stock';
    brand?: string;
  };
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Kiddo Arabia - Premium Kids' Nutrition | Made with Love & Care",
  description = "🌟 Nourishing your little ones with the finest, healthiest ingredients. Premium cereals, oat jars & biscuits crafted with love for growing minds and bodies. Trusted by families across the Middle East.",
  keywords = "kids nutrition, healthy cereals, children's food, family breakfast, organic snacks, vitamins for kids, Arabic brands, healthy eating, growing children",
  image = "https://kiddoarabia.com/og-image.jpg",
  url = "https://kiddoarabia.com",
  type = "website",
  structuredData: customStructuredData,
  article,
  product
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": type === 'article' ? 'Article' : type === 'product' ? 'Product' : 'Organization',
    "name": title,
    "description": description,
    "url": url,
    "image": image,
    ...(type === 'article' && article && {
      "headline": title,
      "datePublished": article.publishedTime,
      "dateModified": article.modifiedTime,
      "author": {
        "@type": "Organization",
        "name": article.author || "Kiddo Arabia"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Kiddo Arabia",
        "logo": {
          "@type": "ImageObject",
          "url": "https://kiddoarabia.com/logo.png"
        }
      },
      "articleSection": article.section,
      "keywords": article.tags?.join(', ')
    }),
    ...(type === 'product' && product && {
      "brand": {
        "@type": "Brand",
        "name": product.brand || "Kiddo Arabia"
      },
      "offers": {
        "@type": "Offer",
        "price": product.price,
        "priceCurrency": product.currency || "SAR",
        "availability": `https://schema.org/${product.availability === 'in stock' ? 'InStock' : 'OutOfStock'}`
      }
    })
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Kiddo Arabia" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Article specific meta tags */}
      {type === 'article' && article && (
        <>
          <meta property="article:published_time" content={article.publishedTime} />
          <meta property="article:modified_time" content={article.modifiedTime} />
          <meta property="article:author" content={article.author} />
          <meta property="article:section" content={article.section} />
          {article.tags?.map(tag => (
            <meta key={tag} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(customStructuredData || structuredData)}
      </script>

      {/* Performance Hints */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
    </Helmet>
  );
};

export default SEOHead;