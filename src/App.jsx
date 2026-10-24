import Header from "./components/Header";
import "./css/App.css";
import ExperienceCard from "./components/ExperienceCard";
import MeCard from "./components/MeCard";
import ProjectCard from "./components/ProjectCard";
import { experience } from "./data/experience";
import { projects } from "./data/projects";
import { skills } from "./data/skills";

function App() {
  return (
    <div className="portfolio-app">
      <Header />

      {/* Home / Summary Section */}
      <section id="home" className="section home-section">
        <MeCard />
      </section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <h2>Experience</h2>
        {experience.map((item, index) => (
          <ExperienceCard key={index} experience={item} />
        ))}
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="projects-container">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <h2>Skills</h2>
        <div className="skills-groups">
          {skills.map((group, index) => (
            <div key={index} className="skill-group">
              <h3>{group.group}</h3>
              <ul className="skills-list">
                {group.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <h2>Contact Me</h2>
        <p>Feel free to reach out for collaborations or opportunities!</p>
        <a href="mailto:raihanfh305@gmail.com" className="contact-btn">
          Email Me
        </a>
      </section>
    </div>
  );
}

export default App;
