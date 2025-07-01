import React, { createContext, useContext, useState, useEffect } from 'react';

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : false;
  });

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.style.setProperty('--toast-bg', '#1e293b');
      document.documentElement.style.setProperty('--toast-color', '#f1f5f9');
      document.documentElement.style.setProperty('--toast-border', '#334155');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.setProperty('--toast-bg', '#ffffff');
      document.documentElement.style.setProperty('--toast-color', '#1f2937');
      document.documentElement.style.setProperty('--toast-border', '#e5e7eb');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};