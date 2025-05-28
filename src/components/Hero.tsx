import React, { useEffect, useRef } from 'react';
import { Github as GitHub, Linkedin, Mail, MapPin } from 'lucide-react';
import { aboutMe, skills } from '../data/portfolioData';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollPosition = window.scrollY;
      const opacity = Math.max(1 - scrollPosition / 700, 0);
      const translateY = scrollPosition * 0.3;
      
      heroRef.current.style.opacity = String(opacity);
      heroRef.current.style.transform = `translateY(${translateY}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen pt-24 pb-16 px-4 flex items-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto">
        <div ref={heroRef} className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <div className="w-full lg:w-1/3 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                <img
                  src={aboutMe.profileImage}
                  alt={aboutMe.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="w-full lg:w-2/3 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                Hi, I'm <span className="text-blue-600 dark:text-blue-400">{aboutMe.name}</span>
              </h1>
              
              <h2 className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6">
                {aboutMe.title}
              </h2>
              
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-2xl mx-auto lg:mx-0">
                {aboutMe.description}
              </p>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8">
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <MapPin size={18} className="mr-2" />
                  <span>{aboutMe.location}</span>
                </div>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10">
                <a 
                  href={`mailto:${aboutMe.email}`} 
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  <Mail size={18} />
                  <span>Email</span>
                </a>
                <a 
                  href={aboutMe.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  <GitHub size={18} />
                  <span>GitHub</span>
                </a>
                <a 
                  href={aboutMe.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  <Linkedin size={18} />
                  <span>LinkedIn</span>
                </a>
              </div>

              <div className="mt-8">
                <a 
                  style={{ marginRight: '20px' }}
                  href="#projects" 
                  className="inline-block px-8 py-3 bg-blue-600 dark:bg-blue-700 text-white rounded-lg shadow-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors transform hover:-translate-y-1 duration-200"
                >
                  View My Projects
                </a>
                <a
                  href="/ConnorJohnson_Resume_2025.pdf"
                  style={{ background: 'green' }}
                  download
                  className="inline-block px-8 py-3 bg-green-600 dark:bg-green-700 text-white rounded-lg shadow-lg hover:bg-green-700 dark:hover:bg-green-600 transition-colors transform hover:-translate-y-1 duration-200"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;