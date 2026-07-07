## 2024-07-24 - Replace Blocking Alerts with Toast Notifications & Add Input ARIA Labels
**Learning:** Intrusive blocking browser `alert()` calls degrade micro-UX and standalone inputs without labels fail accessibility checks.
**Action:** Always replace blocking `alert()` calls with modern, non-blocking `toast.success()` notifications and ensure standalone form inputs without explicit associated `<label>` tags (e.g., newsletter email inputs) include an `aria-label` attribute to ensure accessibility for screen readers.
