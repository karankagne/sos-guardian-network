
import React from 'react';
import TopBar from '@/components/layout/TopBar';
import BottomBar from '@/components/layout/BottomBar';

const ProfilePage = () => {
  return (
    <div className="min-h-screen w-full bg-sos-black text-sos-white pt-16 pb-16 animate-fade-in">
      <TopBar />
      
      <div className="container max-w-xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Profile</h1>
        
        <div className="glass-card p-6">
          <p className="text-center text-white/80">
            Profile settings, emergency contacts, and medical information will be configured here.
          </p>
        </div>
      </div>
      
      <BottomBar />
    </div>
  );
};

export default ProfilePage;
