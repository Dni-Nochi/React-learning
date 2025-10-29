import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './React/styles';
import App from './React/app/App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
