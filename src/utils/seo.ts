export interface SEOData {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

export const updatePageSEO = (seoData: SEOData) => {
  // Update title
  if (seoData.title) {
    document.title = seoData.title;
  }

  // Update meta tags
  const updateMeta = (property: string, content: string) => {
    let element = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
    if (!element) {
      element = document.querySelector(`meta[name="${property}"]`) as HTMLMetaElement;
    }
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute('property', property);
      document.head.appendChild(element);
    }
    element.content = content;
  };

  if (seoData.description) {
    updateMeta('description', seoData.description);
    updateMeta('og:description', seoData.description);
    updateMeta('twitter:description', seoData.description);
  }

  if (seoData.image) {
    updateMeta('og:image', seoData.image);
    updateMeta('twitter:image', seoData.image);
  }

  if (seoData.url) {
    updateMeta('og:url', seoData.url);
    updateMeta('twitter:url', seoData.url);
  }

  if (seoData.type) {
    updateMeta('og:type', seoData.type);
  }

  if (seoData.author) {
    updateMeta('author', seoData.author);
  }

  if (seoData.keywords) {
    updateMeta('keywords', seoData.keywords);
  }

  // Update canonical URL
  let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  if (!canonical && seoData.url) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  if (canonical && seoData.url) {
    canonical.href = seoData.url;
  }
};

export const generateStructuredData = (type: 'Organization' | 'Product' | 'Article', data: any) => {
  const baseData = {
    '@context': 'https://schema.org',
    '@type': type,
  };

  const structuredData = { ...baseData, ...data };

  // Remove existing structured data
  const existingScript = document.querySelector('script[type="application/ld+json"]');
  if (existingScript) {
    existingScript.remove();
  }

  // Add new structured data
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(structuredData);
  document.head.appendChild(script);
};