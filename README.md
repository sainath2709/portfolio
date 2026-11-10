# Chavva Sainath Reddy — Executive Developer Portfolio

> **Software Development Engineer | Data Scientist & Machine Learning Engineer**  
> B.Tech in Computer Science & Engineering (Data Science) — Vellore Institute of Technology (VIT Vellore)  
> CGPA: **9.01 / 10.0** | 1,000+ Algorithmic Problems Solved

---

## 🏛️ Architectural Overview & Design System

This repository hosts the official executive-grade developer portfolio website for **Chavva Sainath Reddy**. The design adheres to a formal, restrained corporate engineering aesthetic built with **React**, **Tailwind CSS**, and **Lucide Icons**:

- **Background:** Deep obsidian / zinc-950 (`#090a0f` / `#0b0f17`) with subtle engineering coordinate grid.
- **Surface Cards:** High-density dark slate (`#0d121c` / `#0d111a`) with 1px border (`#1e293b`) and backdrop blur.
- **Primary Text:** Crisp slate-100 (`#f1f5f9`).
- **Secondary Text:** Muted slate-400 (`#94a3b8`).
- **Strategic Accents:** Cold steel / icy metallic blue (`sky-400`, `sky-500/15`, `border-slate-700/60`).
- **Typography:** Inter sans-serif paired with monospace typography (`JetBrains Mono` / `Consolas`) for telemetry, badges, and commit hashes.
- **Accessibility:** 100% WCAG AA compliant with keyboard accessibility, semantic HTML, and high contrast ratios.

---

## 📂 Project Structure

```
Portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml              # Automated GitHub Pages CI/CD workflow
├── src/
│   ├── components/
│   │   ├── Header.jsx              # Sticky minimalist blur navigation with role status
│   │   ├── Hero.jsx                # Executive 2-column split with engineering profile frame
│   │   ├── MetricBar.jsx           # 4 quantitative impact indicators (CGPA, DSA, Accuracy, Certs)
│   │   ├── SkillsSection.jsx       # 5 categorized panels with live search & tab filters
│   │   ├── ProjectsSection.jsx     # Deep-dive cards for featured production systems
│   │   ├── ProjectModal.jsx        # Architectural modal with pipeline flowcharts & benchmarks
│   │   ├── ExperienceSection.jsx   # Timeline for Oracle internship & formal verification research
│   │   ├── CertificationsSection.jsx # IBM Full Stack 15-Course, Oracle Certified, Academic track
│   │   ├── ContactSection.jsx      # Direct inquiry channels with copy buttons & inquiry form
│   │   └── Footer.jsx              # Corporate engineering footer with Git telemetry
│   ├── data/
│   │   └── portfolioData.js        # Centralized data model & benchmark metrics
│   ├── App.jsx                     # Top-level React orchestration component
│   ├── main.jsx                    # React 18 DOM mount entry point
│   └── index.css                   # Tailwind base directives & custom scrollbars
├── index.html                      # High-performance self-contained SPA (direct zero-install static)
├── server.js                       # Zero-dependency Node.js HTTP server (MIME, SPA fallback, caching)
├── package.json                    # Project metadata and development scripts
├── resume.pdf                      # Official executive PDF resume
└── README.md                       # Architecture & deployment documentation
```

---

## ⚡ Quick Start & Local Execution

The website is completely self-contained and can be executed immediately using the included Node.js server or Python:

### Option 1: Built-in Node Server (Recommended)
```bash
node server.js
```
The server will bind to `http://localhost:3000/` (or the next available port) with instant hot-serving.

### Option 2: Python HTTP Server
```bash
python -m http.server 3000
```

---

## 🚀 Deployment Instructions

### GitHub Pages (1-Click)
1. Push this repository to your GitHub account:
   ```bash
   git add .
   git commit -m "feat: executive portfolio release v2.4"
   git push -u origin main
   ```
2. In your GitHub repository settings:
   - Navigate to **Settings** > **Pages**
   - Under **Build and deployment** > **Source**, select **GitHub Actions** (uses the included `.github/workflows/deploy.yml`) or select **Deploy from a branch** (`main` / `/ (root)`).
   - Your website will immediately be live at `https://<username>.github.io/<repository-name>/`.

### Vercel / Netlify
Deploy directly by connecting your GitHub repository. Root directory is set to `.`.

---

## 👤 Candidate Credentials & Contact

- **Full Name:** Chavva Sainath Reddy
- **Email:** [chavvasainath.r@gmail.com](mailto:chavvasainath.r@gmail.com)
- **Phone:** [+91-9515673919](tel:+919515673919)
- **GitHub:** [github.com/sainath2709](https://github.com/sainath2709)
- **LinkedIn:** [linkedin.com/in/chavvasainath-reddy](https://linkedin.com/in/chavvasainath-reddy)
- **Location:** Kadapa / Vellore, India
