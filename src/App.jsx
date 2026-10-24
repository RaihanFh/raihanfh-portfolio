import Header from "./components/Header";
import "./css/App.css";
import ExperienceCard from "./components/ExperienceCard";
import MeCard from "./components/MeCard";
import ProjectCard from "./components/ProjectCard";
import lakeside1 from "./assets/lakeside1.jpg";
import lakeside2 from "./assets/lakeside2.jpg";
import lakeside3 from "./assets/lakeside3.jpg";
import chatbot from "./assets/chatbot.png";

function App() {
  const experienceList = [
    {
      position: "Backend Developer",
      at: "Altimeda Cipta Visitama",
      startDate: "October 2025",
      endDate: "July 2026",
      desc: [
        "Developed and maintained RESTful APIs for enterprise ERP systems using NestJS, Node.js, Prisma ORM, and PostgreSQL, supporting multiple business-critical workflows.",
        "Delivered backend functionality across Procurement, Goods Receipt, Transport, Rate Management, and Asset Management modules, contributing to the implementation of core ERP business processes.",
        "Built Excel import/export and PDF reporting features with data validation and processing logic, enabling users to handle and generate business data more efficiently.",
        "Integrated third-party APIs and digital signature services, including authentication and attachment management, to extend ERP functionality and support digital business workflows.",
        "Optimized database queries and backend services to improve application performance and reliability, while working closely with frontend and QA teams to resolve issues and deliver features.",
        "Contributed to the development and maintenance of a production-oriented enterprise backend, gaining hands-on experience with API integration, database optimization, business logic, and cross-functional software development.",
      ],
    },
    {
      position: "Software Developer",
      at: "Lakeside FnB Group",
      startDate: "September 2024",
      endDate: "August 2025",
      desc: [
        "Developed a Flutter-based mobile attendance application with real-time geolocation validation, enabling staff attendance to be recorded only when users were within a 50-meter radius of designated outlets.",
        "Achieved 95.24% accuracy, 100% precision, 94.44% recall, and 100% specificity in validating attendance locations based on confusion-matrix testing.",
        "Implemented secure authentication, location-based check-in/check-out, and attendance history management to support a more reliable and transparent attendance process.",
        "Designed application workflows based on stakeholder requirements and operational processes, translating real-world attendance procedures into a mobile digital solution.",
        "Conducted unit, integration, and system testing to validate application functionality and improve overall application stability and reliability.",
        "Applied Extreme Programming (XP) through iterative development and continuous user feedback, allowing the application to adapt to changing operational requirements.",
        "Delivered a digital attendance solution designed to reduce administrative workload, minimize attendance fraud, and improve the accuracy and transparency of staff attendance records.",
      ],
    },
    {
      position: "Programmer (Internship)",
      at: "Telkom University Internal",
      startDate: "November 2024",
      endDate: "December 2024",
      desc: [
        "Developed an NLP-based chatbot using PyTorch to automate access to public-service information for the Desa Borobudur website.",
        "Integrated the chatbot into a web application using Flask, providing an accessible interface for information related to village administration, tourism, and public facilities.",
        "Implemented Google Sheets integration as a dynamic data-management mechanism, allowing non-technical administrators to update chatbot information without directly modifying the application code.",
        "Improved chatbot response quality through dataset refinement and model testing, resulting in highly relevant responses during evaluation.",
        "Developed a model-update workflow that enabled the chatbot's knowledge base to be refreshed as information changed, supporting easier long-term maintenance.",
        "Contributed to a solution intended to reduce repetitive information requests handled manually by village staff and improve the accessibility of public information.",
      ],
    },
  ];

  const projectsList = [
    {
      title: "Mobile Attendance System",
      type: "mobile",
      description:
        "A Flutter-based mobile attendance application utilizing geolocation and GPS to record real-time staff presences within a 50m radius fence.",
      tags: ["Flutter", "Dart", "Geolocation", "REST API"],
      images: [lakeside1, lakeside2, lakeside3],
      link: "https://github.com/yourusername/project",
    },
    {
      title: "NLP Chatbot",
      type: "web",
      description:
        "A public service information chatbot designed for Desa Borobudur, utilizing PyTorch, Flask, and Google Sheets to handle administrative, tourism, and village queries.",
      tags: ["Python", "PyTorch", "Flask", "NLP", "Google Sheets"],
      images: chatbot,
      link: "https://github.com/yourusername/project",
    },
  ];

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
        {experienceList.map((item, index) => (
          <ExperienceCard key={index} experience={item} />
        ))}
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="projects-container">
          {projectsList.map((project, index) => (
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
        <ul className="skills-list">
          <li>React / Next.js</li>
          <li>JavaScript (ES6+) / TypeScript</li>
          <li>Node.js / Express</li>
          <li>CSS3 / Tailwind / HTML5</li>
        </ul>
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
