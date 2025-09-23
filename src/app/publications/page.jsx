const Publications = () => {

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Publication Card */}
        <div className="bg-card text-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300">
          <div className="p-6">
            <div className="uppercase tracking-wide text-sm text-accent font-semibold">
              2024 IEEE 5th World AI IoT Congress (AIIoT)
            </div>
            <a
              href="https://ieeexplore.ieee.org/document/10579028"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-1 text-lg leading-tight font-medium hover:underline"
            >
              Self-Adaptive Non-Intrusive Load Monitoring Using Deep Learning
            </a>
            <p className="mt-2 text-gray-400">
              To optimize energy utilization, efficient energy management practices are important. Non-intrusive load monitoring (NILM) has emerged as a promising solution, particularly with the advent of deep learning techniques.
            </p>
            <p className="mt-2 text-gray-400">
              This paper introduces a novel approach to NILM: Self-Adaptive Non-Intrusive Load Monitoring using Deep Learning. Conventional NILM models often struggle to adapt to changes in power consumption patterns, especially with aging appliances.
            </p>
            <p className="mt-2 text-gray-400">
              We propose a Self-Adaptive NILM model that integrates deep learning techniques with transfer learning and pseudolabeling.
            </p>
          </div>
        </div>

        {/* Second Publication */}
        <div className="bg-card text-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300">
          <div className="p-6">
            <div className="uppercase tracking-wide text-sm text-accent font-semibold">
              IEEE Access, vol. 13, pp. 106524–106539, 2025
            </div>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-1 text-lg leading-tight font-medium hover:underline"
            >
              Self-Adaptive Deep Learning Framework for Non-Intrusive Load Monitoring: Addressing Aging Appliance Challenges With Transfer Learning and Pseudo Labeling
            </a>
            <p className="mt-2 text-gray-400">
              W. A. Yasodya, S. M. L. Arampola, M. S. K. Nisakya, V. Logeeshan, S. Kumarawadu, C. Wanigasekara.
            </p>
            <p className="mt-2 text-gray-400">
              This research addresses the critical challenge of appliance aging in Non-Intrusive Load Monitoring (NILM) systems through innovative deep learning approaches.
            </p>
          </div>
        </div>

        {/* Future Publications Placeholder */}
        <div className="bg-card text-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300">
          <div className="p-6 flex items-center justify-center h-full">
            <span className="text-accent text-lg">Future Publication</span>
          </div>
        </div>

        <div className="bg-card text-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300">
          <div className="p-6 flex items-center justify-center h-full">
            <span className="text-accent text-lg">Future Publication</span>
          </div>
        </div>

        {/* Add More Cards Here as Needed */}
      </div>
    </div>
  );
};

export default Publications;
