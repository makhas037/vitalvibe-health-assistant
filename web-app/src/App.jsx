import React, { useState, useEffect } from 'react';
import MainLayout from './layouts/MainLayout';
import './App.css';

// This is the one and only App component for the entire file.
function App() {
  const [theme, setTheme] = useState('dark'); 

  useEffect(() => {
    const root = document.documentElement;
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    const applyTheme = (newTheme) => {
      if (newTheme === 'system') {
        root.setAttribute('data-theme', systemPrefersDark.matches ? 'dark' : 'light');
      } else {
        root.setAttribute('data-theme', newTheme);
      }
    };

    applyTheme(theme);

    const handleSystemThemeChange = (e) => {
      if (theme === 'system') {
        root.setAttribute('data-theme', e.matches ? 'dark' : 'light');
      }
    };

    systemPrefersDark.addEventListener('change', handleSystemThemeChange);

    return () => {
      systemPrefersDark.removeEventListener('change', handleSystemThemeChange);
    };
  }, [theme]);

  return (
    <div className="app-container">
      <MainLayout theme={theme} setTheme={setTheme} />
    </div>
  );
}

export default App;