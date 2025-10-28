import React from 'react';
import SidebarNav from './components/SidebarNav';
import TopBar from './components/TopBar';
import HeroCover from './components/HeroCover';
import DashboardContent from './components/DashboardContent';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white flex">
      <SidebarNav />
      <div className="flex-1 flex flex-col min-w-0">
        <TopBar />
        <HeroCover />
        <DashboardContent />
      </div>
    </div>
  );
}
