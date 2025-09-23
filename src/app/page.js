'use client';

import { useState } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  const handleEmailClick = () => {
    window.location.href = 'mailto:michael.trbo@gmail.com';
  };

  const ProfilePicture = () => (
    <div className="w-32 h-32 sm:w-48 sm:h-48 rounded-full bg-gradient-to-br from-amber-200 to-orange-300 flex items-center justify-center text-4xl sm:text-6xl font-comic text-amber-800 shadow-lg mx-auto">
      MT
    </div>
  );

  const Navigation = () => (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 dark:bg-stone-900/90 backdrop-blur-sm z-50 border-b border-amber-200 dark:border-amber-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-5">
        <div className="flex justify-between items-center">
          {activeSection !== 'home' && (
            <button
              onClick={() => setActiveSection('home')}
              className="text-left text-xl sm:text-2xl font-comic font-bold text-amber-800 dark:text-amber-200 hover:text-amber-600 dark:hover:text-amber-300"
              aria-label="Go to Home"
            >
              Michael Trbovic
            </button>
          )}
          <div className="ml-auto flex flex-wrap gap-2 sm:gap-4 lg:gap-8">
            {['home', 'experience', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`font-comic capitalize transition-colors duration-200 text-sm sm:text-base ${
                  activeSection === section
                    ? 'text-amber-600 dark:text-amber-400 font-semibold'
                    : 'text-stone-600 dark:text-stone-400 hover:text-amber-600 dark:hover:text-amber-400'
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );

  const AboutSection = () => (
    <section className="min-h-screen flex items-center justify-center pt-24 sm:pt-28 pb-12 sm:pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <ProfilePicture />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-comic font-bold text-amber-800 dark:text-amber-200 mt-6 sm:mt-8 mb-3 sm:mb-4">
            Michael Trbovic
          </h1>
          <h2 className="text-lg sm:text-xl lg:text-2xl font-comic text-stone-600 dark:text-stone-400">
            Electrical & AI Engineering Student at Western University
          </h2>
        </div>
        <h2 className="text-3xl sm:text-4xl font-comic font-bold text-amber-800 dark:text-amber-200 mb-6 sm:mb-10 text-center">
          About Me
        </h2>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-comic font-semibold text-amber-700 dark:text-amber-300 mb-4">
                Education
              </h3>
              <div className="bg-amber-50 dark:bg-stone-800 p-6 rounded-lg">
                <h4 className="font-comic font-semibold text-stone-800 dark:text-stone-200 text-lg">
                  University of Western Ontario
                </h4>
                <p className="font-comic text-stone-600 dark:text-stone-400 mb-2">
                  Bachelor of Engineering in Electrical and Artificial Intelligence Systems
                </p>
                <p className="font-comic text-stone-500 dark:text-stone-500 text-sm mb-3">
                  September 2023 – April 2028
                </p>
                <p className="font-comic text-stone-700 dark:text-stone-300 text-sm leading-relaxed">
                  Currently pursuing a comprehensive engineering program that combines electrical systems design with artificial intelligence applications. 
                  The curriculum covers digital logic design, circuits and systems, artificial intelligence, and data structures, providing a strong 
                  foundation for developing intelligent hardware solutions.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-comic font-semibold text-amber-700 dark:text-amber-300 mb-4">
                Technical Skills
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-comic font-semibold text-stone-800 dark:text-stone-200 mb-2">Programming Languages</h4>
                  <p className="font-comic text-stone-700 dark:text-stone-300 text-sm">
                    Proficient in Java, Python, C++, and JavaScript, with experience building applications ranging from embedded systems to web development.
                  </p>
                </div>
                <div>
                  <h4 className="font-comic font-semibold text-stone-800 dark:text-stone-200 mb-2">Development Tools</h4>
                  <p className="font-comic text-stone-700 dark:text-stone-300 text-sm">
                    Experienced with Eagle, Altium, HDL, Verilog, MicroCap, Git, VS Code, Visual Studio, IntelliJ, Eclipse, Google Cloud API, 
                    Android SDK, and SolidWorks for comprehensive hardware and software development.
                  </p>
                </div>
                <div>
                  <h4 className="font-comic font-semibold text-stone-800 dark:text-stone-200 mb-2">Office & Collaboration</h4>
                  <p className="font-comic text-stone-700 dark:text-stone-300 text-sm">
                    Skilled in Microsoft Office Suite including Word, Excel, PowerPoint, and OneDrive for professional documentation and collaboration.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-comic font-semibold text-amber-700 dark:text-amber-300 mb-4">
                Professional Philosophy
              </h3>
              <p className="font-comic text-stone-700 dark:text-stone-300 mb-4 leading-relaxed">
                I&apos;m passionate about creating intelligent systems that bridge the gap between hardware and software. 
                My approach combines rigorous electrical engineering principles with cutting-edge artificial intelligence 
                to develop solutions that are both innovative and practical.
              </p>
              <p className="font-comic text-stone-700 dark:text-stone-300 leading-relaxed">
                I believe the future of technology lies in seamlessly integrated systems where electrical components 
                work harmoniously with AI algorithms to solve real-world problems. This philosophy drives my work 
                in everything from microvalve control systems to thermal vision applications.
              </p>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-comic font-semibold text-amber-700 dark:text-amber-300 mb-4">
                Contact Information
              </h3>
              <div className="bg-stone-100 dark:bg-stone-700 p-6 rounded-lg space-y-2">
                <p className="font-comic text-stone-700 dark:text-stone-300">
                  <span className="font-semibold">Email:</span> <a href="mailto:michael.trbo@gmail.com" className="text-amber-700 dark:text-amber-300 hover:underline">michael.trbo@gmail.com</a>
                </p>
                <p className="font-comic text-stone-700 dark:text-stone-300">
                  <span className="font-semibold">LinkedIn:</span> <a href="https://linkedin.com/in/michaeltrbovic" target="_blank" rel="noopener noreferrer" className="text-amber-700 dark:text-amber-300 hover:underline">linkedin.com/in/michaeltrbovic</a>
                </p>
                <p className="font-comic text-stone-700 dark:text-stone-300">
                  <span className="font-semibold">GitHub:</span> <a href="https://github.com/michaeltrbo" target="_blank" rel="noopener noreferrer" className="text-amber-700 dark:text-amber-300 hover:underline">github.com/michaeltrbo</a>
                </p>
                <p className="font-comic text-stone-700 dark:text-stone-300">
                  <span className="font-semibold">X (Twitter):</span> <a href="https://x.com/michael_trbo" target="_blank" rel="noopener noreferrer" className="text-amber-700 dark:text-amber-300 hover:underline">x.com/michael_trbo</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const ExperienceSection = () => (
    <section className="min-h-screen flex items-center justify-center pt-24 sm:pt-28 pb-12 sm:pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-comic font-bold text-amber-800 dark:text-amber-200 mb-8 sm:mb-12 text-center">
          Professional Experience
        </h2>
        <div className="space-y-8">
          <div className="bg-white dark:bg-stone-800 p-6 sm:p-8 rounded-lg shadow-lg">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-comic font-semibold text-amber-800 dark:text-amber-200">
                  Lead Electrical Engineer
                </h3>
                <p className="font-comic text-stone-600 dark:text-stone-400 text-lg">
                  <a href="https://www.spermracing.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">Spermracing</a>
                </p>
                <p className="font-comic text-stone-500 dark:text-stone-500 text-sm">
                  April 2025 – September 2025 | Remote / San Francisco, CA
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <p className="font-comic text-stone-700 dark:text-stone-300 leading-relaxed">
                Led the design and implementation of a sophisticated microvalve control system for synchronized starts on a microscopic racetrack. 
                This project required deep understanding of precision timing and control systems to ensure perfect synchronization across multiple 
                microvalves operating in a high-precision environment.
              </p>
              <p className="font-comic text-stone-700 dark:text-stone-300 leading-relaxed">
                Programmed ESP32 microcontrollers to actuate valves using custom MOSFET driver circuits, implementing robust 3.3V-to-5V level 
                shifting for reliable signal interfacing. Developed comprehensive PCB layouts and built functional prototypes, demonstrating 
                end-to-end hardware development capabilities from design to implementation.
              </p>
              <p className="font-comic text-stone-700 dark:text-stone-300 leading-relaxed">
                Collaborated with cross-functional teams to successfully launch the debut event in April 2025, showcasing strong project management 
                and team coordination skills in a fast-paced, innovative environment.
              </p>
            </div>
          </div>

          <div className="bg-amber-50 dark:bg-stone-800 p-6 sm:p-8 rounded-lg">
            <h3 className="text-xl sm:text-2xl font-comic font-semibold text-amber-800 dark:text-amber-200 mb-6">
              Extracurricular Activities
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-comic font-semibold text-stone-800 dark:text-stone-200 text-lg mb-2">
                  Western Engineering Electrium Mobility
                </h4>
                <p className="font-comic text-stone-600 dark:text-stone-400 text-sm mb-3">
                  September 2024 – Present | Altium, Solidworks, MicroCap
                </p>
                <p className="font-comic text-stone-700 dark:text-stone-300 text-sm leading-relaxed">
                  Co-designed and assembled a high-performance electric longboard for inter-university competitions, focusing on both mechanical 
                  and electrical integration. Co-engineered critical safety systems including anti-spark circuitry and main power distribution board, 
                  ensuring reliable operation under high-performance conditions. Collaborated with cross-functional teams on mechanical design and 
                  electrical integration, developing strong teamwork and technical communication skills.
                </p>
              </div>
              <div>
                <h4 className="font-comic font-semibold text-stone-800 dark:text-stone-200 text-lg mb-2">
                  <a href="https://2056.ca/" target="_blank" rel="noopener noreferrer" className="hover:underline">Robotics Team 2056</a>
                </h4>
                <p className="font-comic text-stone-600 dark:text-stone-400 text-sm mb-3">
                  September 2019 – June 2023 | Solidworks, Soldering, Circuit Design
                </p>
                <p className="font-comic text-stone-700 dark:text-stone-300 text-sm leading-relaxed">
                  Represented the team annually at the FIRST Robotics Competition, gaining valuable experience in competitive engineering environments. 
                  Designed and prototyped key robot components with focus on electronic and mechanical subsystems, developing hands-on skills in 
                  rapid prototyping and iterative design. Mentored junior team members on soldering techniques and circuit assembly, building 
                  leadership and teaching capabilities while contributing to team success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const ProjectsSection = () => (
    <section className="min-h-screen flex items-center justify-center pt-24 sm:pt-28 pb-12 sm:pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-comic font-bold text-amber-800 dark:text-amber-200 mb-8 sm:mb-12 text-center">
          My Projects
        </h2>
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          {[
            {
              title: "VCPU - 16-bit Virtual Computer",
              description: "Designed and implemented a complete computer system from the ground up using Hardware Description Language. Built key digital logic components including multiplexers, adders, registers, RAM modules, ALU, and CPU, integrating them into a fully functional 16-bit computer capable of executing machine instructions. Applied concepts of digital logic design, sequential circuits, and computer architecture to create a comprehensive understanding of computer systems at the hardware level.",
              tech: ["HDL", "Verilog", "Digital Logic", "Computer Architecture"],
              status: "Completed",
              period: "May 2025 – September 2025"
            },
            {
              title: "ThermalVision: Object Detection for Autonomous Vehicles",
              description: "Developed a YOLO object detection system to detect cars, pedestrians, and cyclists using thermal imaging technology. Optimized model inference on Raspberry Pi 5 using ONNX and 8-bit quantization for real-time performance, enabling autonomous vehicles to navigate safely in low-visibility conditions such as nighttime. Processed thermal camera frames to enhance obstacle detection capabilities and designed a comprehensive evaluation pipeline to measure model accuracy and efficiency.",
              tech: ["Python", "YOLO", "PyTorch", "ONNX", "Raspberry Pi"],
              status: "Completed",
              period: "March 2025"
            },
            {
              title: "Moore FSM Sequence Detector",
              description: "Designed and implemented a Moore Finite State Machine to detect specific bit sequences derived from unique input patterns. Optimized state assignments using Gray code and minterm-based approaches to minimize logic gate usage, demonstrating advanced digital design optimization techniques. Developed and simulated the design in Quartus, synthesizing it onto an FPGA for real-time testing and evaluation.",
              tech: ["Verilog", "Quartus", "FPGA", "FSM Design"],
              status: "Completed",
              period: "November 2024 - December 2024"
            }
          ].map((project, index) => (
            <div key={index} className="bg-white dark:bg-stone-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                <h3 className="text-lg sm:text-xl font-comic font-semibold text-amber-800 dark:text-amber-200 mb-2 sm:mb-0">
                  {project.title === 'ThermalVision: Object Detection for Autonomous Vehicles' ? (
                    <a href="https://github.com/michaeltrbo/Western-GM-Hidden-Insights-Challenge" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </h3>
                <div className="flex flex-col sm:items-end space-y-2">
                  <span className={`px-3 py-1 rounded-full text-xs sm:text-sm font-comic ${
                    project.status === 'Completed' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                      : 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200'
                  }`}>
                    {project.status}
                  </span>
                  <span className="font-comic text-stone-500 dark:text-stone-500 text-xs">
                    {project.period}
                  </span>
                </div>
              </div>
              <p className="font-comic text-stone-700 dark:text-stone-300 mb-4 leading-relaxed text-sm">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 sm:px-3 py-1 bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 rounded-full text-xs sm:text-sm font-comic"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const ContactSection = () => (
    <section className="min-h-screen flex items-center justify-center pt-24 sm:pt-28 pb-12 sm:pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-comic font-bold text-amber-800 dark:text-amber-200 mb-6 sm:mb-8">
          Get In Touch
        </h2>
        <p className="text-base sm:text-lg font-comic text-stone-700 dark:text-stone-300 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
          I&apos;m always interested in discussing new opportunities, collaborations, or just having a chat about 
          electrical engineering and AI. Feel free to reach out!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
          <button
            onClick={handleEmailClick}
            className="bg-amber-600 hover:bg-amber-700 text-white font-comic px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl text-sm sm:text-lg"
          >
            Send Email
          </button>
          <a
            href="https://linkedin.com/in/michaeltrbovic"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white font-comic px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl text-sm sm:text-lg"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/michaeltrbo"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-stone-900 hover:bg-black text-white font-comic px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl text-sm sm:text-lg"
          >
            GitHub
          </a>
           <a
             href="https://x.com/michael_trbo"
             target="_blank"
             rel="noopener noreferrer"
             className="bg-sky-400 hover:bg-sky-500 text-white font-comic px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl text-sm sm:text-lg"
           >
             Twitter
           </a>
        </div>
        <div className="mt-8 sm:mt-12 text-center">
          <p className="font-comic text-stone-600 dark:text-stone-400 text-sm sm:text-base">
            michael.trbo@gmail.com
          </p>
        </div>
      </div>
    </section>
  );

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <AboutSection />;
      case 'about':
        return <AboutSection />;
      case 'experience':
        return <ExperienceSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <AboutSection />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 dark:from-stone-900 dark:to-stone-800">
      <Navigation />
      {renderSection()}
    </div>
  );
}
