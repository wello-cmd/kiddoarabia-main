## 2024-03-14 - Icon-only buttons accessibility pattern
**Learning:** Found an accessibility issue pattern where icon-only buttons (like search or mobile menu toggles) were missing `aria-label`s and state tracking `aria-expanded`. This is a common pattern in the app's headers.
**Action:** Ensure all icon-only buttons include `aria-label` and toggle buttons always use `aria-expanded` to manage accessibility state.
