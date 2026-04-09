import { useState, useEffect, useRef } from 'react';
import './Hero.css';

const phrases = ['Frontend Developer', 'UI Craftsman', 'Python Enthusiast', 'Full-Stack Builder'];

export default function Hero() {
  const [text, setText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const phraseIdx = useRef(0);
  const charIdx = useRef(0);
  const deleting = useRef(false);

  useEffect(() => {
    let timeout;
    const typewrite = () => {
      const phrase = phrases[phraseIdx.current];
      if (!deleting.current) {
        charIdx.current++;
        setText(phrase.slice(0, charIdx.current));
        if (charIdx.current === phrase.length) {
          deleting.current = true;
          timeout = setTimeout(typewrite, 2000);
          return;
        }
      } else {
        charIdx.current--;
        setText(phrase.slice(0, charIdx.current));
        if (charIdx.current === 0) {
          deleting.current = false;
          phraseIdx.current = (phraseIdx.current + 1) % phrases.length;
        }
      }
      timeout = setTimeout(typewrite, deleting.current ? 55 : 90);
    };
    typewrite();
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setCursorVisible(v => !v), 500);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" aria-labelledby="hero-heading">
      <div className="container">
        <div className="hero-inner">
          {/* Left: Text */}
          <div className="hero-content">
            <div className="hero-badge fade-in">
              <span className="hero-badge-dot"></span>
              Available for new opportunities
            </div>

            <h1 className="hero-heading fade-in" id="hero-heading">
              Hi, I'm<br />
              <span className="accent">Ewaoluwa.</span>
            </h1>

            <p className="hero-sub fade-in">
              <span className="typewriter">{text}</span>
              <span className="cursor" style={{ color: 'var(--accent)', opacity: cursorVisible ? 1 : 0 }}>|</span>
              <br />
              Building modern web applications with intentional design, clean code, and a relentless focus on user experience.
            </p>

            <div className="hero-actions fade-in">
              <a href="#projects" className="btn-primary" onClick={(e) => scrollTo(e, 'projects')}>
                View My Work
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <a href="#contact" className="btn-ghost" onClick={(e) => scrollTo(e, 'contact')}>
                Let's Connect
              </a>
            </div>

            <div className="hero-stats fade-in">
              <div>
                <div className="stat-value">3+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div>
                <div className="stat-value">12+</div>
                <div className="stat-label">Projects Shipped</div>
              </div>
              <div>
                <div className="stat-value">100%</div>
                <div className="stat-label">Passion for Code</div>
              </div>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="hero-visual fade-in">
            <div className="hero-img-wrap">
              <div className="hero-code-art">
{`const portfolio = {
  name: "Ewaoluwa",
  role: "Frontend Dev",
  stack: [
    "React",
    "TypeScript",
    "Node.js",
    "CSS / Tailwind",
  ],
  passionate: true,
  available: true,
};

export default portfolio;`}
              </div>
              <div className="hero-img-overlay"></div>
            </div>
            <div className="hero-card">
              <div className="hero-card-icon">💻</div>
              <div>
                <div className="hero-card-value">Full-Stack</div>
                <div className="hero-card-label">Frontend-first Developer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
