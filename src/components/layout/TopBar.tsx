
import React from 'react';
import { UserCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const TopBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-16 px-4 backdrop-blur-lg bg-background/50 border-b border-white/10 animate-slide-down">
      <div className="flex items-center justify-between h-full max-w-5xl mx-auto">
        <Link 
          to="/" 
          className="flex items-center space-x-2"
        >
          <h1 className="text-xl font-bold tracking-tight">
            SOS Community
          </h1>
        </Link>
        
        <Link to="/profile" className="p-2 rounded-full hover:bg-white/5 transition-colors">
          <UserCircle className="h-6 w-6" />
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
