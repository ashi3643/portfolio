import React, { useRef, useEffect, useState } from 'react';
import './Education.css';

const educationList = [
	{
		degree: 'B.Tech in Computer Science Engineering',
		institution: 'Sanketika Vidya Parishad Engineering College, Visakhapatnam',
		year: '2021 - 2025',
		details:
			'Graduated with a CGPA of 7.52. Gained foundational skills in Python, Java, AI, and Full Stack Development.',
		icon: '🎓',
	},
	{
		degree: 'Intermediate in MPC',
		institution: 'Sri Gurukula Vidyalayam Junior College for Sciences, Palasa',
		year: '2019 - 2021',
		details:
			'Completed intermediate education in the branch of Mathematics, Physics, and Chemistry .',
		icon: '🏫',
	},
	{
		degree: '10th Class in SSC',
		institution: 'Sri Gurukula Vidyalayam School, Palasa',
		year: '2018 - 2019',
		details: 'Completed secondary education with a focus on general studies.',
		icon: '🧮',
	},
];

const Education = ({ darkMode }) => {
	const lineRef = useRef(null);
	const cardRefs = useRef([]);
	const badgeRefs = useRef([]);
	const [visible, setVisible] = useState({});
	const [expanded, setExpanded] = useState(null);

	useEffect(() => {
		const observer = new window.IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setVisible((v) => ({ ...v, [entry.target.dataset.key]: true }));
					}
				});
			},
			{ threshold: 0.3 }
		);
		if (lineRef.current) observer.observe(lineRef.current);
		cardRefs.current.forEach((el, i) => el && observer.observe(el));
		badgeRefs.current.forEach((el, i) => el && observer.observe(el));
		return () => observer.disconnect();
	}, []);

	const handleExpand = (idx) => {
		setExpanded(expanded === idx ? null : idx);
	};

	return (
		<section
			className={`education-section${darkMode ? ' dark' : ' light'}`}
			id="education"
		>
			<h2>Education</h2>
			<div className="education-timeline" style={{ position: 'relative' }}>
				<div
					className="timeline-line-wrapper"
					style={{
						position: 'absolute',
						left: 0,
						top: 0,
						bottom: 0,
						width: '6px',
						height: '100%',
						zIndex: 0,
					}}
				>
					<svg
						height="100%"
						width="6"
						style={{ position: 'absolute', left: 0, top: 0 }}
					>
						<defs>
							<linearGradient
								id="timeline-gradient"
								x1="0"
								y1="0"
								x2="0"
								y2="1"
							>
								<stop offset="0%" stopColor="#38bdf8" />
								<stop offset="100%" stopColor="#f472b6" />
							</linearGradient>
						</defs>
						<rect
							x="0"
							y="0"
							width="6"
							height="100%"
							fill="url(#timeline-gradient)"
							rx="3"
						/>
					</svg>
				</div>
				{educationList.map((edu, idx) => (
					<div className="timeline-row" key={edu.year}>
						<div className="timeline-dot"></div>
						<div
							className={`timeline-card visible`}
							ref={(el) => (cardRefs.current[idx] = el)}
							data-key={`card${idx}`}
							tabIndex={0}
							aria-expanded={expanded === idx}
							aria-controls={`edu-details-${idx}`}
							onClick={() => handleExpand(idx)}
							onKeyDown={(e) =>
								(e.key === 'Enter' || e.key === ' ') &&
								handleExpand(idx)
							}
						>
							<h3>
								{edu.icon} {edu.degree}
							</h3>
							<div className="education-meta">📍 {edu.institution}</div>
							<div className="timeline-date">📅 {edu.year}</div>
							{expanded === idx && (
								<p id={`edu-details-${idx}`}>{edu.details}</p>
							)}
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Education;
