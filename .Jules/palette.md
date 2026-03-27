## 2026-03-05 - Replaced Alert with Toast & Added aria-label
**Learning:** The browser native `alert()` is disruptive and inaccessible. Screen readers often struggle with it, and it blocks the main thread. Additionally, icon-only social media buttons (like in Footers) mapped via arrays require an explicit `aria-label` sourced from the array data (e.g. `social.label`) to be properly announced by screen readers.
**Action:** Use a non-blocking UI component like `sonner` toast for inline feedback, and always bind an `aria-label` to icon-only buttons when mapping over dynamic content.
