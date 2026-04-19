## 2024-05-24 - Missing ARIA labels on mapped icon-only buttons
**Learning:** Found a pattern where data arrays for UI elements (like `socialLinks`) include descriptive `label` properties, but these labels are not mapped to `aria-label` attributes in the rendered icon-only `<Button>` components, leaving screen readers without context.
**Action:** When rendering icon-only buttons from a data array, always ensure the array's `label` property is explicitly passed to the `aria-label` attribute of the button.
