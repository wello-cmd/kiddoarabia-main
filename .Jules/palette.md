## 2026-05-17 - Native Form Submission for Footer Newsletter
**Learning:** Standalone inputs wrapped in a div with an 'onClick' button often break expected keyboard patterns (e.g., submitting with the Enter key) and native validation.
**Action:** Always wrap inputs designed for submission (like newsletters, search bars) in a proper `<form>` tag with an `onSubmit` handler, native `required` attributes, and `type="submit"` on the button.
