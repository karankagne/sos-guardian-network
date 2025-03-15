
import React, { useState } from 'react';
import { Megaphone, Users, Footprints, Wrench } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/lib/toast';

import TopBar from '@/components/layout/TopBar';
import BottomBar from '@/components/layout/BottomBar';
import SOSButton from '@/components/sos/SOSButton';
import ToolsButton from '@/components/tools/ToolsButton';
import EmergencyCountdown from '@/components/sos/EmergencyCountdown';

const Index = () => {
  const navigate = useNavigate();
  const [showCountdown, setShowCountdown] = useState(false);
  
  const handleSOSForMe = () => {
    toast.info("Initiating SOS for Me...");
    setShowCountdown(true);
    
    // In a real implementation, we would start the video recording here
    // and handle the emergency logic
  };
  
  const handleSOSForSomeoneElse = () => {
    toast.info("Initiating SOS for Someone Else...");
    setShowCountdown(true);
    
    // In a real implementation, we would start the video recording here
    // with the discreet mode settings
  };
  
  const handleFollowMe = () => {
    navigate('/follow-me');
  };
  
  const handleMoreTools = () => {
    navigate('/tools');
  };
  
  const handleCancelEmergency = () => {
    setShowCountdown(false);
    toast.success("Emergency canceled");
  };

  return (
    <div className="min-h-screen w-full bg-sos-black text-sos-white pt-16 pb-16 animate-fade-in">
      <TopBar />

      {/* Main content */}
      <div className="container max-w-xl mx-auto px-4 py-8 space-y-12">
        {/* Emergency SOS Section */}
        <section className="animate-slide-in-left" style={{ animationDelay: '0.1s' }}>
          <div className="glass-card overflow-hidden">
            <div className="bg-red-gradient p-4 border-b border-white/10">
              <h2 className="text-xl font-bold text-shadow text-center">Community SOS</h2>
            </div>
            
            <div className="p-6">
              <p className="text-sm text-center mb-6 text-white/80">
                Send an emergency alert to nearby community members
              </p>
              
              <div className="flex justify-center gap-8">
                <SOSButton 
                  icon={Megaphone} 
                  label="SOS for Me" 
                  onClick={handleSOSForMe} 
                />
                
                <SOSButton 
                  icon={Users} 
                  label="SOS for Someone Else" 
                  onClick={handleSOSForSomeoneElse} 
                />
              </div>
              
              <p className="text-xs text-center mt-6 text-white/60">
                Emergency services will be contacted if no response after 3 minutes
              </p>
            </div>
          </div>
        </section>
        
        {/* Personal Safety Tools Section */}
        <section className="animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
          <div className="glass-card overflow-hidden">
            <div className="bg-green-gradient p-4 border-b border-white/10">
              <h2 className="text-xl font-bold text-shadow text-center">Personal Safety Tools</h2>
            </div>
            
            <div className="p-6">
              <p className="text-sm text-center mb-6 text-white/80">
                Tools to keep you safe in various situations
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <ToolsButton 
                  icon={Footprints} 
                  label="Follow Me" 
                  description="Share your location with trusted contacts"
                  onClick={handleFollowMe} 
                />
                
                <ToolsButton 
                  icon={Wrench} 
                  label="More Tools" 
                  description="Access additional safety features"
                  onClick={handleMoreTools} 
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Voice activation hint */}
        <div className="text-center text-xs text-white/60 animate-zoom-in" style={{ animationDelay: '0.3s' }}>
          <p>Say "Help me!" to activate SOS or "Track me!" for Follow Me</p>
        </div>
      </div>

      {/* Emergency Countdown Modal */}
      {showCountdown && (
        <EmergencyCountdown
          onCancel={handleCancelEmergency}
          onComplete={() => {
            toast.success("Emergency alert sent to nearby community members");
            setShowCountdown(false);
            navigate('/emergency-map');
          }}
        />
      )}

      <BottomBar />
    </div>
  );
};

export default Index;
