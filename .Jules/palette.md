## 2024-03-12 - Footer Accessibility Enhancements
**Learning:** Found that social links in the footer, which were rendered using icon-only buttons via a mapped array, were missing `aria-label`s. This pattern is common when mapping over data objects to render icon buttons. Adding a `label` property to the data object and mapping it to `aria-label` solves this and is a reusable pattern for this design system.
**Action:** Always ensure that data arrays driving icon-only UI elements include descriptive labels specifically for accessibility purposes.
