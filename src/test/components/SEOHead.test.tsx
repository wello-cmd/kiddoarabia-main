import { render, waitFor } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { describe, it, expect } from 'vitest';
import SEOHead from '../../components/SEOHead';

describe('SEOHead Component', () => {
  it('renders default SEO tags correctly', async () => {
    const helmetContext = {};
    render(
      <HelmetProvider context={helmetContext}>
        <SEOHead />
      </HelmetProvider>
    );

    await waitFor(() => {
      expect(document.title).toBe("Kiddo Arabia - Premium Kids' Nutrition | Made with Love & Care");

      const metaDescription = document.querySelector('meta[name="description"]');
      expect(metaDescription).toHaveAttribute('content',
        "🌟 Nourishing your little ones with the finest, healthiest ingredients. Premium cereals, oat jars & biscuits crafted with love for growing minds and bodies. Trusted by families across the Middle East."
      );

      const metaKeywords = document.querySelector('meta[name="keywords"]');
      expect(metaKeywords).toHaveAttribute('content',
        "kids nutrition, healthy cereals, children's food, family breakfast, organic snacks, vitamins for kids, Arabic brands, healthy eating, growing children"
      );

      const ogImage = document.querySelector('meta[property="og:image"]');
      expect(ogImage).toHaveAttribute('content', "https://kiddoarabia.com/og-image.jpg");

      const ogUrl = document.querySelector('meta[property="og:url"]');
      expect(ogUrl).toHaveAttribute('content', "https://kiddoarabia.com");

      const ogType = document.querySelector('meta[property="og:type"]');
      expect(ogType).toHaveAttribute('content', "website");

      expect(document.documentElement.lang).toBe('en');
    });
  });
});
