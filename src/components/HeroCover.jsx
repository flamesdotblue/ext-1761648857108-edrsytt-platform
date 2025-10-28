import React from 'react';
import Spline from '@splinetool/react-spline';

export default function HeroCover() {
  return (
    <section className="relative w-full h-[320px] md:h-[420px] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/6tUXqVcUA0xgJugv/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent pointer-events-none" />
      <div className="relative z-10 h-full flex items-end">
        <div className="px-4 md:px-6 pb-6 w-full max-w-7xl mx-auto">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">Real-time Metrics Dashboard</h1>
              <p className="text-neutral-300 text-sm md:text-base mt-1 max-w-xl">
                A dark, futuristic visualization of live telemetry. Track performance, users, and revenue with clarity.
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs text-neutral-300">Live</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
