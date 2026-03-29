## 2024-11-20 - Replace native alert with toast notifications
**Learning:** While native browser `alert()` is easy to use for quick feedback, it provides a jarring UX by blocking the main thread and failing to match the app's visual language.
**Action:** Always prefer design-system integrated notification patterns (like `sonner` toasts) over native browser alerts for non-blocking success/error messages.
