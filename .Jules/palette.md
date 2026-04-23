## 2024-05-24 - Map label properties to aria-label attributes
**Learning:** Icon-only buttons mapped from data arrays (like social links) often lack accessible names because the content is just an SVG. However, if the data objects already contain a `label` property (e.g., `label: "Facebook"`), it is a perfect opportunity to enhance accessibility without additional translation overhead.
**Action:** Always map the descriptive `label` property from the data object directly to the `aria-label` attribute on the resulting button component to ensure screen readers can announce the button correctly.
