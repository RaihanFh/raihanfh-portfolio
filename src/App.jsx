import Header from "./components/Header";
import "./css/App.css";
import ExperienceCard from "./components/ExperienceCard";
import MeCard from "./components/MeCard";
import ProjectCard from "./components/ProjectCard";
import SectionTitle from "./components/SectionTitle";
import EducationCard from "./components/EducationCard";
import ActivityCard from "./components/ActivityCard";
import SkillGroup from "./components/SkillGroup";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import { experience } from "./data/experience";
import { education } from "./data/education";
import { activities } from "./data/activities";
import { projects } from "./data/projects";
import { skills } from "./data/skills";

function App() {
  return (
    <div className="portfolio-app">
      <Header />

      <section id="home" className="section home-section">
        <MeCard />
      </section>

      <section id="experience" className="section">
        <SectionTitle>Experience</SectionTitle>
        {experience.map((item, index) => (
          <ExperienceCard key={index} experience={item} />
        ))}
      </section>

      <section id="projects" className="section">
        <SectionTitle>Projects</SectionTitle>
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

      <section id="skills" className="section">
        <SectionTitle>Skills</SectionTitle>
        <div className="skills-groups">
          {skills.map((group, index) => (
            <SkillGroup key={index} group={group} />
          ))}
        </div>
      </section>

      <section id="education" className="section">
        <SectionTitle>Education</SectionTitle>
        {education.map((item, index) => (
          <EducationCard key={index} education={item} />
        ))}

        <h3 className="sub-heading">Activities and Organizations</h3>
        {activities.map((item, index) => (
          <ActivityCard key={index} activity={item} />
        ))}
      </section>

      <ContactSection />

      <Footer />
    </div>
  );
}

export default App;
