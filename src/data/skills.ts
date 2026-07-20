import type { SkillGroup } from "@/types";

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    items: ["Python", "Go", "Jac (jaclang)", "SQL", "Bash", "TypeScript"],
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
    ],
  },
  {
    category: "ML Frameworks",
    items: ["PyTorch", "TensorFlow / Keras", "scikit-learn", "Hugging Face"],
  },
  {
    category: "MLOps & Infra",
    items: ["Docker", "Kubernetes", "MLflow", "Apache Airflow", "CI/CD"],
  },
  {
    category: "Backend & Data",
    items: [
      "FastAPI",
      "Jaseci",
      "REST APIs",
      "PySpark",
      "Kafka",
      "Redis Streams",
      "Chroma",
    ],
  },
];

/** Flattened for the marquee rows. */
export const allSkills = skillGroups.flatMap((g) => g.items);
