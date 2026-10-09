---
name: "Kiddo Arabia"
description: "Logo red and white frame recognizable characters and original product packages."
colors:
  red: "hsl(0 85% 55%)"
  red-hover: "#bf1019"
  ink: "#20202c"
  white: "#ffffff"
  blush: "#fff5f5"
  blush-action: "#fff0f1"
  blush-hover: "#ffe8ea"
  portrait-blush: "#ffe1e3"
  selection: "#ffd4d7"
  supporting-text: "#51515b"
  recipe-meta: "#54545f"
  footer: "#28242a"
  footer-text: "#e4dce0"
  footer-hover: "#ffabb0"
  divider: "#efdadd"
  stage-divider: "#f1dfe1"
  header-border: "#eceef6"
  language-border: "#dce0eb"
  filter-border: "#cdd4e9"
  footer-divider: "#ffffff29"
  game-success: "#258149"
  game-success-surface: "#e4f5e9"
  input-border: "#bcadb0"
  glass-header: "rgba(255,255,255,.92)"
  glass-tools: "rgba(255,255,255,.82)"
  checked-ingredient: "#61616b"
  primary-semantic: "hsl(0 85% 55%)"
  foreground-semantic: "hsl(240 16% 15%)"
  secondary-semantic: "hsl(0 100% 97%)"
  muted-semantic: "hsl(0 20% 97%)"
  muted-text-semantic: "hsl(240 8% 35%)"
  border-semantic: "hsl(0 15% 88%)"
typography:
  display:
    fontFamily: "Fredoka, Inter, sans-serif"
    fontSize: "clamp(58px, 5.8vw, 88px)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.025em"
  club-display:
    fontFamily: "Fredoka, Inter, sans-serif"
    fontSize: "clamp(48px, 5.4vw, 80px)"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-0.025em"
  breakfast-display:
    fontFamily: "Fredoka, Inter, sans-serif"
    fontSize: "clamp(52px, 5.2vw, 76px)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.025em"
  collection-display:
    fontFamily: "Fredoka, Inter, sans-serif"
    fontSize: "clamp(60px, 6vw, 88px)"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-0.025em"
  range-display:
    fontFamily: "Fredoka, Inter, sans-serif"
    fontSize: "clamp(44px, 4.5vw, 68px)"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-0.025em"
  full-stage-display:
    fontFamily: "Fredoka, Inter, sans-serif"
    fontSize: "clamp(50px, 4.6vw, 72px)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  action-label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "19px"
    fontWeight: 800
  page-display:
    fontFamily: "Fredoka, Inter, sans-serif"
    fontSize: "clamp(48px, 6vw, 84px)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.025em"
  page-hero-display:
    fontFamily: "Fredoka, Inter, sans-serif"
    fontSize: "clamp(46px, 5vw, 72px)"
    fontWeight: 650
    lineHeight: 1.04
    letterSpacing: "-0.025em"
  kitchen-display:
    fontFamily: "Fredoka, Inter, sans-serif"
    fontSize: "clamp(44px, 4.5vw, 70px)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Fredoka, Inter, sans-serif"
    fontSize: "clamp(36px, 4.5vw, 64px)"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-0.025em"
  library-headline:
    fontFamily: "Fredoka, Inter, sans-serif"
    fontSize: "48px"
    fontWeight: 700
    letterSpacing: "-0.025em"
  mascot-title:
    fontFamily: "Fredoka, Inter, sans-serif"
    fontSize: "72px"
    fontWeight: 700
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Fredoka, Inter, sans-serif"
    fontSize: "25px"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "-0.011em"
  hero-body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "19px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 800
  arabic-heading:
    fontFamily: "Inter, Tahoma, sans-serif"
    fontWeight: 700
    letterSpacing: "0"
rounded:
  mobile-crew: "10px"
  package: "12px"
  image: "14px"
  panel: "16px"
  action: "30px"
  flat: "0"
