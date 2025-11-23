import React from 'react';

// In a real Next.js app, this would export metadata. 
// Since we are simulating it in a client-side runner, we handle the layout structure here.

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* 
        In a real Next.js app, we would use <html> and <body> here.
        For this simulation inside an existing DOM, we use divs.
      */}
      {children}
    </div>
  );
}