import React, { useEffect, useState } from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import Dashboard from './pages/dashboard/Dashboard.jsx';
import { darkTheme, GlobalStyles, lightTheme } from './App.styles.js';

function App() {
  const [theme, setTheme] = useState(false);

  // ....
  const handleDataFromChild = (value) => {
    setTheme(value);
  };

  // ...
  useEffect(() => {
    const savedTheme = localStorage.getItem('Theme');
    const prefersDark = window.matchMedia
      && window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme && ['dark', 'light'].includes(savedTheme)) {
      setTheme(savedTheme);
      localStorage.setItem('Theme', savedTheme);
    } else if (prefersDark) {
      setTheme('dark');
      localStorage.setItem('Theme', 'dark');
    }
  }, []);

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Dashboard sendData={handleDataFromChild} />
    </ThemeProvider>
  );
}

export default App;