spacing:
  "8": "8px"
  "9": "9px"
  "10": "10px"
  "12": "12px"
  "13": "13px"
  "14": "14px"
  "15": "15px"
  "16": "16px"
  "17": "17px"
  "18": "18px"
  "19": "19px"
  "20": "20px"
  "21": "21px"
  "22": "22px"
  "23": "23px"
  "24": "24px"
  "25": "25px"
  "26": "26px"
  "28": "28px"
  "30": "30px"
  "32": "32px"
  "34": "34px"
  "35": "35px"
  "36": "36px"
  "38": "38px"
  "40": "40px"
  "42": "42px"
  "45": "45px"
  "48": "48px"
  "50": "50px"
  "52": "52px"
  "55": "55px"
  "58": "58px"
  "60": "60px"
  "64": "64px"
  "65": "65px"
  "68": "68px"
  "70": "70px"
  "75": "75px"
  "80": "80px"
  "85": "85px"
  "90": "90px"
components:
  button-red:
    backgroundColor: "{colors.red}"
    textColor: "{colors.white}"
    typography: "{typography.action-label}"
    rounded: "{rounded.action}"
    padding: "14px 24px"
  button-red-hover:
    backgroundColor: "{colors.red-hover}"
  button-white:
    backgroundColor: "{colors.white}"
    textColor: "{colors.red}"
    typography: "{typography.action-label}"
    rounded: "{rounded.action}"
    padding: "14px 24px"
  navigation:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    height: "86px"
  filter:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.action}"
    padding: "12px 21px"
  filter-selected:
    backgroundColor: "{colors.red}"
    textColor: "{colors.white}"
  crew-choice:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.image}"
    padding: "8px 4px 12px"
  crew-choice-selected:
    backgroundColor: "{colors.white}"
    textColor: "{colors.red}"
  catalog-card:
    backgroundColor: "{colors.blush}"
    textColor: "{colors.ink}"
    rounded: "{rounded.image}"
    padding: "24px"
---

# Design System: Kiddo Arabia

## Overview

**Creative North Star: "The Living Breakfast World"**

Kiddo's recognizable cast and package identity carry the personality. Logo red and white frame colorful illustration with clear, generous reading surfaces. Rounded Fredoka headings and Inter supporting copy make the world playful and readable for parents, retailers and worldwide distributors.

This is the user-approved durable logo-led system. The active authority is `src/styles/kiddo-brand.css`, imported after `kiddo-redesign.css` in `src/main.tsx`; the latter supplies shared structure and inherited defaults. The homepage, Characters, Recipes, Products, Cereals, oat jars, oat biscuits, About, family play, partner enquiries, journal and detail layouts share this system. Inactive legacy hero and character-stage CSS is not a guide for new screens. The original homepage compositions belong to `.impeccable/surfaces/src-pages-index-tsx.md`; approved extension compositions and imagery belong to `.impeccable/surfaces/october-extension.md`.

**Key Characteristics:**

- Logo red, white, charcoal and blush interface surfaces.
- Recognizable mascots and exact supplied product package artwork.
- Large rounded headings, pill controls and gentle image corners.
- Responsive English and Arabic interfaces with reduced-motion support.

## Colors

### Primary

Kiddo Red defines large headings, primary actions and brand fields. Red Hover supplies hover states and accessible small red text, including navigation, trade links and secondary actions. Selected catalog controls use Red Hover with white labels. Historical blue and yellow aliases resolve to the current red and white palette.

### Secondary

Game Success and Game Success Surface distinguish matched memory cards and correct quiz answers. They are functional feedback within the approved extension. Incorrect answers use Portrait Blush. Input Border provides a visible boundary around partner form fields. Glass Header and Glass Tools are the scoped white translucencies over Characters artwork and recipe photography; Checked Ingredient softens completed checklist text.

### Neutral

