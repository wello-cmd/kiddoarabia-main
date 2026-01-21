import { test, expect } from '@playwright/test';

test.describe('Critical User Flows', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('homepage loads and displays hero section', async ({ page }) => {
    // Check LCP element loads
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('h1')).toContainText('Kiddo');
    
    // Check primary CTA is visible and clickable
    const ctaButton = page.locator('button:has-text("Explore"), a:has-text("Explore")').first();
    await expect(ctaButton).toBeVisible();
    await expect(ctaButton).toBeEnabled();
  });

  test('navigation works correctly', async ({ page }) => {
    // Test main navigation
    await page.click('text=Products');
    await expect(page).toHaveURL(/.*products/);
    
    await page.click('text=Recipes');
    await expect(page).toHaveURL(/.*recipes/);
    
    await page.click('text=About');
    await expect(page).toHaveURL(/.*about/);
  });

  test('keyboard navigation works', async ({ page }) => {
    // Test skip link
    await page.keyboard.press('Tab');
    const skipLink = page.locator('text=Skip to main content');
    await expect(skipLink).toBeVisible();
    
    // Test main navigation via keyboard
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');
  });

  test('search functionality works', async ({ page }) => {
    // If there's a search feature
    const searchButton = page.locator('[aria-label="Search"]');
    if (await searchButton.isVisible()) {
      await searchButton.click();
      const searchInput = page.locator('input[type="search"]');
      await expect(searchInput).toBeVisible();
      await searchInput.fill('cereal');
      await page.keyboard.press('Enter');
    }
  });

  test('mobile responsive design', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    
    // Check mobile menu
    const mobileMenuButton = page.locator('[aria-label="Menu"]');
    if (await mobileMenuButton.isVisible()) {
      await mobileMenuButton.click();
      await expect(page.locator('nav')).toBeVisible();
    }
    
    // Check hero section is responsive
    await expect(page.locator('h1')).toBeVisible();
  });

  test('contact form submission', async ({ page }) => {
    await page.goto('/contact');
    
    // Fill out contact form if it exists
    const nameInput = page.locator('input[name="name"]');
    if (await nameInput.isVisible()) {
      await nameInput.fill('Test User');
      await page.fill('input[name="email"]', 'test@example.com');
      await page.fill('textarea[name="message"]', 'Test message');
      
      const submitButton = page.locator('button[type="submit"]');
      await submitButton.click();
      
      // Check for success message or redirect
      await expect(page.locator('text=Thank you')).toBeVisible({ timeout: 5000 });
    }
  });

  test('product browsing flow', async ({ page }) => {
    await page.goto('/products');
    
    // Check products load
    await expect(page.locator('[data-testid="product-card"]').first()).toBeVisible();
    
    // Click on first product
    await page.click('[data-testid="product-card"]');
    
    // Should navigate to product detail
    await expect(page.locator('h1')).toBeVisible();
  });

  test('accessibility compliance', async ({ page }) => {
    // Check for proper heading hierarchy
    const h1Count = await page.locator('h1').count();
    expect(h1Count).toBe(1);
    
    // Check for alt text on images
    const images = page.locator('img');
    const imageCount = await images.count();
    
    for (let i = 0; i < imageCount; i++) {
      const img = images.nth(i);
      const alt = await img.getAttribute('alt');
      expect(alt).toBeTruthy();
    }
    
    // Check for form labels
    const inputs = page.locator('input');
    const inputCount = await inputs.count();
    
    for (let i = 0; i < inputCount; i++) {
      const input = inputs.nth(i);
      const label = await input.getAttribute('aria-label') || 
                   await page.locator(`label[for="${await input.getAttribute('id')}"]`).textContent();
      expect(label).toBeTruthy();
    }
  });
});