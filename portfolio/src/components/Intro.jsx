import { useEffect, useState } from "react";
import { reducedMotion } from "../motion";

const SEEN_KEY = "afolabi-intro-seen";
const DURATION = 1600;

function shouldPlay() {
  if (reducedMotion()) return false;
  try {
    return !window.sessionStorage.getItem(SEEN_KEY);
  } catch {
    return true;
  }
}

// Plays once per session: a light line draws across closed doors, flickers,
// then the doors part to reveal the page. Click or Escape skips it.
export default function Intro() {
  const [playing, setPlaying] = useState(shouldPlay);

  useEffect(() => {
    if (!playing) return;
    const root = document.documentElement;
    root.classList.add("intro-playing");
    try {
      window.sessionStorage.setItem(SEEN_KEY, "1");
    } catch {
      // Storage unavailable: the intro may replay on the next load.
    }
    const finish = () => setPlaying(false);
    const timer = window.setTimeout(finish, DURATION);
    const onKey = (event) => event.key === "Escape" && finish();
    window.addEventListener("keydown", onKey);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("keydown", onKey);
      root.classList.remove("intro-playing");
    };
  }, [playing]);

  if (!playing) return null;
  return (
    <div className="intro" aria-hidden="true" onClick={() => setPlaying(false)}>
      <div className="intro-door intro-door-left" />
      <div className="intro-door intro-door-right" />
      <div className="intro-line" />
    </div>
  );
}
