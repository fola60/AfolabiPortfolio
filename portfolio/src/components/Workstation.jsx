import { useCallback, useState } from "react";
import { Arrow } from "./Icons";
import NumberField from "./NumberField";

const BINS = 5;

export default function Workstation() {
  const [filed, setFiled] = useState(0);
  const onFile = useCallback(() => setFiled((count) => count + 1), []);
  const complete = filed > 0 && filed % BINS === 0;
  const bins = complete ? BINS : filed % BINS;

  return (
    <div className="workstation">
      <div className="partition" aria-hidden="true">
        <div className="partition-note">
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
      <div className="desk" aria-hidden="true" />
      <div className="computer">
        <div className="monitor">
          <div className="monitor-bezel">
            <div className="camera" aria-hidden="true" />
            <nav className="crt-screen" aria-label="Portfolio index">
              <NumberField onFile={onFile} />
              <div className="screen-heading">
                <span className="crt-type" style={{ "--chars": 11 }}>
                  A. ADEKANLE
                </span>
                <span aria-hidden="true">—</span>
              </div>
              <p className="screen-label">
                <span className="crt-type" style={{ "--chars": 17 }}>
                  SOFTWARE ENGINEER
                </span>
              </p>
              <div className="screen-links">
                <a href="#work">
                  <span>
                    <b>01</b> Projects
                  </span>
                  <Arrow />
                </a>
                <a href="#about">
                  <span>
                    <b>02</b> Experience
                  </span>
                  <Arrow />
                </a>
                <a href="#contact">
                  <span>
                    <b>03</b> Contact
                  </span>
                  <Arrow />
                </a>
              </div>
              <div className="screen-footer">
                <span>DUBLIN, IRELAND</span>
                <span
                  className={`screen-progress${complete ? " complete" : ""}`}
                  aria-hidden="true"
                >
                  {Array.from({ length: BINS }, (_, i) => (
                    <i key={i} className={i < bins ? "filled" : undefined} />
                  ))}
                  <b>{(bins / BINS) * 100}%</b>
                </span>
                <span className="screen-cursor" aria-hidden="true" />
              </div>
            </nav>
            <span className="monitor-control" aria-hidden="true" />
          </div>
          <div className="monitor-chin" aria-hidden="true">
            <span>AA</span>
            <i />
          </div>
        </div>
        <div className="monitor-neck" aria-hidden="true" />
        <div className="keyboard" aria-hidden="true">
          <div className="key-grid">
            {Array.from({ length: 44 }, (_, i) => (
              <i key={i} />
            ))}
            <span className="spacebar" />
          </div>
          <div className="arrow-keys">
            <i />
            <i />
            <i />
            <i />
          </div>
          <div className="trackball" />
        </div>
      </div>
    </div>
  );
}
