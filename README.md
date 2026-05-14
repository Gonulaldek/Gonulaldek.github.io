# Melih Gönülal — Portfolio Site

Personal portfolio site for **junior software developer internship applications**.
Static, modular HTML/CSS/JS — no build system, no dependencies.

🔗 **Live:** _(domain will be added after deployment)_

---

## Short description

A static portfolio site presenting software projects, technical stack and contact information for junior / intern software development opportunities. Built with plain HTML, CSS and JavaScript, organized in small modular files so new projects, sections, or assets can be added quickly without touching the layout.

## Technologies

- HTML5
- CSS3 (custom properties, grid, flexbox, media queries)
- Vanilla JavaScript (no framework)
- Inline SVG for project previews and visual elements
- Google Fonts CDN (Syne, DM Sans, JetBrains Mono)

No build system, no dependencies, no package manager.

## Project structure

```
portfolio/
├── index.html              # Page skeleton + static sections (hero, about, contact)
├── README.md               # This file
└── assets/
    ├── css/
    │   ├── base.css        # Root vars, reset, body, scrollbar, selection
    │   ├── layout.css      # Wrappers, sections, hero, grids
    │   ├── components.css  # Titlebar, nav, cards, panels, buttons, etc.
    │   └── responsive.css  # All @media queries (loaded last)
    ├── js/
    │   ├── data.js         # All editable content (projects, stack, etc.)
    │   ├── render.js       # SVG templates + DOM rendering functions
    │   └── main.js         # Boots rendering and scroll/reveal observer
    ├── images/             # Project screenshots and other images
    └── cv/                 # Place CV PDF here when ready
```

## How to update content

Almost everything you'll want to change is in **`assets/js/data.js`**. No HTML editing needed for most updates.

### Add a new project
Open `assets/js/data.js` and append an object to either `projects.featured` or `projects.inDevelopment`:

```js
{
  id: 'PRJ_006',
  filename: 'my_new_project',
  ext: '.ts',
  status: { label: 'PROTOTYPE', class: 'prototype' },
  title: 'My <span class="accent">New Project</span>',
  role: 'Personal Project · TypeScript',
  description: "Short factual description.",
  stack: ['TypeScript', 'Node.js'],
  links: [
    { label: 'GitHub Repo', url: 'https://github.com/user/repo' }
    // or: { label: 'Repository Coming Soon', pending: true }
  ],
  preview: 'iris',     // key into the previews map in render.js
  flip: false,         // true = preview on the right
  dev: false           // true = dashed border + "DEV BUILD" overlay
}
```

Then update the **"N ITEMS"** label and add a new preview SVG in `render.js` if you need a unique mockup.

### Status options
- `active-dev` → amber dot, "ACTIVE DEVELOPMENT"
- `prototype` → cyan dot, "PROTOTYPE"
- `in-dev` → outlined dot, "IN DEVELOPMENT" (used with `dev: true`)

### Add a CV
1. Drop your PDF at `assets/cv/Melih_Gonulal_CV.pdf`
2. In `index.html`, replace the `<span class="cv-pending">` element with a link:
   ```html
   <a href="assets/cv/Melih_Gonulal_CV.pdf" class="mail-btn" target="_blank">CV / PDF →</a>
   ```

### Add a project gallery image
1. Drop an image into `assets/images/`
2. Reference it from a project card (you can swap the SVG preview for an `<img>` by extending `render.js` if needed).

### Update stack levels
Edit the `stack` array in `data.js`. Level classes are `high` (cyan), `mid` (amber), `low` (muted).

### Update About / Contact prose
These sections live directly in `index.html` because they rarely change. Edit the `#about` and `#contact` `<section>` blocks.

## How to run locally

Plain HTML — pick whichever fits.

### Option 1 — Open the file directly
Double-click `index.html`, or drag it into a browser. Everything works offline except Google Fonts.

### Option 2 — Local static server (recommended)
Better dev-experience (correct MIME types, cleanest paths). From the project root:

```bash
# Python 3 — built into most systems
python -m http.server 8000

# Node.js — uses npx, no install required
npx serve

# PHP
php -S localhost:8000
```

Then open `http://localhost:8000`.

## How to build

**No build step is required.** The files are already deployment-ready.

If you later migrate to a bundler (Vite, etc.), the standard scripts would be:
```bash
npm install
npm run dev
npm run build
```
But this is **not** currently needed.

## Deployment

The site can be deployed to any static host. Recommended options:

### GitHub Pages
1. Push this repo to GitHub.
2. Repo → **Settings → Pages** → Source: `main` branch, folder `/ (root)`.
3. Live URL appears at `https://gonulaldek.github.io/<repo-name>/`.

### Cloudflare Pages
1. Connect the repo.
2. **Build command:** _(leave empty)_
3. **Build output directory:** `/`

### Netlify
- Drag-and-drop the project folder onto [app.netlify.com/drop](https://app.netlify.com/drop), **or**
- Connect the repo: **Build command** empty, **Publish directory** `/`.

### Vercel
- Connect the repo, **Framework preset:** Other, **Build command:** empty, **Output directory:** `/`.

### Custom domain
After deployment, add a custom domain through the hosting provider's domain settings.

---

## File loading order (for reference)

CSS load order is intentional — later files can override earlier ones:
```
base.css  →  layout.css  →  components.css  →  responsive.css
```

JS load order is intentional — later files use globals from earlier ones:
```
data.js  →  render.js  →  main.js
```

## Browser support

Modern evergreen browsers (Chrome, Firefox, Safari, Edge — last 2 versions). Uses `IntersectionObserver`, CSS custom properties, `backdrop-filter`, and `aspect-ratio`.

## License

Personal portfolio — all rights reserved.

---

**Status:** Active — currently being used for junior software developer internship applications.
**Maintainer:** Melih Gönülal · [github.com/Gonulaldek](https://github.com/Gonulaldek)

## Language Toggle

The site supports Turkish and English content switching without a page reload. The selected language is stored in `localStorage` under the key `portfolio_lang`. Main content lives in `assets/js/data.js`, while rendering is handled by `assets/js/render.js` and initialization by `assets/js/main.js`.

