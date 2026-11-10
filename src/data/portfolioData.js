/**
 * Chavva Sainath Reddy - Portfolio Data Architecture
 * Executive engineering profile, verified metrics, project deep dives, and credentials.
 */

export const candidateProfile = {
  name: "Chavva Sainath Reddy",
  monogram: "SR",
  title: "Software Development Engineer | Data Scientist & Machine Learning Engineer",
  status: "Available for Roles",
  location: "Kadapa / Vellore, India",
  email: "chavvasainath.r@gmail.com",
  phone: "+91-9515673919",
  github: "https://github.com/sainath2709",
  githubAlt: "https://github.com/chavvasainath-r",
  linkedin: "https://linkedin.com/in/chavvasainath-reddy",
  resumePath: "./resume.pdf",
  bioHeadline: "Engineering Scalable Software & High-Accuracy Deep Learning Systems.",
  bioSummary: [
    "B.Tech CSE (Data Science) graduate from VIT Vellore with rigorous foundations in Data Structures & Algorithms, Object-Oriented Design, and concurrent systems across C++, Java, and Python.",
    "Specialized in deep transfer learning pipelines (EfficientNet, DenseNet, Grad-CAM explainability) and deploying clinical-grade diagnostics alongside robust full-stack web architectures.",
    "Demonstrated problem-solver with 1,000+ competitive programming challenges solved and an active builder of distributed, reactive, and telemetry-driven software."
  ],
  educationSummary: "B.Tech CSE (Data Science) • VIT Vellore"
};

export const impactMetrics = [
  {
    value: "9.01",
    label: "VIT Vellore CGPA",
    subtext: "Computer Science & Engineering (Data Science)",
    icon: "GraduationCap"
  },
  {
    value: "1,000+",
    label: "DSA Problems Solved",
    subtext: "LeetCode, GfG, HackerRank & Coding Ninjas",
    icon: "Code2"
  },
  {
    value: "99.9%",
    label: "Validation Accuracy",
    subtext: "Parkinson's Disease MRI Neural Classifier",
    icon: "Activity"
  },
  {
    value: "15 Courses",
    label: "IBM Full-Stack Developer",
    subtext: "Coursera Professional Certificate Specialization",
    icon: "Award"
  }
];

