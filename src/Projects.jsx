import React, { useEffect, useState } from 'react';
import './Projects.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
	{
		title: 'Secure File Storage using Hybrid Cryptography',
		description:
			'Built a secure file storage system using Python that combines AES (symmetric) and RSA (asymmetric) encryption techniques for fast and secure data handling.',
		tech: ['Python', 'AES', 'RSA'],
		images: [
			'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80',
		],
		githubUrl: 'https://github.com/ashi3643/Secure-File-Storage',
		demoUrl: 'https://secure-file-storage-demo.vercel.app',
		featured: true,
	},
	{
		title: 'Real-Time Task Manager with Cloud Deployment',
		description:
			'A full-stack task management app with real-time updates and collaborative features. Deployed on the cloud for global accessibility and responsiveness.',
		tech: ['React', 'Node.js', 'Firebase/AWS'],
		images: [
			'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
		],
		githubUrl: 'https://github.com/ashi3643/Task-Manager',
		demoUrl: 'https://task-manager-demo.vercel.app',
		featured: false,
	},
	{
		title: 'Cardiovascular Disease Prediction using Framingham Dataset',
		description:
			'Developed a machine learning model to predict cardiovascular disease using the Framingham dataset. Achieved high accuracy with Random Forest.',
		tech: ['Python', 'Scikit-learn', 'Pandas'],
		images: [
			'https://daxg39y63pxwu.cloudfront.net/images/blog/heart-disease-prediction-using-machine-learning-project/Heart_Disease_Prediction_using_Machine_Learning.png',
		],
		githubUrl: 'https://github.com/ashi3643/Heart-Disease-Prediction',
		demoUrl: 'https://colab.research.google.com/drive/1unn-obc5p8JEojbU26tMfJPNWkFlMoRU?usp=sharing',
		featured: false,
	},
	{
		title: 'Personal Portfolio Website',
		description:
			'Designed and deployed a responsive portfolio website to showcase personal projects, resume, and contact details.',
		tech: ['HTML/CSS', 'JavaScript', 'React'],
		images: [
			'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
		],
		githubUrl: 'https://github.com/ashi3643/portfolio',
		demoUrl: 'https://ashish-kumar.vercel.app',
		featured: false,
	},
];

const Projects = ({ darkMode }) => {
	useEffect(() => {
		AOS.init({ once: true, duration: 900, offset: 60 });
	}, []);

	const [modalOpen, setModalOpen] = useState(false);
	const [modalIdx, setModalIdx] = useState(0);
	const [carouselIdx, setCarouselIdx] = useState(0);
	const [showAll, setShowAll] = useState(false);

	const openModal = (idx) => {
		setModalIdx(idx);
		setCarouselIdx(0);
		setModalOpen(true);
	};

	const closeModal = () => setModalOpen(false);

	const nextImage = () => {
		const imgs = projects[modalIdx].images;
		setCarouselIdx((i) => (i + 1) % imgs.length);
	};

	const prevImage = () => {
		const imgs = projects[modalIdx].images;
		setCarouselIdx((i) => (i - 1 + imgs.length) % imgs.length);
	};

	const visibleProjects = showAll ? projects : projects.slice(0, 4);

	return (
		<section
			className={`projects-section${
				darkMode ? ' dark' : ' light'
			}`}
			id="projects"
			aria-labelledby="projects-title"
		>
			<h2 id="projects-title" data-aos="fade-up">
				Projects
			</h2>
			<div className="projects-masonry" role="list">
				<AnimatePresence>
					{visibleProjects.map((project, idx) => (
						<div className="project-card-group" key={idx}>
							<motion.article
								className={`project-card${
									project.featured ? ' featured' : ''
								}`}
								data-aos="fade-up"
								data-aos-delay={100 * idx}
								initial={{ opacity: 0, y: 40 }}
								animate={{ opacity: 1, y: 0 }}
								whileHover={{
									scale: 1.04,
									boxShadow:
										'0 16px 48px rgba(56,189,248,0.18)',
								}}
								exit={{ opacity: 0, y: 0 }}
								transition={{ duration: 0.5, delay: idx * 0.08 }}
								tabIndex={0}
								aria-label={project.title}
							>
								<div style={{ position: 'relative' }}>
									{/* Only render the image ONCE at the top of the card */}
									{project.images && project.images[0] && (
										<img
											src={project.images[0]}
											alt={project.title + ' preview'}
											className="w-full h-32 sm:h-36 md:h-40 object-cover rounded-t-lg mb-3 shadow-md bg-gray-100"
											style={{
												minHeight: '100px',
												maxHeight: '140px',
												aspectRatio: '1.8/1',
												backgroundColor: '#f3f4f6',
											}}
											onError={(e) => {
												e.target.onerror = null;
												e.target.src =
													'https://images.unsplash.com/photo-1508385082359-f48b1c1b1f87?auto=format&fit=crop&w=600&q=80';
											}}
										/>
									)}
									<div
										className="project-card-img-overlay"
										aria-hidden="true"
									></div>
								</div>
								{project.featured && (
									<span className="project-featured-badge">
										Featured
									</span>
								)}
								<h3>💻 {project.title}</h3>
								<p>{project.description}</p>
							</motion.article>
							<div className="project-preview-btn-outer">
								{project.demoUrl && (
									<a
										href={project.demoUrl}
										className="project-preview-btn"
										target="_blank"
										rel="noopener noreferrer"
										aria-label={`View live demo of ${project.title}`}
									>
										View Live Demo
									</a>
								)}
								{project.githubUrl && (
									<a
										href={project.githubUrl}
										className="project-preview-btn"
										style={{ marginLeft: '1rem', background: 'var(--card-bg)', color: 'var(--text-primary)', border: '1.5px solid var(--card-border)' }}
										target="_blank"
										rel="noopener noreferrer"
										aria-label={`View source code of ${project.title}`}
									>
										View Source Code
									</a>
								)}
							</div>
						</div>
					))}
				</AnimatePresence>
			</div>

			{/* ...existing code... */}
			{!showAll && projects.length > 4 && (
				<button
					className="show-more-btn"
					onClick={() => setShowAll(true)}
					aria-label="Show more projects"
				>
					Show More
				</button>
			)}

			{modalOpen && (
				<div
					className="project-modal-overlay"
					onClick={closeModal}
					aria-modal="true"
					role="dialog"
				>
					<div className="project-modal" onClick={(e) => e.stopPropagation()}>
						<div className="modal-carousel">
							<button
								onClick={prevImage}
								aria-label="Previous project image"
							>
								&lt;
							</button>
							<img
								src={projects[modalIdx].images[carouselIdx]}
								alt="Project Preview"
							/>
							<button
								onClick={nextImage}
								aria-label="Next project image"
							>
								&gt;
							</button>
						</div>
						<button
							className="modal-close-btn"
							onClick={closeModal}
							aria-label="Close project preview"
						>
							Close
						</button>
					</div>
				</div>
			)}

			<a
				href="#contact"
				className="floating-hire-btn"
				aria-label="Hire Me"
			>
				Hire Me
			</a>
		</section>
	);
};

export default Projects;