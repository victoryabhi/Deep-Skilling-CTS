# Topic 9.1: Introduction to SPA (Single Page Application)

## Description
This module introduces the concept of a Single Page Application (SPA). Unlike traditional multi-page websites where every page navigation triggers a full page reload from the server, an SPA loads a single HTML page and dynamically updates the content as the user interacts with the app.

## Key Concepts Covered
- **Traditional Web Application vs. SPA**: Difference in page lifecycle, server load, and user experience.
- **Client-Side Routing**: Navigating between views without triggering page reloads.
- **Dynamic Content Swapping**: Using React state to swap components/views dynamically.

## Code Explanation
In the accompanying `SpaIntro.jsx` file, we demonstrate a basic SPA-like behavior where a navigation bar lets the user switch between "Home", "About", and "Contact" views. The switching is managed completely on the client side using React's `useState` hook.
