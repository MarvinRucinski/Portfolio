# My Portfolio

Welcome to my portfolio! This website showcases my projects, skills, and achievements. It is built with **Vue 3** and **Vite**.

You can view the live site here: [My Portfolio](https://marvinrucinski.github.io/Portfolio/#/).

---

## Features

- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Modern Tech Stack**: Built using Vue 3, Vite, and other modern tools.
- **Project Showcase**: Includes examples of my work, with descriptions and links to repositories.
- **Simple Navigation**: User-friendly interface to explore my skills and projects.

---

## Technologies Used

Vue 3, Vite, HTML5, CSS3

---

## Live Demo

You can check out the live version of my portfolio here: [My Portfolio](https://marvinrucinski.github.io/Portfolio/#/).

---

## For Developers: Project Setup

If you'd like to run this project locally, follow the steps below:

### Install dependencies:

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

## Google Analytics (GA4)

This project supports GA4 through an environment variable.

1. Create a local environment file (not tracked by git):

```sh
cp .env.example .env.local
```

2. Add your GA4 Measurement ID in `.env.local`:

```env
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

3. Build and deploy as usual:

```sh
npm run build
npm run deploy
```

Notes:
- Analytics runs only in production builds.
- If `VITE_GA_MEASUREMENT_ID` is missing, analytics is disabled.
- The app respects browser Do Not Track.
- IP anonymization is enabled and Google Signals is disabled by default.

### Security for Public Repo + GitHub Pages

- Do not store service account credentials, private keys, or API secrets in frontend code.
- GA4 Measurement ID (`G-...`) is not a secret, but keep all future keys in `.env.local` and never commit them.
- `.env*` files are ignored by git (except `.env.example`).
- Restrict access in GA Admin: roles, data retention, and bot/internal traffic filters.

## Theme-Aware Logos (Light/Dark)

Project logos (`project.icon`) and technology logos (`iconsSrc[tech]`) can now be configured with:
- different image source for light and dark mode,
- optional inline CSS styles per mode (e.g. `filter: invert(1)`),
- optional extra class name.

Supported formats:

```js
// Backward compatible (single source)
icon: 'my-logo.svg'

// Theme-aware source/style/class
icon: {
	src: 'my-logo.svg',
	light: {
		src: 'my-logo-light.svg',
		style: { filter: 'none' },
		className: 'logo-light'
	},
	dark: {
		src: 'my-logo-dark.svg',
		style: { filter: 'invert(1)' },
		className: 'logo-dark'
	}
}
```

Notes:
- `src` is a fallback when `light.src` or `dark.src` is missing.
- For project logos, path base is `media/`.
- For technology logos, path base is `media/technologies/`.
