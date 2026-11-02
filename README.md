# Quang Manh Hoang — Academic website

English academic website preserving the navigation and primary public information of the previous Google Sites website: **Home**, **Research & Projects**, **Publications**, **Education**, **Achievements**, and **Resume**.

## Deploy to GitHub Pages

1. Create the public GitHub repository `ManhqhUMich12.github.io` while signed in as `ManhqhUMich12`.
2. Upload the **contents** of this directory to the root of the default (`main`) branch. You only need `*.html`, `styles.css`, `script.js`, and `assets/`.
3. In GitHub: **Settings → Pages → Build and deployment → Deploy from a branch → main → /(root) → Save**.
4. Your site will be served at `https://manhqhumich12.github.io/` once deployment finishes.

## Prompt-only updates via ChatGPT

Once the repository is available to the connected GitHub app, use this ChatGPT thread to request changes in natural language, for example:

> Add my new journal publication (title, authors, DOI and date) to the Publications page and add a news item on Home. Commit the changes to GitHub and verify them.

ChatGPT can fetch existing file content, edit the relevant HTML/CSS/JS file using the GitHub connection, and commit it to the repository. If GitHub Pages is already configured to deploy from the `main` branch, it rebuilds on updates automatically. This is **prompt-driven**, not unattended background monitoring: each update requires a message, and GitHub connection/permissions must remain active. GitHub Pages deployment is handled by GitHub; ChatGPT cannot guarantee it is live until verified.

### Which file to edit

- Home bio/news/contact → `index.html`
- Research and projects → `research.html`
- Publications → `publications.html`
- Education → `education.html`
- Achievements → `achievements.html`
- Resume → `resume.html`
- Color/layout → `styles.css`
- Mobile menu/theme → `script.js`

Core text is statically rendered for accessibility and search indexing, not pulled from a backend. For prompt-driven changes, edit the relevant HTML files on GitHub directly.

## Editorial and privacy notes

- Content has been adapted from publicly readable pages of the old Google Sites website and public GitHub repositories.
- The old Research & Projects page contained unfinished placeholder text; meaningful descriptions now use the public papers or GitHub repository README files.
- Original Education, Achievements and Resume subpages were not fully accessible when preparing this version; their new pages rely on *publicly accessible Home / Publications content* instead of claiming an exact copy of missing text.
- Resume points to the public old site's resume page. No file from private/cloud storage has been published.
- GitHub profile image is loaded from the public GitHub avatar URL. You can request a replacement image later.
- The public contact email and professional links were already visible on the old site or other public profiles.
- Review affiliations, publication details and award spelling before treating this as a final authoritative academic profile.