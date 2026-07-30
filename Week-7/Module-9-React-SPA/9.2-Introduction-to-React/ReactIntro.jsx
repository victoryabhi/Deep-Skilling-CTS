import React, { useState } from 'react';

// Topic 9.2: Introduction to React
// This component demonstrates React's core features: useState hook, State rendering, and Virtual DOM updates.
export default function ReactIntro() {
  // Declare a state variable 'count' initialized to 0
  const [count, setCount] = useState(0);

  // Event handler functions for increments and decrements
  const increment = () => {
    setCount(count + 1); // Triggers re-render automatically
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>React Interactive Counter</h2>
      <p style={styles.subtext}>
        React uses a <strong>Virtual DOM</strong>. When you click these buttons, only the count text updates in the real DOM, making it fast and efficient.
      </p>

      {/* Displaying state */}
      <div style={styles.counterBox}>
        <span style={styles.counterLabel}>Current Value:</span>
        <h1 style={styles.countText}>{count}</h1>
      </div>

      {/* UI Controls triggering state changes */}
      <div style={styles.buttonGroup}>
        <button onClick={decrement} style={styles.btnDanger}>Decrement</button>
        <button onClick={reset} style={styles.btnSecondary}>Reset</button>
        <button onClick={increment} style={styles.btnSuccess}>Increment</button>
      </div>
    </div>
  );
}

// Simple styling object
const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    textAlign: 'center',
  },
  heading: {
    color: '#2c3e50',
  },
  subtext: {
    color: '#7f8c8d',
    maxWidth: '500px',
    margin: '10px auto 20px auto',
    lineHeight: '1.5',
  },
  counterBox: {
    background: '#ecf0f1',
    padding: '20px',
    borderRadius: '10px',
    display: 'inline-block',
    minWidth: '200px',
    marginBottom: '20px',
  },
  counterLabel: {
    color: '#95a5a6',
    fontSize: '0.9rem',
    textTransform: 'uppercase',
  },
  countText: {
    fontSize: '3rem',
    margin: '10px 0 0 0',
    color: '#2980b9',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
  },
  btnSuccess: {
    padding: '10px 20px',
    backgroundColor: '#2ecc71',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  btnDanger: {
    padding: '10px 20px',
    backgroundColor: '#e74c3c',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  btnSecondary: {
    padding: '10px 20px',
    backgroundColor: '#95a5a6',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
};
