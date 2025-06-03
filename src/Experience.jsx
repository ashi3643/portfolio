import React from "react";
import './Experience.css';
import { FaRocket, FaCode } from 'react-icons/fa';

const experienceList = [
  {
    role: 'Data Science with AI Intern',
    company: 'Edunet Foundation (IBM SkillsBuild)',
    period: 'Feb 2024 – Mar 2024',
    description: 'Worked on real-time AI use cases using IBM Watson. Gained exposure to data preprocessing, model building (Random Forest), and Generative AI techniques.',
    icon: <FaRocket />,
    highlights: [
      'Applied IBM Watson for AI projects',
      'Data preprocessing & Random Forest modeling',
      'Explored Generative AI techniques'
    ]
  },
  {
    role: 'Python Intern',
    company: 'Devskill Hub',
    period: 'Mar 2024 – Apr 2024',
    description: 'Built Python-based solutions focusing on logic development, file handling, and automation tasks. Strengthened OOP concepts and debugged scripts.',
    icon: <FaCode />,
    highlights: [
      'Developed automation scripts in Python',
      'Enhanced OOP and debugging skills',
      'Worked on file handling and logic building'
    ]
  },
  {
    role: 'Data Science with AI Intern',
    company: 'YBI Foundation',
    period: 'May 2024 – Jun 2024',
    description: 'Developed a machine learning model to predict cardiovascular disease using the Framingham dataset. Achieved high accuracy with Random Forest.',
    icon: <FaRocket />,
    highlights: [
      'Built ML model for disease prediction',
      'Used Framingham dataset & Random Forest',
      'Achieved high model accuracy'
    ]
  }
];

const Experience = ({ darkMode }) => (
  <section className={`experience-section${darkMode ? ' dark' : ' light'}`} id="experience">
    <h2>Experience</h2>
    <div className="experience-list">
      {experienceList.map((exp, idx) => (
        <div className="experience-card" key={idx}>
          <div className="experience-icon">{exp.icon}</div>
          <div className="experience-details">
            <h3>{exp.role} <span className={`exp-company${idx === 0 ? ' highlight' : ''}`}>@ {exp.company}</span></h3>
            <div className="exp-period">{exp.period}</div>
            <p>{exp.description}</p>
            <ul className="exp-highlights">
              {exp.highlights.map((h, i) => <li key={i}>{h}</li>)}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Experience;
