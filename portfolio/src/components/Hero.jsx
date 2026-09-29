import { Arrow } from "./Icons";
import Workstation from "./Workstation";

export default function Hero() {
  return (
    <section className="hero page-width" aria-labelledby="hero-title">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow micro">Software engineer · Dublin, Ireland</p>
          <h1 id="hero-title">
            Afolabi
            <br />
            Adekanle<span className="name-period">.</span>
          </h1>
          <p className="hero-description">
            Final-year Computer Science student at TU Dublin. I'm drawn to
            systems work: trading engines, game engines, and pipelines that turn
            messy real-world data into something useful.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              View projects <Arrow />
            </a>
            <a className="text-link" href="#about">
              Experience <Arrow className="download-arrow" />
            </a>
          </div>
        </div>
        <Workstation />
      </div>
    </section>
  );
}
