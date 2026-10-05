export const SITE_METADATA = {
  name: "Chethan H S",
  role: "CSE Student / Developer",
  location: "Karnataka, India",
  email: "chethanhs.tech@gmail.com",
  github: "https://github.com/chethanhs-tech",
  linkedin: "https://www.linkedin.com/in/chethan-hs-05b19b334",
  resume: "/resume.pdf",
};

export const FOCUS = [
  {
    title: "Cloud Engineering",
    description: "Building resilient infrastructure and exploring scalable deployment strategies."
  },
  {
    title: "AI / GenAI",
    description: "Integrating intelligent systems and LLM workflows into practical applications."
  },
  {
    title: "Software Development",
    description: "Creating robust full-stack applications with clean, maintainable architecture."
  },
  {
    title: "Learning by Building",
    description: "Treating every project as an excuse to learn a new paradigm or technology."
  }
];

export const PROJECTS = [
  {
    id: "nulltrace",
    title: "Nulltrace",
    description: "AI-Powered Cyber Threat Detection Platform. Analyzes phishing, spam, and OTP scams using Gemini analysis and OCR. Features a Trust Score system and Chrome Extension integration with Supabase history.",
    tech: ["Next.js", "Supabase", "Gemini 2.5 Flash", "n8n", "Chrome Extension"],
    live: "",
    github: "https://github.com/chethanhs-tech/null-trace",
    status: "LIVE",
    featured: true
  },
  {
    id: "tracxnlabs",
    title: "TracxnLabs",
    description: "Secure Online Examination Platform. Implements robust edge functions and relational database architecture for reliable and tamper-proof remote assessment.",
    tech: ["React", "TypeScript", "Vite", "Supabase", "Edge Functions"],
    live: "https://transcxlabs.vercel.app/",
    github: "https://github.com/chethanhs-tech/-TranscxLabs",
    status: "LIVE",
    featured: true
  },
  {
    id: "grozosphere",
    title: "GrozoSphere",
    description: "Smart Grocery Inventory & Transaction Management. A full-stack solution handling complex database relations and real-time state synchronization.",
    tech: ["React", "JavaScript", "Supabase", "PostgreSQL", "Tailwind"],
    live: "https://dbms-project-neon.vercel.app/",
    github: "https://github.com/chethanhs-tech/DBMS-PROJECT",
    status: "LIVE",
    featured: true
  },
  {
    id: "guardian",
    title: "Guardian",
    description: "AI Proctoring Chrome Extension. Monitors user behavior and environment in real-time to ensure examination integrity.",
    tech: ["Chrome Extension", "JavaScript", "Supabase", "Gemini AI"],
    live: "",
    github: "https://github.com/chethanhs-tech/-VALAR-MORGHULIS",
    status: "LIVE",
    featured: false
  },
  {
    id: "nereid-x",
    title: "NEREID-X",
    description: "Sonar Analysis & Annotation Project. Early-stage development of an intelligent analysis pipeline for processing complex signal data.",
    tech: ["Python", "FastAPI", "AI", "ML"],
    live: "",
    github: "https://github.com/chethanhs-tech/NEREID-X",
    status: "BUILDING",
    featured: true
  }
];

export const JOURNEY = [
  {
    year: "Expected 2028",
    title: "B.E. Computer Science & Engineering",
    description: "Visvesvaraya Technological University (BIET). Building strong foundations in systems, algorithms, and networks.",
  },
  {
    year: "Ongoing",
    title: "Full-Stack & Cloud Architecture",
    description: "Developing robust web applications, exploring cloud deployment pipelines (Vercel, AWS), and mastering database design.",
  },
  {
    year: "Ongoing",
    title: "AI/GenAI Exploration",
    description: "Integrating LLMs (Gemini) into production workflows, building smart Chrome extensions, and studying applied machine learning.",
  },
  {
    year: "Currently",
    title: "Building NEREID-X",
    description: "Architecting a FastAPI-based sonar analysis tool, pushing boundaries in backend performance and data processing.",
  }
];

export const SKILLS = [
  { category: "Languages", items: ["C", "Python", "JavaScript", "SQL"] },
  { category: "Frontend", items: ["HTML", "CSS", "React", "Vite"] },
  { category: "Backend", items: ["Node.js", "REST APIs"] },
  { category: "Database", items: ["MySQL", "PostgreSQL", "Supabase", "Database Design"] },
  { category: "AI / GenAI", items: ["Generative AI", "Gemini API", "Prompt Engineering", "AI-assisted Development"] },
  { category: "Cloud / Deploy", items: ["AWS", "Supabase", "Vercel"] },
  { category: "Tools", items: ["Git", "GitHub", "VS Code", "Lovable AI", "Antigravity"] },
  { category: "Foundations", items: ["DSA", "DBMS", "Operating Systems", "Computer Networks", "Computer Organization"] }
];

