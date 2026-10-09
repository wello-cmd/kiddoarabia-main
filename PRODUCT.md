# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

The website serves parents and commercial partners:

- Parents exploring food options for children and deciding which Kiddo products to try.
- Retailers evaluating the Kiddo range for their stores.
- Distributors worldwide exploring the range and potential cooperation in their markets.

## Product Purpose

Help visitors understand the Kiddo Arabia product range and find useful information about the brand. The current website also offers recipes, complete bilingual articles, family games, printable coloring pages, and ways to contact the company.

## Positioning

Kiddo's distinctive characters and product packaging are the confirmed point of difference to emphasize on future pages. Product copy should connect those assets to the actual products without inventing nutritional or safety benefits.

## Operating Context

Visitors can browse cereals, oat jars, and oat biscuits, read recipes and stories, learn about the company, and contact it. The site supports English and Arabic interface flow, with a remembered language preference that remains usable when browser storage is unavailable. All sixteen articles and all twelve recipes have bilingual titles and content. Recipe detail times, ingredients and instructions are translated into Arabic. Recipe IDs, English titles and images remain stable; recipe 3 correctly states twenty minutes plus two hours chilling.

## Capabilities and Constraints

- Keep product names, variants, and package details aligned with verified packaging or company-supplied information. The two oat jars are whole-grain oats and quick-cooking oats; earlier Original/Green Apple labels were incorrect.
- Family play includes a six-pair memory game, eleven-question mascot quiz and twenty-second ring game, five-level sequence memory, local two-player tic-tac-toe and five-round odd-one-out, a three-challenge wheel and solvable sliding mascot puzzle, plus a three-page coloring book and three individual PDFs. No account is required.
- The partner enquiry form opens a composed email for the visitor to review and send; it has no submission backend. Product enquiries can carry the chosen range into the form.
- Twelve user-confirmed stockists are recorded in `src/data/stores.ts`, with logo provenance in `public/stores/manifest.json`. Current official marks can differ from the historical supplied screenshot. Their presence does not establish branch inventory or worldwide availability.
- SEO scope and official guidance are recorded in `docs/seo-geo-notes.md`: registry-based metadata, visible-content structured data and build-time prerendering. English and Arabic share URLs; no hreflang is emitted.
- Waleed Fathy Afify is Kiddo Arabia's CEO; the user supplied his name and portrait for the About page.
- The official public domain is still to be confirmed. The user shared `https://kiddo-kid.com/`, while parts of the local site's SEO configuration use another domain.
- Nutrition, safety, certification, testimonial, and similar proof claims appearing in existing site copy are not yet verified. Treat them as open until supporting evidence is supplied.

## Brand Commitments

- Use the name Kiddo Arabia.
- Preserve the existing Kiddo characters, logo, and product packaging as brand assets. Their distinctive nature is central to the site's positioning.

## Evidence on Hand

- Product package images: `src/assets/*-official.jpg` and other product images in `public/lovable-uploads/`.
- Logo: `public/kiddo-logo.png` and the logo used by the current header.
- CEO portrait supplied by the user: `public/team/waleed-fathy-afify.jpg`.
- User-supplied Kiddo character and product reference artwork: `public/brand/`. The reference character sheets name Pops, King, Loopy, Bana, Buzz, Berry, Pillow, Byte, Flaky, and Scoops; the implemented cast also includes Creamo, for eleven mascots. The product range sheet shows eleven cereal packages. The user confirmed these are references for generating original website imagery, rather than finished page assets.
- Original generated website illustrations: `public/generated/`, with generation records. Generated scenes illustrate the character world; current cereal product displays use the exact supplied eleven-pack sheet through ProductPack viewports. Earlier v3/v4 generated package renders are retained historical assets, not current catalog pixels. Production packaging remains the authority for labels, variants and fine print.
- Text and pack details inside composite artwork should be checked against production packaging before being reused as factual copy.
- The current product pages, recipes, and stories provide source material for future page work, but their factual claims still need verification against company materials.

## Product Principles

- Make it easy for parents, retailers and worldwide distributors to find the product information each needs.
- Let the actual characters and packaging carry Kiddo's distinctiveness.
- State factual product details clearly and support material claims with evidence.
- Offer a coherent experience in English and Arabic.

## October 7 confirmed corrections

Yellow oat biscuits are Plain Oats, not honey. Oat jars remain wholegrain and quick-cooking. Sixteen complete bilingual blog articles include six adaptations of original kiddo-kid.com stories with matching original photos and attribution. Eight games have dedicated native-generated launcher artwork, including the wheel and puzzle. Gameplay uses existing mascot art. Interactive coloring uses three pages, undo, eraser and PNG download; nine badges and drawings save on the current device. Generated covers for earlier editorial activities depict the actual activity and are illustrative, not source event photographs.

## Packaging and hero corrections — 8 October 2026
Cereal pack displays use the exact supplied eleven-pack reference, unmodified. Home combines a native-generated Pops/King/Loopy backdrop with all seventeen actual catalog products: eleven cereals, two oat jars and four oat biscuits. About shows that same complete product range on a native white studio background without standalone mascot characters. Generated scenes do not define packaging truth. Recipes and Play have complete desktop scenes and dedicated portrait phone images; Recipes includes Crunchy Pillow. Original live website red is hsl(0 85% 55%), verified from kiddo-kid.com CSS. Small red text uses a darker accessible red; brand surfaces and large headings retain the original token.
