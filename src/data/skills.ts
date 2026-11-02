import type { SkillGroup } from "@/types";

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    items: ["Python", "Go", "TypeScript", "Jac (jaclang)", "SQL", "Bash"],
  },
  {
    category: "AI & GenAI",
    items: [
      "LLMs",
      "RAG",
      "Agentic AI",
      "LangGraph",
      "Fine-tuning (Unsloth)",
      "NLP",
      "Deep Learning",
      "Veo 3",
    ],
  },
  {
    category: "ML Frameworks",
    items: ["PyTorch", "TensorFlow / Keras", "scikit-learn", "Hugging Face"],
  },
  {
    category: "MLOps & Infra",
    items: [
      "Docker",
      "Kubernetes",
      "MLflow",
      "Apache Airflow",
      "CI/CD (GitHub Actions)",
      "Google Cloud",
      "AWS",
    ],
  },
  {
    category: "Backend & Data",
    items: [
      "FastAPI",
      "Jaseci",
      "PostgreSQL",
      "PySpark",
      "Kafka",
      "Redis Streams",
      "WebSockets",
      "Chroma",
    ],
  },
];
