import React, { useState } from 'react';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'InternHub — Internship Management Platform',
    description: 'A production-grade MERN stack internship portal connecting youth talent with organizations through a seamless digital experience. Features AI-powered CV matching, an intelligent chatbot for guidance, and real-time communication. Supports location-based job search, application tracking, and tools to help students get hired faster.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'Tailwind CSS', 'Nodemailer', 'OpenCage API', 'Groq API'],
    codeUrl: 'https://github.com/Mihirangakokila/SDG-GOAL---Decent-work-and-economic-growth',
    demoUrl: 'https://sdg-goal-decent-work-and-economic-g-nine.vercel.app/',
    color: '#1e3a8a',
    image: '/projects/internhub.png',
    category: 'Full Stack',
  },
  {
    id: 2,
    title: 'Task Management Application',
    description: 'A full-stack Task Management app using Spring Boot REST API and Angular 17 standalone architecture. Features JWT authentication end-to-end — registration, login, token generation, and an Angular HTTP interceptor attaching Bearer tokens to all requests. Includes role-protected API routes via Spring Security filter chain, layered MVC architecture, reactive forms, route guards, task filtering, dashboard stats, and Bootstrap modals.',
    tags: ['Java', 'Spring Boot', 'Angular 17', 'MySQL', 'JWT', 'Spring Security', 'Bootstrap 5', 'Spring Data JPA'],
    codeUrl: 'https://github.com/Aathi125/TaskManager',  
    demoUrl: null,                                           
    color: '#1e3a5f',
    image: '/projects/task.png',                      
    category: 'Full Stack',
  },
  {
    id: 3,
    title: 'Healthcare Telemedicine Platform',
    description: 'A full-stack telemedicine platform built with Node.js microservices — six independent services behind a centralized API gateway. Features JWT authentication with role-based access for Patient, Doctor, and Admin roles. Integrates Jitsi for in-browser video consultations, Stripe payments, automated email notifications via Nodemailer, and deployed with Docker Compose and Kubernetes.',
    tags: ['Node.js', 'Express', 'React', 'MongoDB Atlas', 'Docker', 'Kubernetes', 'JWT', 'Jitsi', 'Stripe', 'Nodemailer'],
    codeUrl: 'https://github.com/Aathi125/healthcare-platform',  
    demoUrl: null,                                           
    color: '#064e3b',
    image: '/projects/healthcare.png',                       
    emoji: '🏥',
    category: 'Full Stack',
  },
  {
    id: 4,
    title: 'AI-Powered Resume Screening App',
    description: 'A full-stack AI resume screening tool using Python Flask and Google Gemini API to evaluate candidates against job descriptions with automated scoring across skills, experience, and education. Features structured prompt engineering for JSON-formatted AI responses, regex-based sanitization, a RESTful /analyze endpoint with MVC architecture, and an AI-driven engine that classifies candidates as Shortlist, Maybe, or Reject. Dynamic frontend with animated progress bars and tag-based skill gap display.',
    tags: ['Python', 'Flask', 'REST API', 'Google Gemini', 'Prompt Engineering', 'HTML/CSS', 'JavaScript'],
    codeUrl: 'https://github.com/Aathi125/Resume-Screening-AI',  
    demoUrl: null,                                          
    color: '#1a1a2e',
    image: '/projects/resume.png',                   
    emoji: '🤖',
    category: 'Full Stack',
  },
  {
    id: 9,
    title: 'Jazz- Event Booking System',
    description: 'A full-stack event planning and seat reservation platform built with Java EE MVC architecture. Features category-based event filtering, secure session management, and role-based access control for User, Organizer, and Admin roles. Structured with a clean three-tier architecture — DAO layer for database persistence, Service layer for business logic, and Servlets for HTTP handling. Applies core OOP principles like inheritance and encapsulation to model event types and user roles.',
    tags: ['Java', 'JSP', 'Servlets', 'MySQL', 'JDBC', 'Apache Tomcat', 'Bootstrap'],
    codeUrl: 'https://github.com/Aathi125/jazzevents',  
    demoUrl: null,                                           
    color: '#3b1f6e',
    image: '/projects/JazzEvnts.png',                     
    emoji: '🎟️',
    category: 'Full Stack',
  },
  {
    id: 10,
    title: 'Ritmo — Android Wellness & Habit Tracker',
    description: 'A native Android app built with Kotlin to help users track daily habits, monitor moods, and manage hydration goals. Engineered with single-activity architecture using Jetpack Navigation and Material Design 3 components. Features background notifications via AlarmManager and BroadcastReceiver, dynamic progress charts with MPAndroidChart, a home screen App Widget for at-a-glance tracking, and local data persistence for a full offline experience.',
    tags: ['Kotlin', 'Android Jetpack', 'Material Design 3', 'MPAndroidChart', 'AlarmManager', 'RecyclerView'],
    codeUrl: 'https://github.com/Aathi125/HabitTracker-App---Android',  
    demoUrl: null,                                           
    color: '#0f4c35',
    image: '/projects/ritmo.png',                            
    emoji: '📱',
    category: 'Mobile',
  },
  {
    id: 11,
    title: 'sample Portfolio',
    description: 'A front end portfolio website built with React, featuring smooth animations and a responsive design.',
    tags: ['HTML', 'CSS', 'Sitemap', 'Forms', 'JS'],
    codeUrl: 'https://github.com/Aathi125/sampleportfolio',  
    demoUrl: null,                                           
    color: '#0f4c35',
    image: '/projects/sample.png',                            
    emoji: '📱',
    category: 'Frontend',
  },
  {
    id: 11,
    title: 'ConstructPro — Construction Management System',
    description: 'A full-stack web-based Construction Management System built to streamline project planning, resource allocation, and progress tracking. Designed responsive user interfaces using HTML, CSS, Bootstrap, and JavaScript for an improved user experience across devices. Built backend functionalities using PHP to handle business logic, data processing, and system operations. Integrated Microsoft SQL Server for efficient data storage, retrieval, and management of project-related information. Implemented key modules including project tracking, task assignment, user management, and real-time status updates with data validation and security measures throughout.',
    tags: ['PHP', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Microsoft SQL Server'],
    codeUrl: 'https://github.com/Aathi125/Construction-Management---website',
    demoUrl: null,
    color: '#78350f',
    image: '/projects/const.png',
    emoji: '🏗️',
    category: 'Full Stack',
  },
];

const categories = ['All', 'Full Stack', 'Frontend', 'Backend', 'Automation'];

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All'
    ? projects
    : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="projects-section section">
      <div className="container">
        <div className="section-header fade-up">
          <span className="section-tag">My Work</span>
          <h2 className="section-title">Projects</h2>
        </div>

        <div className="filter-row fade-up delay-1">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const [imgError, setImgError] = useState(false);
  const showImage = project.image && !imgError;

  return (
    <div className="project-card fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
      <div
        className="project-preview"
        style={{ background: showImage ? '#0f0f1a' : project.color }}
      >
        {showImage ? (
          <>
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              className="project-screenshot"
              onError={() => setImgError(true)}
            />
            <div className="project-preview-overlay" />
          </>
        ) : (
          <>
            <span className="project-emoji">{project.emoji}</span>
            <div className="project-preview-overlay" />
          </>
        )}
      </div>

      <div className="project-body">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="skill-tag">{tag}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={project.codeUrl} target="_blank" rel="noreferrer" className="project-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
            </svg>
            Code
          </a>
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noreferrer" className="project-link">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
