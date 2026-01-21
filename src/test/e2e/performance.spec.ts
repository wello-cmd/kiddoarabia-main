/**
 * PERFORMANCE E2E TESTS
 * Core Web Vitals and elite-tier performance validation
 */

import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Performance & Core Web Vitals', () => {
  test.beforeEach(async ({ page }) => {
    // Set up performance tracking
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test('should meet Core Web Vitals thresholds', async ({ page }) => {
    // Measure LCP (Largest Contentful Paint)
    const lcp = await page.evaluate(() => {
      return new Promise((resolve) => {
        new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          const lastEntry = entries[entries.length - 1];
          resolve(lastEntry.startTime);
        }).observe({ entryTypes: ['largest-contentful-paint'] });
        
        // Fallback timeout
        setTimeout(() => resolve(0), 5000);
      });
    });

    // Measure CLS (Cumulative Layout Shift)
    const cls = await page.evaluate(() => {
      return new Promise((resolve) => {
        let clsValue = 0;
        new PerformanceObserver((entryList) => {
          for (const entry of entryList.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value;
            }
          }
          resolve(clsValue);
        }).observe({ entryTypes: ['layout-shift'] });
        
        // Resolve after a delay to capture shifts
        setTimeout(() => resolve(clsValue), 3000);
      });
    });

    // Assert Core Web Vitals targets
    expect(lcp).toBeLessThan(1200); // 1.2s target
    expect(cls).toBeLessThan(0.01); // 0.01 target

    console.log(`Performance metrics - LCP: ${lcp}ms, CLS: ${cls}`);
  });

  test('should load hero section quickly', async ({ page }) => {
    const startTime = Date.now();
    
    await page.goto('/');
    await page.waitForSelector('[data-testid="hero-section"]', { state: 'visible' });
    
    const loadTime = Date.now() - startTime;
    expect(loadTime).toBeLessThan(800); // 800ms target for hero section
  });

  test('should have optimal resource loading', async ({ page }) => {
    const response = await page.goto('/');
    
    // Check response time
    expect(response?.status()).toBe(200);
    
    // Check for resource hints
    const preloads = await page.$$eval('link[rel="preload"]', links => 
      links.map(link => link.getAttribute('href'))
    );
    
    // Should preload critical resources
    expect(preloads.length).toBeGreaterThan(0);
  });

  test('should pass accessibility audit', async ({ page }) => {
    await page.goto('/');
    
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('should have proper meta tags for SEO', async ({ page }) => {
    await page.goto('/');
    
    // Check essential meta tags
    const title = await page.title();
    expect(title).toContain('Kiddo Arabia');
    
    const description = await page.getAttribute('meta[name="description"]', 'content');
    expect(description).toBeTruthy();
    expect(description!.length).toBeGreaterThan(50);
    expect(description!.length).toBeLessThan(160);
    
    // Check structured data
    const structuredData = await page.$eval('script[type="application/ld+json"]', 
      el => JSON.parse(el.textContent || '{}')
    );
    expect(structuredData['@context']).toBe('https://schema.org');
    expect(structuredData['@type']).toBe('Organization');
  });

  test('should handle mobile viewport correctly', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Check mobile navigation
    const mobileMenu = await page.$('[aria-label*="menu"]');
    expect(mobileMenu).toBeTruthy();
    
    // Check responsive images
    const heroImage = await page.$('img[alt*="hero"]');
    if (heroImage) {
      const imageWidth = await heroImage.evaluate(img => {
        if (img instanceof HTMLImageElement) {
          return img.offsetWidth;
        }
        return 0;
      });
      expect(imageWidth).toBeLessThanOrEqual(375);
    }
  });

  test('should handle keyboard navigation', async ({ page }) => {
    await page.goto('/');
    
    // Start keyboard navigation
    await page.keyboard.press('Tab');
    
    // Check if skip link is focused
    const skipLink = await page.$(':focus');
    const skipLinkText = await skipLink?.textContent();
    expect(skipLinkText).toContain('Skip');
    
    // Continue tabbing through navigation
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    
    const focusedElement = await page.$(':focus');
    expect(focusedElement).toBeTruthy();
  });

  test('should work without JavaScript', async ({ page, context }) => {
    // Disable JavaScript by setting a custom context
    await context.route('**/*.js', route => route.abort());
    
    await page.goto('/');
    
    // Check that basic content is still accessible
    const heading = await page.$('h1');
    expect(heading).toBeTruthy();
    
    const navigation = await page.$('nav');
    expect(navigation).toBeTruthy();
  });

  test('should have performance and security hints', async ({ page }) => {
    await page.goto('/');
    // Check for resource hints as caching/perf signals
    const preconnects = await page.$$eval('link[rel="preconnect"]', els => els.length);
    expect(preconnects).toBeGreaterThan(0);

    // Check for meta-based security policies in client (dev server may not set headers)
    const hasCSP = await page.$('meta[http-equiv="Content-Security-Policy"]');
    const hasXCTO = await page.$('meta[http-equiv="X-Content-Type-Options"]');
    const hasXFO = await page.$('meta[http-equiv="X-Frame-Options"]');
    expect(Boolean(hasCSP)).toBeTruthy();
    expect(Boolean(hasXCTO)).toBeTruthy();
    expect(Boolean(hasXFO)).toBeTruthy();
  });
});

test.describe('Image Optimization', () => {
  test('should serve optimized images', async ({ page }) => {
    await page.goto('/');
    
    const images = await page.$$eval('img', imgs => 
      imgs.map(img => ({
        src: img.src,
        alt: img.alt,
        loading: img.loading,
        width: img.naturalWidth,
        height: img.naturalHeight
      }))
    );
    
    for (const image of images) {
      // Check for alt text
      expect(image.alt).toBeTruthy();
      
      // Check for lazy loading
      if (!image.src.includes('hero')) {
        expect(image.loading).toBe('lazy');
      }
      
      // Check reasonable dimensions
      expect(image.width).toBeLessThan(2000);
      expect(image.height).toBeLessThan(2000);
    }
  });
});