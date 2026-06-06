## 2024-06-06 - Initial
## 2024-06-06 - Replace Browser Alerts with Toast Notifications
**Learning:** Hardcoded browser alerts degrade user experience by blocking the main thread and presenting an unstyled UI that breaks the design system.
**Action:** Replace `alert()` calls with modern, non-blocking `toast.success()` notifications from the existing `sonner` library, offering detailed descriptions instead of a single string.
