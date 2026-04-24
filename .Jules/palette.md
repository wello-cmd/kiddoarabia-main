## 2026-04-24 - Missing ARIA Labels on Interactive Elements
**Learning:** Standalone inputs (like newsletter subscriptions) and icon-only buttons (like social media links) frequently lack explicit associated labels across the application, impacting screen reader accessibility.
**Action:** When rendering standalone inputs or mapping over icon-only buttons, ensure an `aria-label` attribute is explicitly provided using placeholder text or mapped data labels.
