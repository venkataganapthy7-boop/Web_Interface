import { useState } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");
  const [sent, setSent] = useState(false);

  const skills = [
    "Java",
    "Python",
    "React.js",
    "JavaScript",
    "HTML & CSS",
    "SQL",
    "Cyber Security",
    "Git"
  ];

  const projects = [
    {
      title: "AI Email Threat Detection",
      text: "A cybersecurity platform designed to analyze suspicious emails, URLs, headers and threats.",
      tech: "Python • AI • Cybersecurity"
    },
    {
      title: "Student Dashboard",
      text: "A responsive React dashboard for managing student information and attendance.",
      tech: "React.js • JavaScript • CSS"
    },
    {
      title: "Form Validation",
      text: "A user-friendly registration form with real-time input validation.",
      tech: "React.js • CSS"
    }
  ];

  const navigate = (section) => {
    setPage(section);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="portfolio">

      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo">
          <span>G</span>
          <div>
            <b>GANAPATHY</b>
            <small>CYBER SECURITY</small>
          </div>
        </div>

        <nav>
          <button
            className={page === "home" ? "active" : ""}
            onClick={() => navigate("home")}
          >
            Home
          </button>

          <button
            className={page === "about" ? "active" : ""}
            onClick={() => navigate("about")}
          >
            About
          </button>

          <button
            className={page === "skills" ? "active" : ""}
            onClick={() => navigate("skills")}
          >
            Skills
          </button>

          <button
            className={page === "projects" ? "active" : ""}
            onClick={() => navigate("projects")}
          >
            Projects
          </button>

          <button
            className={page === "contact" ? "active" : ""}
            onClick={() => navigate("contact")}
          >
            Contact
          </button>
        </nav>

        <button className="hire-btn" onClick={() => navigate("contact")}>
          Let's Talk
        </button>
      </header>

      {/* HOME */}
      {page === "home" && (
        <main>
          <section className="hero">
            <div className="hero-content">

              <div className="badge">
                <span></span>
                AVAILABLE FOR OPPORTUNITIES
              </div>

              <h1>
                Building the future with
                <strong> Code & Security.</strong>
              </h1>

              <p className="hero-text">
                I'm <b>Venkata Ganapathy</b>, a Cyber Security student
                passionate about software development, web technologies
                and creating secure digital solutions.
              </p>

              <div className="hero-buttons">
                <button
                  className="primary-btn"
                  onClick={() => navigate("projects")}
                >
                  View My Work →
                </button>

                <button
                  className="secondary-btn"
                  onClick={() => navigate("contact")}
                >
                  Contact Me
                </button>
              </div>

              <div className="stats">
                <div>
                  <b>08+</b>
                  <span>Technical Skills</span>
                </div>

                <div>
                  <b>03+</b>
                  <span>Projects</span>
                </div>

                <div>
                  <b>∞</b>
                  <span>Learning Mindset</span>
                </div>
              </div>

            </div>

            <div className="profile-area">
              <div className="profile-circle">
                <div className="profile-inner">
                  <span>&lt;/&gt;</span>
                </div>
              </div>

              <div className="floating-card top">
                <span>⌘</span>
                <div>
                  <b>Developer</b>
                  <small>Problem Solver</small>
                </div>
              </div>

              <div className="floating-card bottom">
                <span>◈</span>
                <div>
                  <b>Cyber Security</b>
                  <small>Security Enthusiast</small>
                </div>
              </div>
            </div>
          </section>

          <section className="tech-strip">
            <span>JAVA</span>
            <span>PYTHON</span>
            <span>REACT</span>
            <span>JAVASCRIPT</span>
            <span>SQL</span>
            <span>CYBER SECURITY</span>
          </section>
        </main>
      )}

      {/* ABOUT */}
      {page === "about" && (
        <section className="section-page">
          <div className="section-title">
            <span>01 / ABOUT</span>
            <h2>Who I Am</h2>
          </div>

          <div className="about-grid">
            <div className="about-card">
              <div className="big-letter">G</div>
              <h3>Venkata Ganapathy</h3>
              <p>Cyber Security Student</p>
            </div>

            <div className="about-content">
              <h3>Passionate about technology.</h3>

              <p>
                I am a B.E. Cyber Security student with a strong interest
                in programming, software development and cybersecurity.
              </p>

              <p>
                I enjoy learning new technologies and building practical
                projects that solve real-world problems.
              </p>

              <div className="details">
                <div>
                  <span>Education</span>
                  <b>B.E. Cyber Security</b>
                </div>

                <div>
                  <span>Interest</span>
                  <b>Software Development</b>
                </div>

                <div>
                  <span>Location</span>
                  <b>Chennai, India</b>
                </div>

                <div>
                  <span>Focus</span>
                  <b>Web & Cybersecurity</b>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SKILLS */}
      {page === "skills" && (
        <section className="section-page">
          <div className="section-title">
            <span>02 / SKILLS</span>
            <h2>Technical Expertise</h2>
          </div>

          <div className="skill-grid">
            {skills.map((skill, index) => (
              <div className="skill-card" key={skill}>
                <small>0{index + 1}</small>
                <h3>{skill}</h3>
                <div className="line"></div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* PROJECTS */}
      {page === "projects" && (
        <section className="section-page">
          <div className="section-title">
            <span>03 / PROJECTS</span>
            <h2>Selected Work</h2>
          </div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <div className="project-card" key={project.title}>
                <div className="project-number">
                  0{index + 1}
                </div>

                <div className="project-icon">
                  {"</>"}
                </div>

                <h3>{project.title}</h3>

                <p>{project.text}</p>

                <span className="tech">{project.tech}</span>

                <button>Explore Project ↗</button>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CONTACT */}
      {page === "contact" && (
        <section className="section-page contact-page">
          <div className="section-title">
            <span>04 / CONTACT</span>
            <h2>Let's Connect</h2>
          </div>

          <div className="contact-grid">

            <div className="contact-info">
              <h3>Have a project or opportunity?</h3>

              <p>
                I'm always interested in learning, collaborating and
                working on meaningful technology projects.
              </p>

              <div className="contact-item">
                <span>✉</span>
                <div>
                  <small>Email</small>
                  <b>yourmail@gmail.com</b>
                </div>
              </div>

              <div className="contact-item">
                <span>⌖</span>
                <div>
                  <small>Location</small>
                  <b>Chennai, India</b>
                </div>
              </div>
            </div>

            <form
              className="contact-form"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <input
                type="text"
                placeholder="Your Name"
                required
              />

              <input
                type="email"
                placeholder="Your Email"
                required
              />

              <textarea
                placeholder="Tell me about your project..."
                required
              ></textarea>

              <button type="submit">
                Send Message →
              </button>

              {sent && (
                <p className="success">
                  ✓ Message submitted successfully!
                </p>
              )}
            </form>

          </div>
        </section>
      )}

      {/* FOOTER */}
      <footer>
        <div>
          <b>GANAPATHY</b>
          <span> — Building. Learning. Securing.</span>
        </div>

        <p>© 2026 Venkata Ganapathy. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default App;
