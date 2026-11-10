import React, { useEffect } from 'react';
import { X, Github, ExternalLink, Activity, Layers, ArrowRight, Cpu, CheckCircle2 } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-700/80 bg-[#0d121c] p-6 sm:p-8 shadow-2xl text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg border border-slate-800 bg-slate-900 text-slate-400 hover:text-white hover:border-slate-600 transition-all"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pr-12">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-sky-500/10 text-sky-300 border border-sky-500/20">
              {project.subsystem}
            </span>
            <span className="text-xs font-mono text-slate-500">
              {project.timeline}
            </span>
          </div>

          <h3 id="modal-project-title" className="text-xl sm:text-2xl font-bold text-slate-100">
            {project.title}
          </h3>
        </div>

        {/* Primary Metric Callout */}
        <div className="my-6 p-4 rounded-xl border border-slate-800/80 bg-slate-900/60 flex items-center justify-between">
          <div>
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
              Evaluated Benchmark Metric
            </span>
            <p className="text-xs text-slate-300 mt-0.5">
              {project.primaryMetric.detail}
            </p>
          </div>
          <div className="text-right">
            <span className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-100">
              {project.primaryMetric.value}
            </span>
            <p className="text-[10px] font-mono text-slate-400">
              {project.primaryMetric.label}
            </p>
          </div>
        </div>

        {/* Architectural Overview */}
        <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-slate-400 rounded-sm" />
              Problem-Solution Architecture
            </h4>
            <p className="text-slate-400">
              {project.summary}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-slate-400 rounded-sm" />
              System Execution Details
            </h4>
            <p className="text-slate-400">
              {project.architecture}
            </p>
          </div>
        </div>

        {/* Pipeline Architecture Diagram / Flowchart */}
        {project.architectureDiagram && (
          <div className="my-6 p-4 rounded-xl border border-slate-800 bg-[#090d15]">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5 text-sky-400" />
              Pipeline Architecture Stages
            </h4>
            <div className="space-y-2.5">
              {project.architectureDiagram.steps.map((step, sIdx) => (
                <div key={sIdx} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded bg-slate-800 border border-slate-700/80 flex items-center justify-center font-mono text-[11px] text-slate-300 shrink-0 mt-0.5">
                    {sIdx + 1}
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-mono font-semibold text-slate-200">
                      {step.label}:
                    </span>
                    <span className="text-xs text-slate-400 ml-1.5">
                      {step.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Key Engineering Highlights */}
        <div className="my-6">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            Key Engineering Highlights &amp; Innovations
          </h4>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
            {project.keyHighlights.map((hl, hIdx) => (
              <li key={hIdx} className="flex items-start gap-2">
                <span className="text-slate-600 font-mono mt-1">▸</span>
                <span>{hl}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Badges */}
        <div className="pt-4 border-t border-slate-800">
          <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block mb-2">
            Technologies &amp; Frameworks
          </span>
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech, tIdx) => (
              <span
                key={tIdx}
                className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded text-xs font-mono text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700 transition-colors"
          >
            Close Overview
          </button>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded bg-slate-200 text-slate-950 font-mono text-xs font-semibold hover:bg-white transition-all shadow-sm"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Inspect Source Repository</span>
            </a>
          )}
        </div>

      </div>
    </div>
  );
}
