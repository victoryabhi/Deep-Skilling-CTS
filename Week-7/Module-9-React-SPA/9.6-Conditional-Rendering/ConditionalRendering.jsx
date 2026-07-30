import React, { useState } from 'react';

// Topic 9.6: Conditional Rendering
// This component demonstrates: 1. Ternary Operator, 2. Logical && operator, 3. Conditional rendering with helper variables.
export default function ConditionalRendering() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSecretMessage, setShowSecretMessage] = useState(false);

  // Toggle login state
  const handleAuthToggle = () => {
    setIsLoggedIn(!isLoggedIn);
    // Reset secret message state when logging out
    if (isLoggedIn) {
      setShowSecretMessage(false);
    }
  };

  // Helper variable to hold conditional content (If-Else style)
  let authStatusText;
  if (isLoggedIn) {
    authStatusText = <p style={styles.success}>✔ You are authenticated as an Administrator.</p>;
  } else {
    authStatusText = <p style={styles.error}>❌ Access Denied. Please log in to proceed.</p>;
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Conditional Rendering</h2>
      
      {/* 1. Ternary operator rendering login/logout button */}
      <div style={styles.panel}>
        <h3>Status Panel</h3>
        {authStatusText}
        <button onClick={handleAuthToggle} style={isLoggedIn ? styles.logoutBtn : styles.loginBtn}>
          {isLoggedIn ? 'Log Out' : 'Log In'}
        </button>
      </div>

      {/* 2. Logical AND (&&) rendering conditional settings dashboard */}
      {isLoggedIn && (
        <div style={styles.dashboard}>
          <h3>Admin Control Center</h3>
          <p>This section is only visible when <code>isLoggedIn</code> is true.</p>
          
          <button 
            onClick={() => setShowSecretMessage(!showSecretMessage)} 
            style={styles.toggleBtn}
          >
            {showSecretMessage ? 'Hide' : 'Reveal'} Security Key
          </button>

          {/* Nested conditional rendering */}
          {showSecretMessage && (
            <div style={styles.secretBox}>
              <strong>Secret Key:</strong> <code>COGNIZANT-FSE-2026</code>
            </div>
          )}
        </div>
      )}
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
  panel: {
    padding: '15px',
    border: '1px solid #ddd',
    borderRadius: '6px',
    backgroundColor: '#f9f9f9',
    marginBottom: '20px',
  },
  success: {
    color: '#2ecc71',
    fontWeight: 'bold',
  },
  error: {
    color: '#e74c3c',
    fontWeight: 'bold',
  },
  loginBtn: {
    padding: '8px 16px',
    backgroundColor: '#3498db',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  logoutBtn: {
    padding: '8px 16px',
    backgroundColor: '#e67e22',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  dashboard: {
    padding: '20px',
    border: '1px dashed #2ecc71',
    borderRadius: '6px',
    backgroundColor: '#f0fdf4',
  },
  toggleBtn: {
    padding: '8px 12px',
    backgroundColor: '#8e44ad',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '10px',
  },
  secretBox: {
    marginTop: '15px',
    padding: '10px',
    backgroundColor: '#34495e',
    color: '#fff',
    borderRadius: '4px',
  },
};
