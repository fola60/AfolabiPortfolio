// Treats environments without matchMedia (e.g. tests) as reduced motion.
export function reducedMotion() {
  return (
    typeof window.matchMedia !== "function" ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}
