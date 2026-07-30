import React, { useState } from 'react';

// Import topic components
import SpaIntro from '../9.1-Introduction-to-SPA/SpaIntro.jsx';
import ReactIntro from '../9.2-Introduction-to-React/ReactIntro.jsx';
import ComponentsProps from '../9.3-React-Components-and-Props/ComponentsProps.jsx';
import Es6Jsx from '../9.4-React-ES6-and-JSX/Es6Jsx.jsx';
import ReactEvents from '../9.5-React-Events/ReactEvents.jsx';
import ConditionalRendering from '../9.6-Conditional-Rendering/ConditionalRendering.jsx';
import ListsKeys from '../9.7-React-Lists-and-Keys/ListsKeys.jsx';
import ReactForms from '../9.8-React-Forms/ReactForms.jsx';
import ApiCalling from '../9.9-Calling-API-with-React/ApiCalling.jsx';

// Data mapping for topics to render descriptions dynamically
const TOPICS = [
  {
    id: '9.1',
    title: '9.1 Introduction to SPA',
    component: <SpaIntro />,
    readme: `
      <h3>Topic 9.1: Single Page Applications (SPA)</h3>
      <p>An SPA loads a single HTML page and dynamically updates the view as the user interacts with the app, without requesting full pages from the server.</p>
      <ul>
        <li><strong>Client-Side Routing:</strong> Content transitions happen without a web page reload.</li>
        <li><strong>User Experience:</strong> Much faster, resembling a native app.</li>
        <li><strong>State Persistence:</strong> Component state is retained during view transitions.</li>
      </ul>
    `
  },
  {
    id: '9.2',
    title: '9.2 Introduction to React',
    component: <ReactIntro />,
    readme: `
      <h3>Topic 9.2: Introduction to React</h3>
      <p>React is a component-based frontend library focused on efficiency, using the virtual DOM.</p>
      <ul>
        <li><strong>Declarative UI:</strong> You define the target UI state; React takes care of matching the view.</li>
        <li><strong>Virtual DOM:</strong> Efficiently computes differences and updates only changed elements.</li>
        <li><strong>Component State:</strong> Local state stores values that prompt UI updates when modified.</li>
      </ul>
    `
  },
  {
    id: '9.3',
    title: '9.3 Components & Props',
    component: <ComponentsProps />,
    readme: `
      <h3>Topic 9.3: Components and Props</h3>
      <p>Components are the primary building blocks of React applications, while props enable custom data flows.</p>
      <ul>
        <li><strong>Reusability:</strong> Create a single template component and reuse it across layouts.</li>
        <li><strong>Props (Properties):</strong> Immutable key-value pairs passed from parent to child components.</li>
        <li><strong>Default Props:</strong> Define fallback values for properties when none are supplied.</li>
      </ul>
    `
  },
  {
    id: '9.4',
    title: '9.4 ES6 & JSX',
    component: <Es6Jsx />,
    readme: `
      <h3>Topic 9.4: React ES6 and JSX</h3>
      <p>JSX is a syntax extension that lets you write HTML-like markup inside JavaScript files. It leverages ES6 syntax heavily.</p>
      <ul>
        <li><strong>Arrow Functions:</strong> Shorthand method expressions.</li>
        <li><strong>Object Destructuring:</strong> Unpacks attributes into distinct variables.</li>
        <li><strong>JSX Expressions:</strong> Wrap JS calculations, maps or functions inside <code>{}</code> braces.</li>
      </ul>
    `
  },
  {
    id: '9.5',
    title: '9.5 React Events',
    component: <ReactEvents />,
    readme: `
      <h3>Topic 9.5: React Events</h3>
      <p>React uses synthetic event wrappers to handle standard HTML events in a uniform, cross-browser way.</p>
      <ul>
        <li><strong>CamelCase Naming:</strong> Events are called <code>onClick</code>, <code>onSubmit</code> instead of lowercase.</li>
        <li><strong>Prevent Default:</strong> Use <code>e.preventDefault()</code> to handle forms manually.</li>
        <li><strong>Event Arguments:</strong> Pass parameters to handlers using inline arrow functions.</li>
      </ul>
    `
  },
  {
    id: '9.6',
    title: '9.6 Conditional Rendering',
    component: <ConditionalRendering />,
    readme: `
      <h3>Topic 9.6: Conditional Rendering</h3>
      <p>Control what UI shows based on runtime state variables.</p>
      <ul>
        <li><strong>Ternary Operator:</strong> <code>condition ? trueJSX : falseJSX</code>.</li>
        <li><strong>Short-circuit && Operator:</strong> Renders trailing JSX ONLY when first value evaluates to true.</li>
        <li><strong>Variable Checks:</strong> Compute JSX inside variables before return rendering.</li>
      </ul>
    `
  },
  {
    id: '9.7',
    title: '9.7 Lists & Keys',
    component: <ListsKeys />,
    readme: `
      <h3>Topic 9.7: Lists and Keys</h3>
      <p>Transform arrays of items into custom collections of HTML/React elements.</p>
      <ul>
        <li><strong>Array Mapping:</strong> Use <code>array.map()</code> inside JSX.</li>
        <li><strong>Keys:</strong> Give elements a stable identity so React knows which items changed, added, or removed.</li>
        <li><strong>State Mutations:</strong> Appending and filtering arrays to update list items.</li>
      </ul>
    `
  },
  {
    id: '9.8',
    title: '9.8 React Forms',
    component: <ReactForms />,
    readme: `
      <h3>Topic 9.8: Controlled Forms</h3>
      <p>Manage form fields values by syncing them with the React state object.</p>
      <ul>
        <li><strong>Single Source of Truth:</strong> Input values reflect the React state variable directly.</li>
        <li><strong>Multi-field Handlers:</strong> Update field states dynamically with <code>[name]: value</code>.</li>
        <li><strong>Form Validation:</strong> Intercept submissions to check field criteria.</li>
      </ul>
    `
  },
  {
    id: '9.9',
    title: '9.9 Calling API',
    component: <ApiCalling />,
    readme: `
      <h3>Topic 9.9: Calling APIs with React</h3>
      <p>Query external endpoints asynchronously using standard network tools inside React lifecycle hooks.</p>
      <ul>
        <li><strong>useEffect Hook:</strong> Perfect for handling side-effects like fetching data on mount.</li>
        <li><strong>State Checks:</strong> Control display using loading states, error catches, and success data.</li>
        <li><strong>Dependencies Array:</strong> Keep empty <code>[]</code> to run the fetch call exactly once.</li>
      </ul>
    `
  }
];

