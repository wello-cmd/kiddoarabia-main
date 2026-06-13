## 2024-06-13 - Replace Browser Alerts with Toast Notifications
**Learning:** Browser `alert()` calls block the main thread, provide a poor user experience, and are inaccessible. Modern applications should use non-blocking toast notifications for a smoother, more accessible micro-UX.
**Action:** Replace `alert()` calls with `toast.success()` (or similar) from the existing `sonner` library, ensuring users receive feedback without being interrupted or blocked.
