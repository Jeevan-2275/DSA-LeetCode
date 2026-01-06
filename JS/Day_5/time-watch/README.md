# React + Vite

## React Stopwatch / Countdown Timer

A production-ready React + Tailwind app featuring both Countdown and Stopwatch modes with accurate timing, accessibility, and modern UI.

Features

- Countdown: Presets (1m, 5m, 30m), custom MM:SS input (0–59 sec validation)
- Stopwatch: Start, Pause, Reset
- Controls: Start, Pause, Resume, Reset; safe states and disabled logic
- Accurate timing: `requestAnimationFrame` + timestamp-based calculations (no drift)
- Completion: Beep + brief visual flash; stops cleanly at 00:00
- UI/UX: Large readable display, responsive layout, smooth progress bar
- Accessibility: Keyboard shortcuts, focus rings, good contrast, ARIA where needed
- Preferences: Dark/Light mode toggle and last timer persisted in `localStorage`

Keyboard Shortcuts

- Space: Start/Pause/Resume (mode-aware)
- R: Reset (mode-aware)
- T: Toggle theme
- 1 / 5 / 3: Preset minutes (Countdown mode)

Getting Started

```bash
npm install
npm run dev
```

Open the app at the URL shown (typically http://localhost:5173/).

Build for Production

```bash
npm run build
npm run preview
```

Notes

- Tailwind is configured via `tailwind.config.js` with dark mode using the `class` strategy.
- Base styling is provided by `src/index.css` using Tailwind directives.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
