"use client";

import { motion } from "framer-motion";

const Publications = () => {

  return (
    <div className="container mx-auto p-4">
      <motion.h1
        className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white to-accent bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Publications & Research
      </motion.h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* First Publication Card */}
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
                2024 IEEE World AI IoT Congress
              </div>
              <a
                href="https://ieeexplore.ieee.org/document/10579028"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-1 text-lg leading-tight font-medium hover:underline hover:text-accent transition-colors duration-300"
              >
                Self-Adaptive Non-Intrusive Load Monitoring Using Deep Learning
              </a>
              <p className="mt-2 text-gray-400 hover:text-gray-300 transition-colors duration-300">
                To optimize energy utilization, efficient energy management practices are important. Non-intrusive load monitoring (NILM) has emerged as a promising solution, particularly with the advent of deep learning techniques.
              </p>
              <p className="mt-2 text-gray-400 hover:text-gray-300 transition-colors duration-300">
                This paper introduces a novel approach to NILM: Self-Adaptive Non-Intrusive Load Monitoring using Deep Learning. Conventional NILM models often struggle to adapt to changes in power consumption patterns, especially with aging appliances.
              </p>
              <p className="mt-2 text-gray-400 hover:text-gray-300 transition-colors duration-300">
                We propose a Self-Adaptive NILM model that integrates deep learning techniques with transfer learning and pseudolabeling.
              </p>
              <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                🏆 Best Presented Paper Award
              </div>
            </div>
          </div>
        </motion.div>

        {/* Second Publication Card */}
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
                IEEE Access, vol. 13, pp. 106524–106539, 2025
              </div>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-1 text-lg leading-tight font-medium hover:underline hover:text-accent transition-colors duration-300"
              >
                Self-Adaptive Deep Learning Framework for Non-Intrusive Load Monitoring: Addressing Aging Appliance Challenges With Transfer Learning and Pseudo Labeling
              </a>
              <p className="mt-2 text-gray-400 hover:text-gray-300 transition-colors duration-300">
                W. A. Yasodya, S. M. L. Arampola, M. S. K. Nisakya, V. Logeeshan, S. Kumarawadu, C. Wanigasekara.
              </p>
              <p className="mt-2 text-gray-400 hover:text-gray-300 transition-colors duration-300">
                This research addresses the critical challenge of appliance aging in Non-Intrusive Load Monitoring (NILM) systems through innovative deep learning approaches.
              </p>
              <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-medium">
                📄 Journal Publication
              </div>
            </div>
          </div>
        </motion.div>

        {/* Future Publications Placeholder */}
        <motion.div
          className="bg-card/50 text-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 group overflow-hidden border border-dashed border-accent/30"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.02, borderColor: "rgb(var(--accent))" }}
        >
          <div className="p-6 flex items-center justify-center h-full min-h-[200px]">
            <div className="text-center">
              <motion.div
                className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </motion.div>
              <span className="text-accent text-lg font-medium">Future Publication</span>
              <p className="text-gray-400 text-sm mt-2">Research in progress</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="bg-card/50 text-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 group overflow-hidden border border-dashed border-accent/30"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.02, borderColor: "rgb(var(--accent))" }}
        >
          <div className="p-6 flex items-center justify-center h-full min-h-[200px]">
            <div className="text-center">
              <motion.div
                className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </motion.div>
              <span className="text-accent text-lg font-medium">Future Publication</span>
              <p className="text-gray-400 text-sm mt-2">Coming soon</p>
            </div>
          </div>
        </motion.div>

        {/* Add More Cards Here as Needed */}
      </div>
    </div>
  );
};

export default Publications;