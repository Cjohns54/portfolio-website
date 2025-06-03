import { Experience, Project, NavItem } from '../types';

export const navItems: NavItem[] = [
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const contactInfo = {
  name: 'CONNOR A. JOHNSON',
  phone: '+1 (519) 590-0163',
  location: 'Waterloo, ON',
  email: 'caugjohnson@gmail.com',
  linkedin: 'https://linkedin.com/in/connorajohnson',
  github: 'https://cjohns54.github.io/portfolio',
};

export const education = [
  {
    school: 'The University of Guelph',
    degree: 'Bachelor of Computer Engineering',
    period: 'September 2020 - April 2025',
    coursework: [
      'Algorithm Design',
      'Data Structures',
      'Object-Oriented Programming',
      'Operating Systems',
      'Communication Systems',
      'Embedded System Design',
      'Large-Scale Software Engineering',
      'Assembly Language Programming',
      'Real-Time Robotics',
    ],
  },
];

export const skills = {
  languages: ['C', 'C++', 'Python', 'Java', 'JavaScript', 'PHP', 'HTML', 'CSS', 'MySQL', 'ARM', 'VHDL'],
  frameworks: ['Angular', 'React', 'Laravel', 'NgRx', 'RxJS', 'Pytest', 'Cypress', 'Playwright', 'Flutter'],
  devTools: ['Git', 'AWS', 'Jira', 'Confluence', 'Microsoft Azure', 'Jenkins', 'VS Code', 'Figma', 'CVAT'],
  operatingSystems: ['Mac', 'Windows', 'Linux/Ubuntu'],
};

export const experiences: Experience[] = [
  {
    id: 1,
    title: 'Full Stack R&D Engineer Intern',
    company: 'Ansys',
    location: 'San Jose, CA',
    period: 'May 2024 – May 2025',
    logoUrl: '/ANSYS.png',
    description: [
      '• Developing a web application utilizing **Angular, TypeScript and Python** to monitor advanced CAD simulations, contributing **+50 commits**, and **10 code reviews** with successful merges across **4 deployment release cycles**.',
      '• Engineered **3 core components** including real-time messaging, logging, and dynamic dialogs for simulation submissions.',
      '• Wrote **+10 unit, component, and E2E tests** using **Cypress**, improving test coverage by **50%**. Simulated mock environments for real-time testing using TestBed, NgRx and RxJS to **validate API data flow** and third-party visualizations like **Plotly**.',
      '• Designed and managed **CI/CD pipelines in Github Actions**, optimizing automation for builds, tests, and deployments.',
    ],
  },
  {
    id: 2,
    title: 'Co-Founder & CTO',
    company: 'EasierEmails.com',
    location: 'Toronto, ON',
    period: 'Jan 2024 – Present',
    logoUrl: '/easieremails-logo.png',
    description: [
      '• Led a team of **4 developers** to build a high-performance marketing platform trusted by dealerships across North America.',
      '• Achieved a reach of **+2,400,000** targeted profiles, with an **85%** click-through rate and a **45%** conversion rate.',
      '• Developed **2 professional Interactive Layout Editors** for drag-and-drop creation of personalized automotive campaign websites and emails, with AWS S3–backed state storage for thousands of clients using JavaScript, PHP, and MySQL.',
      '• Engineered a comprehensive **analytics dashboard** to view campaign results supported by SendGrid API, an **interactive calendar** for scheduling and appointment booking, alongside a **CSV client upload interface** for bulk data ingestion.',
      '• Clients **exceeded industry click-through rates by 20%** on email campaigns by utilizing our personalized email tools.',
    ],
  },
  {
    id: 3,
    title: 'Software Engineer Intern',
    company: 'P&P Optica',
    location: 'Waterloo, ON',
    period: 'May 2023 – August 2023',
    logoUrl: '/PPO.jpg',
    description: [
      '• Solely developed the **core AI model testing script** for the company using **Python** which **evaluates the speed and performance of diverse models**, capturing results in **JSON** format for team-wide analysis.',
      '• Refactored an existing decision tree machine learning model, verified with **Pytest**, to accommodate distinct edge cases resulting in a **5% accuracy boost** while maintaining consistent model performance.',
      '• Developed a script to launch **AWS EC2 instances on Windows or Linux**, streamlining direct operational functionalities within the **AWS environment** using **Python and Boto3**.',
    ],
  },
  {
    id: 4,
    title: 'Software QA Engineer Intern',
    company: 'Virtek Vision International',
    location: 'Waterloo, ON',
    period: 'January 2023 – April 2023',
    logoUrl: '/Virtek.jpg',
    description: [
      '• Completed **+250 regression tests**, verifying the integrity of **75%** of existing software features before a major release.',
      '• Enhanced the **CI/CD pipeline** by creating **unit tests** using **Python** with TestComplete scripting software.',
      '• Leveraged **CVAT, Matplotlib and Python** to reduce image screening time from **hours to seconds** for the AI team.',
      '• Reported **28 defects, doubling the average** number of defects identified by QA interns.',
    ],
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'EasierEmails.com',
    description: 'SaaS business for dealerships to create personalized and custom email campaigns and web pages. Trusted by dealerships across North America.',
    technologies: ['JavaScript', 'PHP', 'MySQL', 'AWS (EC2, S3, Lightsail)', 'HTML', 'CSS', 'SendGrid API'],
    githubUrl: 'https://cjohns54.github.io/portfolio',
    imageUrl: './easieremails.png',
  },
  {
    id: 2,
    title: 'Real-Time Home Security System',
    description: 'C, FreeRTOS, Microcontroller, PIR motion sensor, ArdCAM',
    technologies: ['C', 'FreeRTOS', 'Microcontroller', 'PIR motion sensor', 'ArdCAM'],
    imageUrl: './securitysystem.png',
    githubUrl: 'https://github.com/Cjohns54/Real-Time-Home-Security-System',
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'React, TypeScript',
    technologies: ['React', 'TypeScript'],
    imageUrl: './portfolio.png',
    githubUrl: 'https://github.com/Cjohns54/portfolio-website.git',
  },
  {
    id: 4,
    title: 'Smart Desk + Full Stack Mobile App',
    description: 'Kotlin, C, Firebase, PSoC Bluetooth LE, Arduino, SolidWorks',
    technologies: ['Kotlin', 'C', 'Firebase', 'PSoC Bluetooth LE', 'Arduino', 'SolidWorks'],
    imageUrl: './smartdesk.png',
    githubUrl: 'https://github.com/Cjohns54/SmartDesk-MobileApp.git',
  }
];

export const aboutMe = {
  name: 'Connor A. Johnson',
  title: 'Computer Engineering Graduate',
  description: 'Computer Engineering graduate with four years of hands‑on coding experience and five software internships, specializing in seamless hardware‑software integration and grounded in core electrical engineering principles.',
  location: 'Waterloo, ON',
  email: 'caugjohnson@gmail.com',
  github: 'https://cjohns54.github.io/portfolio',
  linkedin: 'https://linkedin.com/in/connorajohnson',
  profileImage: './headshot.jpg',
};