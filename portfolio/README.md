# Afolabi Adekanle — Portfolio

React portfolio with a fixed light theme, cool off-white surfaces, green panels and a navy-blue CRT-style navigation component. The workstation is original HTML/CSS, with functioning section links. No television stills are included.

## Development

```sh
npm ci
npm start
```

The preview runs at http://localhost:3000. `npm run build` generates the static site in `build/`. Run tests with `CI=true npm test -- --watchAll=false --runInBand`.

## Content

The project descriptions and experience bullets reproduce `repos/cv-versions/01-general-software-engineering.md`. The downloadable CV is `public/afolabi-adekanle-cv.pdf`.

- Project data and contact links: `src/constants/index.js`
- Introduction: `src/components/Hero.jsx`
- Experience, education and skills: `src/components/About.jsx`
- Original workstation: `src/components/Workstation.jsx`
- Layout and responsive styles: `src/index.css`

The text structure was checked against [MIT's resume samples](https://cdn.uconnectlabs.com/wp-content/uploads/sites/123/2021/08/sampe-resumes-capd.pdf) and [resume guidance](https://capd.mit.edu/resources/resumes/). The user's CV remains the source for every accomplishment and qualification.

## Design and accessibility

The user-supplied workstation reference informed the muted green, navy, cyan and cool off-white palette. The visual treatment uses cabinet borders, inset screen details and monospace labels. Navigation, project links, PDF downloads and email contact use native HTML links. The copy control announces success or a manual-copy fallback. Page transitions respect `prefers-reduced-motion`.

DM Sans and IBM Plex Mono are self-hosted. Font licenses and provenance are in `public/fonts/`.
