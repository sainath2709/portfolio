import React, { useState, useEffect } from 'react';
import { Download, Github, Linkedin, Mail, Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import { candidateProfile } from '../data/portfolioData';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Systems & Projects', href: '#projects' },
    { name: 'Experience & Research', href: '#experience' },
    { name: 'Credentials', href: '#credentials' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-[#090a0f]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40'
          : 'bg-[#090a0f]/70 backdrop-blur-sm border-b border-slate-900/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Mark & Monogram */}
          <div className="flex items-center space-x-3">
            <a
              href="#about"
              className="group flex items-center space-x-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded"
              aria-label="Chavva Sainath Reddy - Home"
            >
              <div className="w-9 h-9 rounded border border-slate-700/80 bg-slate-900/80 flex items-center justify-center font-mono text-xs font-semibold text-slate-200 group-hover:border-slate-500 group-hover:text-white transition-colors">
                {candidateProfile.monogram}
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-xs sm:text-sm font-bold tracking-wider text-slate-100 group-hover:text-white transition-colors">
                  CHAVVA SAINATH REDDY
                </span>
                <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1.5">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                  </span>
                  {candidateProfile.status}
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/50 rounded transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions & External Links */}
          <div className="hidden sm:flex items-center space-x-2">
            <a
              href={candidateProfile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-slate-100 hover:bg-slate-800/60 rounded border border-transparent hover:border-slate-700/60 transition-all"
              aria-label="GitHub Profile"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={candidateProfile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-slate-100 hover:bg-slate-800/60 rounded border border-transparent hover:border-slate-700/60 transition-all"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${candidateProfile.email}`}
              className="p-2 text-slate-400 hover:text-slate-100 hover:bg-slate-800/60 rounded border border-transparent hover:border-slate-700/60 transition-all"
              aria-label="Email Candidate"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <div className="h-4 w-px bg-slate-800 mx-1" />

            {/* Resume Button */}
            <a
              href={candidateProfile.resumePath}
              download="Chavva_Sainath_Reddy_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded border border-slate-700 bg-slate-900/90 text-slate-200 hover:bg-slate-800 hover:text-white hover:border-slate-500 transition-all shadow-sm"
            >
              <Download className="w-3.5 h-3.5 text-slate-300" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex sm:hidden items-center space-x-2">
            <a
              href={candidateProfile.resumePath}
              download="Chavva_Sainath_Reddy_Resume.pdf"
              className="p-1.5 text-slate-300 hover:text-white border border-slate-800 rounded bg-slate-900"
              aria-label="Download Resume"
            >
              <Download className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded border border-slate-800 bg-slate-900 text-slate-300 hover:text-white focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-down Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-[#090a0f]/95 backdrop-blur-md px-4 pt-2 pb-6 space-y-3">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded border border-transparent hover:border-slate-800 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <a
                href={candidateProfile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-400 hover:text-white bg-slate-900 rounded border border-slate-800"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={candidateProfile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-400 hover:text-white bg-slate-900 rounded border border-slate-800"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${candidateProfile.email}`}
                className="p-2 text-slate-400 hover:text-white bg-slate-900 rounded border border-slate-800"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <a
              href={candidateProfile.resumePath}
              download="Chavva_Sainath_Reddy_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded border border-slate-700 bg-slate-800 text-slate-100 hover:bg-slate-700"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
