'use client';

import { Suspense } from 'react';
import './styles/globals.css';
import Navbar from './components/main/Navbar.client';
import Footer from './components/main/Footer.client';
import { ThemeProvider } from './contexts/ThemeContext.client';
import { AuthProvider } from './contexts/AuthContext.client';
import ThemeScript from './contexts/ThemeScript';


export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
    <head>
      <ThemeScript />
    </head>
    <body suppressHydrationWarning>
      <ThemeProvider>
        <AuthProvider>
          <Suspense fallback={<div>Loading...</div>}>
            <Navbar />
               {children}
           <Footer/>
         </Suspense>
        </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

