import React, { useState, useEffect } from 'react';

// Topic 9.9: Calling API with React
// This component fetches mock data from a public API using useEffect and handles loading/error states.
export default function ApiCalling() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect triggers once on component mount (empty dependency array [])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data.slice(0, 5)); // Take only the first 5 records
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []); // Empty array ensures this runs only once when component is loaded

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>API Data Fetching (useEffect)</h2>
      <p style={styles.text}>Fetching mock users asynchronously from JSONPlaceholder API:</p>

      {/* Conditionally rendering based on loading/error state */}
      {isLoading && <div style={styles.loading}>Loading user profiles...</div>}
      {error && <div style={styles.error}>Error: {error}</div>}

      {!isLoading && !error && (
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Name</th>
              <th style={styles.th}>Email</th>
              <th style={styles.th}>Company</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} style={styles.tr}>
                <td style={styles.td}>{user.name}</td>
                <td style={styles.td}>{user.email}</td>
                <td style={styles.td}>{user.company.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
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
  text: {
    color: '#7f8c8d',
    marginBottom: '15px',
  },
  loading: {
    fontSize: '1.2rem',
    color: '#3498db',
    fontWeight: 'bold',
  },
  error: {
    color: '#e74c3c',
    fontWeight: 'bold',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '10px',
  },
  th: {
    backgroundColor: '#34495e',
    color: '#fff',
    padding: '10px',
    textAlign: 'left',
    border: '1px solid #ddd',
  },
  tr: {
    backgroundColor: '#fff',
    borderBottom: '1px solid #ddd',
  },
  td: {
    padding: '10px',
    border: '1px solid #ddd',
    color: '#333',
  },
};
