import React from 'react';
import { GraduationCap, Code2, Activity, Award } from 'lucide-react';
import { impactMetrics } from '../data/portfolioData';

const iconMap = {
  GraduationCap: GraduationCap,
  Code2: Code2,
  Activity: Activity,
  Award: Award
};

export default function MetricBar() {
  return (
    <section className="relative z-10 border-y border-slate-800/80 bg-[#0b0f17]/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {impactMetrics.map((metric, idx) => {
            const IconComponent = iconMap[metric.icon] || Activity;
            return (
              <div
                key={idx}
                className="relative p-4 rounded-xl border border-slate-800/70 bg-slate-900/50 hover:bg-slate-900/80 hover:border-slate-700/80 transition-all group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono tracking-wider uppercase text-slate-500">
                    Metric 0{idx + 1}
                  </span>
                  <div className="p-1.5 rounded bg-slate-800/60 border border-slate-700/60 text-slate-300 group-hover:text-white group-hover:border-slate-500 transition-colors">
                    <IconComponent className="w-4 h-4" />
                  </div>
                </div>

                <div className="flex items-baseline space-x-1">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-mono text-slate-100 group-hover:text-white transition-colors">
                    {metric.value}
                  </div>
                </div>

                <div className="mt-1">
                  <p className="text-xs sm:text-sm font-semibold text-slate-200">
                    {metric.label}
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                    {metric.subtext}
                  </p>
                </div>

                {/* Subtle bottom indicator line */}
                <div className="absolute bottom-0 left-4 right-4 h-px bg-slate-800 group-hover:bg-slate-600 transition-colors" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
