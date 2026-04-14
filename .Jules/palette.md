## 2024-05-15 - Missing aria-labels on standalone inputs
**Learning:** Found multiple instances of standalone inputs without labels or aria-labels, particularly in newsletter and search forms (e.g., Footer). This fails accessibility for screen readers.
**Action:** Always verify inputs have either an associated `<label>` or an `aria-label` attribute.
