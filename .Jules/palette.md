## 2025-05-15 - [Interactive Card Accessibility]
**Learning:** Developers are using shadcn `Card` components with `onClick` handlers but forgetting to add `role="button"`, `tabIndex={0}`, and `onKeyDown` handlers, making them inaccessible to keyboard users.
**Action:** When using `Card` as an interactive element, always explicitly add accessibility attributes (`role="button"`, `tabIndex={0}`, `onKeyDown`) or create a reusable `InteractiveCard` wrapper.
