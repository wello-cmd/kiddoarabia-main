## 2026-02-26 - Accessible Icon-Only Social Buttons
**Learning:** Icon-only buttons used for social links were missing accessible names, making them inaccessible to screen readers. The `socialLinks` array already contained a `label` property that was unused.
**Action:** Always verify that icon-only buttons have an `aria-label`. If the data source provides a label, ensure it is passed to the component.
