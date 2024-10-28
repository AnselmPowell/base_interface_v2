import { useCallback, useEffect, } from 'react';
import { usePersistedState } from '../utils/usePersistedState';

export function useUIState() {
  // Get initial theme from window.__theme set by ThemeScript
  const [theme, setTheme] = usePersistedState('theme', () => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      return savedTheme ? JSON.parse(savedTheme) : 'light';
    }
    return 'light';
  });

  // Apply theme to document
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Apply theme to HTML tag
      document.documentElement.setAttribute('data-theme', theme);
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(theme);
    }
  }, [theme]); // Only depend on theme changes

  const toggleTheme = useCallback(() => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', JSON.stringify(newTheme));
  }, [theme, setTheme]);

  const [isNavOpen, setIsNavOpen] = usePersistedState('nav_state', false);

  const toggleNav = useCallback(() => {
    setIsNavOpen(prev => !prev);
  }, [setIsNavOpen]);

  return {
    theme,
    setTheme,
    toggleTheme,
    isNavOpen,
    toggleNav,
  };
}