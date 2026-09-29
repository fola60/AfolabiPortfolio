import { useEffect, useRef, useState } from "react";
import { CONTACT } from "../constants";
import { Arrow } from "./Icons";

export default function Contact() {
  const [copyStatus, setCopyStatus] = useState("");
  const timer = useRef();
  useEffect(() => () => window.clearTimeout(timer.current), []);
  async function copyEmail() {
    window.clearTimeout(timer.current);
    try {
      await navigator.clipboard.writeText(CONTACT.email);
      setCopyStatus("Email copied");
    } catch {
      setCopyStatus("Please select and copy the email address.");
    }
    timer.current = window.setTimeout(() => setCopyStatus(""), 4500);
  }
  return (
    <>
      <section
        id="contact"
        className="contact-section page-width section-space"
        aria-labelledby="contact-title"
      >
        <div>
          <p className="micro section-index">03 / Contact</p>
          <h2 id="contact-title">Contact</h2>
          <p className="contact-location">{CONTACT.address}</p>
        </div>
        <div className="contact-details">
          <div className="email-line">
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            <button
              className="copy-email"
              onClick={copyEmail}
              aria-label="Copy email address"
            >
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M8 8h12v12H8zM4 15V4h11" />
              </svg>
            </button>
            <span className="copy-status" role="status">
              {copyStatus}
            </span>
          </div>
          <div className="social-links">
            <a
              className="text-link"
              href={CONTACT.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub <Arrow diagonal />
            </a>
            <a
              className="text-link"
              href={CONTACT.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <Arrow diagonal />
            </a>
          </div>
        </div>
      </section>
      <footer className="site-footer page-width">
        <span>© {new Date().getFullYear()} Afolabi Adekanle</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  );
}
