import { Arrow } from "./Icons";

export default function Navbar() {
  return (
    <header className="site-header page-width">
      <a
        className="identity"
        href="#top"
        aria-label="Afolabi Adekanle, back to top"
      >
        <span className="monogram" aria-hidden="true">
          AA
        </span>
        <span>Afolabi Adekanle</span>
      </a>
      <nav className="navigation" aria-label="Main navigation">
        <a href="#work">Projects</a>
        <a href="#about">Experience</a>
        <a href="#contact">Contact</a>
      </nav>
      <a
        className="header-cv"
        href={`${process.env.PUBLIC_URL}/afolabi-adekanle-cv.pdf`}
        download="Afolabi-Adekanle-CV.pdf"
      >
        Download CV <Arrow className="download-arrow" />
      </a>
    </header>
  );
}