function App() {
  const [selectedTopicId, setSelectedTopicId] = useState(null);

  // Find the selected topic object
  const currentTopic = TOPICS.find((t) => t.id === selectedTopicId);

  return (
    <div className="dashboard-layout">
      {/* Sidebar Navigation */}
      <aside className="sidebar">
        <h1 className="sidebar-title">Cognizant Week-7</h1>
        <p className="sidebar-subtitle">Java FSE - React SPA</p>
        
        <ul className="nav-list">
          <li className="nav-item">
            <button
              onClick={() => setSelectedTopicId(null)}
              className={`nav-link ${selectedTopicId === null ? 'active' : ''}`}
            >
              🏠 Dashboard Home
            </button>
          </li>
          
          {TOPICS.map((topic) => (
            <li key={topic.id} className="nav-item">
              <button
                onClick={() => setSelectedTopicId(topic.id)}
                className={`nav-link ${selectedTopicId === topic.id ? 'active' : ''}`}
              >
                📘 {topic.title}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content Area */}
      <main className="main-content">
        {selectedTopicId === null ? (
          /* Landing/Dashboard Welcome View */
          <div>
            <div className="intro-panel">
              <span className="intro-badge">Cognizant Deep Skilling</span>
              <h1>Module 9: React Single Page Applications</h1>
              <p style={{ marginTop: '10px', fontSize: '1.1rem', color: '#cbd5e1' }}>
                Welcome to the Java FSE Week-7 training modules repository. This dashboard showcases 9 distinct subtopics demonstrating fundamental React 18 capabilities, client-side SPA routing, events, hooks, and API integration.
              </p>
            </div>

            <h2 className="topic-section-title">Topic List Overview</h2>
            <div style={styles.dashboardGrid}>
              {TOPICS.map((topic) => (
                <div 
                  key={topic.id} 
                  style={styles.summaryCard} 
                  onClick={() => setSelectedTopicId(topic.id)}
                >
                  <h3 style={styles.cardHeader}>{topic.title}</h3>
                  <p style={styles.cardDesc}>Click to view interactive demo, code notes, and architecture guidelines.</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Active Topic View with Demo Component and Documentation */
          <div>
            <div style={styles.headerRow}>
              <h2 className="topic-section-title">{currentTopic.title}</h2>
              <button onClick={() => setSelectedTopicId(null)} style={styles.backBtn}>
                ← Back to Home
              </button>
            </div>

            {/* Live Interactive Demo component */}
            <div className="content-card">
              <h4 style={styles.demoTitle}>🟢 Live Interactive Component Demo</h4>
              <div style={styles.componentWrapper}>
                {currentTopic.component}
              </div>
            </div>

            {/* Embedded Documentation from README */}
            <div className="content-card">
              <h4 style={styles.docTitle}>📖 Core Concept & Explanation</h4>
              <div 
                className="readme-viewer" 
                dangerouslySetInnerHTML={{ __html: currentTopic.readme }} 
              />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

const styles = {
  headerRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  backBtn: {
    padding: '8px 16px',
    backgroundColor: '#3b82f6',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: '600',
  },
  dashboardGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '20px',
  },
  summaryCard: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '12px',
    border: '1px solid #e2e8f0',
    cursor: 'pointer',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
  },
  cardHeader: {
    color: '#0f172a',
    fontSize: '1.1rem',
    marginBottom: '8px',
  },
  cardDesc: {
    color: '#64748b',
    fontSize: '0.9rem',
    lineHeight: '1.4',
  },
  demoTitle: {
    color: '#64748b',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    fontSize: '0.8rem',
    marginBottom: '15px',
  },
  docTitle: {
    color: '#64748b',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    fontSize: '0.8rem',
    marginBottom: '10px',
  },
  componentWrapper: {
    border: '1px solid #f1f5f9',
    borderRadius: '8px',
    padding: '10px',
    backgroundColor: '#fff',
  }
};

export default App;
