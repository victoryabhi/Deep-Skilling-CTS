import React, { useState } from 'react';

// Topic 9.7: React Lists and Keys
// Demonstrates array map rendering, state array modifications, and assigning unique keys.
export default function ListsKeys() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Learn Spring Boot basics' },
    { id: 2, text: 'Build React components and pass props' },
    { id: 3, text: 'Understand Virtual DOM and keys' },
  ]);
  const [newTaskInput, setNewTaskInput] = useState('');

  // Add item to array state
  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTaskInput.trim()) return;

    const newTask = {
      id: Date.now(), // Generate a unique identifier
      text: newTaskInput,
    };

    setTasks([...tasks, newTask]);
    setNewTaskInput(''); // Reset text field
  };

  // Remove item from array state by ID
  const handleRemoveTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Task Tracker (Lists & Keys)</h2>
      <p style={styles.text}>React utilizes the unique <code>key</code> prop to optimize rendering when list items change.</p>

      {/* Task input form */}
      <form onSubmit={handleAddTask} style={styles.form}>
        <input
          type="text"
          placeholder="Enter a new training task..."
          value={newTaskInput}
          onChange={(e) => setNewTaskInput(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.addBtn}>Add Task</button>
      </form>

      {/* Dynamic List Rendering */}
      <ul style={styles.list}>
        {tasks.map((task) => (
          // Assigning unique ID as key
          <li key={task.id} style={styles.listItem}>
            <span>{task.text}</span>
            <button onClick={() => handleRemoveTask(task.id)} style={styles.deleteBtn}>
              Delete
            </button>
          </li>
        ))}
      </ul>
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
  form: {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px',
  },
  input: {
    flex: 1,
    padding: '8px 12px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  addBtn: {
    padding: '8px 16px',
    backgroundColor: '#0070f3',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    borderBottom: '1px solid #eee',
    backgroundColor: '#fff',
    borderRadius: '4px',
    marginBottom: '8px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
  },
  deleteBtn: {
    padding: '4px 8px',
    backgroundColor: '#ff4d4f',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};
