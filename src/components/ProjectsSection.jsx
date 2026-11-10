import React, { useState } from 'react';
import { ArrowUpRight, Github, ExternalLink, Activity, Layers, Terminal, Sparkles, Filter } from 'lucide-react';
import { featuredProjects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Systems' },
    { id: 'ai-cv', label: 'Deep Learning & Vision' },
    { id: 'fullstack', label: 'Full-Stack & Telemetry' },
    { id: 'embedded', label: 'Embedded & Firmware' }
  ];

  const filteredProjects = activeCategory === 'all'
    ? featuredProjects
    : featuredProjects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-16 lg:py-24 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
              <span>PRODUCTION SYSTEMS &amp; ARCHITECTURES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-100">
              Featured Engineering Projects
            </h2>
            <p className="mt-2 text-sm text-slate-400 max-w-2xl">
              End-to-end computer vision pipelines, clinical transfer learning architectures, 
              reactive spatial telemetry, and full-stack software systems.
            </p>
          </div>

          {/* Subsystem Filters */}
          <div className="mt-4 md:mt-0 flex flex-wrap gap-1.5" role="tablist">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                role="tab"
                aria-selected={activeCategory === cat.id}
                className={`px-3 py-1.5 text-xs font-mono rounded transition-all ${
                  activeCategory === cat.id
                    ? 'bg-slate-200 text-slate-950 font-semibold'
                    : 'bg-slate-900/80 text-slate-400 border border-slate-800 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column High-Density Project Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="flex flex-col rounded-2xl border border-slate-800/90 bg-[#0d121c]/80 backdrop-blur-sm p-6 sm:p-7 hover:border-slate-700 hover:shadow-xl transition-all group relative overflow-hidden"
            >
              {/* Subtle top accent line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-slate-700/60 to-transparent group-hover:via-sky-500/40 transition-colors" />

              {/* Sub-system Badge & Timeline */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded text-[11px] font-mono bg-sky-500/10 text-sky-300 border border-sky-500/20">
                  {project.subsystem}
                </span>
                <span className="text-xs font-mono text-slate-500">
                  {project.timeline}
                </span>
              </div>

              {/* Project Title */}
              <h3 className="text-lg sm:text-xl font-bold text-slate-100 group-hover:text-white transition-colors mb-3">
                {project.title}
              </h3>

              {/* Key Technical Metric Callout */}
              <div className="mb-4 p-3 rounded-lg border border-slate-800 bg-slate-900/70 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
                    Key Performance Metric
                  </span>
                  <p className="text-xs font-mono text-slate-300">
                    {project.primaryMetric.detail}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xl sm:text-2xl font-bold font-mono text-slate-100">
                    {project.primaryMetric.value}
                  </span>
                  <p className="text-[9px] font-mono text-slate-400">
                    {project.primaryMetric.label}
                  </p>
                </div>
              </div>

              {/* Problem-Solution Architecture Summary */}
              <div className="space-y-2 mb-5 flex-1">
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {project.summary}
                </p>
                <p className="text-xs text-slate-500 leading-relaxed border-l-2 border-slate-800 pl-3 italic">
                  {project.architecture}
                </p>
              </div>

              {/* Technology Badges */}
              <div className="pt-4 border-t border-slate-800/80 mb-5">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800/80 text-[11px] font-mono text-slate-300 group-hover:border-slate-700/80 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-slate-200 hover:text-white hover:underline focus:outline-none focus:ring-1 focus:ring-sky-500 rounded"
                >
                  <Terminal className="w-3.5 h-3.5 text-sky-400" />
                  <span>System Deep-Dive</span>
                </button>

                <div className="flex items-center space-x-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono font-medium border border-slate-800 bg-slate-900/90 text-slate-300 hover:text-white hover:border-slate-700 transition-all"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code</span>
                      <ArrowUpRight className="w-3 h-3 text-slate-500" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Modal for In-depth Architecture Examination */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

      </div>
    </section>
  );
}
