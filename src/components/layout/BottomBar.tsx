
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, History, HelpCircle } from 'lucide-react';

const BottomBar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 h-16 backdrop-blur-lg bg-background/50 border-t border-white/10 animate-slide-up">
      <div className="grid grid-cols-3 h-full max-w-md mx-auto">
        <Link 
          to="/" 
          className={`flex flex-col items-center justify-center transition-colors ${
            isActive('/') ? 'text-primary' : 'text-foreground/70 hover:text-foreground'
          }`}
        >
          <Home className="h-6 w-6" />
          <span className="text-xs mt-1">Home</span>
        </Link>
        
        <Link 
          to="/history" 
          className={`flex flex-col items-center justify-center transition-colors ${
            isActive('/history') ? 'text-primary' : 'text-foreground/70 hover:text-foreground'
          }`}
        >
          <History className="h-6 w-6" />
          <span className="text-xs mt-1">History</span>
        </Link>
        
        <Link 
          to="/help" 
          className={`flex flex-col items-center justify-center transition-colors ${
            isActive('/help') ? 'text-primary' : 'text-foreground/70 hover:text-foreground'
          }`}
        >
          <HelpCircle className="h-6 w-6" />
          <span className="text-xs mt-1">Help</span>
        </Link>
      </div>
    </div>
  );
};

export default BottomBar;
