"use client";

import { motion } from "framer-motion";

const Projects = () => {

    return (
      <div className="container mx-auto p-4">
        <motion.h1
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white to-accent bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Projects
        </motion.h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Final Year Project Card */}
          <motion.div
            className="bg-card text-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 group overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ scale: 1.05, rotateY: 2 }}
          >
            <div className="p-6 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="uppercase tracking-wide text-sm text-accent font-semibold">
                Final Year Project
                </div>
                <a
                  href="https://github.com/kashmithnisakya/Self_Adaptive_NILM_Web"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-1 text-lg leading-tight font-medium hover:underline hover:text-accent transition-colors duration-300"
                >
                  Self-Adaptive Non-Intrusive Load Monitoring Using Deep Learning
                </a>
                <ul className="mt-3 space-y-4 list-disc list-inside text-gray-400">
                  <li className="leading-relaxed hover:text-gray-300 transition-colors duration-300">
                    <span className="font-semibold">Developed a novel NILM model</span> to adapt to changes in power consumption patterns, particularly due to aging appliances.
                  </li>
                  <li className="leading-relaxed hover:text-gray-300 transition-colors duration-300">
                    Integrated deep learning techniques with <span className="font-semibold">transfer learning and pseudolabeling</span> for autonomous adjustment to evolving power usage.
                  </li>
                  <li className="leading-relaxed hover:text-gray-300 transition-colors duration-300">
                    Utilized <span className="font-semibold">synthetic data generation</span> and advanced neural network architectures for training and validation.
                  </li>
                  <li className="leading-relaxed hover:text-gray-300 transition-colors duration-300">
                    Achieved over <span className="font-semibold">97% accuracy</span> in disaggregating power consumption for a three-phase refrigerator over a six-year period.
                  </li>
                  <li className="leading-relaxed hover:text-gray-300 transition-colors duration-300">
                    Contributed to filling a significant gap in NILM literature and advancing energy management systems.
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Tobu Project Card */}
          <motion.div
            className="bg-card text-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 group overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05, rotateY: -2 }}
          >
            <div className="p-6 relative">
              <div className="absolute inset-0 bg-gradient-to-bl from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="uppercase tracking-wide text-sm text-accent font-semibold">
                Industry Project
                </div>
                <a
                  href="#"
                  className="block mt-1 text-lg leading-tight font-medium hover:text-accent transition-colors duration-300"
                >
                  Tobu - Social Media Application
                </a>
                <ul className="mt-3 space-y-4 list-disc list-inside text-gray-400">
                  <li className="leading-relaxed hover:text-gray-300 transition-colors duration-300">
                    <span className="font-semibold">Developed the backend</span> for a social media app integrated with large language models (LLMs) to enhance user interaction and content recommendation.
                  </li>
                  <li className="leading-relaxed hover:text-gray-300 transition-colors duration-300">
                    Implemented features for <span className="font-semibold">user images and conversation analysis</span> using machine learning techniques.
                  </li>
                  <li className="leading-relaxed hover:text-gray-300 transition-colors duration-300">
                    Worked with LLMs to automate content creation and leveraged <span className="font-semibold">PySpark</span> to build data pipelines for user data analysis and feature optimization.
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Energy Consumption Project Card */}
          <motion.div
            className="bg-card text-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 group overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.05, rotateY: 2 }}
          >
            <div className="p-6 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="uppercase tracking-wide text-sm text-accent font-semibold">
                Industry Project
                </div>
                <a
                  href="#"
                  className="block mt-1 text-lg leading-tight font-medium hover:text-accent transition-colors duration-300"
                >
                  Energy Consumption Prediction System
                </a>
                <ul className="mt-3 space-y-4 list-disc list-inside text-gray-400">
                  <li className="leading-relaxed hover:text-gray-300 transition-colors duration-300">
                    <span className="font-semibold">Designed and deployed</span> an end-to-end energy forecasting pipeline using MLflow for experiment tracking, Apache Airflow for automated data workflows.
                  </li>
                  <li className="leading-relaxed hover:text-gray-300 transition-colors duration-300">
                    Built production-ready API services using <span className="font-semibold">FastAPI and Docker</span> for real-time energy prediction and dashboard visualization.
                  </li>
                  <li className="leading-relaxed hover:text-gray-300 transition-colors duration-300">
                    Built an interactive <span className="font-semibold">Streamlit dashboard</span> to visualize historical consumption, forecasted trends, and key model performance metrics.
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* CashTrack Project Card */}
          <motion.div
            className="bg-card text-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 group overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05, rotateY: -2 }}
          >
            <div className="p-6 relative">
              <div className="absolute inset-0 bg-gradient-to-bl from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="uppercase tracking-wide text-sm text-accent font-semibold">
                Industry Project
                </div>
                <a
                  href="#"
                  className="block mt-1 text-lg leading-tight font-medium hover:text-accent transition-colors duration-300"
                >
                  CashTrack - Smart Expense Tracking Application
                </a>
                <ul className="mt-3 space-y-4 list-disc list-inside text-gray-400">
                  <li className="leading-relaxed hover:text-gray-300 transition-colors duration-300">
                    Developed a smart expense tracking application with beautiful <span className="font-semibold">analytics and insights</span> using a modern React frontend with TypeScript, Tailwind CSS, and shadcn-ui components.
                  </li>
                  <li className="leading-relaxed hover:text-gray-300 transition-colors duration-300">
                    Built a powerful <span className="font-semibold">Jaseci backend</span> with RESTful API architecture for data management and business logic implementation.
                  </li>
                  <li className="leading-relaxed hover:text-gray-300 transition-colors duration-300">
                    Implemented comprehensive features including expense/income tracking, <span className="font-semibold">data visualization</span> with Victory charts, user profile management, and category-based organization.
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Deep Research Assistant Project Card */}
          <motion.div
            className="bg-card text-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 group overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ scale: 1.05, rotateY: 2 }}
          >
            <div className="p-6 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="uppercase tracking-wide text-sm text-accent font-semibold">
                Industry Project
                </div>
                <a
                  href="#"
                  className="block mt-1 text-lg leading-tight font-medium hover:text-accent transition-colors duration-300"
                >
                  Deep Research Assistant - Agentic AI Application
                </a>
                <ul className="mt-3 space-y-4 list-disc list-inside text-gray-400">
                  <li className="leading-relaxed hover:text-gray-300 transition-colors duration-300">
                    Built a <span className="font-semibold">production-grade agentic application</span> for answering analytical questions using LangGraph for multi-step reasoning and workflow orchestration.
                  </li>
                  <li className="leading-relaxed hover:text-gray-300 transition-colors duration-300">
                    Integrated web search and document retrieval capabilities with <span className="font-semibold">Chroma vector database</span> for efficient vector search and information retrieval.
                  </li>
                  <li className="leading-relaxed hover:text-gray-300 transition-colors duration-300">
                    Developed user-friendly <span className="font-semibold">Streamlit interface</span> with comprehensive Docker containerization for easy deployment and horizontal scaling.
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* FriendZone Project Card */}
          <motion.div
            className="bg-card text-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 group overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.05, rotateY: -2 }}
          >
            <div className="p-6 relative">
              <div className="absolute inset-0 bg-gradient-to-bl from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="uppercase tracking-wide text-sm text-accent font-semibold">
                Industry Project
                </div>
                <a
                  href="#"
                  className="block mt-1 text-lg leading-tight font-medium hover:text-accent transition-colors duration-300"
                >
                  FriendZone - AI-Powered Memory Sharing Platform
                </a>
                <ul className="mt-3 space-y-4 list-disc list-inside text-gray-400">
                  <li className="leading-relaxed hover:text-gray-300 transition-colors duration-300">
                    Developed a <span className="font-semibold">full-stack AI-powered platform</span> that allows users to capture, organize, and share memories through intelligent conversational interfaces.
                  </li>
                  <li className="leading-relaxed hover:text-gray-300 transition-colors duration-300">
                    Implemented automatic image analysis using <span className="font-semibold">OpenAI API</span> to extract contextual information (who, what, where, when) from uploaded photos.
                  </li>
                  <li className="leading-relaxed hover:text-gray-300 transition-colors duration-300">
                    Built backend using <span className="font-semibold">jaclang and jac-cloud framework</span> with comprehensive authentication, memory management, and social networking features.
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  };

  export default Projects;