# Quang Manh Hoang — Academic Website

Personal academic website hosted on **GitHub Pages** at https://manhqhumich12.github.io/.

## Structure

| Page | File |
| --- | --- |
| Home, biography, latest news, and contact | `index.html` |
| Research and projects | `research.html` |
| Publications | `publications.html` |
| Education | `education.html` |
| Achievements | `achievements.html` |
| Resume and profile links | `resume.html` |

The website uses HTML, CSS, and vanilla JavaScript. No npm, compilation, or external theme is necessary.

- `styles.css` — Modern Academic visual system, mobile layout, light/dark themes.
- `script.js` — Theme switching, accessible mobile navigation, year footer, image fallback.
- `assets/favicon.svg` — Monogram favicon.
- `.nojekyll` — Serve static assets without Jekyll processing.

## Editing with ChatGPT

You can ask ChatGPT with the connected GitHub app to update the website. ChatGPT will change the relevant HTML/CSS/JS files and commit them to `main`. GitHub Pages deploys new commits automatically when the repository's Pages source is configured. Review the GitHub Actions deployment status after each update.

The site content is based on the owner's previous academic website and public GitHub research repositories. Please verify publication metadata, affiliations, educational dates, links, and award descriptions before treating the pages as an official academic record.

## Updating manually

Edit the relevant HTML page, then commit to `main`. To change the visual design use `styles.css` only. To update the navigation, repeat the changes across six HTML pages. Local preview works by opening `index.html`; hosting via any local static web server is also supported.

## GitHub Pages configuration

Repository: `ManhqhUMich12/manhqhumich12.github.io` · branch: `main` · folder: `/ (root)`.