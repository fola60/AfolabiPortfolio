export const CONTACT = {
  address: "Dublin, Ireland",
  email: "afolabiadekanle@gmail.com",
  linkedin: "https://www.linkedin.com/in/afolabi-adekanle-68428b1b6/",
  github: "https://github.com/fola60",
};

export const PROJECTS = [
  {
    id: "01",
    title: "Stockball",
    type: "market",
    description:
      "A live virtual stock market for Premier League players where prices move only through trades, priced by a Rust engine with price-impact curves, idempotent orders and automatic freezes during matches.",
    detail:
      "Six synthetic-trader strategies react to fixtures, stats, injury news, social sentiment and betting-market signals, trading through the same engine as real users.",
    technologies: ["Rust", "Python", "Next.js", "Redis"],
    href: "https://footystocks.com",
    action: "Visit footystocks.com",
  },
  {
    id: "02",
    title: "Access360",
    type: "navigation",
    description:
      "An accessibility-first indoor navigation app for multi-floor buildings, with building and floor search, interactive maps, route tracking and facility reporting.",
    detail:
      "An AI assistant plans routes around each user's accessibility needs.",
    award:
      "3rd place worldwide, Accessibility track — Microsoft Intern Global Hackathon 2026.",
    technologies: ["React Native", "TypeScript", "Express"],
    href: "https://github.com/fola60/access360",
    action: "View repository",
  },
  {
    id: "03",
    title: "Game Engine RS",
    type: "engine",
    description:
      "Built a lightweight Rust game engine on wgpu with instanced rendering, custom WGSL shaders, model loading and text rendering.",
    detail:
      "Designed reusable APIs for the game loop, cameras, entity transforms, resource loading, input and gestures.",
    technologies: ["Rust", "wgpu", "WGSL", "winit"],
    href: "https://github.com/fola60/game-engine-rs",
    action: "View repository",
  },
];

export const SKILLS = [
  "Rust",
  "TypeScript",
  "Python",
  "React",
  "Next.js",
  "PostgreSQL",
  "Redis",
  "Docker",
];
