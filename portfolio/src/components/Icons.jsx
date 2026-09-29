export function Arrow({ diagonal = false, className = "" }) {
  return (
    <svg
      className={`arrow-icon ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      {diagonal ? (
        <path d="M6 18 18 6M6 6h12v12" />
      ) : (
        <path d="M4 12h15m-6-6 6 6-6 6" />
      )}
    </svg>
  );
}

export function Emblem({ className = "" }) {
  return (
    <svg
      className={`emblem ${className}`}
      viewBox="0 0 68 44"
      fill="none"
      aria-hidden="true"
    >
      <ellipse cx="34" cy="22" rx="32" ry="19" />
      <ellipse cx="34" cy="22" rx="23" ry="19" />
      <path d="M3 22h62M9 11h50M9 33h50" />
      <path className="emblem-mask" d="M21 8h26v28H21z" />
      <path
        className="emblem-letter"
        d="m23 31 10-20 10 20m-15-7h12M35 11l10 20"
      />
    </svg>
  );
}
