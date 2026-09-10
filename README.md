# Omar Wagdy — Data Analyst Portfolio

Static portfolio ready for GitHub Pages, Netlify or Vercel.

## Files
- `index.html` — main portfolio
- `style.css` — complete responsive design
- `script.js` — animations, particles, tilt cards, filters and counters
- `projects/` — case study pages
- `assets/` — add your CV/images/icons here

## Before publishing
1. Replace `assets/Omar-Wagdy-CV.pdf` with your actual CV PDF.
2. Replace `your.email@example.com` in `index.html`.
3. Replace the LinkedIn and GitHub URLs.
4. Add real dashboard screenshots to `assets/images/` and connect them to project pages if desired.

## Deploy on Vercel
Import the GitHub repository in Vercel and deploy with no build command.

## Google Sites
In Google Sites: Insert → Embed → URL, then paste your deployed Vercel URL.

## V4
- Professional horizontal 3D project carousel: sharp center image + blurred side previews.
- Auto-play, arrows, touch swipe, counters and responsive behavior.
- Fixed WhatsApp CTA for +20 10 2799 7131.
- Contact form prepared for email + WhatsApp.
- Documentation PDF folder: assets/documents/
- Project image folder: assets/images/
- Project pages include documentation CTA and short summaries.
- Replace YOUR_EMAIL@example.com in script.js before publishing.

## V5
Home uses one cover per project; carousels moved into Case Studies. Added project-specific asset folders, custom cursor, selection color, full-width marquee overrides, WhatsApp CTA and Download CV.

## V6 fixes
- Fixed the JavaScript duplicate `contactForm` declaration that could stop the entire script and leave the loading screen stuck.
- Added a 2.5s loader safety timeout.
- Reduced particles from 45 to 18.
- Removed Google Fonts network dependency.
- Fixed CV path to `assets/cv/Omar-Wagdy-CV.pdf`.
- Replaced WhatsApp placeholder mark with an inline WhatsApp-style SVG icon + Let's talk.
- Custom cursor is now created exactly once.

### V7
- Fixed custom cursor visibility: it now uses an opt-in `custom-cursor` class, so the native cursor is never accidentally hidden if JavaScript fails.
- Cursor dot/ring opacity is no longer locked at zero by CSS `!important`.
- Cursor starts centered and follows the pointer smoothly.


## V8 updates
- Real brand-logo images added for Power BI, SQL Server, Python, Excel, Tableau, Looker Studio and Pandas.
- Skill percentages/progress bars removed.
- APIs added as a core skill.
- Ticker redesigned to center the tools and use logos.
- Hero/Navigation now use Download CV; Explore Projects removed.
- LinkedIn button added beside Download CV. Replace `YOUR_LINKEDIN_URL` in index.html with your profile URL.
- MIVDEV experience updated to `Jun 2024 — Present`.
- Added 6 additional case-study slots: Power BI, Tableau, Looker Studio, APIs, Inventory and Financial KPIs.
- Added favicon at `assets/favicon.svg`.
- Case-study gallery transitions are smoother and include blurred side previews.

## V9 updates
- Tool logos are local SVG assets under `assets/logos/`, so Google Sites does not depend on an external icon CDN.
- Ticker shows each tool once, is larger, and moves faster.
- Contact email is `omarwagdy240@gmail.com`.
- LinkedIn is set to the supplied profile.
- Favicon is a rounded-square `O` mark matching the portfolio visual language.
- Added project filters: All, SQL, Excel, Power BI, Python, Tableau, Looker Studio, APIs.
- Each project has its own filter categories.

## V10 updates
- Added a premium 3-second data-themed intro animation before the portfolio.
- Added persistent Light / Dark mode toggle using localStorage.
- Added an animated typewriter line in the hero section.
- Added subtle premium hover/magnetic interactions across major UI elements.
- Replaced the mailto-only contact form with FormSubmit AJAX so submissions can actually reach `omarwagdy240@gmail.com` without requiring a mail client.
- First FormSubmit submission requires email activation; after activation, future submissions are delivered directly.

## V11 updates
- Stats now use a smooth eased count-up animation when the stats section enters the viewport.
- LinkedIn removed from the top navbar; Download CV remains and the theme control is now the right-most, larger control.
- Theme toggle now shows icon + Dark/Light label.
- Light mode redesigned with a distinct cool editorial palette, including a dedicated light hero orb, cards, ticker, stats and forms.
- Added more deliberate responsive breakpoints for laptop, tablet and phone widths.

## V12 updates
- Theme switch is icon-only.
- All section headers are centered again.
- Stats counter resets and replays whenever the user returns to the stats section.
- Light mode uses a cleaner neutral-white / navy / cyan / indigo palette.
- Contact form now has a native POST fallback in addition to FormSubmit AJAX.
- FormSubmit activation is required once for `omarwagdy240@gmail.com`; the site now explains this instead of silently failing.

## V13 updates
- Main navbar links are centered in the viewport again.
- Original left-aligned section-heading layout restored.
- About lead text has stronger contrast in light mode.
- Light-mode hover states are now more visible across navigation, buttons, cards and project filters.
- Light-mode custom cursor is now dark/navy with a visible ring.


## V14 project portfolio
- Current project list: MISUO Sales Furniture (Excel); Customer Churn Rate, Service Company, Power Consumption, Weather APIs (Power BI); SQL Code Library (SQL).
- Each project has its own card and case-study page.
- SQL case study is prepared for 6 code screenshots.
- Galleries are flexible and responsive; adding a new image does not require redesigning the layout.


## V15
- Intro loader reduced from 3 seconds to 1.8 seconds.
- Loader progress animation reduced to 1.8 seconds.
- IMPORTANT: upload the CONTENTS of this folder to the GitHub repository root, not the ZIP file itself. `index.html`, `style.css`, `script.js`, `assets/`, and `projects/` must be side-by-side at the repository root.
