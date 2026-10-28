# Lion Apex Technical Services LLC – Website (React + Vite)

## Run locally (IMPORTANT: do NOT double-click index.html)
    npm install
    npm run dev          # open the http://localhost:5173 link shown in terminal
    # to test the production build:
    npm run build && npm run preview

## Deploy on GitHub Pages (easiest – automatic)
1. Create a GitHub repo and push this whole folder to the `main` branch.
2. Repo → Settings → Pages → **Source: GitHub Actions**.
3. Every push to `main` builds and publishes the site automatically (see Actions tab).

(Alternative: `npm run deploy`, then Settings → Pages → Branch `gh-pages`.)
Do not set Pages to "main branch / root" – that serves the source code, not the built site.

Pages use `/#/about`, `/#/services`, `/#/gallery`, `/#/contact` (HashRouter), so they work on GitHub Pages without extra config.
Images live in `public/images/`; business info and services are in `src/data.js`.
