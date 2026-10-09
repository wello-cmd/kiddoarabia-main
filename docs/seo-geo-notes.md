# SEO and AI search notes

The supplied SEO/GEO prompt was reviewed as reference material. Kiddo uses React and Vite with build-time prerendering; its Next.js, SaaS, billing and IP-routing examples do not apply directly.

## Adopted

- Page titles and descriptions use the actual recipe and journal registries, matching records by ID rather than assuming array position. The current collections contain 12 recipes and 16 articles; list markup derives its counts and links from those records.
- Canonicals, social metadata and page images use the confirmed production `https://kiddo-kid.com` origin. Recipe and article social cards use their own images.
- Organization identity uses the existing official profiles linked in the footer. The About page identifies Waleed Fathy Afify as CEO through Person markup; no founder claim or article authorship is inferred.
- Recipe markup uses visible ingredients, instructions, servings and images. Article markup uses real titles, excerpts, images, categories and the Kiddo publisher identity. Detail pages include the home, collection and detail hierarchy in BreadcrumbList markup. Collection pages include ItemList markup.
- No invented publication dates, author bylines, ratings, prices, offers, nutritional calculations, certifications or awards are emitted. Ambiguous preparation/chilling times are not converted into misleading schema durations.
- The language selector remembers `en` or `ar` in localStorage and continues working when storage is unavailable. Existing direction and document-language updates continue.
- Existing robots.txt allows public crawling and points to the sitemap. It excludes internal search. Its wildcard policy does not require individual AI bot allowlists.

## Deferred and limits

- The production domain is `https://kiddo-kid.com`. Metadata, robots, sitemap and prerender canonical handling use that origin together. Contact email remains `hello@kiddoarabia.com`.
- English and Arabic currently share page URLs. This is a UI language preference, not a finished multilingual SEO architecture. No hreflang or fabricated Arabic URL is emitted. A future localization project needs distinct real URLs, translated content, canonical and reciprocal hreflang mapping, and sitemap alternates.
- All twelve recipes now have Arabic titles, ingredients, instructions and preparation-time labels. Recipe schema follows the selected complete recipe translation. Journal schema follows the selected full article translation.
- Product offers, country redirects, billing, SaaS schema, analytics integrations, third-party profile creation, citation campaigns and automatic weekly measurement were not introduced.
- llms.txt and markdown mirrors are optional future experiments; no AI visibility guarantee is implied. Google says no special AI file or schema is required for AI Overviews or AI Mode.
- Structured data describes real content; it does not guarantee indexing, rich results or AI citations. Validate the deployed pages in Rich Results Test and inspect index coverage after launch. Submit the confirmed sitemap through verified Search Console and Bing Webmaster accounts.
- Keep the build-time prerendering step when hosting. It makes the page text and JSON-LD available in HTML to crawlers without relying on their JavaScript support. The default prerendered content is English.

## Official guidance checked

- [Google: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features): existing SEO practices remain relevant, content should be available as text, and markup should match visible content.
- [Google: general structured data guidelines](https://developers.google.com/search/docs/appearance/structured-data/sd-policies): accurate and representative markup is required; eligibility does not guarantee a rich result.
- [Google: Recipe structured data](https://developers.google.com/search/docs/appearance/structured-data/recipe): recipe fields should describe the recipe and image shown.

Checked October 3, 2026. These sources substantiate the implementation choices, not claims about guaranteed ranking or citation outcomes.
