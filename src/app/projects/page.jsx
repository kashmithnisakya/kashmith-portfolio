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
              Fourth Semester Individual Project
              </div>
              <a
                href="https://github.com/kashmithnisakya/Individual-Project.git"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-1 text-lg leading-tight font-medium hover:underline"
              >
                Radio telescope with dual axis solar tracker and battery charge controller
              </a>
              <ul className="mt-3 space-y-4 list-disc list-inside text-gray-400">
                <li className="leading-relaxed">
                  The telescope could map the satellites(Using Satellite Finder Circuit). 
                </li>
                <li className="leading-relaxed">
                  Dual Axis Solar was used to track the sunlight(To Increase the efficiency). 
                </li>
                <li className="leading-relaxed">
                  Used PID Controller to control the current by changing the duty cycle. 
                </li>
                <li className="leading-relaxed">
                  Used Battery charger Circuit to increase the battery life.
                </li>
              </ul>

            </div>
          </div>

          <div className="bg-card text-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300">
            <div className="p-6">
              <div className="uppercase tracking-wide text-sm text-accent font-semibold">
              Third Semester Engineering Design Group Project
              </div>
              <a
                href="https://www.youtube.com/watch?v=iB-OG7TEEDw&list=PLUAqWCx1agmOhwzTqfo-OlksiCE60cchw&index=7"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-1 text-lg leading-tight font-medium hover:underline"
              >
                Domestics Covid Test-Kit to measure SPO2, Heart rate, Body temperature and ECG analyzer
              </a>
              <ul className="mt-3 space-y-4 list-disc list-inside text-gray-400">
                <li className="leading-relaxed">
                Measure SPO2, Heart rate, Temperature and ECG data and Store them
                </li>
                <li className="leading-relaxed">
                Upload user data to the web Server. 
                </li>
                <li className="leading-relaxed">
                Remove noise and analyze the user data using MATLAB. 
                </li>
                <li className="leading-relaxed">
                Push those data to a mobile app and show the predictions. 
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
  