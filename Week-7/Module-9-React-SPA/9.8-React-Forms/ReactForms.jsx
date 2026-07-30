import React, { useState } from 'react';

// Topic 9.8: React Forms
// This component demonstrates how to handle a form with multiple inputs using controlled components.
export default function ReactForms() {
  // Store form field values in a single state object
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    track: 'Java FSE',
  });

  // Handle value changes dynamically using computed property names
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value, // dynamically updates fullName, email or track
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!formData.fullName || !formData.email) {
      alert('Please fill out all fields!');
      return;
    }
    alert(`Success!\nStudent: ${formData.fullName}\nEmail: ${formData.email}\nTrack: ${formData.track}`);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Student Registration Form (Controlled Inputs)</h2>
      <p style={styles.text}>React state holds the values of the inputs, acting as the single source of truth.</p>

      <form onSubmit={handleFormSubmit} style={styles.form}>
        <div style={styles.field}>
          <label style={styles.label}>Full Name:</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="e.g. John Doe"
            style={styles.input}
          />
        </div>

        <div style={styles.field}>
          <label style={styles.label}>Email Address:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="e.g. john@cognizant.com"
            style={styles.input}
          />
        </div>

        <div style={styles.field}>
          <label style={styles.label}>Specialization Track:</label>
          <select
            name="track"
            value={formData.track}
            onChange={handleInputChange}
            style={styles.input}
          >
            <option value="Java FSE">Java FSE (Full Stack)</option>
            <option value="React Frontend">React Frontend</option>
            <option value="AWS Cloud Native">AWS Cloud Native</option>
          </select>
        </div>

        <button type="submit" style={styles.submitBtn}>Register Student</button>
      </form>
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
    marginBottom: '20px',
  },
  form: {
    border: '1px solid #ddd',
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: '#fff',
    maxWidth: '400px',
  },
  field: {
    marginBottom: '15px',
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
  },
  label: {
    fontWeight: 'bold',
    color: '#34495e',
  },
  input: {
    padding: '8px 12px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '1rem',
  },
  submitBtn: {
    padding: '10px 15px',
    backgroundColor: '#16a085',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '100%',
    fontWeight: 'bold',
    fontSize: '1rem',
  },
};
