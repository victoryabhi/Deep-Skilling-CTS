import React from 'react';

// Topic 9.4: React ES6 and JSX
// Demonstrates modern JavaScript ES6 features (destructuring, arrow functions, template literals, mapping arrays) in JSX.
export default function Es6Jsx() {
  // Course configuration object for demonstrating destructuring
  const courseDetails = {
    title: 'Cognizant Java FSE (Full Stack Engineer)',
    track: 'Java Cloud Native Track',
    durationWeeks: 12,
    mentor: 'Dr. John Doe',
  };

  // 1. Destructuring: Unpacking details object
  const { title, track, durationWeeks, mentor } = courseDetails;

  // Mock list of modules
  const modules = [
    { code: 'M1', name: 'Java Programming Foundations', hours: 40 },
    { code: 'M2', name: 'Spring Boot Microservices', hours: 60 },
    { code: 'M3', name: 'React SPA Frontend', hours: 30 },
  ];

  // 2. Arrow Function: Calculating total training hours
  const calculateTotalHours = (items) => {
    return items.reduce((acc, curr) => acc + curr.hours, 0);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>ES6 Features & JSX Expressions</h2>
      
      {/* 3. Template Literals & Destructured variables inside JSX */}
      <div style={styles.infoBox}>
        <p><strong>Course:</strong> {title}</p>
        <p><strong>Learning Track:</strong> {`${track} (12-Week Specialization)`}</p>
        <p><strong>Instructor:</strong> {mentor}</p>
        <p><strong>Total Duration:</strong> {durationWeeks} Weeks</p>
      </div>

      <h3 style={styles.subHeading}>Curriculum Modules</h3>
      <ul style={styles.list}>
        {/* Array map rendering */}
        {modules.map(({ code, name, hours }) => (
          <li key={code} style={styles.listItem}>
            <strong>{code}:</strong> {name} ({hours} hours)
          </li>
        ))}
      </ul>

      {/* Invoking arrow function inside JSX expression */}
      <div style={styles.footerSummary}>
        <h4>Total Hours: {calculateTotalHours(modules)} Hours of Instructor-Led Training</h4>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Courier New, monospace',
    backgroundColor: '#1e1e1e',
    color: '#00ff00',
    borderRadius: '10px',
  },
  heading: {
    color: '#39ff14',
    borderBottom: '1px solid #39ff14',
    paddingBottom: '10px',
  },
  subHeading: {
    color: '#00ffff',
  },
  infoBox: {
    backgroundColor: '#2e2e2e',
    padding: '15px',
    borderRadius: '5px',
    margin: '15px 0',
    borderLeft: '4px solid #00ffff',
  },
  list: {
    paddingLeft: '20px',
  },
  listItem: {
    marginBottom: '8px',
    color: '#e0e0e0',
  },
  footerSummary: {
    marginTop: '20px',
    backgroundColor: '#333',
    padding: '10px',
    textAlign: 'center',
    borderRadius: '5px',
    color: '#ffff00',
  },
};
