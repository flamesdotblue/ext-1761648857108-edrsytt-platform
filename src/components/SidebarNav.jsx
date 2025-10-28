import React from 'react';
import { Home, BarChart3, Activity, Settings } from 'lucide-react';

const NavItem = ({ icon: Icon, label, active }) => (
  <button
    className={`flex items-center gap-3 w-full px-4 py-2 rounded-lg transition-colors ${
      active ? 'bg-emerald-500/10 text-emerald-400' : 'text-neutral-300 hover:bg-white/5 hover:text-white'
    }`}
  >
    <Icon size={18} />
    <span className="text-sm font-medium">{label}</span>
  </button>
);

export default function SidebarNav() {
  return (
    <aside className="hidden md:flex md:flex-col w-64 shrink-0 border-r border-white/10 bg-neutral-950/80 backdrop-blur">
      <div className="h-16 flex items-center px-4 border-b border-white/10">
        <div className="h-8 w-8 rounded-md bg-emerald-500/20 grid place-items-center">
          <Activity className="text-emerald-400" size={18} />
        </div>
        <span className="ml-2 text-sm font-semibold tracking-wide text-white">Neon Metrics</span>
      </div>
      <nav className="p-4 space-y-1">
        <NavItem icon={Home} label="Overview" active />
        <NavItem icon={BarChart3} label="Analytics" />
        <NavItem icon={Activity} label="Monitoring" />
        <NavItem icon={Settings} label="Settings" />
      </nav>
      <div className="mt-auto p-4 text-xs text-neutral-400">
        <div className="rounded-lg border border-white/10 p-3">
          <p className="font-medium text-neutral-200 mb-1">Usage</p>
          <div className="flex items-center justify-between mb-2">
            <span>Compute</span>
            <span className="text-neutral-200">68%</span>
          </div>
          <div className="h-2 rounded bg-white/10 overflow-hidden">
            <div className="h-full bg-emerald-500" style={{ width: '68%' }} />
          </div>
        </div>
      </div>
    </aside>
  );
}
