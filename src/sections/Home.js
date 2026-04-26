import React from 'react';
import './Home.css';

export default function Home({ scrollTo }) {
  return (
    <section id="home" className="home-section">
      {/* Soft gradient blobs */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />

      <div className="home-content">
        {/* Avatar pill */}
        <div className="avatar-pill fade-up">
          <div className="avatar-wrap">
            {/* Replace src with your own photo */}
            <div className="avatar-placeholder">
              <img src="/prfile.jpg" alt="Aathika" />
            </div>
          </div>
        </div>

        <h1 className="home-name fade-up delay-1">Aathika I</h1>
        <p className="home-title fade-up delay-2">Software Engineering Undergraduate</p>
        <p className="home-bio fade-up delay-3">
          Proficient in full-stack development and specializing in modern web technologies.
          This portfolio demonstrates the technical ability to build and deploy comprehensive
          software solutions. Focused on leveraging technical expertise to enhance user
          experience and deliver practical, innovative systems.
        </p>

        <div className="home-socials fade-up delay-4">
          <a href="https://github.com/Aathi125" target="_blank" rel="noreferrer" className="social-btn" title="GitHub">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/aathika-ilmudeen-096575242/" target="_blank" rel="noreferrer" className="social-btn" title="LinkedIn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a href="mailto:atkilmdn1125@gmail.com" className="social-btn" title="Email">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </a>
        </div>

        <div className="home-cta fade-up delay-5">
          <button className="btn-primary" onClick={() => scrollTo('projects')}>View Projects</button>
          <button className="btn-secondary" onClick={() => scrollTo('contact')}>Get in Touch</button>
        </div>
      </div>
    </section>
  );
}
