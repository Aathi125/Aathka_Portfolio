import React, { useState, useEffect } from 'react';
import './Navbar.css';

const navItems = [
  { id: 'home',       label: 'Home',       icon: '⌂' },
  { id: 'about',      label: 'About',      icon: '◎' },
  { id: 'projects',   label: 'Projects',   icon: '<>' },
  { id: 'experience', label: 'Experience', icon: '▦' },
  { id: 'contact',    label: 'Contact',    icon: '✉' },
];

export default function Navbar({ activeSection, scrollTo, darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <div className="navbar-logo" onClick={() => scrollTo('home')}>
          Aathika
        </div>

        <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => { scrollTo(item.id); setMenuOpen(false); }}
            >
              <span className="nav-icon">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </div>

        <div className="navbar-right">
          <button
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
            title="Toggle theme"
          >
            {darkMode ? '☀' : '☾'}
          </button>

          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </nav>
  );
}
