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
    live: "https://transcx-labs.vercel.app/",
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
    content: `
      <h3 class="text-lg font-bold text-foreground mt-6 mb-3">Introduction</h3>
      <p class="mb-4 text-muted/90 leading-relaxed">Nulltrace was built to solve a growing problem: the sophisticated nature of modern phishing attacks that easily bypass traditional filters. I architected it as an advanced, AI-powered ecosystem designed to neutralize digital threats in real-time, operating directly where users are most vulnerable: the browser.</p>
      
      <h3 class="text-lg font-bold text-foreground mt-6 mb-3">Why I Built It</h3>
      <p class="mb-4 text-muted/90 leading-relaxed">I noticed that traditional scanners rely heavily on static blocklists and keyword matching. When scammers pivot to audio deepfakes, coercive voice notes, or heavily obfuscated text, legacy systems fail. I wanted to build a system that <strong class="text-foreground">understands intent</strong> rather than just matching patterns.</p>
      
      <h3 class="text-lg font-bold text-foreground mt-6 mb-3">Approach & Architecture</h3>
      <p class="mb-4 text-muted/90 leading-relaxed">The core of the platform is a sleek <span class="text-accent font-mono text-sm bg-white/5 border border-white/10 px-1.5 py-0.5 rounded">Manifest V3</span> Chrome Extension. It leverages a microservices architecture to decouple the scanning engine from the user interface.</p>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted/90">
        <li><strong class="text-foreground">Frontend:</strong> React-based extension popup and content scripts for seamless DOM interaction.</li>
        <li><strong class="text-foreground">Backend & Storage:</strong> <span class="text-accent font-mono text-sm bg-white/5 border border-white/10 px-1.5 py-0.5 rounded">Supabase</span> (PostgreSQL) for storing scan history and generating a <em>Trust Score</em>.</li>
        <li><strong class="text-foreground">AI Engine:</strong> <span class="text-accent font-mono text-sm bg-white/5 border border-white/10 px-1.5 py-0.5 rounded">Gemini 2.5 Flash</span> for ultra-fast, context-aware threat analysis.</li>
        <li><strong class="text-foreground">Audio Processing:</strong> Deepgram Nova-2 for real-time neural speech-to-text.</li>
      </ul>

      <h3 class="text-lg font-bold text-foreground mt-6 mb-3">Implementation & Important Decisions</h3>
      <p class="mb-4 text-muted/90 leading-relaxed">One of the most critical decisions was moving the heavy lifting to automated workflows using <strong class="text-foreground">n8n</strong>. By decoupling the notification system, high-risk scans automatically trigger WhatsApp alerts via webhooks without blocking the main application thread.</p>
      <p class="mb-4 text-muted/90 leading-relaxed">For the <strong class="text-foreground">Voice Sentinel</strong> feature, I had to process audio captures efficiently. I chose to stream the microphone data directly to Deepgram, then pipe the transcript to Gemini with a highly specific prompt designed to detect emotional vectors and urgency tactics.</p>

      <h3 class="text-lg font-bold text-foreground mt-6 mb-3">Challenges & Problems</h3>
      <p class="mb-4 text-muted/90 leading-relaxed">Handling async state across Chrome Extension service workers was incredibly painful. Manifest V3's strict lifecycle meant service workers could terminate mid-scan. I solved this by maintaining a persistent connection to Supabase and using its real-time capabilities to sync state back to the popup once the background task completed.</p>

      <h3 class="text-lg font-bold text-foreground mt-6 mb-3">Key Takeaways</h3>
      <p class="mb-4 text-muted/90 leading-relaxed">Building Nulltrace reinforced the importance of <strong class="text-foreground">resilient architecture</strong>. When integrating multiple third-party APIs (Gemini, Deepgram, Supabase), you must design for failure. Graceful degradation and robust error handling turned a fragile prototype into a production-ready security tool.</p>
    `
  },
  {
    id: "tracxnlabs-architecture",
    title: "Building TracxnLabs: Lessons From an AI-Powered Examination Platform",
    description: "Exam architecture, coding evaluation, and lessons learned from deploying a secure remote testing ecosystem.",
    date: "2026-09-25",
    readingTime: "7 min",
    category: "Development",
    content: `
      <h3 class="text-lg font-bold text-foreground mt-6 mb-3">Introduction</h3>
      <p class="mb-4 text-muted/90 leading-relaxed">When I set out to build TracxnLabs, the primary challenge wasn't just rendering questions to a student—it was maintaining examination integrity in a fully remote environment. The platform needed to handle automated coding evaluations alongside continuous telemetry.</p>

      <h3 class="text-lg font-bold text-foreground mt-6 mb-3">The Problem</h3>
      <p class="mb-4 text-muted/90 leading-relaxed">Remote examinations are notoriously difficult to secure. Traditional platforms either rely on invasive software installations or provide a weak browser sandbox that is easily bypassed. The goal was to build a secure, browser-based environment that could robustly evaluate both multiple-choice and live coding assessments.</p>

      <h3 class="text-lg font-bold text-foreground mt-6 mb-3">Approach & Architecture</h3>
      <p class="mb-4 text-muted/90 leading-relaxed">I architected the student portal using <strong class="text-foreground">React (Vite) and TypeScript</strong> to maintain a strict, type-safe frontend, powered by <span class="text-accent font-mono text-sm bg-white/5 border border-white/10 px-1.5 py-0.5 rounded">Supabase</span> on the backend. This architecture allowed me to manage complex RBAC (Role-Based Access Control) efficiently.</p>
      
      <h3 class="text-lg font-bold text-foreground mt-6 mb-3">Implementation Details</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted/90">
        <li><strong class="text-foreground">Coding Sandbox:</strong> The evaluation pipeline runs isolated executions, tracking execution time and output accuracy against predefined test cases.</li>
        <li><strong class="text-foreground">Telemetry Tracking:</strong> Custom hooks monitor browser focus, visibility changes, and copy-paste events.</li>
        <li><strong class="text-foreground">Edge Functions:</strong> Deployed Supabase <span class="text-accent font-mono text-sm bg-white/5 border border-white/10 px-1.5 py-0.5 rounded">Edge Functions</span> to instantly reject invalid submission payloads before they hit the core relational database.</li>
      </ul>

      <h3 class="text-lg font-bold text-foreground mt-6 mb-3">Challenges</h3>
      <p class="mb-4 text-muted/90 leading-relaxed">Deploying the infrastructure taught me a lot about edge caching and serverless cold starts. During high-traffic examination windows, database load spiked. By moving payload validation and rate-limiting to the edge, I drastically reduced the database strain.</p>

      <h3 class="text-lg font-bold text-foreground mt-6 mb-3">Result & Takeaways</h3>
      <p class="mb-4 text-muted/90 leading-relaxed">The platform successfully handled concurrent examinations with zero downtime. I learned that <strong class="text-foreground">security should be built in layers</strong>—from the UI event listeners down to the database row-level security policies. Never trust the client.</p>
    `
  },
  {
    id: "guardian-proctoring",
    title: "Designing an AI-Assisted Proctoring Layer",
    description: "Architecting a Chrome extension to capture telemetry, browser events, and webcam snapshots for the TracxnLabs ecosystem.",
    date: "2026-09-20",
    readingTime: "5 min",
    category: "Chrome Extension",
    content: `
      <h3 class="text-lg font-bold text-foreground mt-6 mb-3">Introduction</h3>
      <p class="mb-4 text-muted/90 leading-relaxed">Alongside the TracxnLabs platform, I explored Guardian—a Chrome extension-based AI proctoring layer designed to capture exam events, telemetry, and snapshots, feeding them into an AI-assisted auditing workflow.</p>

      <h3 class="text-lg font-bold text-foreground mt-6 mb-3">Why I Built It</h3>
      <p class="mb-4 text-muted/90 leading-relaxed">Standard web APIs often fall short when trying to enforce strict lock-down environments. I needed deeper access to monitor tab states and window focus reliably, which is only possible through the Chrome Extension API.</p>

      <h3 class="text-lg font-bold text-foreground mt-6 mb-3">Implementation: Event Capture and Telemetry</h3>
      <p class="mb-4 text-muted/90 leading-relaxed">The core of Guardian relies on monitoring specific browser activities: tab switching, fullscreen exits, and multi-face detection via webcam streams. By listening for <code class="font-mono text-sm bg-white/5 px-1 py-0.5 rounded border border-white/10">visibilitychange</code> and blur events on the window, the extension continuously tracks student focus.</p>
      <p class="mb-4 text-muted/90 leading-relaxed">I engineered a <strong class="text-foreground">Credibility Scoring Engine</strong> where specific violations (e.g., tab switching) deduct points from a starting integrity score of 100.</p>

      <h3 class="text-lg font-bold text-foreground mt-6 mb-3">Approach: AI Auditing</h3>
      <p class="mb-4 text-muted/90 leading-relaxed">When a violation is detected, an evidence screenshot is captured and securely uploaded to <span class="text-accent font-mono text-sm bg-white/5 border border-white/10 px-1.5 py-0.5 rounded">Supabase Storage</span>. These snapshots are then queued for auditing to determine whether multiple faces or unauthorized materials are present in the frame using <span class="text-accent font-mono text-sm bg-white/5 border border-white/10 px-1.5 py-0.5 rounded">Gemini AI</span> models.</p>

      <h3 class="text-lg font-bold text-foreground mt-6 mb-3">Challenges</h3>
      <p class="mb-4 text-muted/90 leading-relaxed">The primary challenge was balancing aggressive telemetry capture without degrading the student's local machine performance. Processing video frames constantly caused thermal throttling. I resolved this by sampling frames at dynamic intervals based on the user's current credibility score.</p>

      <h3 class="text-lg font-bold text-foreground mt-6 mb-3">Key Takeaways</h3>
      <p class="mb-4 text-muted/90 leading-relaxed">Building Guardian taught me the intricacies of <strong class="text-foreground">background service workers</strong> and performance optimization in browser extensions. It highlighted the importance of moving heavy computation off the main thread.</p>
    `
  },
  {
    id: "grozosphere-supabase",
    title: "What I Learned Building GrozoSphere with Supabase",
    description: "Navigating relational database design, real-time sync, and complex state management in a modern React application.",
    date: "2026-09-15",
    readingTime: "5 min",
    category: "Database",
    content: `
      <h3 class="text-lg font-bold text-foreground mt-6 mb-3">Introduction</h3>
      <p class="mb-4 text-muted/90 leading-relaxed">Building <strong class="text-foreground">GrozoSphere</strong>, a smart grocery inventory and transaction management system, was a deep dive into complex relational database design and real-time state synchronization.</p>

      <h3 class="text-lg font-bold text-foreground mt-6 mb-3">The Problem</h3>
      <p class="mb-4 text-muted/90 leading-relaxed">When you are dealing with inventory that changes in real-time based on multiple concurrent user transactions, standard state management inside React isn't enough. I needed a way to guarantee atomic updates and broadcast state changes instantly.</p>

      <h3 class="text-lg font-bold text-foreground mt-6 mb-3">Approach: PostgreSQL & Supabase Realtime</h3>
      <p class="mb-4 text-muted/90 leading-relaxed">I utilized <span class="text-accent font-mono text-sm bg-white/5 border border-white/10 px-1.5 py-0.5 rounded">Supabase</span> as the backend to leverage PostgreSQL's robust relational features. One of the primary challenges was ensuring that when a transaction occurs, the inventory counts are updated atomically so no race conditions happen during checkout.</p>
      
      <h3 class="text-lg font-bold text-foreground mt-6 mb-3">Implementation</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted/90">
        <li><strong class="text-foreground">Database Triggers:</strong> Implemented <span class="text-accent font-mono text-sm bg-white/5 border border-white/10 px-1.5 py-0.5 rounded">PostgreSQL</span> triggers to automatically update stock levels upon transaction insertion.</li>
        <li><strong class="text-foreground">Real-time Subscriptions:</strong> Relied on Supabase's real-time channels to broadcast inventory changes across all active client sessions instantly.</li>
        <li><strong class="text-foreground">Optimistic Updates:</strong> Kept the UI snappy while waiting for database mutations by updating the local React state immediately and reverting on failure.</li>
      </ul>

      <h3 class="text-lg font-bold text-foreground mt-6 mb-3">What I Learned</h3>
      <p class="mb-4 text-muted/90 leading-relaxed">I learned that letting the database do the heavy lifting (via constraints, functions, and triggers) results in a much cleaner application layer. Combining React's local state management with Tailwind CSS allowed for a highly responsive, fluid user experience even when network latency spiked.</p>
    `
  }
];

