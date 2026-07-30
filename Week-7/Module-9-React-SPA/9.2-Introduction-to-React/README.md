# Topic 9.2: Introduction to React

## Description
This module introduces React, a popular JavaScript library created by Facebook for building user interfaces. It focuses on the Virtual DOM, declarative UI patterns, and the foundational concept of React State.

## Key Concepts Covered
- **Declarative vs. Imperative**: React updates the UI automatically when state changes (declarative), rather than manipulating the DOM manually (imperative).
- **Virtual DOM**: React keeps a lightweight representation of the real DOM in memory and syncs them efficiently.
- **State Management**: Using the `useState` hook to store and update dynamic data in a component.

## Code Explanation
The accompanying `ReactIntro.jsx` contains a Counter application. Clicking buttons updates the `count` state. React automatically computes the difference using the Virtual DOM and updates only the necessary nodes in the real DOM.
