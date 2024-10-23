'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/app/contexts/ThemeContext.client';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md hover:bg-tertiary/20 transition-colors duration-200
                flex items-center justify-center gap-2"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <>
          <Moon className="h-5 w-5 text-secondary" />
          <span className="text-sm text-secondary">Dark Mode</span>
        </>
      ) : (
        <>
          <Sun className="h-5 w-5 text-secondary" />
          <span className="text-sm text-secondary">Light Mode</span>
        </>
      )}
    </button>
  );
}