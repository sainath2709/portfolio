import React from 'react';
import { Briefcase, BookOpen, Clock, Building, ArrowRight, ShieldCheck } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 lg:py-24 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 pb-6 border-b border-slate-800">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            <span>CHRONOLOGY &amp; RESEARCH INITIATIVES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-100">
            Experience &amp; Academic Research
          </h2>
          <p className="mt-2 text-sm text-slate-400 max-w-2xl">
            Relational database modeling, formal concurrency proofs in distributed process algebras, 
            and clinical deep learning research.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-slate-800 ml-4 sm:ml-6 space-y-12">
          {experienceData.map((item, index) => {
            const isResearch = item.type.includes('Research');
            return (
              <div key={index} className="relative pl-6 sm:pl-8 group">
                
                {/* Timeline node indicator */}
                <div className="absolute -left-2.5 top-1.5 w-5 h-5 rounded-full border border-slate-700 bg-slate-900 flex items-center justify-center group-hover:border-sky-400 group-hover:scale-110 transition-all">
                  <div className={`w-1.5 h-1.5 rounded-full ${isResearch ? 'bg-sky-400' : 'bg-emerald-400'}`} />
                </div>

                {/* Card Container */}
                <div className="rounded-xl border border-slate-800/80 bg-[#0d111a]/70 backdrop-blur-sm p-6 hover:border-slate-700 transition-all">
                  
                  {/* Top Bar */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-mono border ${
                        isResearch
                          ? 'bg-sky-500/10 text-sky-300 border-sky-500/20'
                          : 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20'
                      }`}>
                        {item.badge}
                      </span>
                      <span className="text-xs font-mono text-slate-400 font-semibold">
                        {item.organization}
                      </span>
                    </div>

                    <span className="text-xs font-mono text-slate-500 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-slate-600" />
                      {item.timeline}
                    </span>
                  </div>

                  {/* Role Title */}
                  <h3 className="text-base sm:text-lg font-bold text-slate-100 group-hover:text-white transition-colors mb-2">
                    {item.role}
                  </h3>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                    {item.summary}
                  </p>

                  {/* Specific Bullets */}
                  <ul className="space-y-1.5 text-xs text-slate-300 mb-5">
                    {item.highlights.map((hl, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <span className="text-slate-600 font-mono mt-0.5">▸</span>
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skill Tags */}
                  <div className="pt-3 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                    {item.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-400"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
