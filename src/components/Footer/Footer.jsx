import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-inner">
          <p className="footer-copy">© {new Date().getFullYear()} Ewaoluwa. Built with intention.</p>
          <div className="footer-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" id="footer-github">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" id="footer-linkedin">LinkedIn</a>
            <a href="mailto:ewajenrola@gmail.com" id="footer-email">Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
