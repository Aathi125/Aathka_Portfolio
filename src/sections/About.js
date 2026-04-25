import React from 'react';
import './About.css';

export default function About() {
  return (
    <section id="about" className="about-section section">
      <div className="container">
        <div className="section-header fade-up">
          <span className="section-tag">About Me</span>
          <h2 className="section-title">Who I Am</h2>
        </div>

        <div className="about-grid">
          <div className="about-text fade-up delay-1">
            <p>
              Currently, I am a 3rd-year Undergraduate at the Sri Lanka Institute of Information Technology 
              (SLIIT), maintaining a strong academic record with a CGPA of 3.65/4.0. 
              I have been recognized for academic excellence by receiving the Dean's List Award three times. 
              Complementing this foundation, I have successfully contributed some industry-grade web projects, 
              which has provided invaluable experience in translating theoretical knowledge into robust, 
              real-world applications.
            </p>
            <p>
              When I'm not coding, I'm exploring new technologies, contributing to open 
              source projects, and learning about the latest trends in software engineering.
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-num">5+</span>
                <span className="stat-label">Projects Built</span>
              </div>
              <div className="stat-item">
                <span className="stat-num">2+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-num">3×</span>
                <span className="stat-label">Dean's List</span>
              </div>
            </div>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn-primary resume-btn">
              Download Resume ↗
            </a>
          </div>

          {/* ── Profile photo ── */}
          <div className="about-photo-wrap fade-up delay-2">
            <div className="about-photo-ring">
              <img
                src="/profile.jpg"
                alt="Aathika"
                className="about-photo"
              />
            </div>
            {/* Floating skill badges around the photo */}
            <span className="about-badge badge-1">React</span>
            <span className="about-badge badge-2">Spring Boot</span>
            <span className="about-badge badge-3">Node.js</span>
            <span className="about-badge badge-4">Docker</span>
          </div>
        </div>
      </div>
    </section>
  );
}