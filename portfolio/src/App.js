import { useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import { reducedMotion } from "./motion";

export default function App() {
  useEffect(() => {
    document.documentElement.removeAttribute("data-theme");
    if (!("IntersectionObserver" in window) || reducedMotion()) return;
    const timers = new Set();
    const later = (fn, ms) => {
      const timer = window.setTimeout(() => {
        timers.delete(timer);
        fn();
      }, ms);
      timers.add(timer);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const element = entry.target;
          if (element.classList.contains("reveal-pending")) {
            element.classList.add("is-revealing");
            element.classList.remove("reveal-pending");
            later(() => element.classList.remove("is-revealing"), 1200);
          }
          observer.unobserve(element);
        });
      },
      { threshold: 0.08 },
    );
    document.querySelectorAll(".reveal").forEach((element) => {
      if (element.getBoundingClientRect().top > window.innerHeight) {
        element.classList.add("reveal-pending");
      }
      observer.observe(element);
    });

    // Sweep a scan line down a section once an in-page link finishes scrolling to it.
    const onClick = (event) => {
      const link = event.target.closest('a[href^="#"]');
      const section =
        link && document.getElementById(link.getAttribute("href").slice(1));
      if (!section || !section.matches("main > section")) return;
      let done = false;
      const arrive = () => {
        if (done) return;
        done = true;
        window.removeEventListener("scrollend", arrive);
        section.classList.remove("arrive");
        void section.offsetWidth;
        section.classList.add("arrive");
        later(() => section.classList.remove("arrive"), 900);
      };
      window.addEventListener("scrollend", arrive);
      later(arrive, 900);
    };
    document.addEventListener("click", onClick);

    return () => {
      observer.disconnect();
      document.removeEventListener("click", onClick);
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);

  return (
    <div id="top" className="portfolio">
      <Intro />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
    </div>
  );
}
