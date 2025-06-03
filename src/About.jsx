import React from 'react';
import './About.css';
import { motion, useAnimation } from 'framer-motion';
import resumePDF from './assets/Ashish_Kumar_Resume.pdf';

const About = () => {
  const controls = useAnimation();
  React.useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('about');
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          controls.start({ opacity: 1, y: 0, transition: { duration: 0.8, type: 'spring', stiffness: 60 } });
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  return (
    <section className="about-section" id="about">
      <motion.div
        className="about-main-layout"
        initial={{ opacity: 0, y: 40 }}
        animate={controls}
      >
        <div className="about-left">
          <h2>About Me</h2>
          <p>
            I'm Ashish Kumar, a passionate Computer Science Engineering graduate with hands-on experience in building responsive web applications using React, Java, and Python.
My journey began with Python and expanded into Flask, REST APIs, and cloud deployments using Docker and Kubernetes. I've built secure file storage systems, task management apps, and disease prediction models — all available on GitHub.

I believe in continuous learning, teamwork, and writing clean, modular, and testable code. Outside tech, I enjoy competitive coding and contributing to open-source.

Currently aiming to join a tech-driven team where I can grow, contribute, and create impact.
          </p>
        </div>
        <motion.div
          className="about-right"
          initial={{ opacity: 0, y: 40 }}
          animate={controls}
          transition={{ delay: 0.2 }}
        >
          <a
            href={resumePDF}
            className="resume-btn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Ashish Kumar Resume PDF"
            tabIndex={0}
          >
            Download Resume
          </a>
          <motion.div
            className="about-quote-box"
            initial={{ opacity: 0, y: 30 }}
            animate={controls}
            transition={{ delay: 0.4 }}
          >
            <span className="about-quote">
              "The best way to predict the future is to invent it."
            </span>
            <span className="about-quote-author">
              – Alan Kay
            </span>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