export const skillCategories = [
  {
    id: "core-cs",
    title: "Core Languages & CS Fundamentals",
    badge: "Foundations",
    description: "Algorithmic complexity, systems thinking, concurrency verification, and object-oriented architectures.",
    skills: [
      { name: "C++", level: "Advanced", tag: "System / DSA" },
      { name: "Java", level: "Advanced", tag: "OOP / Enterprise" },
      { name: "Python", level: "Expert", tag: "ML / Backend" },
      { name: "C", level: "Proficient", tag: "Low-level" },
      { name: "SQL", level: "Advanced", tag: "Relational DB" },
      { name: "R", level: "Proficient", tag: "Data Analysis" },
      { name: "JavaScript (ES6+)", level: "Advanced", tag: "Full-Stack" },
      { name: "Data Structures & Algorithms", level: "Expert", tag: "1,000+ Solved" },
      { name: "Object-Oriented Programming (OOP)", level: "Expert", tag: "Design Patterns" },
      { name: "Database Management Systems (DBMS)", level: "Advanced", tag: "ACID / Schema" },
      { name: "Concurrency Verification", level: "Research", tag: "Pi-Calculus / SPIN" }
    ]
  },
  {
    id: "ai-cv",
    title: "AI, Computer Vision & Data Science",
    badge: "Deep Learning",
    description: "End-to-end model training, transfer learning, clinical image processing, and diagnostic explainability.",
    skills: [
      { name: "TensorFlow / Keras", level: "Advanced", tag: "Deep Learning" },
      { name: "PyTorch", level: "Proficient", tag: "Research Models" },
      { name: "Scikit-learn", level: "Advanced", tag: "Classical ML" },
      { name: "OpenCV", level: "Advanced", tag: "Computer Vision" },
      { name: "DenseNet / EfficientNet", level: "Expert", tag: "CNN Architectures" },
      { name: "Transfer Learning", level: "Expert", tag: "Fine-Tuning" },
      { name: "Grad-CAM", level: "Advanced", tag: "Model Explainability" },
      { name: "Pandas & NumPy", level: "Expert", tag: "Vectorized Computing" },
      { name: "Matplotlib & Seaborn", level: "Advanced", tag: "Scientific Viz" }
    ]
  },
  {
    id: "web-fullstack",
    title: "Full-Stack Engineering & Web",
    badge: "Web Systems",
    description: "Responsive frontend systems, component architectures, and scalable RESTful API backends.",
    skills: [
      { name: "React.js", level: "Advanced", tag: "Frontend SPA" },
      { name: "Node.js", level: "Advanced", tag: "Async Backend" },
      { name: "Express.js", level: "Advanced", tag: "Microservices" },
      { name: "Flask", level: "Advanced", tag: "ML Model Serving" },
      { name: "Tailwind CSS", level: "Expert", tag: "Design Systems" },
      { name: "RESTful APIs", level: "Advanced", tag: "API Design" },
      { name: "HTML5 / Semantic Web", level: "Expert", tag: "Accessibility" },
      { name: "CSS3 / Modern Layouts", level: "Advanced", tag: "Flex / Grid" },
      { name: "Bootstrap 5", level: "Proficient", tag: "UI Components" }
    ]
  },
  {
    id: "databases",
    title: "Databases & Data Storage",
    badge: "Persistence",
    description: "Relational normalization (3NF), NoSQL document storage, transaction management, and spatial indexing.",
    skills: [
      { name: "MySQL", level: "Advanced", tag: "RDBMS" },
      { name: "MongoDB", level: "Proficient", tag: "Document Store" },
      { name: "Oracle Database", level: "Certified", tag: "Oracle Academy" },
      { name: "Firebase Firestore", level: "Proficient", tag: "Real-Time NoSQL" },
      { name: "SQLite", level: "Advanced", tag: "Embedded Store" }
    ]
  },
  {
    id: "devops-tools",
    title: "Cloud, DevOps & Tooling",
    badge: "Infrastructure",
    description: "Containerization, automated build pipelines, cloud hosting, and robust developer workflows.",
    skills: [
      { name: "Docker", level: "Proficient", tag: "Containerization" },
      { name: "Git & Version Control", level: "Advanced", tag: "Branching / CI" },
      { name: "GitHub Actions", level: "Proficient", tag: "CI/CD Pipelines" },
      { name: "AWS (EC2, S3)", level: "Working Knowledge", tag: "Cloud Infrastructure" },
      { name: "Google Cloud Platform (GCP)", level: "Working Knowledge", tag: "Cloud Compute" },
      { name: "Postman", level: "Advanced", tag: "API Testing" },
      { name: "Linux / Bash", level: "Advanced", tag: "CLI / Shell" },
      { name: "VS Code", level: "Expert", tag: "Primary IDE" }
    ]
  }
];

