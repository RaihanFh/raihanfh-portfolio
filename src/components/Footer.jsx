function Footer() {
  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} Raihan Fadhilah Hafiizh</p>
      <a href="#home" className="back-to-top" onClick={(e) => {
        e.preventDefault();
        document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
      }}>
        Back to top
      </a>
    </footer>
  );
}

export default Footer;
