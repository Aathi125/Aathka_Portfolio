import React from 'react';
import './Experience.css';

const experiences = [
  {
    type: 'work',
    role: 'No Information Available',
    company: 'No Information Available',
    period: 'No Information Available',
    desc: 'No Informstion Available',
    tags: ['skill', 'skill', 'skill', 'skill'],
  },
  {
    type: 'work',
    role: 'No Information Available',
    company: 'No Information Available',
    period: 'No Information Available',
    desc: 'No Informstion Available',
    tags: ['skill', 'skill', 'skill', 'skill'],
  },
];

const education = [
  {
    type: 'edu',
    role: 'BSc in Information Technology Specializing in Software Engineering',
    company: 'SLIIT - Sri Lanka Institute of Information Technology',
    period: '2023 – 2027',
    desc: 'Studying software engineering fundamentals, data structures, algorithms, and web development. Active member of the computing society.',
    tags: ['Software Engineering', 'Algorithms', 'Databases'],
    gpa: '3.7 / 4.0',
  },
  {
    type: 'edu',
    role: 'A/L Biological Science',
    company: 'Puttalam Science College',
    period: '2019 – 2021',
    desc: 'Completed Advanced Levels with C in Biology, Physics, and Chemistry.',
    tags: [],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="experience-section section">
      <div className="container">
        <div className="section-header fade-up">
          <span className="section-tag">Background</span>
          <h2 className="section-title">Experience & Education</h2>
        </div>

        <div className="exp-grid">
          <div className="exp-column fade-up delay-1">
            <h3 className="exp-col-title">
              <span className="exp-icon">💼</span> Work Experience
            </h3>
            <div className="timeline">
              {experiences.map((item, i) => (
                <TimelineItem key={i} item={item} />
              ))}
            </div>
          </div>

          <div className="exp-column fade-up delay-2">
            <h3 className="exp-col-title">
              <span className="exp-icon">🎓</span> Education
            </h3>
            <div className="timeline">
              {education.map((item, i) => (
                <TimelineItem key={i} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ item }) {
  return (
    <div className="timeline-item">
      <div className="timeline-dot" />
      <div className="timeline-card">
        <div className="timeline-header">
          <div>
            <h4 className="timeline-role">{item.role}</h4>
            <p className="timeline-company">{item.company}</p>
          </div>
          <span className="timeline-period">{item.period}</span>
        </div>
        <p className="timeline-desc">{item.desc}</p>

        {item.gpa && (
          <p className="timeline-gpa">
            <span className="gpa-label">GPA:</span> {item.gpa}
          </p>
        )}

        <div className="timeline-tags">
          {item.tags.map((tag) => (
            <span key={tag} className="skill-tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}