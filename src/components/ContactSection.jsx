import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, Send, Github, Linkedin, MessageSquare, ArrowUpRight } from 'lucide-react';
import { candidateProfile } from '../data/portfolioData';

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState(null); // 'submitting', 'success'

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', organization: '', email: '', message: '' });
      setTimeout(() => setFormStatus(null), 5000);
    }, 700);
  };

  return (
    <section id="contact" className="py-16 lg:py-24 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 pb-6 border-b border-slate-800">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            <span>DISCUSS ROLES &amp; TECHNICAL INQUIRIES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-100">
            Get In Touch
          </h2>
          <p className="mt-2 text-sm text-slate-400 max-w-2xl">
            Currently interviewing for Software Development Engineer (SDE), Machine Learning Engineer, 
            and Data Scientist opportunities.
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Inquiry Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="rounded-xl border border-slate-800/80 bg-[#0d121c]/70 backdrop-blur-sm p-6 space-y-6">
              <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-slate-300">
                Direct Communication Channels
              </h3>

              {/* Email Card with Copy Button */}
              <div className="p-3.5 rounded-lg border border-slate-800 bg-slate-900/80 flex items-center justify-between group">
                <div className="flex items-center space-x-3 overflow-hidden">
                  <div className="p-2 rounded bg-slate-800/80 text-sky-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                      Email Address
                    </p>
                    <a
                      href={`mailto:${candidateProfile.email}`}
                      className="text-xs sm:text-sm font-mono text-slate-200 hover:text-white truncate block"
                    >
                      {candidateProfile.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(candidateProfile.email, 'email')}
                  className="p-2 rounded border border-slate-700/60 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all shrink-0 ml-2"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Phone Card with Copy Button */}
              <div className="p-3.5 rounded-lg border border-slate-800 bg-slate-900/80 flex items-center justify-between group">
                <div className="flex items-center space-x-3 overflow-hidden">
                  <div className="p-2 rounded bg-slate-800/80 text-sky-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                      Direct Telephone
                    </p>
                    <a
                      href={`tel:${candidateProfile.phone}`}
                      className="text-xs sm:text-sm font-mono text-slate-200 hover:text-white block"
                    >
                      {candidateProfile.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(candidateProfile.phone, 'phone')}
                  className="p-2 rounded border border-slate-700/60 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all shrink-0 ml-2"
                  title="Copy phone number to clipboard"
                  aria-label="Copy phone number"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-3.5 rounded-lg border border-slate-800 bg-slate-900/80 flex items-center space-x-3">
                <div className="p-2 rounded bg-slate-800/80 text-sky-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                    Geographic Base
                  </p>
                  <p className="text-xs sm:text-sm font-mono text-slate-200">
                    {candidateProfile.location}
                  </p>
                </div>
              </div>

              {/* Profiles & Repos */}
              <div className="pt-4 border-t border-slate-800/80 space-y-2">
                <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                  Verified Online Profiles
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={candidateProfile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded bg-slate-900 border border-slate-800 hover:border-slate-700 text-xs font-mono text-slate-300 hover:text-white transition-colors"
                  >
                    <span className="flex items-center gap-1.5">
                      <Github className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </span>
                    <ArrowUpRight className="w-3 h-3 text-slate-500" />
                  </a>

                  <a
                    href={candidateProfile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded bg-slate-900 border border-slate-800 hover:border-slate-700 text-xs font-mono text-slate-300 hover:text-white transition-colors"
                  >
                    <span className="flex items-center gap-1.5">
                      <Linkedin className="w-3.5 h-3.5" />
                      <span>LinkedIn</span>
                    </span>
                    <ArrowUpRight className="w-3 h-3 text-slate-500" />
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Clean Professional Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-xl border border-slate-800/80 bg-[#0d121c]/70 backdrop-blur-sm p-6 sm:p-8">
              <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-slate-300 mb-6 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-sky-400" />
                Dispatch Formal Inquiry
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-mono text-slate-400 mb-1.5">
                      Your Name / Recruiter <span className="text-sky-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-3 py-2 text-xs font-mono bg-slate-900/90 border border-slate-800 rounded text-slate-100 placeholder-slate-600 focus:outline-none focus:border-slate-600 focus:ring-1 focus:ring-sky-500/30"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-org" className="block text-xs font-mono text-slate-400 mb-1.5">
                      Organization / Company
                    </label>
                    <input
                      id="contact-org"
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="e.g. Google, Microsoft, Startup"
                      className="w-full px-3 py-2 text-xs font-mono bg-slate-900/90 border border-slate-800 rounded text-slate-100 placeholder-slate-600 focus:outline-none focus:border-slate-600 focus:ring-1 focus:ring-sky-500/30"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono text-slate-400 mb-1.5">
                    Email Address <span className="text-sky-400">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. s.jenkins@company.com"
                    className="w-full px-3 py-2 text-xs font-mono bg-slate-900/90 border border-slate-800 rounded text-slate-100 placeholder-slate-600 focus:outline-none focus:border-slate-600 focus:ring-1 focus:ring-sky-500/30"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono text-slate-400 mb-1.5">
                    Inquiry Details &amp; Scope <span className="text-sky-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Outline role details, team engineering challenges, or technical project scope..."
                    className="w-full px-3 py-2 text-xs font-mono bg-slate-900/90 border border-slate-800 rounded text-slate-100 placeholder-slate-600 focus:outline-none focus:border-slate-600 focus:ring-1 focus:ring-sky-500/30 resize-none"
                  ></textarea>
                </div>

                {formStatus === 'success' && (
                  <div className="p-3 rounded bg-emerald-950/40 border border-emerald-800/80 text-emerald-300 text-xs font-mono flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Inquiry logged successfully. Chavva Sainath Reddy will respond via email shortly.</span>
                  </div>
                )}

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-500">
                    Direct reply SLA: &lt; 24 business hours
                  </span>

                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-slate-200 hover:bg-white text-slate-950 font-mono text-xs font-semibold hover:shadow-md transition-all disabled:opacity-50"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{formStatus === 'submitting' ? 'Transmitting...' : 'Submit Inquiry'}</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
