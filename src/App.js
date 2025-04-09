import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://formsubmit.co/amaydeveloper@gmail.com",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) setSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  // SVG icons as React components
  const MailIcon = () => (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  );

  const GithubIcon = () => (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
  );

  const LinkedinIcon = () => (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  );

  return (
    <div className="portfolio">
      <div className="portfolio-content">
        {/* Header Section */}
        <header className="portfolio-header">
          <div className="profile-image-container">
            <img
              src="/cvBilled.jpg"
              alt="Adnaan Mohamud Abdullahi Tirare"
              className="profile-image"
            />
          </div>
          <h1>Adnaan Mohamud Abdullahi Tirare</h1>
          <p className="title">
            Software Engineer | MERN Stack & .NET Developer
          </p>
        </header>

        {/* About Section */}
        <section className="portfolio-section about-section">
          <h2>About Me</h2>
          <p>
            I am an optimistic and hardworking software engineer, dedicated to
            shaping the future through website development. In the next five
            years, I envision myself contributing my expertise to large private
            or public organizations, maximizing their digital potential. With a
            passion for creating impactful websites and a patient mindset, I
            bring a strong commitment to continuous learning and improvement.
          </p>
        </section>

        {/* Skills Section */}
        <section className="portfolio-section skills-section">
          <h2>Skills</h2>
          <div className="skills-grid">
            {[
              "MERN Stack",
              "React",
              "Redux",
              "MongoDB",
              "Express",
              ".NET / C#",
              "MUI",
              "Ant Design",
              "Bootstrap",
            ].map((skill) => (
              <div key={skill} className="skill-item">
                <div className="skill-bullet"></div>
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="portfolio-section projects-section">
          <h2>Projects</h2>
          <div className="project-card">
            <h3>Online Store</h3>
            <p>
              A fully functional online store with product pages, cart, and user
              authentication built using the MERN stack.
            </p>
            <a
              href="https://github.com/adnaandeveloper/OnlineStore"
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </div>
        </section>

        {/* Contact Section */}
        <section className="portfolio-section contact-section">
          <h2>Contact</h2>
          <p>
            Feel free to reach out to me for freelance opportunities or
            collaborations!
          </p>

          <div className="contact-links">
            <a href="mailto:amaydeveloper@gmail.com" className="contact-link">
              <MailIcon />
              <span>amaydeveloper@gmail.com</span>
            </a>
            <a
              href="https://github.com/adnaandeveloper"
              target="_blank"
              className="contact-link"
              rel="noopener noreferrer"
            >
              <GithubIcon />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/adnaan-mohamud"
              target="_blank"
              className="contact-link"
              rel="noopener noreferrer"
            >
              <LinkedinIcon />
              <span>LinkedIn</span>
            </a>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="phone"
                  name="phone"
                  placeholder="Your Phone Number"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  rows="4"
                  onChange={handleChange}
                ></textarea>
              </div>
              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          ) : (
            <div className="success-message">
              Thank you! Your message has been sent.
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
