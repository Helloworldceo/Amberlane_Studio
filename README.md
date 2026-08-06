# Amberlane Studio

A collection of 19 professionally designed website templates — for personal portfolios and small businesses — plus a marketing showcase site where visitors can browse live examples and request a custom build.

Every template is plain **HTML, CSS, and JavaScript**. No build tools, no frameworks, no dependencies. Open any `index.html` directly in a browser, or serve the folder with any static file server.

## What's in this repo

- **`index.html` / `style.css` / `script.js`** (root) — the Amberlane Studio marketing site: hero, how-it-works, a browsable grid of all 19 templates, pricing, FAQ, and a "request a build" contact form.
- **19 template folders** — each is a fully self-contained website (`index.html`, `style.css`, `script.js`, and an `assets/` folder where relevant).

## Templates

### Personal Portfolios

| Folder | Style |
|---|---|
| `01-portfolio-developer` | Dark, code-inspired portfolio with a terminal-style about section |
| `02-portfolio-designer` | Bright, editorial layout for product and brand designers |
| `03-portfolio-photographer` | Full-bleed hero and gallery for portrait/travel/wedding photographers |
| `04-portfolio-writer` | Clean, reading-focused layout for journalists and essayists |
| `05-portfolio-consultant` | Trust-building layout with results, testimonials, and booking CTA |
| `11-portfolio-musician` | Moody, bold layout for album releases, tour dates, and merch |
| `19-portfolio-resume` | Personal CV/resume site with a viewable, downloadable CV |

### Small Business Sites

| Folder | Style |
|---|---|
| `06-business-restaurant` | Menu, hours, and reservation form |
| `07-business-salon` | Calm, elegant layout with services and appointment requests |
| `08-business-boutique` | Product grid, categories, and newsletter signup |
| `09-business-agency` | Case-study driven layout for marketing/branding agencies |
| `10-business-fitness` | High-energy layout with class schedule and membership pricing |
| `12-business-realestate` | Property listings, search bar, and agent bio |
| `13-business-lawfirm` | Formal, trust-focused layout for law firms and medical practices |
| `14-business-weddingplanner` | Romantic gallery and inquiry form for wedding/event planners |
| `15-business-bakery` | Warm, product-forward menu and order-ahead form |
| `16-business-contractor` | Trust badges, service area, and free-quote form |
| `18-business-medicalequipment` | Product catalog, insurance info, and rent-or-buy quote form |

### Product & SaaS

| Folder | Style |
|---|---|
| `17-product-saas` | Feature grid, pricing tiers, and FAQ for software products |

## Running locally

No build step required. From the project root:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000` to browse the showcase site, or `http://localhost:8000/06-business-restaurant/` (etc.) to open a specific template directly.

## Notes

- All photography is hotlinked from [Unsplash](https://unsplash.com) (free for commercial use, no attribution required).
- Contact and request forms are front-end demos — each shows a confirmation message on submit but doesn't send data anywhere. Wire them up to a backend or a service like Formspree to actually receive submissions.
- Content (names, businesses, pricing, testimonials) throughout the templates and the main site is placeholder — swap it for real details before launch.

## License

Free to use and customize for personal or client projects.
