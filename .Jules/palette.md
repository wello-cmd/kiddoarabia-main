## 2024-05-19 - Missing Aria-Label on Close Button in PerformanceMonitor.tsx
**Learning:** Found a missing `aria-label` attribute on the `PerformanceMonitor.tsx` close button (rendered as `×`). This lacks an accessible name for screen readers, preventing them from identifying the purpose of the button.
**Action:** Always ensure that icon-only buttons or buttons with just a symbol (like `×` for close) have a descriptive `aria-label` to provide context for assistive technologies.
