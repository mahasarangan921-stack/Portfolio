# Mahalakshmi S — Portfolio (React + Vite + Tailwind + Motion)

A pixel-faithful React rebuild of your original HTML/CSS/JS portfolio, with the same
dark-luxury teal/amber aesthetic, glassmorphism navbar, typewriter role text, animated
orbit rings, scroll-reveal sections, and light/dark theme toggle — now componentized and
animated with **Motion** (`framer-motion`).

## Stack
- **React 19 + Vite** — fast dev server & build
- **Tailwind CSS** — utility-first styling, using your original CSS variables as design tokens
- **Motion (framer-motion)** — all animations: reveal-on-scroll, floating badges, orbit spin,
  loader, mobile menu, hero entrance, skill bar fill
- **lucide-react** — Sun/Moon/Mail/Phone/Menu/ArrowUpRight icons (GitHub/LinkedIn kept as your
  original inline brand SVGs)

## Project structure
```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        Glass navbar, scroll-spy, theme toggle, mobile menu
│   │   ├── Hero.jsx          Headline, typewriter, orbit photo, floating tech badges
│   │   ├── About.jsx         "Currently" card + bio copy
│   │   ├── Skills.jsx        Animated skill bars
│   │   ├── Projects.jsx      Project cards (RentIt, PlaceMate, Huzzler UI)
│   │   ├── Experience.jsx    Timeline
│   │   ├── Contact.jsx       Contact CTA box
│   │   ├── Footer.jsx
│   │   ├── Loader.jsx        Enhancement: initial loading screen
│   │   ├── Reveal.jsx        Enhancement: shared scroll-reveal wrapper (Motion)
│   │   └── icons/BrandIcons.jsx
│   ├── data/
│   │   ├── projects.js
│   │   ├── skills.js
│   │   ├── timeline.js
│   │   └── socials.js        Links, nav items, typewriter roles, badge config
│   ├── hooks/
│   │   ├── useTheme.js         Enhancement: light/dark persisted via localStorage
│   │   ├── useTypewriter.js    Enhancement: reusable typewriter hook
│   │   └── useActiveSection.js Enhancement: scroll-spy for nav links
│   ├── assets/
│   │   ├── images/            profile-placeholder.svg lives here — swap in your real photo
│   │   └── icons/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css              Theme CSS variables + Tailwind directives
├── tailwind.config.js
├── postcss.config.js
└── index.html
```

## Getting started
```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build → dist/
npm run preview   # preview the production build
```

## One thing to swap in
There was no photo in the original upload, so the hero currently shows a stylized
placeholder silhouette (`src/assets/images/profile-placeholder.svg`) in the same teal/amber
palette so the layout isn't broken. Drop your real cutout photo in as
`src/assets/images/profile.png` and update the `import` in `src/components/Hero.jsx`
(one line) to use it instead.

## What was enhanced beyond the original
- Componentized, reusable, data-driven (edit `src/data/*.js` to update content — no need to
  touch JSX for text changes)
- Scroll-reveal, skill bars, loader, and mobile menu now use Motion's `whileInView` /
  `AnimatePresence` instead of a manual IntersectionObserver + class toggling
- Scroll-spy active nav link via a small custom hook
- Theme preference persisted via `localStorage`, same as your original
- Fully responsive using Tailwind breakpoints, matching your original 860px/900px/640px
  breakpoints
