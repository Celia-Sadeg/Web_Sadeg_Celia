import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Assure-toi que ce fichier existe
import App from './App'; // Vérifie le chemin de App.js

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
