// No 'use client' directive here - this is a server component
export default function ThemeScript() {
    return (
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              function getInitialTheme() {
                const savedTheme = localStorage.getItem('theme');
                if (savedTheme) {
                  return savedTheme;
                }
                return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
              }
              
              const theme = getInitialTheme();
              document.documentElement.setAttribute('data-theme', theme);
              document.documentElement.classList.add(theme);
            })();
          `,
        }}
      />
    );
  }