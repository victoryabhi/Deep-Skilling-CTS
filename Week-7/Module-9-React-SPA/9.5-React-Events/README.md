# Topic 9.5: React Events

## Description
This module covers event handling in React. React handles events similarly to HTML elements but uses camelCase naming (e.g., `onClick`, `onChange`, `onSubmit`) and passes JavaScript functions directly as handlers instead of strings.

## Key Concepts Covered
- **Synthetic Events**: React wraps browser events inside a cross-browser `SyntheticEvent` wrapper.
- **Form Submission Prevention**: Using `event.preventDefault()` to stop automatic page reload.
- **Passing Arguments to Handlers**: Using arrow functions inside listeners to send custom arguments.
- **Handling Input Changes**: capturing keystrokes via `event.target.value`.

## Code Explanation
The accompanying `ReactEvents.jsx` displays interactive event boxes: a click counter that handles click triggers, a text box that logs input keypresses in real-time, and a form demo showing how page-refresh is prevented.
