
import React, { useState, useEffect } from 'react';
import { ArrowLeft, MapPin, Clock, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast } from '@/lib/toast';

import TopBar from '@/components/layout/TopBar';
import BottomBar from '@/components/layout/BottomBar';

const EmergencyMapPage = () => {
  const [timeRemaining, setTimeRemaining] = useState(180); // 3 minutes in seconds
  const [responders, setResponders] = useState(0);
  
  useEffect(() => {
    // Simulating responders joining
    const responderInterval = setInterval(() => {
      if (responders < 5) {
        setResponders(prev => {
          const newCount = prev + 1;
          toast.success(`${newCount} community members are responding to your emergency`);
          return newCount;
        });
      }
    }, 10000);
    
    // Countdown timer
    const timerInterval = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          clearInterval(timerInterval);
          toast.error("Emergency services being contacted due to timeout");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    return () => {
      clearInterval(responderInterval);
      clearInterval(timerInterval);
    };
  }, [responders]);
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };
  
  const getTimerColor = () => {
    if (timeRemaining > 120) return "text-sos-green";
    if (timeRemaining > 60) return "text-yellow-500";
    return "text-sos-red-DEFAULT animate-pulse";
  };
  
  const callEmergencyServices = () => {
    toast.error("Connecting to emergency services...");
  };
  
  return (
    <div className="min-h-screen w-full bg-sos-black text-sos-white pt-16 pb-16 animate-fade-in">
      <TopBar />
      
      <div className="container max-w-xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <Link to="/" className="mr-3">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <h1 className="text-2xl font-bold">Emergency Map</h1>
          </div>
          
          <div className={`flex items-center ${getTimerColor()}`}>
            <Clock className="h-5 w-5 mr-1" />
            <span>{formatTime(timeRemaining)}</span>
          </div>
        </div>
        
        <div className="glass-card overflow-hidden mb-6">
          {/* Map placeholder */}
          <div className="bg-muted h-60 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white/60">Map showing responders will display here</p>
            </div>
            
            {/* Responder indicators */}
            {responders > 0 && (
              <div className="absolute bottom-4 left-4 px-3 py-1 bg-sos-green rounded-full text-xs flex items-center">
                <MapPin className="h-3 w-3 mr-1" />
                {responders} responding
              </div>
            )}
          </div>
          
          <div className="p-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-medium">Emergency Status</h3>
                <p className="text-sm text-white/70">
                  {responders > 0 
                    ? `${responders} community members responding` 
                    : "Waiting for responders..."}
                </p>
              </div>
              
              <button 
                onClick={callEmergencyServices}
                className="sos-button bg-red-gradient p-3 flex items-center"
              >
                <Phone className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="glass-card p-4">
          <p className="text-center text-sm text-white/80">
            Emergency services will be contacted automatically in{" "}
            <span className={getTimerColor()}>{formatTime(timeRemaining)}</span>
            {" "}if no community response
          </p>
        </div>
      </div>
      
      <BottomBar />
    </div>
  );
};

export default EmergencyMapPage;
