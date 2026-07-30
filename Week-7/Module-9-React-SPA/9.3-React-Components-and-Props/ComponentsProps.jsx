import React from 'react';

// Topic 9.3: React Components and Props
// Child component that receives 'name', 'role', and 'isAvailable' as props.
function UserProfileCard({ name, role, isAvailable = false }) {
  return (
    <div style={styles.card}>
      <h3 style={styles.cardName}>{name}</h3>
      <p style={styles.cardRole}>Role: {role}</p>
      <div style={styles.statusContainer}>
        <span
          style={{
            ...styles.statusDot,
            backgroundColor: isAvailable ? '#2ecc71' : '#e74c3c',
          }}
        />
        <span style={styles.statusText}>
          {isAvailable ? 'Available' : 'Busy'}
        </span>
      </div>
    </div>
  );
}

// Parent Component
export default function ComponentsProps() {
  // Mock data representing database records
  const users = [
    { id: 1, name: 'Alice Smith', role: 'Full Stack Java Developer', isAvailable: true },
    { id: 2, name: 'Bob Johnson', role: 'React Frontend Architect', isAvailable: false },
    { id: 3, name: 'Charlie Brown', role: 'DevOps Engineer' }, // uses default value for availability
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Components & Props Demo</h2>
      <p style={styles.description}>
        Below are multiple instances of the <code>UserProfileCard</code> child component. Each receives dynamic data passed down via React props.
      </p>

      {/* Reusing the child component with different prop inputs */}
      <div style={styles.cardGrid}>
        {users.map((user) => (
          <UserProfileCard
            key={user.id}
            name={user.name}
            role={user.role}
            isAvailable={user.isAvailable}
          />
        ))}
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
    marginBottom: '5px',
  },
  description: {
    color: '#7f8c8d',
    marginBottom: '20px',
  },
  cardGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '15px',
  },
  card: {
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    padding: '15px',
    width: '220px',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
  },
  cardName: {
    margin: '0 0 5px 0',
    color: '#34495e',
  },
  cardRole: {
    margin: '0 0 15px 0',
    color: '#7f8c8d',
    fontSize: '0.9rem',
  },
  statusContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  statusDot: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    display: 'inline-block',
  },
  statusText: {
    fontSize: '0.85rem',
    color: '#555',
  },
};