export const DEV_NOTES_DRAFTS = [
  {
    id: "building-nulltrace",
    title: "Building Nulltrace: What I Learned Building an AI-Powered Threat Detection Platform",
    description: "A deep dive into integrating Gemini for phishing analysis, managing Chrome Extension states, and storing history with Supabase.",
    date: "2026-10-01",
    readingTime: "6 min",
    category: "Architecture",
    content: "<h2>The Architecture Behind Cyber Sentinel Intelligence</h2><p>Nulltrace was built to solve a growing problem: the sophisticated nature of modern phishing attacks that bypass traditional filters. I architected it as an advanced, AI-powered ecosystem designed to neutralize digital threats in real-time.</p><h3>Core Integrations & Chrome Extension (V3)</h3><p>At the heart of the platform is a sleek Chrome Extension using Manifest V3. By utilizing context-menu scanning, users can right-click any selected text—whether it's an email on Gmail or a message on WhatsApp Web—to instantly run it against our <strong>Cyber Sentinel</strong> engine.</p><h3>Voice Sentinel & Gemini 2.5 Flash</h3><p>One of the most challenging features to implement was the <strong>Voice Sentinel</strong>. Traditional scanners only look at text, but modern social engineering happens over audio (e.g., deepfakes, coercive voice notes). By combining <strong>Deepgram Nova-2</strong> for neural speech-to-text transcription and <strong>Gemini 2.5 Flash</strong> for threat analysis, Nulltrace can analyze emotional vectors, urgency tactics, and financial fraud scripts directly from audio uploads or live microphone captures.</p><h3>Automated Workflows with n8n</h3><p>To ensure threats are actioned immediately, I built end-to-end automation pipelines using <strong>n8n</strong>. High-risk scans automatically trigger WhatsApp notifications via webhooks, and the system aggregates 24-hour scan histories from our Supabase database to dispatch daily digest emails. This decoupled architecture allows the system to scale effortlessly without bogging down the main application thread.</p>"
  },
  {
    id: "tracxnlabs-architecture",
    title: "Building TracxnLabs: Lessons From an AI-Powered Examination Platform",
    description: "Exam architecture, coding evaluation, and lessons learned from deploying a secure remote testing ecosystem.",
    date: "2026-09-25",
    readingTime: "7 min",
    category: "Development",
    content: "<h2>The Examination Architecture</h2><p>When I set out to build TracxnLabs, the primary challenge wasn't just rendering questions to a student—it was maintaining examination integrity in a fully remote environment. The platform needed to handle automated coding evaluations alongside continuous telemetry.</p><h3>React & Supabase Synergy</h3><p>I built the student portal using <strong>React (Vite) and TypeScript</strong> to maintain a strict, type-safe frontend, powered by <strong>Supabase</strong> on the backend. This architecture allowed me to manage complex RBAC (Role-Based Access Control) efficiently between students and administrators. The coding challenge evaluation pipeline runs isolated executions, tracking execution time and output accuracy against predefined test cases.</p><h3>Deployment and Scaling</h3><p>Deploying the infrastructure taught me a lot about edge caching and serverless cold starts. By utilizing Edge Functions, the system can instantly reject invalid submission payloads before they hit the core relational database, drastically reducing database load during high-traffic examination windows.</p>"
  },
  {
    id: "guardian-proctoring",
    title: "Designing an AI-Assisted Proctoring Layer",
    description: "Architecting a Chrome extension to capture telemetry, browser events, and webcam snapshots for the TracxnLabs ecosystem.",
    date: "2026-09-20",
    readingTime: "5 min",
    category: "Chrome Extension",
    content: "<h2>Beyond the Browser Sandbox</h2><p>Alongside the TracxnLabs examination platform, I explored Guardian—a Chrome extension-based AI proctoring layer designed to capture exam events, telemetry, and snapshots, feeding them into an AI-assisted auditing workflow. Standard web APIs often fall short when trying to enforce strict lock-down environments.</p><h3>Event Capture and Telemetry</h3><p>The core of Guardian relies on monitoring specific browser activities: tab switching, fullscreen exits, and multi-face detection via webcam streams. By listening for <code>visibilitychange</code> and blur events on the window, the extension continuously tracks student focus. I engineered a <strong>Credibility Scoring Engine</strong> where specific violations (e.g., tab switching) deduct points from a starting integrity score of 100.</p><h3>AI Auditing</h3><p>When a violation is detected, an evidence screenshot is captured and securely uploaded to Supabase Storage. These snapshots are then queued for auditing to determine whether multiple faces or unauthorized materials are present in the frame. The primary lesson here was balancing aggressive telemetry capture without degrading the student's local machine performance.</p>"
  },
  {
    id: "grozosphere-supabase",
    title: "What I Learned Building GrozoSphere with Supabase",
    description: "Navigating relational database design, real-time sync, and complex state management in a modern React application.",
    date: "2026-09-15",
    readingTime: "5 min",
    category: "Database",
    content: "<h2>Managing State & Complexity</h2><p>Building <strong>GrozoSphere</strong>, a smart grocery inventory and transaction management system, taught me a lot about relational database design. When you are dealing with inventory that changes in real-time based on user transactions, standard state management inside React isn't enough.</p><h3>PostgreSQL & Supabase Realtime</h3><p>I utilized <strong>Supabase</strong> as the backend to leverage PostgreSQL's robust relational features. One of the primary challenges was ensuring that when a transaction occurs, the inventory counts are updated atomically so no race conditions happen during checkout. By relying on Supabase's real-time subscriptions, I was able to broadcast inventory changes across all active client sessions instantly.</p><h3>Tailwind & React Synchronization</h3><p>On the frontend, keeping the UI snappy while waiting for database mutations required optimistic UI updates. Combining React's local state management with Tailwind CSS allowed for a highly responsive, fluid user experience even when network latency spiked.</p>"
  }
];

