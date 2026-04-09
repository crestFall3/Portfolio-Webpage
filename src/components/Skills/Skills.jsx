import { skills, principles } from '../../data/skills';
import './Skills.css';

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading">
      <div className="container">
        <div className="skills-layout">

          {/* Left: heading + principles */}
          <div>
            <span className="section-label">Expertise</span>
            <h2 className="section-title" id="skills-heading">Technical Arsenal</h2>
            <p className="section-subtitle">My philosophy: pick the right tool for the job. I focus on scalability, clean architecture, and developer experience.</p>

            <div className="principles">
              {principles.map((p) => (
                <div className="principle fade-in" key={p.num}>
                  <div className="principle-num">{p.num}</div>
                  <div>
                    <div className="principle-title">{p.title}</div>
                    <div className="principle-text">{p.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: skill cards */}
          <div className="skills-grid fade-in">
            {skills.map((skill) => (
              <div className="skill-card" key={skill.id} id={`skill-${skill.id}`}>
                <div className="skill-icon">{skill.icon}</div>
                <div className="skill-name">{skill.name}</div>
                <div className="skill-desc">{skill.desc}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
