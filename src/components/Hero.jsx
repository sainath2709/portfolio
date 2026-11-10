import React, { useState } from 'react';
import { ArrowRight, Mail, Terminal, Shield, Cpu, MapPin, CheckCircle2 } from 'lucide-react';
import { candidateProfile } from '../data/portfolioData';

export default function Hero() {
  const imageCandidates = ['./profile.jpg', './profile.png', './profile.jpeg', './profile.webp'];
  const [candidateIdx, setCandidateIdx] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(true);

  const handleImageError = () => {
    if (candidateIdx < imageCandidates.length - 1) {
      setCandidateIdx(candidateIdx + 1);
    } else {
      setImageLoaded(false);
    }
  };

  return (
    <section id="about" className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 overflow-hidden">
      {/* Subtle Engineering Grid Backdrop */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, #94a3b8 1px, transparent 1px), linear-gradient(to bottom, #94a3b8 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Narrative & Technical Profile */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Micro-badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-800 bg-slate-900/90 text-xs font-mono text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
              <span>{candidateProfile.educationSummary}</span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-400">CGPA 9.01</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-100 leading-[1.15]">
              Engineering Scalable Software &amp; High-Accuracy Deep Learning Systems.
            </h1>

            {/* Narrative Overview */}
            <div className="space-y-3 text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl">
              <p>
                Computer Science &amp; Engineering graduate with deep foundations in Data Structures, Algorithms, 
                and Object-Oriented software engineering across <span className="text-slate-200 font-medium">C++, Java, and Python</span>.
              </p>
              <p>
                Specialized in training fine-tuned convolutional architectures (<span className="text-slate-200 font-medium">DenseNet, EfficientNet</span>) with 
                target-augmented transfer learning and <span className="text-slate-200 font-medium">Grad-CAM</span> diagnostic explainability, 
                reaching 99.9% validation accuracy in clinical imaging.
              </p>
              <p>
                Experienced in deploying low-latency web backends, microservices (<span className="text-slate-200 font-medium">Node.js, Express, Flask</span>), 
                and reactive telemetry systems engineered for deterministic reliability.
              </p>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-slate-100 text-slate-950 font-medium text-xs sm:text-sm hover:bg-white hover:shadow-md hover:shadow-sky-500/10 transition-all font-mono"
              >
                <span>Explore Technical Work</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded border border-slate-800 bg-slate-900/80 text-slate-300 font-medium text-xs sm:text-sm hover:bg-slate-800/80 hover:text-white hover:border-slate-700 transition-all font-mono"
              >
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span>Get in Touch</span>
              </a>

              <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-500 font-mono pl-3 border-l border-slate-800">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                <span>{candidateProfile.location}</span>
              </div>
            </div>

            {/* Systems Indicator Tags */}
            <div className="pt-4 flex flex-wrap items-center gap-2 text-[11px] font-mono text-slate-400">
              <span className="text-slate-500">Core Focus:</span>
              <span className="px-2 py-0.5 rounded border border-slate-800/80 bg-slate-900/60 text-slate-300">
                Backend Architecture
              </span>
              <span className="px-2 py-0.5 rounded border border-slate-800/80 bg-slate-900/60 text-slate-300">
                Computer Vision
              </span>
              <span className="px-2 py-0.5 rounded border border-slate-800/80 bg-slate-900/60 text-slate-300">
                Transfer Learning
              </span>
              <span className="px-2 py-0.5 rounded border border-slate-800/80 bg-slate-900/60 text-slate-300">
                Distributed Telemetry
              </span>
            </div>

          </div>

          {/* Right Column: Engineering Framed Profile Container */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-square">
              
              {/* Engineering Corner Crosshairs */}
              <div className="absolute -top-2 -left-2 text-slate-600 font-mono text-xs select-none pointer-events-none z-20">+</div>
              <div className="absolute -top-2 -right-2 text-slate-600 font-mono text-xs select-none pointer-events-none z-20">+</div>
              <div className="absolute -bottom-2 -left-2 text-slate-600 font-mono text-xs select-none pointer-events-none z-20">+</div>
              <div className="absolute -bottom-2 -right-2 text-slate-600 font-mono text-xs select-none pointer-events-none z-20">+</div>

              {/* Engineering Blueprint Frame */}
              <div className="w-full h-full rounded-2xl border border-slate-800 bg-[#0b0f17] p-2 relative shadow-2xl shadow-black/80 flex flex-col justify-between overflow-hidden group">
                
                {/* Frame Sub-header Tag */}
                <div className="flex items-center justify-between px-2 py-1 text-[10px] font-mono text-slate-500 border-b border-slate-800/80 pb-1.5 mb-1">
                  <span>ID: CSR-2026-VIT</span>
                  <span className="text-emerald-500 flex items-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-emerald-500" />
                    VERIFIED
                  </span>
                </div>

                {/* Main Image Area with Smart Fallback */}
                <div className="relative flex-1 w-full rounded-xl overflow-hidden bg-slate-900/90 border border-slate-800/60 flex items-center justify-center">
                  {imageLoaded ? (
                    <img
                      src={imageCandidates[candidateIdx]}
                      alt="Chavva Sainath Reddy"
                      className="w-full h-full object-cover rounded-xl transition-all duration-300 group-hover:scale-[1.02]"
                      onError={handleImageError}
                    />
                  ) : (
                    /* Elegant Typographic Monogram Fallback */
                    <div className="w-full h-full flex flex-col items-center justify-center relative p-6 bg-gradient-to-b from-slate-900 via-[#0d121d] to-[#090d15]">
                      {/* Geometric grid lines */}
                      <div 
                        className="absolute inset-0 opacity-[0.07]"
                        style={{
                          backgroundImage: `radial-gradient(#38bdf8 1px, transparent 1px)`,
                          backgroundSize: '16px 16px'
                        }}
                      />
                      
                      {/* Monogram Emblem */}
                      <div className="relative z-10 w-24 h-24 rounded-xl border border-slate-700/80 bg-slate-800/60 flex items-center justify-center shadow-inner">
                        <span className="font-mono text-3xl font-extrabold tracking-wider text-slate-100">
                          {candidateProfile.monogram}
                        </span>
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-sky-500/80 border border-slate-900 rounded-sm" />
                      </div>

                      <div className="relative z-10 mt-4 text-center">
                        <p className="font-mono text-sm font-semibold text-slate-200">
                          {candidateProfile.name}
                        </p>
                        <p className="text-[11px] font-mono text-slate-400 mt-0.5">
                          VIT Vellore • SDE &amp; AI
                        </p>
                      </div>

                      <div className="relative z-10 mt-4 px-3 py-1 rounded bg-slate-800/60 border border-slate-700/50 text-[10px] font-mono text-slate-400 flex items-center gap-1.5">
                        <Terminal className="w-3 h-3 text-sky-400" />
                        <span>profile.jpg [fallback active]</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Frame Footer Metadata */}
                <div className="mt-2 pt-1.5 border-t border-slate-800/80 px-2 flex items-center justify-between text-[10px] font-mono text-slate-500">
                  <span>SPEC: B.Tech CSE (Data Science)</span>
                  <span className="text-slate-400">SYS_READY</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
