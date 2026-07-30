import React, { useState } from 'react';

// Topic 9.5: React Events
// This component demonstrates different event handlers: onClick, onChange, onSubmit and event.preventDefault().
export default function ReactEvents() {
  const [message, setMessage] = useState('');
  const [clickCount, setClickCount] = useState(0);

  // 1. Handling click events
  const handleButtonClick = (actionType) => {
    setClickCount((prev) => prev + 1);
    alert(`Button clicked! Action Type: ${actionType}`);
  };

  // 2. Handling keyboard inputs
  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  // 3. Handling form submit
  const handleFormSubmit = (event) => {
    event.preventDefault(); // Stop default browser refresh behavior
    alert(`Form submitted successfully with input: "${message}"`);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Event Handling Demo</h2>
      <p style={styles.text}>React events are named using camelCase (e.g. <code>onClick</code>) instead of lowercase.</p>

      {/* Button click handler demo */}
      <div style={styles.card}>
        <h3>1. Click Event (onClick)</h3>
        <button onClick={() => handleButtonClick('Primary')} style={styles.button}>
          Click Me (Primary)
        </button>
        <button onClick={() => handleButtonClick('Secondary')} style={styles.buttonSecondary}>
          Click Me (Secondary)
        </button>
        <p>Times buttons clicked: <strong>{clickCount}</strong></p>
      </div>

      {/* Input change & Form submit handlers demo */}
      <div style={styles.card}>
        <h3>2. Input and Form Events (onChange & onSubmit)</h3>
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="Type something here..."
            value={message}
            onChange={handleInputChange}
            style={styles.input}
          />
          <button type="submit" style={styles.submitBtn}>Submit Form</button>
        </form>
        <p style={styles.liveText}>Live Text Input: <span>{message || '(empty)'}</span></p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    color: '#2c3e50',
  },
  text: {
    color: '#7f8c8d',
  },
  card: {
    padding: '15px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    marginBottom: '15px',
    backgroundColor: '#fff',
  },
  button: {
    padding: '10px 15px',
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginRight: '10px',
  },
  buttonSecondary: {
    padding: '10px 15px',
    backgroundColor: '#95a5a6',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  input: {
    padding: '8px 12px',
    fontSize: '1rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
    marginRight: '10px',
    width: '240px',
  },
  submitBtn: {
    padding: '8px 15px',
    backgroundColor: '#2ecc71',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  liveText: {
    marginTop: '10px',
    fontSize: '0.9rem',
    color: '#e67e22',
  },
};
