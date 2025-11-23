import React, { createContext, useContext, useState, useEffect } from 'react';

const RouterContext = createContext<{ 
  path: string; 
  navigate: (path: string) => void 
}>({ 
  path: '/', 
  navigate: () => {} 
});

export const useRouter = () => useContext(RouterContext);

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onPopState = () => setCurrentPath(window.location.pathname);
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const navigate = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
  };

  return (
    <RouterContext.Provider value={{ path: currentPath, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};