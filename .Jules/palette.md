## 2024-05-22 - Interactive Card Accessibility
**Learning:** Common pattern of `div` cards with `onClick` often leaves keyboard users stranded. Adding `role="button"`, `tabIndex={0}`, and `onKeyDown` is a critical patch for these existing patterns without major refactors.
**Action:** Always verify keyboard accessibility on clickable cards and use semantic `<button>` or `<a>` tags when building new components.