White supplies the navigation, studio stages and product browsing backgrounds. Charcoal Ink supplies default copy; Supporting Text and Recipe Meta soften supporting information. Blush is the catalog, recipe and leadership surface; Blush Action, Blush Hover and Portrait Blush distinguish enquiries, selector hover and the CEO portrait. The footer uses its own warm charcoal, pale text and pink hover accent. Divider, Stage Divider, Header Border, Language Border and Filter Border retain their observed local roles. Selection is blush with charcoal text.

The frontmatter records both literal brand colors and the separate HSL semantic values used by inherited utilities. The primary semantic channels match the restored brand red; other semantic values retain their implemented inherited roles. Semantic HSL values are wrapped in `hsl()` to represent the colors; the CSS custom properties store only their channels.

**The Logo Frame Rule.** Red and white govern interface color; cobalt, yellow and other bright hues belong to mascots, packaging and illustration. Game success green is reserved for matched and correct feedback.

## Typography

**Display Font:** Fredoka, with Inter and sans-serif fallbacks. The bundled face is weight 700.

**Body Font:** Inter, with system sans-serif fallbacks. Heading tracking is tight; body copy remains straightforward. The normative roles and fluid sizes are in frontmatter. The scoped v5 page hero role uses white headings at the implemented (650) weight and (1.04) line-height, becoming (44px) on mobile. Supporting hero copy uses `clamp(17px,1.5vw,21px)`, (1.5) line-height and (30ch) maximum; mobile uses (17px)/(35ch). Arabic hero headings inherit the Arabic face, normal tracking and (1.22) line-height.

The Home range heading uses range-display, becoming `clamp(40px,10.5vw,54px)` below (760px). Its body copy is (18px)/(1.6), becoming (17px); actions use (19px)/(800). Full-stage Recipes and Play headings use full-stage-display, becoming `clamp(44px,11.5vw,58px)` on mobile; body text is (18px)/(1.6), becoming (17px). Older brand-display rules are retained CSS, not the current Home heading. Club display becomes (58px)/(53px); breakfast display (58px)/(54px); collection display (65px)/(59px). Shared section headings use (39px) for product headings and (43px) for story headings on mobile. Library and collection headings use (48px) desktop and (39px) mobile. The selected mascot title uses (72px)/(55px). Family Kitchen recipe detail titles use kitchen-display; Arabic uses Inter/Tahoma, zero tracking and relaxed line-height.

Other observed type steps are (11px) mobile character labels; (12px) mobile catalog text and filters; (13px) metadata and mobile actions; (14px) filters, retail labels and supporting catalog text; (15px) navigation and desktop actions; (16px) baseline copy and section links; (17px) mobile introductory copy; (18px) category copy and CEO role; (19px) hero/leadership copy; (20px) page intros and contact/about copy; (21px) story copy, range links and mobile product titles; (22px)/(24px) footer headings; (23px) shelf headings and selected-character product name; (25px)/(26px) recipe and catalog titles; (28px)/(31px) enquiry headings; (30px)/(32px) oat titles; and (43px)/(54px) category/about headings. Contact display uses `clamp(52px,6vw,84px)` with (62px) mobile; CEO heading uses `clamp(38px,4vw,60px)`.

Arabic headings use Inter/Tahoma, zero tracking, and relaxed hero line-height (1.18). The English mascot name remains Fredoka with tight tracking even inside Arabic: its title carries `lang="en"` and `dir="ltr"`. Do not apply the Latin display face to Arabic glyphs. Arabic list titles, filters and interface labels are localized. All twelve recipe details have translated titles, times, ingredients and instructions; all sixteen journal articles have full English and Arabic content.

## Layout

Shared content width is `min(1240px, calc(100% - 80px))`; mobile uses `calc(100% - 36px)`. Navigation uses a (1320px) maximum and (64px) total desktop inset, moving to (36px) total inset on mobile. Studio heroes cap at (1600px), with a (5%) leading inset. Story/contact use paired columns; the product shelf has four columns, recipe/catalog grids three, oat galleries two. The character selector has eleven desktop columns, six below (1100px), and four below (760px). Mobile stacks heroes, stories, category rows and recipes; product and catalog grids retain two columns. Character art and its matching illustrative catalog pack share the first mobile row, with copy beneath.

