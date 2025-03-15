
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface EmergencyCountdownProps {
  onCancel: () => void;
  onComplete: () => void;
  duration?: number;
}

const EmergencyCountdown = ({ 
  onCancel, 
  onComplete, 
  duration = 10 
}: EmergencyCountdownProps) => {
  const [countdown, setCountdown] = useState(duration);
  const [recording, setRecording] = useState(false);
  
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
        
        // After 2 seconds, simulate starting recording
        if (countdown === duration - 2) {
          setRecording(true);
        }
      }, 1000);
      
      return () => clearTimeout(timer);
    } else {
      onComplete();
    }
  }, [countdown, duration, onComplete]);
  
  const progress = ((duration - countdown) / duration) * 100;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="max-w-md w-full mx-4 glass-card p-6 animate-zoom-in">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-white">Emergency Alert</h2>
          <button 
            onClick={onCancel}
            className="p-2 rounded-full hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="text-center mb-6">
          <div className="text-4xl font-bold mb-2">{countdown}</div>
          <p className="text-white/80">
            {recording 
              ? "Recording emergency video..." 
              : "Preparing to record emergency video..."}
          </p>
        </div>
        
        <div className="w-full h-2 bg-white/20 rounded-full mb-6 overflow-hidden">
          <div 
            className="h-full bg-red-gradient"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <div className="text-center text-sm text-white/70">
          <p>Your location and video will be shared with nearby community members</p>
          <button 
            onClick={onCancel}
            className="mt-4 px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            Cancel Emergency
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmergencyCountdown;
