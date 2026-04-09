import { useState, useEffect, useCallback } from 'react';
import './Navbar.css';

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      let current = 'hero';
      navItems.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) current = id;
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = useCallback((e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  }, []);

  return (
    <>
      <nav id="navbar" className={`navbar${scrolled ? ' scrolled' : ''}`} aria-label="Main navigation">
        <div className="nav-inner">
          <a href="#hero" className="nav-logo" onClick={(e) => scrollTo(e, 'hero')}>Ewa.</a>

          <ul className="nav-links">
            {navItems.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`nav-link${activeSection === id ? ' active' : ''}`}
                  onClick={(e) => scrollTo(e, id)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <a href="/Jenrola_Ewaoluwa_CV.pdf" className="nav-cta" download="Jenrola_Ewaoluwa_CV.pdf">Download CV</a>

          <button
            className={`hamburger${mobileOpen ? ' open' : ''}`}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${mobileOpen ? ' open' : ''}`} role="navigation" aria-label="Mobile navigation">
        {navItems.map(({ id, label }) => (
          <a key={id} href={`#${id}`} onClick={(e) => scrollTo(e, id)}>{label}</a>
        ))}
      </div>
    </>
  );
}