export const featuredProjects = [
  {
    id: "parkinsons-mri",
    title: "Parkinson's Disease Detection from MRI Scans",
    timeline: "Dec 2025 – Jun 2026",
    subsystem: "Deep Transfer Learning & Clinical Web System",
    category: "ai-cv",
    primaryMetric: {
      value: "99.9%",
      label: "Validation Accuracy",
      detail: "EfficientNetB3, DenseNet121, MobileNetV3"
    },
    summary:
      "Engineered an end-to-end clinical diagnostic system for early Parkinson's detection from brain MRI neuroimaging. Evaluated multiple deep CNN architectures via transfer learning with custom augmentation pipelines to prevent overfitting, achieving 99.9% validation accuracy.",
    architecture:
      "Integrated fine-tuned convolutional backbones with a Flask microservice featuring patient authentication, real-time slice inference, Grad-CAM heatmap generation for clinical explainability, and an integrated DeepSeek API medical chatbot assistant for interactive diagnosis interpretation.",
    keyHighlights: [
      "Benchmarked DenseNet121, EfficientNetB3, ResNet50, and MobileNetV3 with custom learning rate schedules and class-balancing.",
      "Embedded real-time Grad-CAM saliency maps directly into the diagnostic UI for radiologist visual attribution.",
      "Integrated DeepSeek API assistant for automated natural language summaries of diagnostic outputs and patient history logs.",
      "Containerized Flask inference backend with secure session handling and file upload sanitization."
    ],
    techStack: ["TensorFlow", "Flask", "DeepSeek API", "Grad-CAM", "EfficientNet", "DenseNet", "Python", "Tailwind CSS"],
    githubUrl: "https://github.com/sainath2709/parkinsons_web",
    liveDemoUrl: null,
    architectureDiagram: {
      steps: [
        { label: "MRI Ingestion", desc: "Multi-axis scan upload & DICOM/PNG validation" },
        { label: "Preprocessing", desc: "Z-score normalization, targeted affine augmentations" },
        { label: "Transfer Learning", desc: "Dual-backbone (EfficientNetB3 + DenseNet121) feature extractor" },
        { label: "Grad-CAM Layer", desc: "Gradient-weighted class activation mapping for visual attribution" },
        { label: "Flask Service", desc: "Authenticated REST endpoints with DeepSeek AI query assistant" }
      ]
    }
  },
  {
    id: "malaria-detection",
    title: "Species-Level Malaria Parasite Detection",
    timeline: "Jul 2025 – Dec 2025",
    subsystem: "Thin Blood Smear Multi-Class Classifier",
    category: "ai-cv",
    primaryMetric: {
      value: "97.0%",
      label: "Diagnostic Accuracy",
      detail: "P. falciparum vs. P. ovale differentiation"
    },
    summary:
      "Formulated a high-accuracy species-level computer vision classifier distinguishing Plasmodium falciparum from Plasmodium ovale in Giemsa-stained thin blood smear micrographs under severe real-world class imbalance.",
    architecture:
      "Trained parameter-efficient DenseNet and EfficientNet architectures with targeted stain augmentation, weighted categorical cross-entropy loss, and Grad-CAM interpretability. Deployed inference via a lightweight Flask REST microservice for point-of-care clinic testing.",
    keyHighlights: [
      "Overcame 10:1 clinical class disparity using minority over-sampling and cost-sensitive loss formulations.",
      "Achieved 97.0% classification accuracy while cutting false-negative diagnosis rates on lethal P. falciparum strains.",
      "Rendered diagnostic attribution heatmaps pinpointing intra-erythrocytic chromatin dots and ring-stage trophozoites.",
      "Packaged into a low-latency REST API suitable for resource-constrained field laboratories."
    ],
    techStack: ["TensorFlow", "DenseNet", "EfficientNet", "OpenCV", "Flask", "NumPy", "Python"],
    githubUrl: "https://github.com/sainath2709/MP-IDB-The-Malaria-Parasite-Image-Database-for-Image-Processing-and-Analysis",
    liveDemoUrl: null,
    architectureDiagram: {
      steps: [
        { label: "Blood Smear Micrograph", desc: "Giemsa-stained thin smear optical microscopy" },
        { label: "Erythrocyte Isolation", desc: "Adaptive Otsu thresholding & contour boundary extraction" },
        { label: "Class-Balanced CNN", desc: "DenseNet backbone with cost-sensitive weighted loss" },
        { label: "Explainability", desc: "Grad-CAM localized activation on intracellular trophozoites" },
        { label: "API Output", desc: "Species probability distribution & risk stratification" }
      ]
    }
  },
  {
    id: "bus-geospatial-simulation",
    title: "Real-Time Bus Route Geospatial Simulation",
    timeline: "Apr 2025",
    subsystem: "Reactive Geospatial Telemetry Dashboard",
    category: "fullstack",
    primaryMetric: {
      value: "< 50ms",
      label: "Update Latency",
      detail: "Dual transit corridor GPX streaming"
    },
    summary:
      "Architected a high-frequency geospatial tracking and visualization tool that simulates moving public transit vehicles along real-world transit routes between VIT-C and Kadapa corridors.",
    architecture:
      "Parsed high-resolution GPX telemetry coordinate logs, interpolated time-series velocity vectors, and streamed positional states to an interactive Leaflet mapping overlay within a reactive R Shiny architecture.",
    keyHighlights: [
      "Engineered coordinate parsing and interpolation algorithms for high-density GPX latitude/longitude waypoint logs.",
      "Rendered dynamic vehicle markers with real-time speed, direction vector, and upcoming stop time estimators.",
      "Built responsive telemetry controls allowing playback scrubbing, simulation speed multipliers, and route switching."
    ],
    techStack: ["R", "Shiny", "Leaflet", "GPX Telemetry", "Spatial Analysis", "CSS3"],
    githubUrl: "https://github.com/sainath2709",
    liveDemoUrl: null,
    architectureDiagram: {
      steps: [
        { label: "GPX Coordinates", desc: "Raw latitude/longitude/elevation time logs" },
        { label: "Spatial Filter", desc: "Haversine distance & velocity vector derivation" },
        { label: "Shiny Reactive Engine", desc: "State machine tracking scheduled vs actual transit timing" },
        { label: "Leaflet Tile Renderer", desc: "Interactive map layer with animated SVG vehicle markers" }
      ]
    }
  },
  {
    id: "tiffin-box-ecommerce",
    title: "Scalable Food Ordering E-Commerce Platform",
    timeline: "Apr 2024",
    subsystem: "Full-Stack Web Application",
    category: "fullstack",
    primaryMetric: {
      value: "100%",
      label: "Client-Server Sync",
      detail: "Modular state & REST order flow"
    },
    summary:
      "Developed a robust full-stack food ordering platform designed for responsive menu discovery, real-time cart state management, and streamlined server-side order processing.",
    architecture:
      "Built with a decoupled frontend interface interacting with a Node.js/Express.js backend. Implemented structured cart state handling, customer checkout flows, input validation schemas, and modular order status lifecycles.",
    keyHighlights: [
      "Architected responsive UI with modern CSS layouts and accessible keyboard navigation.",
      "Engineered cart state persistence across page sessions with dynamic price and tax calculation.",
      "Implemented modular Node.js REST API routes for catalog querying, order dispatching, and error handling."
    ],
    techStack: ["Node.js", "Express.js", "JavaScript (ES6+)", "HTML5", "CSS3", "REST APIs"],
    githubUrl: "https://github.com/sainath2709/Tiffin-Box",
    liveDemoUrl: null,
    architectureDiagram: {
      steps: [
        { label: "Client UI", desc: "Responsive menu catalog, cart manager, checkout interface" },
        { label: "State Controller", desc: "Local state sync, tax calculation, order payload packaging" },
        { label: "Express API", desc: "Input sanitization, route dispatch, order lifecycle handler" },
        { label: "Response Pipeline", desc: "Structured JSON response with confirmation token" }
      ]
    }
  },
  {
    id: "embedded-security-lock",
    title: "Microcontroller Digital Security Access Lock",
    timeline: "Apr 2025",
    subsystem: "Hardware-Firmware Logic System",
    category: "embedded",
    primaryMetric: {
      value: "0% Volatility",
      label: "EEPROM State Persistence",
      detail: "Hardware power-loss safe"
    },
    summary:
      "Built an embedded hardware access control system utilizing an Arduino Uno, 4x4 matrix keypad, alphanumeric LCD, and non-volatile EEPROM storage for physical security verification.",
    architecture:
      "Authored clean, non-blocking C++ embedded firmware implementing debounced key scanning, state-machine password validation, lockout timers on brute-force attempts, and EEPROM register writes for persistent passcode configuration.",
    keyHighlights: [
      "Utilized EEPROM memory registers ensuring passcode persistence through complete power cutoffs.",
      "Implemented anti-tamper logic with exponential backoff delays on consecutive failed access attempts.",
      "Programmed real-time visual feedback routines on a 16x2 LCD display with acoustic buzzer diagnostics."
    ],
    techStack: ["Arduino Uno", "C++", "Embedded Systems", "EEPROM", "Hardware Interfacing"],
    githubUrl: "https://github.com/sainath2709",
    liveDemoUrl: null,
    architectureDiagram: {
      steps: [
        { label: "Matrix Keypad (4x4)", desc: "Row/column scan interrupt with software debouncing" },
        { label: "Firmware State Machine", desc: "Passcode validation, brute-force counter, state transition" },
        { label: "Non-Volatile EEPROM", desc: "Encrypted memory storage surviving power outages" },
        { label: "Actuator & Display", desc: "Solenoid lock trigger + 16x2 LCD diagnostic output" }
      ]
    }
  }
];

