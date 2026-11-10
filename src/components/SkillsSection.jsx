import React, { useState, useMemo } from 'react';
import { Layers, Terminal, Search, Check, ShieldCheck, Cpu, Database, Cloud, Code } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCategories = useMemo(() => {
    return skillCategories
      .map((cat) => {
        if (activeTab !== 'all' && cat.id !== activeTab) {
          return null;
        }

        if (!searchQuery.trim()) {
          return cat;
        }

        const filteredSkills = cat.skills.filter((skill) =>
          skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          skill.tag.toLowerCase().includes(searchQuery.toLowerCase())
        );

        if (filteredSkills.length === 0) return null;

        return {
          ...cat,
          skills: filteredSkills
        };
      })
      .filter(Boolean);
  }, [activeTab, searchQuery]);

  const tabs = [
    { id: 'all', label: 'All Architectures' },
    { id: 'core-cs', label: 'Core & CS' },
    { id: 'ai-cv', label: 'AI & Vision' },
    { id: 'web-fullstack', label: 'Full-Stack' },
    { id: 'databases', label: 'Databases' },
    { id: 'devops-tools', label: 'Cloud & DevOps' }
  ];

  return (
    <section id="skills" className="py-16 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
              <span>DOMAIN ARCHITECTURE &amp; CAPABILITIES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-100">
              Engineering Skills Matrix
            </h2>
            <p className="mt-2 text-sm text-slate-400 max-w-2xl">
              Disciplined categorization of computer science fundamentals, deep learning pipelines, 
              distributed backend services, and verified production tooling.
            </p>
          </div>

          {/* Quick Search */}
          <div className="mt-4 md:mt-0 relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter technologies (e.g., Python)..."
              className="w-full pl-9 pr-3 py-1.5 text-xs font-mono bg-slate-900 border border-slate-800 rounded text-slate-200 placeholder-slate-500 focus:outline-none focus:border-slate-600 focus:ring-1 focus:ring-sky-500/30 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-500 hover:text-slate-300"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 mb-8" role="tablist">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              role="tab"
              aria-selected={activeTab === tab.id}
              className={`px-3 py-1.5 text-xs font-mono rounded transition-all ${
                activeTab === tab.id
                  ? 'bg-slate-200 text-slate-950 font-semibold shadow-sm'
                  : 'bg-slate-900/80 text-slate-400 border border-slate-800/80 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Structured Grid Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="flex flex-col rounded-xl border border-slate-800/80 bg-[#0d111a]/70 backdrop-blur-sm p-5 hover:border-slate-700/80 transition-all shadow-sm group"
            >
              {/* Category Header */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800/80">
                <div className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-sm bg-slate-400 group-hover:bg-sky-400 transition-colors" />
                  <h3 className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
                    {category.title}
                  </h3>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/60">
                  {category.badge}
                </span>
              </div>

              <p className="text-xs text-slate-400 mb-4 line-clamp-2">
                {category.description}
              </p>

              {/* Skills Items */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-300 hover:border-slate-700 hover:text-slate-100 transition-all"
                  >
                    <span>{skill.name}</span>
                    <span className="text-[9px] text-slate-500 font-sans border-l border-slate-800 pl-1">
                      {skill.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12 rounded-xl border border-dashed border-slate-800 bg-slate-900/20 text-slate-400 text-sm font-mono">
            No engineering skills match "{searchQuery}". Try searching for "Python", "React", or "SQL".
          </div>
        )}

      </div>
    </section>
  );
}
