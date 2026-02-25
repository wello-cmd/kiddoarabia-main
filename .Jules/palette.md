## 2025-02-14 - Fixed Element Overlap
**Learning:** Multiple fixed-position elements (Chat Bot, Scroll Progress, Cookie Consent) were competing for the same bottom-right screen real estate, creating inaccessible click targets.
**Action:** When adding fixed elements, always check `EnhancedLayout.tsx` or similar layout wrappers to ensure no spatial conflicts. Use a "stacking" strategy for bottom-right utilities.