Home uses a white range stage with live copy, the native-generated Pops/King/Loopy backdrop and a complete seventeen-product display. The desktop intro has a (440px) minimum height, a (43%) copy field and (40px) leading inset; mobile stacks copy and (220px) artwork. The cereal display has eleven desktop columns and four mobile columns. Jars and biscuits form a centered desktop row and three mobile columns. About reuses this exact display over a native white studio backdrop, without standalone mascots. Recipes and Play use FullStageHero: complete desktop scenes and dedicated (4:5) portrait images on phones. Desktop stage height is the larger of its (1672:941) aspect and the viewport minus navigation. Live text sits in the upper-left white field. Original live website red is the normative heading and surface token.

The header is sticky, (86px) desktop and (72px) mobile. Desktop retail action hides below (1100px); navigation becomes a toggle and vertical list below (760px). Arabic reverses interface flow and leading padding without mirroring package labels or artwork; the mascot ensemble deliberately retains left-to-right overlap. The desktop Characters and Recipes heroes deliberately keep live Arabic copy on the left and unmirrored scene art on the right. Their containers retain left-to-right composition while the copy itself is right-to-left and right-aligned; mobile retains copy above art. Characters alone uses a floating glass header: `min(1320px, calc(100% - 32px))`, (12px) top inset, panel corners and (74px)/(64px) navigation heights. Its fallback is opaque blush; supported backdrop filtering uses Glass Header and (16px) blur. Other routes retain the flat header. Anchor sections account for the sticky header with (100px)/(110px) scroll margins.

## Elevation & Depth

Shared replacement surfaces have no added box-shadow except the small cereal ring game target, whose inset and drop shading establish its recognizable ring shape. Depth comes from studio photography, contained scene shadows, overlapping alpha mascots, blush panels and fine dividers. The retained earlier brand-display image rule has an (800ms) blur/translation entrance; the current Home range backdrop has no authored entrance animation. Reduced-motion handling remains on inherited action, package and character motion. Action hover lifts (2px) over (200ms), and package hover lifts (8px) with a small rotation over (250ms); reduced motion removes those transitions and hover transforms. No looping illustration animation is part of this system. Characters adds authored GSAP entrance and selected-mascot motion only when reduced motion is not requested: crew (1.1s), translateY (22px), rotation (-1deg), opacity (.75); selection (.65s), translateY (16px), scale (.97), opacity (.8), both expo.out. Match-media cleanup reverts animations on effect disposal. Pointer hover moves portraits (-5px) with (-3deg) rotation over (.35s), gated by hover capability and motion preference. The stockist strip moves linearly over (30s), pauses on hover, keyboard focus or its explicit control, and becomes a static scrollable row under reduced motion.

## Shapes

Actions, language toggles and catalog filters are pills. Shared photography, catalog cards, oat images and desktop character choices use gentle image corners; package thumbnails retain the package radius. CEO frames and About artwork use the panel radius; the portrait itself and mobile character choices use the smaller radius. Category rows are flat with a bottom divider. Radius values in frontmatter cover the actual (0px), (10px), (12px), (14px), (16px) and (30px) choices.

## Components

### Buttons

Red primary and white outlined actions share (52px) minimum height, (14px 24px) desktop padding and bold labels. On mobile, minimum height is (49px), padding (12px 17px), labels depend on the component; current Home, Recipes and Play actions use (19px), with (12px 18px) Home and (12px 17px) full-stage mobile padding. White actions use a (2px) red border. The historical yellow variant renders white with red text. Retail navigation uses a white background and (1px) red border, with blush hover. Keyboard focus is a (3px) red outline at (5px) offset.

### Chips