export const experienceData = [
  {
    role: "Database Foundations Intern",
    organization: "Oracle Academy",
    timeline: "May 2024 – Jun 2024",
    type: "Professional Experience",
    badge: "Industry Internship",
    summary:
      "Completed rigorous database engineering internship covering enterprise relational database architecture, logical entity-relationship (ER) modeling, Third Normal Form (3NF) relational normalization, and complex multi-table SQL query optimizations.",
    highlights: [
      "Engineered relational schemas with foreign key integrity constraints, indexing, and transactional ACID compliance.",
      "Crafted advanced SQL queries utilizing aggregate functions, nested subqueries, table joins, and stored views.",
      "Earned the official Oracle Database Foundations Certified Professional credential as part of VIT's academic honors curriculum."
    ],
    skills: ["SQL", "Relational Database Design", "ER Modeling", "3NF Normalization", "Oracle DB"]
  },
  {
    role: "Formal Concurrency Verification Researcher",
    organization: "VIT Vellore Research Initiative",
    timeline: "Apr 2024",
    type: "Academic Research",
    badge: "Systems Research",
    summary:
      "Conducted formal mathematical modeling and verification of multi-agent distributed concurrency systems using process calculus and model checking tools.",
    highlights: [
      "Modeled asynchronous message-passing communication protocols using Pi-Calculus process algebra.",
      "Formulated verification specifications and validated deadlock-freeness and liveness invariants using the SPIN model checker.",
      "Demonstrated how formal algebraic proofs prevent race conditions in safety-critical distributed software systems."
    ],
    skills: ["Pi-Calculus", "SPIN Model Checker", "Formal Verification", "Concurrency", "Distributed Systems"]
  },
  {
    role: "Deep Learning Research — Parasite Diagnostics",
    organization: "Academic Research Project",
    timeline: "Jul 2025 – Dec 2025",
    type: "Academic Research",
    badge: "Clinical AI Research",
    summary:
      "Led comparative analysis of parameter-efficient deep transfer learning architectures (DenseNet vs. EfficientNet) applied to optical microscopic diagnosis under extreme class distribution imbalances.",
    highlights: [
      "Formulated synthetic stain perturbation algorithms simulating clinic-to-clinic staining variations.",
      "Co-authored technical research documentation detailing diagnostic attribution via Grad-CAM saliency maps."
    ],
    skills: ["Transfer Learning", "DenseNet", "Grad-CAM", "Medical Image Processing", "Research Documentation"]
  }
];

