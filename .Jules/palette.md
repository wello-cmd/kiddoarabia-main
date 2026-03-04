## 2026-03-04 - Icon-only Buttons Missing ARIA Labels in Loops
**Learning:** When mapping over data arrays to render icon-only `Button` components (like the `socialLinks` in the `Footer`), the generated buttons often lack `aria-label` attributes, making them inaccessible to screen readers.
**Action:** Always verify that mapped icon-only buttons receive a descriptive `aria-label`, extracting it from the mapped data object (e.g., `social.label`).
