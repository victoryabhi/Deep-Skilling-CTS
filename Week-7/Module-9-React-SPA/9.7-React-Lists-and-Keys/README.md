# Topic 9.7: React Lists and Keys

## Description
This module demonstrates rendering lists of items in React using JavaScript's built-in array methods (like `.map()`) and explains the critical importance of utilizing unique `key` props.

## Key Concepts Covered
- **List Transformation**: Mapping arrays of JavaScript objects into JSX collections.
- **The Key Prop**: Why React requires unique keys to track additions, deletions, and sorting changes efficiently.
- **Dynamic Mutation**: Appending or deleting elements dynamically from list state.
- **Avoid Using Array Indices**: Why index keys can cause performance or state rendering issues.

## Code Explanation
The accompanying `ListsKeys.jsx` implements a simple Task Tracker. Users can input new items and remove them. React tracks the list array inside the state, and every list item is rendered using its unique ID as a key.
