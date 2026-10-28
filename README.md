# Lion Apex Technical Services LLC – Website (React + Vite)

## Run locally
npm install
npm run dev

## Deploy on GitHub Pages
1. Push this folder to a GitHub repo.
2. `npm run deploy` (builds and publishes the `dist` folder to the `gh-pages` branch).
3. Repo Settings → Pages → Branch: `gh-pages` → Save.

HashRouter + `base: './'` are used, so all pages and images work under any repo name.
Images live in `public/images/` – replace any file with the same name to update it.
Business info and services are edited in `src/data.js`.
