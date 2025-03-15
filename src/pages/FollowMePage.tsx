
import React, { useState } from 'react';
import { ArrowLeft, UserCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast } from '@/components/ui/sonner';

import TopBar from '@/components/layout/TopBar';
import BottomBar from '@/components/layout/BottomBar';

const FollowMePage = () => {
  const [isSharing, setIsSharing] = useState(false);
  
  const startSharing = () => {
    setIsSharing(true);
    toast.success("Live location sharing started");
  };
  
  const stopSharing = () => {
    setIsSharing(false);
    toast.success("Location sharing stopped - 'I'm Safe' notification sent");
  };
  
  return (
    <div className="min-h-screen w-full bg-sos-black text-sos-white pt-16 pb-16 animate-fade-in">
      <TopBar />
      
      <div className="container max-w-xl mx-auto px-4 py-8">
        <div className="flex items-center mb-6">
          <Link to="/" className="mr-3">
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <h1 className="text-2xl font-bold">Follow Me</h1>
        </div>
        
        <div className="glass-card p-6">
          <p className="text-center text-white/80 mb-8">
            Share your live location with trusted contacts until you're safe
          </p>
          
          {!isSharing ? (
            <div className="text-center">
              <button 
                onClick={startSharing}
                className="sos-button bg-green-gradient px-8 py-4 text-lg font-medium animate-pulse"
              >
                Start Location Sharing
              </button>
              
              <p className="mt-6 text-sm text-white/60">
                Your trusted contacts will receive a notification with a link to track your location
              </p>
            </div>
          ) : (
            <div className="text-center">
              <div className="mb-6 p-4 rounded-xl bg-sos-green/20 border border-sos-green/30 animate-pulse">
                <p className="font-medium">
                  Live location is being shared with your trusted contacts
                </p>
              </div>
              
              <button 
                onClick={stopSharing}
                className="sos-button bg-white/90 text-sos-green px-8 py-4 text-lg font-medium flex items-center justify-center mx-auto"
              >
                <UserCheck className="mr-2 h-5 w-5" />
                I'm Safe
              </button>
            </div>
          )}
        </div>
      </div>
      
      <BottomBar />
    </div>
  );
};

export default FollowMePage;
