
import React from 'react';
import TopBar from '@/components/layout/TopBar';
import BottomBar from '@/components/layout/BottomBar';

const HelpPage = () => {
  return (
    <div className="min-h-screen w-full bg-sos-black text-sos-white pt-16 pb-16 animate-fade-in">
      <TopBar />
      
      <div className="container max-w-xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Help & Support</h1>
        
        <div className="glass-card p-6">
          <p className="text-center text-white/80">
            Help information, FAQs, and support resources will be displayed here.
          </p>
        </div>
      </div>
      
      <BottomBar />
    </div>
  );
};

export default HelpPage;
