# The Student Water Project (TSWP)

A student-led nonprofit website built with Next.js, TypeScript, and Tailwind CSS.

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Production Build

```bash
npm run build
```

The static site is generated into the `out/` directory.

## GitHub Pages Deployment

Deployment happens automatically via GitHub Actions when you push to `main` or `master`.

### Setup (one-time)

1. Push this repository to GitHub.
2. Go to **Settings → Pages → Build and deployment → Source**.
3. Select **GitHub Actions** as the source.

After that, every push to `main` or `master` triggers a build and deploys the static site to GitHub Pages.
