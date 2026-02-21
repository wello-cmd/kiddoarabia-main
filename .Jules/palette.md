## 2024-05-23 - AiBot Accessibility Patterns
**Learning:** Icon-only buttons (FABs, close icons) often lack ARIA labels in initial implementations, making them inaccessible to screen readers.
**Action:** Always check for `aria-label` on `<Button size="icon">` or custom icon buttons during reviews. Use conditional logic for multilingual support if `useTranslation` hook is available.
