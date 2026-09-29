import { memo, useEffect, useRef, useState } from "react";
import { reducedMotion } from "../motion";

const COLUMNS = 12;
const ROWS = 7;
const RADIUS = 46;

const randomDigit = () => String(Math.floor(Math.random() * 10));

// A loose 3x3 group of cells, kept off the outer edge.
function pickCluster() {
  const col = 1 + Math.floor(Math.random() * (COLUMNS - 2));
  const row = 1 + Math.floor(Math.random() * (ROWS - 2));
  const cells = [];
  for (let r = row - 1; r <= row + 1; r++) {
    for (let c = col - 1; c <= col + 1; c++) {
      if ((r === row && c === col) || Math.random() < 0.7) {
        cells.push(r * COLUMNS + c);
      }
    }
  }
  return cells;
}

// Decorative digit grid behind the CRT links. Digits swell near the pointer;
// one restless cluster can be clicked to file it away, which calls onFile.
function NumberField({ onFile }) {
  const fieldRef = useRef(null);
  const [digits] = useState(() =>
    Array.from({ length: COLUMNS * ROWS }, randomDigit),
  );

  useEffect(() => {
    const field = fieldRef.current;
    const screen = field.parentElement;
    const cells = Array.from(field.children);
    const animate = !reducedMotion();
    let centers = null;
    let cluster = [];
    let filing = false;
    let timer;

    const measure = () =>
      (centers ??= cells.map((cell) => ({
        x: cell.offsetLeft + cell.offsetWidth / 2,
        y: cell.offsetTop + cell.offsetHeight / 2,
      })));
    const pointer = (event) => {
      const rect = field.getBoundingClientRect();
      return { x: event.clientX - rect.left, y: event.clientY - rect.top };
    };
    const markCluster = () => {
      cluster = pickCluster();
      cluster.forEach((i) => cells[i].classList.add("restless"));
    };
    const settle = () =>
      cells.forEach((cell) => cell.style.removeProperty("--s"));

    const onMove = (event) => {
      if (event.pointerType === "touch") return;
      if (event.target.closest("a")) return settle();
      const { x, y } = pointer(event);
      measure().forEach((c, i) => {
        const pull = Math.max(0, 1 - Math.hypot(c.x - x, c.y - y) / RADIUS);
        cells[i].style.setProperty("--s", (1 + pull).toFixed(2));
      });
    };
    const onClick = (event) => {
      if (filing || event.target.closest("a")) return;
      const { x, y } = pointer(event);
      const points = measure();
      const hit = cluster.some(
        (i) => Math.hypot(points[i].x - x, points[i].y - y) < RADIUS * 0.75,
      );
      if (!hit) return;
      filing = true;
      const filed = cluster;
      filed.forEach((i) => {
        cells[i].style.setProperty("--dy", `${field.offsetHeight - points[i].y}px`);
        cells[i].classList.add("filing");
      });
      timer = window.setTimeout(
        () => {
          filed.forEach((i) => {
            cells[i].classList.remove("restless", "filing");
            cells[i].textContent = randomDigit();
          });
          markCluster();
          filing = false;
          onFile();
        },
        animate ? 650 : 0,
      );
    };
    const onResize = () => {
      centers = null;
    };

    markCluster();
    if (animate) {
      screen.addEventListener("pointermove", onMove);
      screen.addEventListener("pointerleave", settle);
    }
    screen.addEventListener("click", onClick);
    window.addEventListener("resize", onResize);
    return () => {
      window.clearTimeout(timer);
      screen.removeEventListener("pointermove", onMove);
      screen.removeEventListener("pointerleave", settle);
      screen.removeEventListener("click", onClick);
      window.removeEventListener("resize", onResize);
      cells.forEach((cell) => cell.classList.remove("restless", "filing"));
      settle();
    };
  }, [onFile]);

  return (
    <div className="number-field" ref={fieldRef} aria-hidden="true">
      {digits.map((digit, i) => (
        <span key={i}>{digit}</span>
      ))}
    </div>
  );
}

export default memo(NumberField);
