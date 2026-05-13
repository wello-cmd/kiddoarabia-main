## 2024-05-13 - Add ARIA label and aria-expanded to mobile menu button
**Learning:** Found that the mobile menu toggle button in `src/components/Header.tsx` lacks accessible text for screen readers (no `aria-label`) and state (`aria-expanded`). This is a common accessibility issue for stateful icon-only buttons.
**Action:** Added `aria-label` and `aria-expanded` properties to the menu button to clearly indicate its action and state.
