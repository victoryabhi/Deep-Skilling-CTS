import React, { useState } from 'react';

// Topic 9.1: Introduction to SPA (Single Page Application)
// This component demonstrates basic client-side routing using local state.
// We swap content dynamically without reloading the browser page.
export default function SpaIntro() {
  // Define state to track the active view/page
  const [activeTab, setActiveTab] = useState('home');

  // Render the appropriate view based on current state
  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div style={styles.viewContainer}>
            <h3 style={styles.viewHeading}>Home View</h3>
            <p>Welcome to the SPA demo! This dashboard swaps components dynamically without reloading the web page.</p>
          </div>
        );
      case 'about':
        return (
          <div style={styles.viewContainer}>
            <h3 style={styles.viewHeading}>About View</h3>
            <p>In traditional web apps, clicking a link requests a new HTML file from the server. In an SPA, JavaScript updates the current page layout dynamically.</p>
          </div>
        );
      case 'contact':
        return (
          <div style={styles.viewContainer}>
            <h3 style={styles.viewHeading}>Contact View</h3>
            <p>Contact Us: deepskilling.support@cognizant.com. Client-side navigation keeps state intact across views!</p>
          </div>
        );
      default:
        return <div>Page not found</div>;
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>SPA Client-Side View Switcher</h2>
      
      {/* Navigation bar representing SPA routing */}
      <nav style={styles.nav}>
        {['home', 'about', 'contact'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              ...styles.navButton,
              backgroundColor: activeTab === tab ? '#0070f3' : '#f0f0f0',
              color: activeTab === tab ? '#fff' : '#333',
            }}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </nav>

      {/* Dynamic Content Panel */}
      <div style={styles.card}>
        {renderContent()}
      </div>
    </div>
  );
}

// Inline styling for student-level clarity and ease of running without complex build tools
const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    color: '#333',
    marginBottom: '15px',
  },
  nav: {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px',
  },
  navButton: {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'all 0.2s ease',
  },
  card: {
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#fafafa',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
  },
  viewContainer: {
    animation: 'fadeIn 0.5s ease',
  },
  viewHeading: {
    color: '#0070f3',
    marginTop: 0,
  }
};
