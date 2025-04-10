import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import App from './App'; // Ensure the path to App.js is correct
import './index.css'; // Optional: Add global styles if needed

// Get the root DOM element
const container = document.getElementById('root');
const root = createRoot(container); // Create a root

// Render the App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);