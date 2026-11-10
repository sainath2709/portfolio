import React from 'react';
import { Award, GraduationCap, CheckCircle2, ExternalLink, Code2, ShieldCheck, BookOpen } from 'lucide-react';
import { certificationsData, academicMilestones } from '../data/portfolioData';

export default function CertificationsSection() {
  return (
    <section id="credentials" className="py-16 lg:py-24 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 pb-6 border-b border-slate-800">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            <span>STANDARDS &amp; VERIFIED MILESTONES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-100">
            Certifications &amp; Academic Credentials
          </h2>
          <p className="mt-2 text-sm text-slate-400 max-w-2xl">
            Industry specializations, algorithmic problem-solving verifications, and academic excellence milestones.
          </p>
        </div>

        {/* 2-Column Split: Left = Certifications & Algorithms, Right = Academic Milestones */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Certifications */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800/60">
              <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                <Award className="w-4 h-4 text-sky-400" />
                Industry Professional Certifications
              </h3>
              <span className="text-xs font-mono text-slate-500">Verified</span>
            </div>

            <div className="space-y-4">
              {certificationsData.map((cert, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-slate-800/80 bg-[#0d121c]/70 backdrop-blur-sm p-5 hover:border-slate-700 transition-all group"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-sky-500/10 text-sky-300 border border-sky-500/20">
                      {cert.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-500">
                      {cert.timeline}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-slate-100 group-hover:text-white transition-colors">
                    {cert.title}
                  </h4>

                  <p className="text-xs font-mono text-slate-400 mt-0.5 mb-3">
                    Issuer: <span className="text-slate-300">{cert.issuer}</span>
                  </p>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {cert.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-slate-500">
                      Domain: {cert.category}
                    </span>
                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-mono text-slate-300 hover:text-white hover:underline"
                      >
                        <span>View Repository / Verification</span>
                        <ExternalLink className="w-3 h-3 text-slate-500" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Academic Track Record */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800/60">
              <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-emerald-400" />
                Academic Track Record
              </h3>
              <span className="text-xs font-mono text-slate-500">VIT Vellore &amp; AP State</span>
            </div>

            <div className="space-y-4">
              {academicMilestones.map((milestone, mIdx) => (
                <div
                  key={mIdx}
                  className="rounded-xl border border-slate-800/80 bg-[#0d121c]/70 backdrop-blur-sm p-5 hover:border-slate-700 transition-all"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                      {milestone.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-500">
                      {milestone.timeline}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-slate-100">
                    {milestone.degree}
                  </h4>

                  <p className="text-xs text-slate-400 mt-0.5 mb-2">
                    {milestone.institution}
                  </p>

                  <div className="my-2.5 p-2 rounded bg-slate-900 border border-slate-800 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-slate-400">Score / Cumulative</span>
                    <span className="text-xs font-mono font-bold text-slate-100">
                      {milestone.score}
                    </span>
                  </div>

                  <p className="text-[11px] text-slate-400 leading-snug">
                    {milestone.details}
                  </p>
                </div>
              ))}
            </div>

            {/* Quick DSA Verification Callout */}
            <div className="p-4 rounded-xl border border-slate-800 bg-[#0b0f17] flex items-start gap-3">
              <Code2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
              <div>
                <h5 className="text-xs font-mono font-bold text-slate-200">
                  Algorithmic Rigor: 1,000+ Problems Solved
                </h5>
                <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                  Extensive problem solving covering competitive graphs, dynamic programming, 
                  and systems concurrency across LeetCode, GfG, HackerRank, and Coding Ninjas.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
