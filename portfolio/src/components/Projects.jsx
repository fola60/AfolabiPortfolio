import { useEffect, useState } from "react";
import { PROJECTS } from "../constants";
import { reducedMotion } from "../motion";
import { Arrow } from "./Icons";

// Cycles through random digits briefly before settling on the real number.
function ScrambleNumber({ value, active }) {
  const [text, setText] = useState(value);
  useEffect(() => {
    if (!active || reducedMotion()) return setText(value);
    let ticks = 0;
    const timer = window.setInterval(() => {
      ticks += 1;
      if (ticks > 7) {
        window.clearInterval(timer);
        setText(value);
      } else {
        setText(String(Math.floor(Math.random() * 100)).padStart(2, "0"));
      }
    }, 45);
    return () => window.clearInterval(timer);
  }, [active, value]);
  return text;
}

export default function Projects() {
  const [activeId, setActiveId] = useState(null);
  return (
    <section
      id="work"
      className="work-section page-width section-space"
      aria-labelledby="work-title"
    >
      <div className="section-heading reveal">
        <div>
          <p className="micro section-index">01 / Projects</p>
          <h2 id="work-title">Selected projects</h2>
        </div>
      </div>
      <div className="project-list">
        {PROJECTS.map((project) => (
          <article
            className="project reveal"
            key={project.id}
            data-file={project.id}
            onMouseEnter={() => setActiveId(project.id)}
            onMouseLeave={() => setActiveId(null)}
            onFocus={() => setActiveId(project.id)}
            onBlur={() => setActiveId(null)}
          >
            <span className="project-number micro" aria-hidden="true">
              <ScrambleNumber
                value={project.id}
                active={activeId === project.id}
              />
            </span>
            <div className="project-content">
              <h3>{project.title}</h3>
              <ul className="project-bullets">
                <li>{project.description}</li>
                <li>{project.detail}</li>
              </ul>
              {project.award && (
                <p className="project-award">{project.award}</p>
              )}
              <ul
                className="project-technologies"
                aria-label={`${project.title} technologies`}
              >
                {project.technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
            <a
              className="project-link text-link"
              href={project.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.action}: ${project.title} (opens in new tab)`}
            >
              {project.action}
              <Arrow diagonal />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
