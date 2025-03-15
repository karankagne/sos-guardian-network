
import React from 'react';
import { ArrowLeft, Phone, Clock, Users, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast } from '@/components/ui/sonner';

import TopBar from '@/components/layout/TopBar';
import BottomBar from '@/components/layout/BottomBar';
import ToolsButton from '@/components/tools/ToolsButton';

const ToolsPage = () => {
  const handleFakeCall = () => {
    toast.success("Fake call scheduled for 10 seconds from now");
  };
  
  const handleTimerCheckIn = () => {
    toast.success("Timer check-in set");
  };
  
  const handleFamilyNotify = () => {
    toast.success("Family notification sent");
  };
  
  const handleMedicalID = () => {
    toast.success("Medical ID information accessed");
  };
  
  return (
    <div className="min-h-screen w-full bg-sos-black text-sos-white pt-16 pb-16 animate-fade-in">
      <TopBar />
      
      <div className="container max-w-xl mx-auto px-4 py-8">
        <div className="flex items-center mb-6">
          <Link to="/" className="mr-3">
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <h1 className="text-2xl font-bold">Safety Tools</h1>
        </div>
        
        <div className="glass-card p-6">
          <p className="text-center text-white/80 mb-8">
            Access additional safety features to help in various situations
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            <ToolsButton 
              icon={Phone} 
              label="Fake Call" 
              description="Receive a simulated call to help exit uncomfortable situations"
              onClick={handleFakeCall} 
            />
            
            <ToolsButton 
              icon={Clock} 
              label="Timer Check-In" 
              description="Set a timer to check-in with your contacts"
              onClick={handleTimerCheckIn} 
            />
            
            <ToolsButton 
              icon={Users} 
              label="Family Notify" 
              description="Send a quick notification to family members"
              onClick={handleFamilyNotify} 
            />
            
            <ToolsButton 
              icon={FileText} 
              label="Medical ID" 
              description="Access and update your medical information"
              onClick={handleMedicalID} 
            />
          </div>
        </div>
      </div>
      
      <BottomBar />
    </div>
  );
};

export default ToolsPage;