export const certificationsData = [
  {
    title: "IBM Full Stack Software Developer Professional Certificate",
    issuer: "Coursera (IBM)",
    timeline: "2024 – 2025",
    category: "Full Stack & Cloud",
    badge: "15-Course Specialization",
    description:
      "Comprehensive 15-course professional curriculum spanning React.js frontend development, Node.js & Express backends, Python Flask microservices, Django, Docker containerization, Kubernetes, CI/CD automated deployment, and Generative AI application engineering.",
    credentialUrl: "https://github.com/sainath2709/IBM-Developing-Front-End-Apps-With-React"
  },
  {
    title: "Oracle Database Foundations Certified Specialist",
    issuer: "Oracle Academy",
    timeline: "Jun 2024",
    category: "Databases & Architecture",
    badge: "Official Certification",
    description:
      "Verified mastery in relational database architecture, relational algebra, logical schema modeling, multi-table SQL queries, normalization up to 3NF, and database integrity constraints.",
    credentialUrl: "https://github.com/sainath2709"
  },
  {
    title: "Algorithmic Problem Solving Mastery (1,000+ DSA)",
    issuer: "LeetCode, GeeksforGeeks, HackerRank, Coding Ninjas",
    timeline: "2022 – Present",
    category: "Algorithms & Systems",
    badge: "1,000+ Problems",
    description:
      "Systematic mastery of advanced data structures: Dynamic Programming, Graph Algorithms (Dijkstra, BFS/DFS, TopoSort), Trees, Bit Manipulation, Heap/Priority Queues, and Object-Oriented System Design in C++, Java, and Python.",
    credentialUrl: "https://github.com/sainath2709"
  }
];

export const academicMilestones = [
  {
    degree: "B.Tech in Computer Science and Engineering (Data Science)",
    institution: "Vellore Institute of Technology (VIT Vellore)",
    timeline: "2022 – 2026",
    score: "CGPA: 9.01 / 10.0",
    badge: "Distinction Grade",
    details: "Core Coursework: Data Structures & Algorithms, Operating Systems, Database Systems, Computer Networks, Machine Learning, Deep Learning, Software Engineering."
  },
  {
    degree: "Board of Intermediate Education (Class XII)",
    institution: "Andhra Pradesh State Board",
    timeline: "2020 – 2022",
    score: "Percentage: 97.1%",
    badge: "Academic Excellence",
    details: "Mathematics, Physics, Chemistry stream with top-percentile academic standing."
  },
  {
    degree: "Board of Secondary Education (Class X - SSC)",
    institution: "Andhra Pradesh State Board",
    timeline: "2020",
    score: "GPA: 10.0 / 10.0",
    badge: "Perfect GPA",
    details: "Perfect score across Mathematics, Science, and Social Sciences."
  }
];
