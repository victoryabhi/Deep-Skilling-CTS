# Topic 9.9: Calling API with React

## Description
This module demonstrates how to connect a React application to a remote backend API. It focuses on making HTTP requests using the browser's native `fetch` API inside React's `useEffect` hook.

## Key Concepts Covered
- **The `useEffect` Hook**: Performing side effects (like data fetching) inside functional components.
- **Handling Asynchronous Operations**: Managing states for `loading`, `error`, and `data` storage.
- **Dependency Arrays**: Understanding how the dependency array prevents infinite fetch loops.
- **Rendering Fetched Lists**: Safely mapping and rendering dynamic remote data.

## Code Explanation
The accompanying `ApiCalling.jsx` fetches mock user profiles from JSONPlaceholder (`https://jsonplaceholder.typicode.com/users`) when the component mounts. It handles loading messages, errors, and rendering the fetched list of users beautifully.
