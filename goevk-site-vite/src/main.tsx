import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/index.css';

import { ThemeProvider } from './context/ThemeContext';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
