import React, { useState, useEffect, useRef } from 'react';
import Landing from './Landing.jsx';
import About from './About.jsx';
import Skills from './Skills.jsx';
import Experience from './Experience.jsx';
import Education from './Education.jsx';
import Projects from './Projects.jsx';
import Blog from './Blog.jsx';
import Contact from './Contact.jsx';
import SocialIcons from './SocialIcons';
import NotFound from './NotFound';
import './styles/theme.css';
import './Landing.css';
import './About.css';
import './Skills.css';
import './Projects.css';
import './Contact.css';
import './Education.css';
import './Blog.css';

const resumeUrl = 'public/assets/resume.pdf';
function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem('darkMode');
    return stored === null ? window.matchMedia('(prefers-color-scheme: dark)').matches : stored === 'true';
  });
  const [activeSection, setActiveSection] = useState('Home');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const progressRef = useRef();

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['Home', 'About', 'Skills', 'Education', 'Blog', 'Projects', 'Contact'];
      let current = 'Home';
      for (const sec of sections) {
        const el = document.getElementById(sec.toLowerCase());
        if (el && window.scrollY + 80 >= el.offsetTop) {
          current = sec;
        }
      }
      setActiveSection(current);
      setShowTopBtn(window.scrollY > 300);
      if (progressRef.current) {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        progressRef.current.style.width = `${percent}%`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track window resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Check for #notfound route
  useEffect(() => {
    const onHashChange = () => setNotFound(window.location.hash === '#notfound');
    window.addEventListener('hashchange', onHashChange);
    onHashChange();
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // Theme management
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.setAttribute('data-theme', 'dark');
    } else {
      root.setAttribute('data-theme', 'light');
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      if (localStorage.getItem('darkMode') === null) {
        setDarkMode(e.matches);
      }
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  if (notFound) return <NotFound />;

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      {/* Top Navbar */}
      <nav className="navbar">
        <div className="nav-links">
          {['Home', 'About', 'Skills', 'Experience', 'Education', 'Projects', 'Blog', 'Contact'].map((section) => (
            <a
              key={section}
              href={`#${section.toLowerCase()}`}
              className={activeSection === section ? 'active' : ''}
              onClick={() => setActiveSection(section)}
            >
              {section}
            </a>
          ))}
        </div>
        <button
          className="theme-toggle-btn"
          aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          onClick={() => setDarkMode(dm => !dm)}
        >
          {darkMode ? '🌙' : '☀️'}
        </button>
      </nav>

      {/* Scroll Progress Bar */}
      <div className="progress-bar" ref={progressRef}></div>

      {/* Page Sections */}
      <main className="main-content">
        <section id="home" className="section fade-in">
          <Landing darkMode={darkMode} />
        </section>
        <section id="about" className="section fade-in">
          <About darkMode={darkMode} />
        </section>
        <section id="skills" className="section fade-in">
          <Skills darkMode={darkMode} />
        </section>
        <section id="experience" className="section fade-in">
          <Experience darkMode={darkMode} />
        </section>
        <section id="education" className="section fade-in">
          <Education darkMode={darkMode} />
        </section>
        <section id="projects" className="section fade-in">
          <Projects darkMode={darkMode} />
        </section>
        <section id="blog" className="section fade-in">
          <Blog darkMode={darkMode} />
        </section>
        <section id="contact" className="section fade-in">
          <Contact darkMode={darkMode} />
        </section>
      </main>

      {/* Social Icons */}
      <div className="social-icons">
        <SocialIcons />
      </div>

      {/* Back to Top Button */}
      {showTopBtn && (
        <button
          className="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
        >
          ↑
        </button>
      )}
    </div>
  );
}

export default App;
