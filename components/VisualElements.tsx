import React from 'react';

// A metal push pin
export const PushPin: React.FC<{ color?: 'red' | 'blue' | 'yellow' | 'silver'; className?: string }> = ({ color = 'red', className = '' }) => {
  const colors = {
    red: 'bg-red-700 shadow-red-900',
    blue: 'bg-blue-700 shadow-blue-900',
    yellow: 'bg-yellow-600 shadow-yellow-800',
    silver: 'bg-gray-400 shadow-gray-600',
  };

  return (
    <div className={`absolute -top-3 left-1/2 transform -translate-x-1/2 z-20 ${className}`}>
      <div className={`w-4 h-4 rounded-full ${colors[color]} shadow-md border border-black/30 relative`}>
        <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-white/30 rounded-full" />
      </div>
      <div className="w-0.5 h-2 bg-black/50 mx-auto -mt-1" />
    </div>
  );
};

// Scotch tape piece
export const ScotchTape: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`absolute w-16 h-6 bg-white/20 backdrop-blur-[1px] border-l border-r border-white/10 shadow-sm transform -rotate-2 z-20 ${className}`} style={{ boxShadow: '0 1px 2px rgba(0,0,0,0.1)' }} />
);

// Polaroid Photo Frame
export const Polaroid: React.FC<{ 
  src: string; 
  caption?: string; 
  className?: string; 
  rotation?: number;
  onClick?: () => void;
  isVideo?: boolean;
}> = ({ src, caption, className = '', rotation = 0, onClick, isVideo = false }) => {
  return (
    <div 
      onClick={onClick}
      className={`relative bg-white p-3 pb-8 shadow-xl transition-transform duration-300 hover:scale-105 hover:z-30 cursor-pointer ${className}`}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <PushPin color="red" className="-top-4" />
      <div className="relative overflow-hidden filter sepia-[0.3] contrast-125 group">
        <img src={src} alt="Evidence" className="w-full h-auto object-cover pointer-events-none" />
        
        {/* Play Icon Overlay for Video */}
        {isVideo && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
            <div className="w-12 h-12 rounded-full bg-red-900/80 border-2 border-white flex items-center justify-center pl-1 shadow-lg">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="none">
                 <polygon points="5 3 19 12 5 21 5 3"></polygon>
               </svg>
            </div>
          </div>
        )}
      </div>
      {caption && (
        <div className="absolute bottom-2 left-0 w-full text-center">
          <p className="font-marker text-gray-800 text-sm transform -rotate-1">{caption}</p>
        </div>
      )}
    </div>
  );
};

// Typed Note (Paper)
export const TypedNote: React.FC<{ children: React.ReactNode; className?: string; rotation?: number }> = ({ children, className = '', rotation = 0 }) => (
  <div 
    className={`relative bg-[#f4ebd0] p-6 shadow-lg text-black font-typewriter text-sm leading-relaxed border border-[#d4cbb0] ${className}`}
    style={{ 
      transform: `rotate(${rotation}deg)`,
      backgroundImage: 'linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px)',
      backgroundSize: '100% 1.2rem'
    }}
  >
    <ScotchTape className="-top-3 left-1/2 -translate-x-1/2" />
    {children}
  </div>
);

// Red String Connector (Purely visual SVG)
export const RedString: React.FC<{ 
  from: { x: string; y: string }; 
  to: { x: string; y: string };
  className?: string;
}> = ({ from, to, className = '' }) => {
  // Simple straight line simulation for background feel
  // Note: True dynamic connection requires calculating bounding boxes, which we simplify here for the landing page vibe
  return (
    <svg className={`absolute pointer-events-none z-10 overflow-visible ${className}`} style={{ top: 0, left: 0, width: '100%', height: '100%' }}>
      <line 
        x1={from.x} y1={from.y} 
        x2={to.x} y2={to.y} 
        stroke="#7f1d1d" 
        strokeWidth="2" 
        strokeDasharray="5,5" // Makes it look a bit like thread
        className="opacity-80 drop-shadow-md"
      />
    </svg>
  );
};