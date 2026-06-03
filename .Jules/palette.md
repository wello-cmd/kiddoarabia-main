
## 2024-05-24 - Modernize UX and Accessibility in Footer
**Learning:** Intrusive browser alerts degrade micro-UX during form submissions, and standalone inputs/icon-only links consistently lack associated ARIA labels, creating accessibility barriers for screen readers.
**Action:** Replaced blocking `alert()` calls with non-blocking `toast.success()` notifications for immediate, pleasant feedback, and added explicit `aria-label`s to inputs without `<label>` tags and icon-only buttons.
