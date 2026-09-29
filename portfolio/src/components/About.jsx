import { Arrow } from "./Icons";

export default function About() {
  return (
    <section id="about" className="about-section" aria-labelledby="about-title">
      <div className="page-width section-space">
        <div className="section-heading reveal">
          <div>
            <p className="micro section-index">02 / Background</p>
            <h2 id="about-title">Experience & education</h2>
          </div>
          <a
            className="text-link"
            href={`${process.env.PUBLIC_URL}/afolabi-adekanle-cv.pdf`}
            download="Afolabi-Adekanle-CV.pdf"
          >
            Download CV <Arrow className="download-arrow" />
          </a>
        </div>
        <div className="background-grid">
          <div className="experience-panel reveal">
            <p className="micro record-label">Experience</p>
            <div className="record-heading">
              <div>
                <h3>Microsoft</h3>
                <p className="role">Software Engineering Intern</p>
              </div>
              <p className="record-date">
                Summer 2026
                <br />
                <span>3 months</span>
              </p>
            </div>
            <ul className="experience-bullets">
              <li>
                Built an AI-assisted internal tool that lets product managers
                configure and launch Office promotions themselves, taking
                engineers out of the launch process entirely.
              </li>
              <li>
                Extended the campaign renderer that delivers those promotions
                across Microsoft Office applications.
              </li>
              <li>
                3rd place worldwide in the Accessibility track of the Microsoft
                Intern Global Hackathon with Access360.
              </li>
            </ul>
          </div>
          <div className="education-panel reveal">
            <p className="micro record-label">Education</p>
            <h3>
              Technological
              <br />
              University Dublin
            </h3>
            <p className="education-dates">
              August 2023 — May 2027 (expected)
            </p>
            <div className="education-note">
              <span className="micro">Degree</span>
              <span>BSc Computer Science (Infrastructure)</span>
            </div>
          </div>
        </div>
        <div className="skills-section reveal">
          <h3>Technical skills</h3>
          <div className="skill-groups">
            <div>
              <h4 className="micro">Languages</h4>
              <p>Rust, Python, Java, TypeScript, JavaScript, Swift, C, SQL</p>
            </div>
            <div>
              <h4 className="micro">Frameworks</h4>
              <p>
                FastAPI, React, React Native, Next.js, Node.js, Express, Spring
                Boot, SwiftUI
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
