import React from 'react';
import { Search, Calendar, Bell } from 'lucide-react';

export default function TopBar() {
  return (
    <header className="h-16 flex items-center justify-between px-4 md:px-6 border-b border-white/10 bg-neutral-950/70 backdrop-blur sticky top-0 z-20">
      <div className="flex items-center gap-3 w-full md:w-auto">
        <div className="relative flex-1 md:flex-none">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" size={16} />
          <input
            className="w-full md:w-80 pl-9 pr-3 py-2 rounded-lg bg-white/5 border border-white/10 text-sm placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
            placeholder="Search metrics, dashboards..."
          />
        </div>
      </div>
      <div className="hidden md:flex items-center gap-3">
        <button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-sm hover:bg-white/10">
          <Calendar size={16} />
          Last 30 days
        </button>
        <button className="relative p-2 rounded-lg hover:bg-white/10">
          <Bell size={18} className="text-neutral-300" />
          <span className="absolute -top-0.5 -right-0.5 h-2 w-2 bg-emerald-500 rounded-full" />
        </button>
        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-emerald-500 to-teal-400" />
      </div>
    </header>
  );
}
