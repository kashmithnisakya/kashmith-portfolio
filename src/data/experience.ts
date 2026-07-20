import type { Experience } from "@/types";

export const experience: Experience[] = [
  {
    company: "Jaseci Lab",
    role: "AI/ML Engineer",
    start: "Apr 2024",
    end: "Present",
    location: "Ann Arbor, MI, USA",
    mode: "Remote",
    highlights: [
      "Core contributor to the open-source Jaseci stack (550+ GitHub stars) with 30+ merged PRs, as a major developer of the jac-scale Kubernetes deployment plugin and contributor to the jaclang language.",
      "Developed and maintained backend infrastructure for Tobu, an AI-powered personal memory platform with integrated LLMs serving 1,000+ users; took the system to production fast enough to support the company's $1.5M raise.",
      "Built scalable PySpark data pipelines for user analysis and feature optimization, and shipped ML features for image analysis and conversation processing.",
    ],
    tech: ["Python", "Jac", "Kubernetes", "LLMs", "PySpark", "FastAPI"],
  },
  {
    company: "Utech Technologies (Pvt) Ltd",
    role: "Data Scientist",
    start: "Apr 2024",
    end: "Jun 2024",
    location: "Wattala, Sri Lanka",
    mode: "Remote",
    highlights: [
      "Designed and deployed an end-to-end energy forecasting pipeline with MLflow experiment tracking and model versioning for reproducible, production-ready forecasts.",
      "Automated ML workflows with Apache Airflow for data ingestion, model retraining, and deployment.",
      "Built production API services with FastAPI and Docker for real-time energy prediction and dashboard visualization.",
    ],
    tech: ["MLflow", "Apache Airflow", "FastAPI", "Docker", "Python"],
  },
  {
    company: "Synopsys Lanka (Pvt) Ltd",
    role: "Application Engineer Intern",
    start: "Jan 2023",
    end: "Jul 2023",
    location: "Colombo, Sri Lanka",
    mode: "On-site",
    highlights: [
      "Developed an NLP-based search engine with LSTM models for automated email classification.",
      "Automated large-file compilation and notification systems using Python, Bash, and CSH scripting.",
      "Managed 17 processor designs through custom automation scripts for daily performance assessment and resource optimization.",
    ],
    tech: ["Python", "Bash", "LSTM", "NLP"],
  },
];