Catalog and recipe filters are white outlined pills with (12px 21px) padding; selected state is red/white and exposed by `aria-pressed`. Mobile uses (10px 15px) and (12px) labels. Character choices use white tiles with a (2px) transparent border and circular blush image fields. Selection uses red text and a red image border; hover is blush. Their eleven individual images have transparent alpha and are contained rather than cropped.

### Cards / Containers

Catalog cards use blush, gentle corners, (24px) desktop padding and (13px 10px) mobile padding. Recipe cards sit directly on the section and use rounded photos, a heading with directional arrow and time metadata. Product category rows sit directly on white with a divider; cereal galleries present unmodified supplied package pixels through deterministic viewports. Catalog packs are contained at (280px) desktop/(190px) mobile height; homepage shelf packs use (230px)/(170px), with normal blending to preserve transparent artwork.

### Navigation

Keep the original Kiddo logo image, white sticky bar, charcoal bold links and red current/hover state. Language toggle remains an outlined pill. Desktop logo height is (57px), mobile (45px). Footer repeats the original logo on warm charcoal, pale text, white email and pink link hover.

### Character and scene assets

The eleven individual alpha WebPs are `public/generated/mascots/{pops,king,loopy,bana,buzz,berry,pillow,byte,flaky,scoops,creamo}.webp`. Club banners overlap King, Pops and Loopy; the interactive roster shows the selected mascot beside its matching illustrative cereal package and anchored cereal link. Selection announces the feature with an accessible live region.

Current Home uses `/generated/home-range-backdrop-v1.webp` for Pops, King and Loopy behind separate live text, plus ProductRangeDisplay for all seventeen actual catalog products. About uses the same catalog display with `/generated/all-products-studio-v1.webp` as its native white studio background; it contains no standalone mascot figures. Recipes and Play use `/generated/recipe-stage-v6.webp` and `/generated/games-stage-v6.webp`, with dedicated `-mobile.webp` portrait alternatives. The eleven cereal identities come from `/brand/cereal-packaging-supplied.png`, byte-identical to the user-supplied eleven-pack sheet, through ProductPack viewports. Jars and biscuits use their current registry images. Earlier generated package renders and scene generations remain historical assets and do not supply current cereal display pixels. CEO uses the supplied Waleed Fathy Afify portrait.

**The Package Truth Rule.** Original source packages govern labels, variants and factual product identity. Current cereal displays use those exact pixels; generated scenes establish atmosphere and supply no new factual claims.

### Living characters, Family Kitchen and Trade Desk

Eleven bilingual fictional mascot stories add a short heading and paragraph to the selected character, with cereal, games and enquiry actions. These are authored character-world copy, not product benefit claims. The feature uses (26% 48% 26%) columns, stacking on mobile. Its story text is (17px), (1.6) line-height, capped at (42ch).

Family Kitchen replaces the recipe detail presentation with a (39%)/(61%) copy/photo stage capped at (1600px), becoming (44%)/(56%) below (1100px) and stacked below (760px). The photo is cover imagery with a (600px) desktop minimum and (440px) mobile height. The photo toolbar uses Glass Tools, (18px) backdrop blur, pill corners and (15px 18px) padding; its mobile state shows saving while servings remains in the copy. Servings use a pill stepper, (37px) circular controls and tabular output. Ingredient rows use native red-accent checkboxes, muted struck-through checked text, and leading quantities that scale in English and Arabic, including supported fractions and parenthetical metric equivalents. Scaling does not change unsupported ranges, temperatures or durations. Cook mode presents one instruction with progress and previous/next controls; ordinary steps use two columns, then one on mobile. Printing hides navigation, photography and interactive controls, revealing servings and the full ingredients/method in black. Recipe saving is device-local with an unavailable-storage notice; saved recipes appear in a compact detail list and a library filter. There are no accounts, backend synchronization or meal planner.

