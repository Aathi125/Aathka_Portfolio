import React from 'react';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-inner container">
        <div className="footer-logo"></div>
        <p className="footer-text">
          Designed & Built with ❤️ © {year} Aathika
        </p>
        <div className="footer-socials">
          <a href="https://github.com/Aathi125" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/aathika-ilmudeen-096575242/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:atkilmdn1125@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
