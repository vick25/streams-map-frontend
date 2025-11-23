import React from 'react';

interface CylinderGraphProps {
  current: number;
  max: number;
}

export const CylinderGraph: React.FC<CylinderGraphProps> = ({ current, max }) => {
  const percentage = Math.min(100, Math.max(0, (current / max) * 100));
  
  // Determine color based on percentage
  const getColor = (pct: number) => {
    if (pct < 25) return 'bg-red-500';
    if (pct < 50) return 'bg-yellow-500';
    return 'bg-blue-500';
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-16 h-40 bg-gray-100 border-2 border-gray-300 rounded-full overflow-hidden shadow-inner mb-2">
        {/* Graduations */}
        <div className="absolute inset-0 z-20 flex flex-col justify-between py-4 pointer-events-none opacity-30">
           {[...Array(5)].map((_, i) => (
             <div key={i} className="w-full h-px bg-gray-600"></div>
           ))}
        </div>
        
        {/* Liquid */}
        <div 
          className={`absolute bottom-0 left-0 w-full transition-all duration-1000 ease-out z-10 ${getColor(percentage)} opacity-80`}
          style={{ height: `${percentage}%` }}
        >
          {/* Surface reflection */}
          <div className="w-full h-2 bg-white opacity-20 absolute top-0"></div>
        </div>
      </div>
      <div className="text-center">
        <span className="block text-2xl font-bold text-gray-800">{current} <span className="text-xs text-gray-500">m³</span></span>
        <span className="text-xs text-gray-500 uppercase tracking-wide">Volume</span>
      </div>
    </div>
  );
};