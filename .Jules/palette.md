## 2025-02-18 - Testing Button Components
**Learning:** `Button` component tightly couples with `SoundContext`. Unit tests involving `Button` must mock `useSound` or wrap the component in `SoundProvider`.
**Action:** When testing components that use `Button`, always mock `useSound` via `@/contexts/SoundContext`.
