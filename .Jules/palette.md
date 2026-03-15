## 2024-03-24 - Accessibility Enhancements for Icon-Only Buttons
**Learning:** Icon-only buttons (like chat triggers, menu toggles, and search icons) consistently lack aria-labels across the application, which makes them inaccessible to screen readers. Specifically, togglable icon buttons must also include an `aria-expanded` state.
**Action:** Always verify that every `<Button size="icon">` without text children includes an `aria-label`. If the button toggles a UI element (like a menu or chat window), include the `aria-expanded={state}` attribute as well.
