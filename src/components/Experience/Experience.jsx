import { workExperience, education } from '../../data/experience';
import './Experience.css';

function TimelineSection({ title, items }) {
  return (
    <div>
      <h3 className="timeline-heading">{title}</h3>
      <div className="timeline">
        {items.map((item) => (
          <div className="timeline-item fade-in" key={item.id} id={`exp-${item.id}`}>
            <div className="timeline-dot"></div>
            <div className="timeline-date">{item.date}</div>
            <div className="timeline-role">{item.role}</div>
            <div className="timeline-company">{item.company}</div>
            <div className="timeline-desc">{item.desc}</div>
            <div className="timeline-tags">
              {item.tags.map((tag) => (
                <span className="tag" key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading">
      <div className="container">
        <div style={{ marginBottom: '64px' }}>
          <span className="section-label fade-in">Background</span>
          <h2 className="section-title fade-in" id="experience-heading">Experience &amp; Education</h2>
          <p className="section-subtitle fade-in">My journey — combining formal education with hands-on project experience.</p>
        </div>

        <div className="timeline-layout">
          <TimelineSection title="Work Experience" items={workExperience} />
          <TimelineSection title="Education" items={education} />
        </div>
      </div>
    </section>
  );
}
