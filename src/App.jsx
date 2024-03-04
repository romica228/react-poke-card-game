import React from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import Dashboard from './pages/dashboard/Dashboard.jsx';
import { darkTheme, GlobalStyles } from './App.styles.js';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;
