
// src/app/context/ThemeScript.js
export default function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            function getInitialTheme() {
              try {
                const storedTheme = JSON.parse(localStorage.getItem('theme'));
                if (storedTheme) {
                  return storedTheme;
                }
                if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                  return 'dark';
                }
              } catch {
                return 'light';
              }
              return 'light';
            }
            
            const theme = getInitialTheme();
            
            // Set theme immediately to prevent flash
            document.documentElement.dataset.theme = theme;
            document.documentElement.classList.remove('light', 'dark');
            document.documentElement.classList.add(theme);

            // Make theme available globally before React hydrates
            window.__theme = theme;
          })();
        `,
      }}
    />
  );
}
