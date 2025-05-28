import React from 'react';
import { skills } from '../data/portfolioData';

const Skills = () => (
  <section id="skills" className="py-12 bg-gray-50 dark:bg-gray-800">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="font-semibold mb-2">Languages</h3>
          <ul className="flex flex-wrap gap-2">
            {skills.languages.map((lang, i) => (
              <li key={i} className="bg-gray-200 dark:bg-gray-700 rounded px-2 py-1 text-sm">{lang}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Frameworks</h3>
          <ul className="flex flex-wrap gap-2">
            {skills.frameworks.map((fw, i) => (
              <li key={i} className="bg-gray-200 dark:bg-gray-700 rounded px-2 py-1 text-sm">{fw}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Developer Tools/Technologies</h3>
          <ul className="flex flex-wrap gap-2">
            {skills.devTools.map((tool, i) => (
              <li key={i} className="bg-gray-200 dark:bg-gray-700 rounded px-2 py-1 text-sm">{tool}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Operating Systems</h3>
          <ul className="flex flex-wrap gap-2">
            {skills.operatingSystems.map((os, i) => (
              <li key={i} className="bg-gray-200 dark:bg-gray-700 rounded px-2 py-1 text-sm">{os}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Skills; 