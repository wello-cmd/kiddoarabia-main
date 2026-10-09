# Hosting Kiddo Arabia

The repository root contains the Vite app. Install with `npm ci`, install the build browser with `npx playwright install chromium`, then run `npm run build`. The completed site is in `dist/` and contains prerendered HTML for the public routes.

## Existing Lovable project

The original README identifies Lovable project https://lovable.dev/projects/4021c575-b0fc-4979-9fa9-f57d22f3f420. To retain that hosting service, open that project, confirm it is connected to `Wxllo/kiddoarabia-main`, and publish the updated revision. A GitHub update alone does not verify a new public deployment.

## Netlify alternative

Import the private GitHub repository using an authorized Netlify account. The included `netlify.toml` sets the build command and `dist` publish directory. Keep the base directory empty because the app is at repository root. Prerendered HTML and real assets are served directly; other paths fall back to React Router.

After the first deployment, confirm the home page, a directly opened `/recipe/1`, `/play`, downloadable PDFs, and Arabic text on the generated URL. Attach `kiddo-kid.com` only through the hosting account's domain setup and update its DNS records there.

For hosts whose Linux image lacks browser system libraries, install them with `npx playwright install --with-deps chromium` when the build environment permits it. Local builds can use installed Google Chrome by setting `PRERENDER_BROWSER_CHANNEL=chrome`.

References: https://docs.netlify.com/build/frameworks/framework-setup-guides/vite/ and https://playwright.dev/docs/browsers.

## Existing cPanel hosting

Build the site locally, then upload the contents of `dist/` into the domain's document root. The uploaded document root should contain `index.html`, `assets/`, public files and route directories directly. Keep the existing server configuration and files for other domains separate. `public/.htaccess` supplies an Apache fallback for paths that do not match a real file or directory; prerendered routes remain ordinary directories.

The build archive is a static website, so server-side Node.js is not required. Review the deployment on the real domain and verify the canonical origin is `https://kiddo-kid.com`.
