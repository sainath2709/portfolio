import React from 'react';
import { ArrowUp, Terminal, Shield, GitBranch } from 'lucide-react';
import { candidateProfile } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800 bg-[#07090e] py-10 text-slate-500 text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left info */}
          <div className="space-y-1 text-center md:text-left">
            <p className="text-slate-300 font-semibold tracking-wide">
              CHAVVA SAINATH REDDY &copy; 2026
            </p>
            <p className="text-slate-500 text-[11px]">
              Executive Portfolio • Software Development Engineer | Data Scientist &amp; ML Engineer
            </p>
          </div>

          {/* Center Git Metadata badge */}
          <div className="flex items-center gap-2 px-3 py-1 rounded bg-slate-900 border border-slate-800 text-[11px] text-slate-400">
            <GitBranch className="w-3 h-3 text-sky-400" />
            <span>branch: main</span>
            <span className="text-slate-600">|</span>
            <span className="text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              STATIC_BUILD_VERIFIED
            </span>
          </div>

          {/* Right: Back to top action */}
          <div className="flex items-center space-x-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-slate-100 transition-colors focus:outline-none"
              aria-label="Back to top of page"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
