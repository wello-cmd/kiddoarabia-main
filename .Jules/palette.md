## 2024-03-12 - Missing Accessibility States on Togglable Icon Buttons
**Learning:** Found a reusable UX pattern for this design system: togglable icon buttons (like the mobile menu or chat triggers) must include `aria-expanded` in addition to `aria-label` to ensure proper accessibility state management for screen readers. Icon-only buttons are generally missing labels entirely.
**Action:** When adding or reviewing icon-only toggles, always ensure both a descriptive `aria-label` (or dynamic label like 'Open menu'/'Close menu') and an accurate `aria-expanded={boolean}` prop are included.
