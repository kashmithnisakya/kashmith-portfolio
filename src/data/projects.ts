import type { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "JacHammer",
    tagline: "AI agentic software-generation platform",
    description:
      "Backend developer on an agentic AI platform that generates and deploys full-stack jaclang applications end-to-end, orchestrating LLM-driven code generation, build, and one-click deployment.",
    tech: ["Python", "Jac", "LLM Agents", "Kubernetes"],
    size: "large",
    highlight: "End-to-end app generation",
    category: "Industry · Jaseci Lab",
  },
  {
    title: "Tobu Lite",
    tagline: "AI image-to-video generation",
    description:
      "Built the image-to-video feature for the Tobu platform: a generative media pipeline integrating Google's Veo 3 model that lets users create videos from their photos using selectable templates.",
    tech: ["Python", "Google Veo 3", "GenAI"],
    size: "small",
    highlight: "Google Veo 3",
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
      "Backend developer for an AI platform that generates patents and manages documents, including a RAG-based chatbot over a vector database for fast, accurate retrieval.",
    tech: ["Python", "RAG", "Vector DB", "FastAPI"],
    size: "small",
    category: "Industry",
  },
  {
    title: "FriendZone",
    tagline: "AI-powered memory sharing platform",
    description:
      "Full-stack AI platform to capture, organize, and share memories via conversational interfaces, with automatic image analysis (who/what/where/when) using the OpenAI API and a backend on jaclang and jac-cloud.",
    tech: ["Jac", "jac-cloud", "OpenAI API"],
    github: "https://github.com/kashmithnisakya/FriendZone",
    size: "small",
    category: "Full-stack AI",
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
