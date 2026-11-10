import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MetricBar from './components/MetricBar';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import CertificationsSection from './components/CertificationsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#090a0f] text-slate-100 selection:bg-sky-500/20 selection:text-white font-sans antialiased">
      {/* Top Sticky Header */}
      <Header />

      <main>
        {/* Hero Section with profile & narrative */}
        <Hero />

        {/* Quantitative Metrics Bar */}
        <MetricBar />

        {/* Filterable Engineering Skills Grid */}
        <SkillsSection />

        {/* Featured Projects with deep-dive modals */}
        <ProjectsSection />

        {/* Professional Experience & Academic Research Timeline */}
        <ExperienceSection />

        {/* Certifications & Academic Credentials */}
        <CertificationsSection />

        {/* Contact Form & Direct Communication Channels */}
        <ContactSection />
      </main>

      {/* Corporate Engineering Footer */}
      <Footer />
    </div>
  );
}
