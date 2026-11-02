import type { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Jaseci Stack",
    tagline: "Open-source core contributor (jac-scale, jaclang)",
    description:
      "Core developer of jac-scale, Jac's Kubernetes deployment and scaling layer that takes identical local Jac code to production, auto-provisioning databases, Redis caching, and authentication with zero configuration. Contributor to jaclang, an AI-native language featuring graph-based Object-Spatial Programming with native Python, JavaScript, and C interoperability.",
    tech: ["Jac", "Python", "Kubernetes", "Redis"],
    github: "https://github.com/jaseci-labs/jac",
    href: "https://www.jaseci.org/",
    size: "large",
    highlight: "70+ merged PRs · 950+ GitHub stars",
    category: "Open source",
  },
  {
    title: "JacHammer",
    tagline: "AI app builder for the Jac language",
    description:
      "Backend developer on an agentic platform that orchestrates LLM-driven code generation, build, and one-click deployment of full-stack applications, with every user app running in its own sandbox pod.",
    tech: ["Jac", "LLM Agents", "Kubernetes"],
    href: "https://jachammer.ai/",
    size: "small",
    category: "Industry · Jaseci Lab",
  },
  {
    title: "Flowline",
    tagline: "AI-powered project management platform",
    description:
      "Lead developer of a Kubernetes-deployed platform that syncs with GitHub and keeps the team board current as issues and pull requests change. Its AI assistant answers questions about the team's work, writes daily standup notes, and turns plain-language requests into tasks.",
    tech: ["Jac", "LLMs", "Kubernetes", "GitHub API"],
    github: "https://github.com/kashmithnisakya/flowline",
    href: "https://flowline.so",
    size: "small",
    highlight: "Live",
    category: "Full-stack AI",
  },
  {
    title: "Spenzo",
    tagline: "Personal money manager",
    description:
      "Lead backend developer of the Go API behind the mobile and web apps for tracking income, expenses, budgets, and net worth, with an OpenAPI contract, contract tests, and CI/CD from GitHub Actions to Google Cloud Run and Cloud SQL.",
    tech: ["Go", "PostgreSQL", "Google Cloud Run", "GitHub Actions"],
    href: "https://spenzo.synopshq.com/",
    size: "small",
    highlight: "Live on the App Store",
    category: "Product · Synops",
  },
  {
    title: "Mesh",
    tagline: "Realtime team chat",
    description:
      "Main developer of a Slack-style chat product with web, mobile, and desktop clients. A Go modular-monolith backend and WebSocket hub use per-channel sequence numbers to drive message ordering, unread state, and reconnect backfill.",
    tech: ["Go", "WebSockets", "PostgreSQL", "Redis", "Next.js"],
    href: "https://mesh.synopshq.com/",
    size: "small",
    highlight: "Live",
    category: "Product · Synops",
  },
  {
    title: "Habitat",
    tagline: "A secure home for AI agents on computers and phones",
    description:
      "An open-source design for giving an agent its own persistent space. The agent will run inside WebAssembly with no outside access, and a trusted Rust broker will mediate every request to reach the network, files, models, or secrets. Currently at the design and project skeleton stage.",
    tech: ["Rust", "WebAssembly", "Wasmtime", "Android"],
    github: "https://github.com/kashmithnisakya/habitat",
    size: "small",
    highlight: "Early development",
    category: "Open source",
  },
  {
    title: "TLite (Tobu Lite)",
    tagline: "AI image-to-video generation",
    description:
      "Built the image-to-video feature: a generative media pipeline integrating Google's Veo 3 model that lets users create videos from their photos using selectable templates.",
    tech: ["Python", "Google Veo 3", "GenAI"],
    href: "https://apps.apple.com/us/app/tlite/id6753893452",
    size: "small",
    highlight: "Live on the App Store",
    category: "Industry · Jaseci Lab",
  },
  {
    title: "Deep Research Assistant",
    tagline: "Agentic AI research application",
    description:
      "Production-grade agentic app for analytical question answering. Uses LangGraph multi-step reasoning with web search and Chroma vector retrieval, deployed via Docker with a Streamlit interface.",
    tech: ["LangGraph", "Chroma", "Docker", "Streamlit"],
    github: "https://github.com/kashmithnisakya/Deep-Research-Assistan",
    size: "small",
    category: "Agentic AI",
  },
  {
    title: "Einstein Pro",
    tagline: "AI patent generation & document management",
    description:
      "Backend developer for an AI platform that generates patents and manages documents, including a RAG-based chatbot over a vector database for fast, grounded answers.",
    tech: ["Python", "RAG", "Vector DB", "FastAPI"],
    size: "small",
    category: "Industry",
  },
  {
    title: "Self-Adaptive NILM",
    tagline: "Deep learning research → 2 IEEE publications",
    description:
      "Designed WaveNet/CNN models with ensemble methods for appliance-level power prediction; applied pseudo-labeling and transfer learning for self-adaptation to appliance aging without retraining, reaching over 97% accuracy on a six-year dataset. Published at IEEE World AI IoT Congress 2024 and in IEEE Access.",
    tech: ["PyTorch", "WaveNet", "Transfer Learning"],
    github: "https://github.com/kashmithnisakya/Self_Adaptive_NILM_Web",
    size: "large",
    highlight: "Best Presented Paper · IEEE AIIoT 2024",
    category: "Research",
  },
];
