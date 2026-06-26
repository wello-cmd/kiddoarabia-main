## 2026-06-26 - Replaced intrusive browser alerts with modern toasts
**Learning:** Native browser `alert()` calls create blocking, intrusive experiences that disrupt user flow and feel unpolished. They also cannot be styled to match the application's design system.
**Action:** Use non-blocking, stylized toast notifications (e.g., `toast.success()` from 'sonner') for all success/info messages like form submissions and newsletter signups to provide immediate, seamless feedback.
