import { spawn } from 'node:child_process';
import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { chromium } from '@playwright/test';

const routes = ['/', '/products', '/cereals', '/oat-jars', '/biscuits', '/recipes', '/blog', '/about', '/characters', '/play', '/partners', ...Array.from({ length: 12 }, (_, i) => `/recipe/${i + 1}`), ...Array.from({ length: 16 }, (_, i) => `/blog/${i + 1}`)];
const port = 4179;
const server = spawn(process.execPath, ['node_modules/vite/bin/vite.js', 'preview', '--host', '127.0.0.1', '--port', String(port), '--strictPort'], { stdio: 'ignore' });
let browser;
try {
  let ready = false;
  for (let i = 0; i < 40; i++) {
    try { const response = await fetch(`http://127.0.0.1:${port}/`); if (response.ok) { ready = true; break; } } catch {}
    await new Promise(resolve => setTimeout(resolve, 250));
  }
  if (!ready) throw new Error('Preview server did not start');
  browser = await chromium.launch({
    headless: true,
    ...(process.env.PRERENDER_BROWSER_CHANNEL ? { channel: process.env.PRERENDER_BROWSER_CHANNEL } : {}),
  });
  const page = await browser.newPage();
  for (const route of routes) {
    await page.goto(`http://127.0.0.1:${port}${route}`, { waitUntil: 'domcontentloaded' });
    await page.locator('h1').first().waitFor({ timeout: 15000 });
    await page.waitForFunction(() => Array.from(document.querySelectorAll('link[rel="canonical"]')).some(link => link.getAttribute('href')?.endsWith(location.pathname)));
    await page.evaluate(() => {
      const canonical = `https://kiddo-kid.com${location.pathname}`;
      let foundCanonical = false;
      Array.from(document.querySelectorAll('link[rel="canonical"]')).reverse().forEach(link => {
        if (link.getAttribute('href') !== canonical || foundCanonical) link.remove();
        else foundCanonical = true;
      });
      for (const selector of ['meta[name="description"]', 'meta[name="robots"]', 'meta[property^="og:"]', 'meta[name^="twitter:"]']) {
        const seen = new Set();
        Array.from(document.querySelectorAll(selector)).reverse().forEach(meta => {
          const key = meta.getAttribute('name') || meta.getAttribute('property');
          if (seen.has(key)) meta.remove(); else seen.add(key);
        });
      }
    });
    const html = await page.content();
    const folder = route === '/' ? 'dist' : join('dist', route.slice(1));
    await mkdir(folder, { recursive: true });
    await writeFile(join(folder, 'index.html'), html);
    console.log(`Prerendered ${route}`);
  }
} finally {
  await browser?.close();
  server.kill();
}
