const Projects = () => {

    return (
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Publication Card */}
          <div className="bg-card text-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300">
            <div className="p-6">
              <div className="uppercase tracking-wide text-sm text-accent font-semibold">
              Final Year Project
              </div>
              <a
                href="https://github.com/kashmithnisakya/Self_Adaptive_NILM_Web"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-1 text-lg leading-tight font-medium hover:underline"
              >
                Self-Adaptive Non-Intrusive Load Monitoring Using Deep Learning
              </a>
              <ul className="mt-3 space-y-4 list-disc list-inside text-gray-400">
                <li className="leading-relaxed">
                  <span className="font-semibold">Developed a novel NILM model</span> to adapt to changes in power consumption patterns, particularly due to aging appliances.
                </li>
                <li className="leading-relaxed">
                  Integrated deep learning techniques with <span className="font-semibold">transfer learning and pseudolabeling</span> for autonomous adjustment to evolving power usage.
                </li>
                <li className="leading-relaxed">
                  Utilized <span className="font-semibold">synthetic data generation</span> and advanced neural network architectures for training and validation.
                </li>
                <li className="leading-relaxed">
                  Achieved over <span className="font-semibold">97% accuracy</span> in disaggregating power consumption for a three-phase refrigerator over a six-year period.
                </li>
                <li className="leading-relaxed">
                  Contributed to filling a significant gap in NILM literature and advancing energy management systems.
                </li>
              </ul>

            </div>
          </div>
  
          <div className="bg-card text-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300">
            <div className="p-6">
              <div className="uppercase tracking-wide text-sm text-accent font-semibold">
              Industry Project
              </div>
              <a
                href="#"
                className="block mt-1 text-lg leading-tight font-medium"
              >
                Tobu - Social Media Application
              </a>
              <ul className="mt-3 space-y-4 list-disc list-inside text-gray-400">
                <li className="leading-relaxed">
                  <span className="font-semibold">Developed the backend</span> for a social media app integrated with large language models (LLMs) to enhance user interaction and content recommendation.
                </li>
                <li className="leading-relaxed">
                  Implemented features for <span className="font-semibold">user images and conversation analysis</span> using machine learning techniques.
                </li>
                <li className="leading-relaxed">
                  Worked with LLMs to automate content creation and leveraged <span className="font-semibold">PySpark</span> to build data pipelines for user data analysis and feature optimization.
                </li>
              </ul>

            </div>
          </div>

          <div className="bg-card text-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300">
            <div className="p-6">
              <div className="uppercase tracking-wide text-sm text-accent font-semibold">
              Industry Project
              </div>
              <a
                href="#"
                className="block mt-1 text-lg leading-tight font-medium"
              >
                Energy Consumption Prediction System
              </a>
              <ul className="mt-3 space-y-4 list-disc list-inside text-gray-400">
                <li className="leading-relaxed">
                  <span className="font-semibold">Designed and deployed</span> an end-to-end energy forecasting pipeline using MLflow for experiment tracking, Apache Airflow for automated data workflows.
                </li>
                <li className="leading-relaxed">
                  Built production-ready API services using <span className="font-semibold">FastAPI and Docker</span> for real-time energy prediction and dashboard visualization.
                </li>
                <li className="leading-relaxed">
                  Built an interactive <span className="font-semibold">Streamlit dashboard</span> to visualize historical consumption, forecasted trends, and key model performance metrics.
                </li>
              </ul>

            </div>
          </div>

          <div className="bg-card text-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300">
            <div className="p-6">
              <div className="uppercase tracking-wide text-sm text-accent font-semibold">
              Industry Project
              </div>
              <a
                href="#"
                className="block mt-1 text-lg leading-tight font-medium"
              >
                CashTrack - Smart Expense Tracking Application
              </a>
              <ul className="mt-3 space-y-4 list-disc list-inside text-gray-400">
                <li className="leading-relaxed">
                  Developed a smart expense tracking application with beautiful <span className="font-semibold">analytics and insights</span> using a modern React frontend with TypeScript, Tailwind CSS, and shadcn-ui components.
                </li>
                <li className="leading-relaxed">
                  Built a powerful <span className="font-semibold">Jaseci backend</span> with RESTful API architecture for data management and business logic implementation.
                </li>
                <li className="leading-relaxed">
                  Implemented comprehensive features including expense/income tracking, <span className="font-semibold">data visualization</span> with Victory charts, user profile management, and category-based organization.
                </li>
              </ul>

            </div>
          </div>

          <div className="bg-card text-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300">
            <div className="p-6">
              <div className="uppercase tracking-wide text-sm text-accent font-semibold">
              Industry Project
              </div>
              <a
                href="#"
                className="block mt-1 text-lg leading-tight font-medium"
              >
                Deep Research Assistant - Agentic AI Application
              </a>
              <ul className="mt-3 space-y-4 list-disc list-inside text-gray-400">
                <li className="leading-relaxed">
                  Built a <span className="font-semibold">production-grade agentic application</span> for answering analytical questions using LangGraph for multi-step reasoning and workflow orchestration.
                </li>
                <li className="leading-relaxed">
                  Integrated web search and document retrieval capabilities with <span className="font-semibold">Chroma vector database</span> for efficient vector search and information retrieval.
                </li>
                <li className="leading-relaxed">
                  Developed user-friendly <span className="font-semibold">Streamlit interface</span> with comprehensive Docker containerization for easy deployment and horizontal scaling.
                </li>
              </ul>

            </div>
          </div>

          <div className="bg-card text-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300">
            <div className="p-6">
              <div className="uppercase tracking-wide text-sm text-accent font-semibold">
              Industry Project
              </div>
              <a
                href="#"
                className="block mt-1 text-lg leading-tight font-medium"
              >
                FriendZone - AI-Powered Memory Sharing Platform
              </a>
              <ul className="mt-3 space-y-4 list-disc list-inside text-gray-400">
                <li className="leading-relaxed">
                  Developed a <span className="font-semibold">full-stack AI-powered platform</span> that allows users to capture, organize, and share memories through intelligent conversational interfaces.
                </li>
                <li className="leading-relaxed">
                  Implemented automatic image analysis using <span className="font-semibold">OpenAI API</span> to extract contextual information (who, what, where, when) from uploaded photos.
                </li>
                <li className="leading-relaxed">
                  Built backend using <span className="font-semibold">jaclang and jac-cloud framework</span> with comprehensive authentication, memory management, and social networking features.
                </li>
              </ul>

            </div>
          </div>
  
          
  
          {/* Add More Cards Here as Needed */}
        </div>
      </div>
    );
  };
  
  export default Projects;
  