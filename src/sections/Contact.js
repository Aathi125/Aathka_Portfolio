import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const response = await fetch('https://formspree.io/f/mojyyezn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setSent(true);
        setForm({ name: '', email: '', message: '' });
        setTimeout(() => setSent(false), 4000);
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="contact-section section">
      <div className="container">
        <div className="section-header fade-up">
          <span className="section-tag">Say Hello</span>
          <h2 className="section-title">Get in Touch</h2>
          <p className="contact-subtitle">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info fade-up delay-1">
            <h3 className="contact-info-title">Let's work together</h3>
            <p className="contact-info-text">
              I'm currently open to new opportunities and collaborations.
              Whether you have a question or just want to say hi, my inbox is always open!
            </p>

            <div className="contact-links">
              <a href="mailto:atkilmdn1125@gmail.com" className="contact-item">
                <div className="contact-item-icon">✉</div>
                <div>
                  <p className="contact-item-label">Email</p>
                  <p className="contact-item-value">atkilmdn1125@gmail.com</p>
                </div>
              </a>
              <a href="tel:+94714950456" className="contact-item">
              <div className="contact-item-icon">📞</div>
              <div>
                <p className="contact-item-label">Phone</p>
                <p className="contact-item-value">+94 71 495 0456</p>
              </div>
            </a>
              <a href="https://www.linkedin.com/in/aathika-ilmudeen-096575242/" target="_blank" rel="noreferrer" className="contact-item">
                <div className="contact-item-icon">in</div>
                <div>
                  <p className="contact-item-label">LinkedIn</p>
                  <p className="contact-item-value">linkedin.com/in/Aathika</p>
                </div>
              </a>
            </div>
          </div>

          <form className="contact-form fade-up delay-2" onSubmit={submit}>
            <div className="form-group">
              <label className="form-label">Your Name</label>
              <input
                className="form-input"
                type="text"
                name="name"
                placeholder="John Doe"
                value={form.name}
                onChange={handle}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input
                className="form-input"
                type="email"
                name="email"
                placeholder="john@example.com"
                value={form.email}
                onChange={handle}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea
                className="form-input form-textarea"
                name="message"
                placeholder="Your message..."
                value={form.message}
                onChange={handle}
                required
                rows={5}
              />
            </div>

            {error && (
              <p style={{ color: 'red', fontSize: '14px', marginBottom: '8px' }}>
                Something went wrong. Please try again.
              </p>
            )}

            <button
              type="submit"
              className="btn-primary form-submit"
              disabled={loading}
            >
              {loading ? 'Sending...' : sent ? '✓ Sent!' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
