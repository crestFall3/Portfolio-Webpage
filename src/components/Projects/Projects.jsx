import { projects } from '../../data/projects';
import './Projects.css';

const ExternalIcon = () => (
  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

const CodeIcon = () => (
  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
  </svg>
);

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading">
      <div className="container">
        <div className="projects-header">
          <div>
            <span className="section-label">Selected Work</span>
            <h2 className="section-title" id="projects-heading">Projects</h2>
            <p className="section-subtitle">A selection of things I've built — from full-stack applications to polished UI experiments.</p>
          </div>
          <a href="#contact" className="btn-ghost projects-cta" onClick={(e) => {
            e.preventDefault();
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}>Start a Project →</a>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card fade-in" key={project.id} id={`project-${project.id}`}>
              <div className="project-img">
                <div className="project-img-placeholder" aria-label={`${project.title} code preview`}>
                  {project.codePlaceholder}
                </div>
              </div>
              <div className="project-body">
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span className="tag" key={tag}>{tag}</span>
                  ))}
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-links">
                  {project.demoUrl && (
                    <a href={project.demoUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                      Live Demo <ExternalIcon />
                    </a>
                  )}
                  {project.sourceUrl && (
                    <a href={project.sourceUrl} className="project-link ghost" target="_blank" rel="noopener noreferrer">
                      Source <CodeIcon />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
