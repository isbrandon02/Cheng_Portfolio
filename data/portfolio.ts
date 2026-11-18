export const portfolioSections = [
  { id: "about", number: "01", label: "About" },
  { id: "experience", number: "02", label: "Experience" },
  { id: "hackathons", number: "03", label: "Hackathons" },
  { id: "projects", number: "04", label: "Projects" },
] as const;

export type PortfolioSectionId = (typeof portfolioSections)[number]["id"];

export const experiences = [
  {
    company: "PayPal",
    role: "Software Engineer Intern",
    date: "May — August 2026",
    technologies: "Python · BigQuery · Ridge · LightGBM",
    contributions: [
      "Built a config-driven Python pipeline to ingest BigQuery transactions, refresh forecasts hourly, retrain weekly, and publish results for treasury dashboards.",
      "Fixed production data leakage by restricting merchant ranking to pre-origin transactions and validating against 553 rolling-origin backtests.",
    ],
    impact: "Deployed ACH and Visa Direct forecasting models, raising accuracy from 60% to 92% and reducing liquidity buffers by $2M across $38M+ in daily volume.",
    website: "https://www.paypal.com/",
  },
  {
    company: "Kalshi",
    role: "Markets Engineer Intern",
    date: "December 2025 — May 2026",
    technologies: "Python · WhisperX · Streamlit · PyTorch · CUDA",
    contributions: [
      "Built an automated settlement system for mention markets using WhisperX to transcribe and verify broadcast content.",
      "Shipped a Streamlit audit dashboard with keyword search and direct jumps to transcript timestamps, reducing manual resolution time by 25%.",
    ],
    impact: "Accelerated one-hour media processing from 15 minutes to under 2 minutes with CUDA GPU inference and tuned PyTorch batches; the system handled 70+ hours of weekly broadcast content for markets processing $3M+ daily.",
    website: "https://kalshi.com/",
  },
  {
    company: "Duke IT Security Office",
    role: "Full-Stack Software Engineer Intern",
    date: "May — July 2025",
    technologies: "FastAPI · Splunk · Docker · Podman",
    contributions: [
      "Built a FastAPI service that enriched security alerts by correlating Splunk logs with internal APIs.",
      "Containerized and deployed the service with Docker and Podman for Duke’s restricted virtual-machine environment.",
    ],
    impact: "Automated enrichment for 1,200+ daily alerts and reduced manual multi-tool lookups by 75%.",
    website: "https://duke.edu/",
  },
] as const;

export const hackathonEntries = [
  {
    name: "CUhackit",
    date: "February 2026",
    description: "Built Chameleon, an AI-assisted video sponsorship platform that won two tracks.",
    technologies: "AWS · TwelveLabs · Runway · React · FastAPI",
  },
] as const;

export const projectEntries = [
  {
    name: "Chameleon",
    date: "February 2026",
    description: "An event-driven platform that detects natural ad insertion scenes in video and creates scene-preserving edits. A React marketplace lets creators review brand offers and trigger AI video edits.",
    technologies: "AWS EventBridge · Lambda · DynamoDB · S3 · TwelveLabs · Runway · React · FastAPI",
  },
  {
    name: "16-bit MIPS-Style CPU in Logisim",
    date: "March 2025",
    description: "Designed a 16-bit CPU with a full R/I/J instruction set, custom ALU, ripple-carry adder, barrel shifter, and an 8-register file. Verified it with a 16-instruction test program and ROM/RAM, TTY, and keyboard I/O.",
    technologies: "Logisim · Digital logic · MIPS",
  },
] as const;
