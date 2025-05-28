import React, { useEffect, useRef } from 'react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { experiences } from '../data/portfolioData';

const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineItemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    timelineItemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      timelineItemRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section 
      id="experience" 
      className="py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div 
        ref={sectionRef} 
        className="container mx-auto px-4 md:px-6 opacity-0 translate-y-10 transition-all duration-700"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-10">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              ref={(el) => (timelineItemRefs.current[index] = el)}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 opacity-0 translate-y-10 transition-all duration-700"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Company logo */}
              {exp.logoUrl && (
                <div className="flex justify-start mb-2">
                  <img src={exp.logoUrl} alt={exp.company + ' logo'} className="h-10 w-auto object-contain" />
                </div>
              )}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                {exp.title}
              </h3>
              <div className="flex items-center gap-1 mb-2 text-gray-700 dark:text-gray-300">
                <Briefcase size={16} className="inline mr-1" />
                <span>{exp.company}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center">
                  <MapPin size={14} className="inline mr-1" />
                  <span>{exp.location}</span>
                </div>
                <div className="flex items-center mt-1 sm:mt-0">
                  <Calendar size={14} className="inline mr-1" />
                  <span>{exp.period}</span>
                </div>
              </div>
              <ul className="mt-2 space-y-2 list-disc list-inside">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="text-gray-600 dark:text-gray-400">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;