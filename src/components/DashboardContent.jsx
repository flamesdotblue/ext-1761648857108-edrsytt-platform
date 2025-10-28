import React from 'react';
import { Activity, Users, DollarSign, TrendingUp } from 'lucide-react';

const MetricCard = ({ title, value, delta, icon: Icon, positive = true, spark }) => {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg grid place-items-center bg-emerald-500/10">
            <Icon className="text-emerald-400" size={18} />
          </div>
          <div>
            <p className="text-xs text-neutral-400">{title}</p>
            <p className="text-lg font-semibold">{value}</p>
          </div>
        </div>
        <div className={`text-xs font-medium ${positive ? 'text-emerald-400' : 'text-rose-400'}`}>{delta}</div>
      </div>
      <div className="mt-4 h-12">
        <svg viewBox="0 0 120 40" className="w-full h-full">
          <defs>
            <linearGradient id="grad" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="rgba(16,185,129,0.6)" />
              <stop offset="100%" stopColor="rgba(16,185,129,0)" />
            </linearGradient>
          </defs>
          <path d={spark}
            fill="url(#grad)"
            stroke="none"
          />
          <path d={spark.replace('L120,40 L0,40 Z','')} stroke="rgb(16,185,129)" strokeWidth="2" fill="none" />
        </svg>
      </div>
    </div>
  );
};

const Panel = ({ title, action, children }) => (
  <div className="rounded-xl border border-white/10 bg-white/[0.03]">
    <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
      <h3 className="text-sm font-semibold text-neutral-200">{title}</h3>
      {action}
    </div>
    <div className="p-4">{children}</div>
  </div>
);

function LineChart() {
  const points = [5,10,9,14,12,18,16,22,21,26,24,30];
  const max = 30;
  const path = points.map((p,i)=>`${(i/(points.length-1))*100},${100 - (p/max)*100}`).join(' ');

  return (
    <svg viewBox="0 0 100 60" className="w-full h-56">
      <defs>
        <linearGradient id="lineGrad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="rgba(52,211,153,0.6)" />
          <stop offset="100%" stopColor="rgba(52,211,153,0)" />
        </linearGradient>
      </defs>
      <polyline
        points={path}
        fill="none"
        stroke="rgb(52,211,153)"
        strokeWidth="1.5"
      />
      <polygon
        points={`${path} 100,100 0,100`}
        fill="url(#lineGrad)"
      />
    </svg>
  );
}

function BarChart() {
  const values = [24, 18, 32, 28, 36, 22, 30];
  const max = 40;
  return (
    <div className="grid grid-cols-7 gap-3 h-56 items-end">
      {values.map((v, i) => (
        <div key={i} className="flex flex-col items-center gap-2">
          <div className="w-full bg-white/10 rounded-md overflow-hidden">
            <div
              className="w-full bg-emerald-500/80 hover:bg-emerald-400 transition-all rounded-md"
              style={{ height: `${(v / max) * 100}%` }}
            />
          </div>
          <span className="text-[10px] text-neutral-400">{['Mon','Tue','Wed','Thu','Fri','Sat','Sun'][i]}</span>
        </div>
      ))}
    </div>
  );
}

export default function DashboardContent() {
  const sparkBase = 'M0,30 L10,28 L20,26 L30,29 L40,25 L50,20 L60,24 L70,18 L80,16 L90,14 L100,10 L120,40 L0,40 Z';
  const sparkAlt = 'M0,34 L10,32 L20,31 L30,30 L40,28 L50,24 L60,22 L70,20 L80,19 L90,18 L100,16 L120,40 L0,40 Z';
  const sparkUp = 'M0,36 L10,35 L20,33 L30,30 L40,28 L50,25 L60,22 L70,18 L80,15 L90,12 L100,10 L120,40 L0,40 Z';
  const sparkVar = 'M0,28 L10,30 L20,27 L30,31 L40,26 L50,29 L60,23 L70,25 L80,20 L90,22 L100,18 L120,40 L0,40 Z';

  return (
    <main className="px-4 md:px-6 py-6 max-w-7xl mx-auto w-full space-y-6">
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard title="Active Users" value="8,942" delta="+4.2%" icon={Users} positive spark={sparkUp} />
        <MetricCard title="CPU Utilization" value="62%" delta="-2.1%" icon={Activity} positive={false} spark={sparkAlt} />
        <MetricCard title="MRR" value="$124.7k" delta="+6.8%" icon={DollarSign} positive spark={sparkBase} />
        <MetricCard title="Conversion" value="3.7%" delta="+0.4%" icon={TrendingUp} positive spark={sparkVar} />
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Panel title="Revenue (Last 12 Weeks)" action={<button className="text-xs px-2 py-1 rounded-md bg-white/5 border border-white/10 hover:bg-white/10">Export</button>}>
          <LineChart />
        </Panel>
        <Panel title="Sessions by Day" action={<span className="text-xs text-neutral-400">UTC</span>}>
          <BarChart />
        </Panel>
        <Panel title="Recent Events" action={<button className="text-xs px-2 py-1 rounded-md bg-white/5 border border-white/10 hover:bg-white/10">View all</button>}>
          <ul className="space-y-3 text-sm">
            {[
              { t: 'Deployment completed', k: 'Production · 2m ago' },
              { t: 'Error rate below threshold', k: 'Monitoring · 14m ago' },
              { t: 'New subscriber', k: 'Billing · 22m ago' },
              { t: 'Cache warmed', k: 'Edge · 49m ago' },
            ].map((e, i) => (
              <li key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span className="text-neutral-200">{e.t}</span>
                </div>
                <span className="text-neutral-400">{e.k}</span>
              </li>
            ))}
          </ul>
        </Panel>
      </section>
    </main>
  );
}
