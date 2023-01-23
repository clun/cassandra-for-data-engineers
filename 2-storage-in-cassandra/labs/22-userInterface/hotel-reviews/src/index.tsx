import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Substitue Root element of HTML with the APP component
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Rendering
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
