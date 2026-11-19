export interface Project {
  slug: string;
  title: string;
  organization?: string;
  date: string;
  category: "Distributed & AI Systems" | "Systems & Embedded" | "Full-Stack & Cloud";
  tech: string[];
  description: string;
  metric?: string;
  architecture?: string;
  highlights?: string[];
  sourceCode?: string;
  liveDemo?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "ocean-network-canada-ai-assistant",
    title: "Ocean Networks Canada AI Assistant",
    organization: "Ocean Networks Canada",
    date: "Sept 2025",
    category: "Distributed & AI Systems",
    featured: true,
    metric: "1.74 PB Data Catalog",
    architecture: "LLaMA 3.1 · ChromaDB · FastAPI · Docker · Next.js",
    tech: ["Python", "FastAPI", "Next.js", "LLaMA 3.1", "ChromaDB", "Docker"],
    description:
      "A hybrid RAG-powered intelligence platform providing natural-language synthesis over 1.74 PB of heterogeneous oceanographic sensor data and scientific documentation.",
    highlights: [
      "Engineered hybrid retrieval pipeline combining dense vector embeddings (ChromaDB) with metadata-filtered API execution.",
      "Fine-tuned intent classification to route scientific domain queries to appropriate microservices and external databases.",
      "Achieved 81% citation-backed response accuracy with deterministic provenance links to raw ocean sensor recordings.",
    ],
    sourceCode: "https://github.com/kgosal03/Ocean-Network-Canada-Assistant",
  },
  {
    slug: "real-time-systems-freertos",
    title: "Real-Time Embedded Systems Kernel",
    organization: "University of Victoria",
    date: "April 2025",
    category: "Systems & Embedded",
    featured: true,
    metric: "Strict Deterministic Deadlines",
    architecture: "FreeRTOS Kernel · ARM Cortex · Preemptive Priority Scheduling",
    tech: ["FreeRTOS", "C", "STM32", "Concurrency", "Hardware Timers"],
    description:
      "A real-time multitasking control system and deadline-driven scheduler built on FreeRTOS for mission-critical embedded control.",
    highlights: [
      "Engineered preemptive priority-based scheduler guaranteeing deterministic execution across concurrent real-time control tasks.",
      "Implemented thread-safe inter-task communication using FreeRTOS queues, binary semaphores, and mutexes with priority inheritance to avoid priority inversion.",
      "Validated hard timing constraints and interrupt service routines (ISRs) under heavy CPU and I/O load conditions.",
    ],
    sourceCode: "https://github.com/kgosal03/ECE-455",
  },
  {
    slug: "priority-pulse",
    title: "Priority Pulse: Automated Triage at Scale",
    organization: "Data Science for Software Engineering",
    date: "Sept 2025",
    category: "Distributed & AI Systems",
    featured: true,
    metric: "95% Precision · 28K+ Issues",
    architecture: "Transformer Pipelines · RoBERTa · DistilBERT · GraphQL ETL",
    tech: ["HuggingFace", "Python", "scikit-learn", "RoBERTa", "GitHub GraphQL API"],
    description:
      "A high-throughput machine learning pipeline automating urgent defect identification and triage across 28,000+ GitHub repository issues.",
    highlights: [
      "Built resilient ingestion and ETL pipeline extracting historical issue threads via GitHub GraphQL API with rate-limit backoff.",
      "Trained and benchmarked transformer architectures (BERT, RoBERTa, DistilBERT), optimizing hyperparameters for severe class imbalance.",
      "Reached 95% precision and 0.92 F1-score on critical bug detection, reducing manual triage latency from hours to seconds.",
    ],
    sourceCode: "https://github.com/UVic-Data-Science-for-SE/404-504-project-last-semester",
  },
  {
    slug: "pwm-signal-analyzer",
    title: "Microcontroller PWM Signal Analyzer",
    organization: "Embedded Systems Lab",
    date: "Dec 2024",
    category: "Systems & Embedded",
    featured: false,
    metric: "Hardware DMA & Low Latency",
    architecture: "STM32F0 Bare-Metal · Hardware Timers · Direct SPI Bus",
    tech: ["STM32F0", "C", "ADC/DAC", "SPI", "Hardware Interrupts"],
    description:
      "An embedded pulse-width modulation (PWM) diagnostic and monitoring system integrating high-speed hardware interrupts, SPI, and ADC/DAC conversions.",
    highlights: [
      "Engineered hardware-software integration with NE555 timer, optocoupler isolation, and OLED display for real-time waveform inspection.",
      "Utilized hardware input capture timers and interrupt service routines to compute high-accuracy frequency and duty cycle in microseconds.",
      "Wrote modular low-level C peripheral drivers interfacing directly with hardware registers without blocking main execution loops.",
    ],
    sourceCode: "https://github.com/kgosal03/ECE-355",
  },
  {
    slug: "phish-finder",
    title: "Phish Finder: Real-Time Email Classification",
    organization: "Security & Machine Learning",
    date: "Aug 2025",
    category: "Distributed & AI Systems",
    featured: false,
    metric: "98% Accuracy · 96% Recall",
    architecture: "NLP Pipeline · TF-IDF · Logistic Regression · Flask API",
    tech: ["Python", "Flask", "Scikit-learn", "NLTK", "Docker"],
    description:
      "An AI-powered real-time email security triage engine achieving 98% accuracy and 96% recall for urgent message classification.",
    highlights: [
      "Engineered linguistic feature extraction pipeline leveraging custom n-gram tokenization, TF-IDF vectorization, and lexical cues.",
      "Designed low-latency inference endpoint capable of processing incoming email streams in under 50ms per document.",
      "Packaged into containerized microservice with unit test coverage for reproducible production deployments.",
    ],
    sourceCode: "https://github.com/kgosal03/ECE-470-Email-Classification-Phish-Finder",
  },
  {
    slug: "autonomous-robot",
    title: "Autonomous Navigation Robot",
    organization: "Engineering Robotics Design",
    date: "April 2023",
    category: "Systems & Embedded",
    featured: false,
    metric: "90% Object Placement Accuracy",
    architecture: "Finite State Machine · Sensor Telemetry · Closed-Loop Control",
    tech: ["Arduino", "C++", "Finite State Machine", "Sensors", "Hardware Integration"],
    description:
      "An autonomous mobile robot integrating mechanical, electrical, and real-time firmware control systems with multi-sensor telemetry.",
    highlights: [
      "Architected deterministic finite state machine (FSM) control loop handling obstacle avoidance, beacon detection, and payload placement.",
      "Calibrated IR and ultrasonic distance arrays to maintain sub-centimeter positional accuracy across dynamic obstacle courses.",
      "Achieved 90% target placement precision in competitive testing trials through closed-loop motor encoder feedback.",
    ],
    sourceCode: "https://github.com/kgosal03/ENGR-120-121",
  },
  {
    slug: "financial-operations-platform",
    title: "Financial Operations & Ledger Platform",
    organization: "G.G. Finance Co.",
    date: "May 2025",
    category: "Full-Stack & Cloud",
    featured: false,
    metric: "Enterprise RBAC & Audit Trail",
    architecture: "Next.js App Router · TypeScript · PostgreSQL · Supabase",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Supabase", "Tailwind CSS"],
    description:
      "A full-stack financial operations platform digitizing enterprise ledger workflows with strict role-based access, automated audits, and financial reporting dashboards.",
    highlights: [
      "Architected relational schema in PostgreSQL with row-level security (RLS) policies enforcing multi-tenant isolation.",
      "Implemented immutable transaction logging and event sourcing principles to ensure ledger auditability and regulatory compliance.",
      "Built dynamic analytical dashboards with responsive charts and real-time ledger settlement notifications.",
    ],
  },
];
