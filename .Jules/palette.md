
## YYYY-MM-DD - Replacing Native Alerts with Toasts
**Learning:** Intrusive browser alerts disrupt user flow and cause jank. Replacing them with non-blocking toast notifications improves micro-UX and maintains interaction context.
**Action:** Always prefer non-blocking UI components (like sonner toasts) over alert() for success/feedback messages, and ensure buttons in forms use preventDefault() when triggering them.
