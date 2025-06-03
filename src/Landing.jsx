import React, { useState, useEffect } from "react";
import "./index.css";
import "./Landing.css";
import useParallax from "./useParallax";
import profileImage from './assets/profile.jpg';

function Landing({ darkMode }) {
  useParallax(); // Enable mousemove parallax effect

  return (
    <section id="home" className="landing-section">
      <div className="parallax-layer layer1" data-speed="0.15"></div>
      <div className="parallax-layer layer2" data-speed="0.1"></div>
      <div className="parallax-layer layer3" data-speed="0.05"></div>

      <div className="landing-content">
        <div className="intro-text">
          <h1>Hello, I'm <span className="landing-highlight">Ashish Kumar Thyadi 👋</span></h1>
          <h2>Backend Developer | Python Enthusiast | ML Explorer</h2>
          <br></br>
          <p>I build scalable backend systems, deploy cloud-native apps, and love solving problems with code and data. Currently exploring container orchestration, machine learning, and real-world software engineering practices.</p>
          <div className="btn-group">
            <a href="#projects" className="btn">See My Work</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>
        </div>
        <div className="profile-pic-container corporate">
          <img
            src={profileImage}
            alt="Ashish Kumar Thyadi profile"
            className="profile-pic"
          />
          <div className="profile-decoration" />
        </div>
      </div>
    </section>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true" || false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <>
      <main>
        <Landing darkMode={darkMode} />
      </main>
    </>
  );
}

export default App;