Trade Desk uses a paired (0.95fr)/(1.05fr) text/product-scene hero and a blush enquiry count/review tray. Its seventeen actual products are presented as a product/range/add table with contained thumbnails, category pills and distinct selected add/remove states. Mobile hides the range column and uses compact accessible add/remove controls. The shortlist supports removing, clearing, device persistence and product-query prefill. Required company and country/market fields, business type and range precede the compose-email action. Selected products are included in the email body for review and sending in the visitor's own app. The four-page product catalogue PDF uses actual products/photos without new health or sales claims. The current twelve confirmed store logos remain the availability reference.

### Games, downloads, editorial and enquiries

Play uses complete desktop and portrait gaming-together scenes. Eight illustrated game launchers open the selected game immediately in a focused full-screen native dialog; Escape and Back to games close it and restore the gallery. Wheel and puzzle launchers now use dedicated native-generated `/generated/games/wheel-v1.webp` and `/generated/games/puzzle-v1.webp` covers. The additional wheel contains three completed family challenges, and the sliding picture puzzle uses a solvable scramble. Nine device-local badges are earned by documented completion criteria. The coloring studio has three mascots, ten colors, brush/eraser, undo, brush size, keyboard and pointer drawing, local persistence and PNG export. Downloads remain available. 

Six imported full bilingual stories retain original matching photographs and attribution links. Seven older editorial covers now depict their precise activities, including recipe-morning measuring and stirring. Generated family scenes are illustrative, never documentary proof. Journal layouts use a paired feature, a three-column article grid, two columns below (1000px), and one below (760px). Grid imagery sits in (3:2) containers with contain behavior; feature and detail images preserve source aspect ratios with automatic height, avoiding image clipping. The featured article is excluded from the grid, and the range-guide cover uses the exact supplied package lineup. Article reading width is `min(70ch, calc(100% - 80px))`, with (18px) text and (1.85) line-height; mobile uses the shared inset, (17px) and (1.8). Category pills expose pressed states. Sources and related reading use fine dividers and visible text links.

Partner heroes and content use paired columns, stacking on mobile. The enquiry panel is blush with the panel radius and (32px)/(22px) padding. Visible labels accompany white inputs, selects and textareas with Input Border, the mobile-crew radius and (12px) padding. Required company and market fields precede a compose-email action; the form explicitly explains review and sending in the visitor's email app. Store logos are contained within (180px × 100px) cells, reducing to (140px) widths on mobile; Spinneys uses a charcoal backing for legibility. Provenance is retained with the current twelve official marks.

The branded contact block uses email/social links. Inherited utility inputs remain outside this documented component set. Concept captures guided the combined responsive design; no measured comp specification or exact reproduction state exists, so no pixel-exact fidelity is claimed. Earlier mechanical advisories comparing colors/type against the previous cobalt/yellow documentation describe intentional approved system changes, not evidence to restore the old palette.

## Do's and Don'ts

### Do:

- Do preserve the original logo, recognizable mascot identities and factual package artwork.
- Do frame colorful illustration with red, white, charcoal and blush interface surfaces.
- Do retain readable English/Arabic flow, keyboard pressed states and reduced-motion behavior.
- Do keep original recipe content provenance and localization scope explicit.

### Don't:

- Don't treat obsolete cobalt/yellow CSS declarations as the current interface palette.
- Don't use generated package lettering as a factual label source.
- Don't mirror package artwork in Arabic or apply Arabic heading overrides to Latin mascot names.
- Don't add looping scene motion or claim measured pixel-exact concept fidelity.

Exact cereal packaging is displayed from public/brand/cereal-packaging-supplied.png with deterministic CSS viewports in ProductPack. Do not regenerate pack labels or mascot placement. The shared source is byte-identical to the supplied reference. Journal index excludes the featured article from the grid, preserves source photo aspect ratios, and replaces the duplicated range guide photograph with the accurate supplied package lineup. About uses company, range, leadership and distribution sections with only supplied business facts.
