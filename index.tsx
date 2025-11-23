import React from 'react';
import { createRoot } from 'react-dom/client';
import RootLayout from './src/app/layout';
import HomePage from './src/app/page';
import DashboardPage from './src/app/dashboard/page';
import AboutPage from './src/app/about/page';
import DonatePage from './src/app/donate/page';
import ContactPage from './src/app/contact/page';
import { RouterProvider, useRouter } from './src/router';

const PageContent = () => {
  const { path } = useRouter();
  
  // Simple Client-Side Routing
  if (path === '/dashboard') return <DashboardPage />;
  if (path === '/about') return <AboutPage />;
  if (path === '/donate') return <DonatePage />;
  if (path === '/contact') return <ContactPage />;
  
  return <HomePage />;
};

const App = () => {
  return (
    <RouterProvider>
      <RootLayout>
        <PageContent />
      </RootLayout>
    </RouterProvider>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);