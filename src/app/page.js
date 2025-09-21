'use client';

import { useState } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  const handleEmailClick = () => {
    window.location.href = 'mailto:michael.trbo@gmail.com';
  };

  const ProfilePicture = () => (
    <div className="w-48 h-48 rounded-full bg-gradient-to-br from-amber-200 to-orange-300 flex items-center justify-center text-6xl font-comic text-amber-800 shadow-lg mx-auto">
      MT
    </div>
  );

  const Navigation = () => (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 dark:bg-stone-900/90 backdrop-blur-sm z-50 border-b border-amber-200 dark:border-amber-800">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-comic font-bold text-amber-800 dark:text-amber-200">
            Michael Trbovic
          </h1>
          <div className="flex space-x-8">
            {['home', 'about', 'projects', 'blog', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`font-comic capitalize transition-colors duration-200 ${
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

  const HomeSection = () => (
    <section className="min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <ProfilePicture />
        <h1 className="text-6xl font-comic font-bold text-amber-800 dark:text-amber-200 mt-8 mb-4">
          Michael Trbovic
        </h1>
        <h2 className="text-2xl font-comic text-stone-600 dark:text-stone-400 mb-8">
          Electrical & AI Engineering Student at Western University
        </h2>
        <p className="text-lg font-comic text-stone-700 dark:text-stone-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Passionate about the intersection of electrical engineering and artificial intelligence. 
          Exploring innovative solutions that bridge hardware and software to create the future of technology.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleEmailClick}
            className="bg-amber-600 hover:bg-amber-700 text-white font-comic px-8 py-3 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Get In Touch
          </button>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-stone-200 hover:bg-stone-300 dark:bg-stone-700 dark:hover:bg-stone-600 text-stone-800 dark:text-stone-200 font-comic px-8 py-3 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Follow on Twitter
          </a>
        </div>
      </div>
    </section>
  );

  const AboutSection = () => (
    <section className="min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-comic font-bold text-amber-800 dark:text-amber-200 mb-8 text-center">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg font-comic text-stone-700 dark:text-stone-300 mb-6 leading-relaxed">
              I'm a dedicated student pursuing electrical and AI engineering at Western University, 
              where I'm developing expertise in both hardware design and machine learning applications.
            </p>
            <p className="text-lg font-comic text-stone-700 dark:text-stone-300 mb-6 leading-relaxed">
              My passion lies in creating intelligent systems that can sense, process, and respond to 
              the world around us. I believe the future belongs to engineers who can seamlessly integrate 
              electrical systems with artificial intelligence.
            </p>
            <div className="space-y-4">
              <h3 className="text-xl font-comic font-semibold text-amber-700 dark:text-amber-300">
                Areas of Interest
              </h3>
              <ul className="space-y-2 font-comic text-stone-700 dark:text-stone-300">
                <li>• Machine Learning & Neural Networks</li>
                <li>• Embedded Systems Design</li>
                <li>• Signal Processing</li>
                <li>• Computer Vision</li>
                <li>• IoT & Smart Systems</li>
              </ul>
            </div>
          </div>
          <div className="bg-amber-50 dark:bg-stone-800 p-8 rounded-lg">
            <h3 className="text-2xl font-comic font-semibold text-amber-800 dark:text-amber-200 mb-4">
              Education
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-comic font-semibold text-stone-800 dark:text-stone-200">
                  Western University
                </h4>
                <p className="font-comic text-stone-600 dark:text-stone-400">
                  Electrical & AI Engineering
                </p>
                <p className="font-comic text-stone-500 dark:text-stone-500 text-sm">
                  Current Student
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const ProjectsSection = () => (
    <section className="min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-comic font-bold text-amber-800 dark:text-amber-200 mb-12 text-center">
          My Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Smart Home Automation System",
              description: "An IoT-based home automation system using Arduino and machine learning for energy optimization.",
              tech: ["Arduino", "Python", "Machine Learning", "IoT"],
              status: "In Progress"
            },
            {
              title: "Neural Network Signal Processor",
              description: "Real-time audio signal processing using neural networks for noise reduction and enhancement.",
              tech: ["Python", "TensorFlow", "DSP", "Real-time Systems"],
              status: "Completed"
            },
            {
              title: "Computer Vision Robot",
              description: "Autonomous robot with computer vision capabilities for object detection and navigation.",
              tech: ["OpenCV", "Raspberry Pi", "Python", "Robotics"],
              status: "In Progress"
            }
          ].map((project, index) => (
            <div key={index} className="bg-white dark:bg-stone-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-comic font-semibold text-amber-800 dark:text-amber-200">
                  {project.title}
                </h3>
                <span className={`px-3 py-1 rounded-full text-sm font-comic ${
                  project.status === 'Completed' 
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                    : 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200'
                }`}>
                  {project.status}
                </span>
              </div>
              <p className="font-comic text-stone-700 dark:text-stone-300 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 rounded-full text-sm font-comic"
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

  const BlogSection = () => (
    <section className="min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-comic font-bold text-amber-800 dark:text-amber-200 mb-12 text-center">
          Latest Blog Posts
        </h2>
        <div className="space-y-8">
          {[
            {
              title: "The Future of AI in Electrical Engineering",
              excerpt: "Exploring how artificial intelligence is revolutionizing electrical engineering practices and opening new possibilities for innovation.",
              date: "December 15, 2024",
              readTime: "5 min read"
            },
            {
              title: "Building My First Neural Network from Scratch",
              excerpt: "A deep dive into understanding neural networks by implementing one from the ground up using only NumPy.",
              date: "December 10, 2024",
              readTime: "8 min read"
            },
            {
              title: "IoT Security: Challenges and Solutions",
              excerpt: "Examining the security vulnerabilities in IoT devices and discussing practical solutions for protecting connected systems.",
              date: "December 5, 2024",
              readTime: "6 min read"
            }
          ].map((post, index) => (
            <article key={index} className="bg-white dark:bg-stone-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
              <h3 className="text-2xl font-comic font-semibold text-amber-800 dark:text-amber-200 mb-3">
                {post.title}
              </h3>
              <p className="font-comic text-stone-700 dark:text-stone-300 mb-4 leading-relaxed">
                {post.excerpt}
              </p>
              <div className="flex justify-between items-center text-sm text-stone-500 dark:text-stone-400">
                <span className="font-comic">{post.date}</span>
                <span className="font-comic">{post.readTime}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );

  const ContactSection = () => (
    <section className="min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-comic font-bold text-amber-800 dark:text-amber-200 mb-8">
          Get In Touch
        </h2>
        <p className="text-lg font-comic text-stone-700 dark:text-stone-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          I'm always interested in discussing new opportunities, collaborations, or just having a chat about 
          electrical engineering and AI. Feel free to reach out!
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button
            onClick={handleEmailClick}
            className="bg-amber-600 hover:bg-amber-700 text-white font-comic px-8 py-4 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl text-lg"
          >
            Send Email
          </button>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-stone-200 hover:bg-stone-300 dark:bg-stone-700 dark:hover:bg-stone-600 text-stone-800 dark:text-stone-200 font-comic px-8 py-4 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl text-lg"
          >
            Connect on Twitter
          </a>
        </div>
        <div className="mt-12 text-center">
          <p className="font-comic text-stone-600 dark:text-stone-400">
            michael.trbo@gmail.com
          </p>
        </div>
      </div>
    </section>
  );

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <HomeSection />;
      case 'about':
        return <AboutSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'blog':
        return <BlogSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <HomeSection />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 dark:from-stone-900 dark:to-stone-800">
      <Navigation />
      {renderSection()}
    </div>
  );
}
