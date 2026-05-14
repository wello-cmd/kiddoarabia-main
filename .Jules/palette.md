
## 2024-05-14 - Standalone Form Inputs Accessibility
**Learning:** Standalone form inputs (like newsletter subscriptions) without explicit associated `<label>` tags must include an `aria-label` attribute to ensure accessibility for screen readers.
**Action:** Added `aria-label` and `autoComplete="email"` to email inputs, and `aria-label` to the corresponding submit buttons in `Footer.tsx` and `AboutSection.tsx` to improve form semantics and accessibility.
