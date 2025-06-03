import React from 'react';
import './Skills.css';

const skillsData = [
	{
		category: 'Programming Languages',
		icon: '💻',
		items: ['Python', 'Java', 'SQL'],
	},
	{
		category: 'Web Development',
		icon: '🌐',
		items: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Laravel'],
	},
	{
		category: 'Cloud & DevOps',
		icon: '☁️',
		items: [
			'IBM Cloud (Watson AI) – beginner level exposure',
			'Basic understanding of DevOps practices',
		],
	},
	{
		category: 'Data Science & AI',
		icon: '🧠',
		items: [
			'Random Forest',
			'Generative AI',
			'Model training, evaluation, and data preprocessing',
		],
	},
	{
		category: 'Tools & Platforms',
		icon: '📦',
		items: [
			'Git & GitHub',
			'Visual Studio Code',
			'Jupyter Notebook',
			'ServiceNow (basic knowledge from “Welcome to ServiceNow” course)',
		],
	},
	{
		category: 'Concepts',
		icon: '🛠️',
		items: [
			'Object-Oriented Programming (OOP)',
			'Agile & Scrum (sprint planning, QA/testing support, team collaboration)',
			'Software Development Life Cycle (SDLC)',
		],
	},
];

const Skills = ({ darkMode }) => (
	<section
		className={`skills-section${darkMode ? ' dark' : ' light'}`}
		id="skills"
	>
		<h2 style={{ display: 'flex', alignItems: 'center', gap: '0.7em' }}>
			Technical Skills
		</h2>
		<div className="skills-categories">
			{skillsData.map((cat, idx) => (
				<div className="skill-category" key={cat.category}>
					<div className="skill-category-title">
						<span
							style={{
								fontSize: '1.5em',
								marginRight: '0.5em',
							}}
						>
							{cat.icon}
						</span>
						<span>{cat.category}</span>
					</div>
					<ul className="skill-list">
						{cat.items.map((item, i) => (
							<li key={i}>{item}</li>
						))}
					</ul>
				</div>
			))}
		</div>
	</section>
);

export default Skills;
