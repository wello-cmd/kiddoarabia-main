## 2025-05-15 - Testing with SoundContext
**Learning:** The `Button` component (and potentially others) is tightly coupled with `SoundContext` via `useSound` hook. Any unit test rendering a `Button` must either wrap it in `SoundProvider` or mock `useSound` (e.g., `vi.mock('@/contexts/SoundContext', ...)`).
**Action:** When writing tests for UI components in this repo, always check for `Button` usage and set up the `SoundContext` mock in `beforeEach` or at the top of the test file.
