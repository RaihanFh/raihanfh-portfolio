import profilePhoto from "../assets/profile photo.jpeg";
import "../css/App.css";

function MeCard() {
  return (
    <section id="home" className="section home-section">
      <blockquote className="profile-card">
        <img src={profilePhoto} alt="Raihan" className="card-photo-desktop" />

        <article className="card-content">
          <div className="card-body">
            <h1>Hi, I'm Raihan Fadhilah Hafiizh</h1>
            <p className="summary">
              Backend Developer with hands-on experience developing enterprise
              ERP systems and RESTful APIs using{" "}
              <strong>NestJS, Node.js, Prisma ORM, and PostgreSQL</strong>.
            </p>
            <p className="summary">
              Experienced in building business modules, integrating third-party
              services, developing Excel/PDF data processing features, and
              optimizing database queries with additional experience developing
              mobile applications and NLP-based systems.
            </p>
            <p className="summary">
              Passionate about building clean, maintainable, and reliable
              backend applications.
            </p>

            <footer className="card-footer-mobile">
              <img
                src={profilePhoto}
                alt="Raihan"
                className="card-photo-mobile"
              />
              <span className="author-name">Raihan Fadhilah Hafiizh</span>
            </footer>
          </div>
        </article>
      </blockquote>
    </section>
  );
}

export default MeCard;
