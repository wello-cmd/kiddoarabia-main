## PALETTE'S JOURNAL - CRITICAL LEARNINGS ONLY

## 2024-05-22 - Button Component Testing Requirement
**Learning:** The `Button` component uses `useSound` hook which throws an error if not wrapped in `SoundProvider`. This causes unit tests to fail if they render `Button` without the provider context.
**Action:** When testing components that use `Button`, always wrap them in `SoundProvider` or mock `useSound`.

## 2024-05-22 - Form Accessibility Pattern
**Learning:** Forms in this codebase may lack programmatic association between labels and inputs (`htmlFor` + `id`), and may rely on `onClick` handlers instead of native form submission.
**Action:** Always check for `htmlFor`/`id` pairs and prefer `onSubmit` handlers with `type="submit"` buttons for better keyboard support and screen reader experience.
